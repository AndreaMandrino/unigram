/**
 * BiciLab – versione online (Google Apps Script)
 *
 * Dati: foglio Google «BiciLab – dati». Foto: cartella Drive «BiciLab – foto».
 * Tutto resta nel Drive dell'account della scuola che pubblica l'app.
 *
 * Accesso: i ragazzi entrano con il codice del laboratorio, l'educatore con il PIN.
 * Codice e PIN sono controllati qui, sul server, a ogni richiesta.
 *
 * Prima volta: nell'editor scegli la funzione «installa» e premi «Esegui».
 * Nel registro di esecuzione trovi il codice per i ragazzi e il PIN iniziale.
 */

const NOME_FOGLIO = 'BiciLab – dati';
const NOME_CARTELLA = 'BiciLab – foto';
const COLONNE = ['tipo', 'id', 'officina', 'json', 'aggiornato', 'cancellato'];
const TIPI = {imp: true, lis: true, off: true, cli: true, sch: true, quiz: true, imprev: true};
const SOLO_EDUCATORE = {imp: true, lis: true};
const MAX_CELLA = 49000;
const MAX_ERRORI_PIN = 10;

/* ---------- installazione (una volta sola, dall'editor) ---------- */
function installa() {
  const prop = PropertiesService.getScriptProperties();
  if (!prop.getProperty('FOGLIO_ID')) {
    const ss = SpreadsheetApp.create(NOME_FOGLIO);
    const sh = ss.getSheets()[0];
    sh.setName('dati');
    sh.getRange('A:D').setNumberFormat('@');
    sh.getRange(1, 1, 1, COLONNE.length).setValues([COLONNE]);
    sh.setFrozenRows(1);
    prop.setProperty('FOGLIO_ID', ss.getId());
  }
  if (!prop.getProperty('CARTELLA_ID')) prop.setProperty('CARTELLA_ID', DriveApp.createFolder(NOME_CARTELLA).getId());
  if (!prop.getProperty('CODICE')) prop.setProperty('CODICE', nuovoCodice_());
  if (!prop.getProperty('PIN')) prop.setProperty('PIN', '1234');
  Logger.log('BiciLab è pronto.');
  Logger.log('Codice del laboratorio per i ragazzi: ' + prop.getProperty('CODICE'));
  Logger.log('PIN dell\'educatore: ' + prop.getProperty('PIN') + ' (cambialo subito: Area educatore → Impostazioni).');
}

/* Controllo: scegli «controlla» e premi Esegui. Il registro dice se BiciLab è installato. */
function controlla() {
  const p = PropertiesService.getScriptProperties().getProperties();
  Logger.log('Foglio dei dati: ' + (p.FOGLIO_ID ? 'OK' : 'MANCA'));
  Logger.log('Cartella delle foto: ' + (p.CARTELLA_ID ? 'OK' : 'MANCA'));
  Logger.log('Codice del laboratorio: ' + (p.CODICE || 'MANCA'));
  Logger.log(p.FOGLIO_ID && p.CARTELLA_ID && p.CODICE ? 'BiciLab è installato. Ricarica la pagina dell\'app.' : 'BiciLab NON è installato: scegli «installa» e premi Esegui.');
}

/* ---------- pagina ---------- */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('BiciLab – Officina bici')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/* ---------- funzioni interne (il nome finisce con _ : non si possono chiamare dalla pagina) ---------- */
function config_() {
  const p = PropertiesService.getScriptProperties().getProperties();
  return {foglio: p.FOGLIO_ID, cartella: p.CARTELLA_ID, codice: p.CODICE || '', pin: p.PIN || '1234'};
}
function nuovoCodice_() {
  const L = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < 6; i++) s += L.charAt(Math.floor(Math.random() * L.length));
  return s;
}
/* Il ruolo si decide qui: «edu» con il PIN giusto, «ragazzi» con il codice giusto. */
function ruolo_(cred) {
  const c = config_();
  if (!c.foglio || !c.cartella || !c.codice) throw new Error('NON_INSTALLATO');
  cred = cred || {};
  if (cred.pin) {
    const cache = CacheService.getScriptCache();
    const errori = Number(cache.get('errori_pin') || 0);
    if (errori >= MAX_ERRORI_PIN) throw new Error('BLOCCATO');
    if (String(cred.pin) === String(c.pin)) return 'edu';
    cache.put('errori_pin', String(errori + 1), 600);
  }
  if (cred.codice && String(cred.codice).trim().toUpperCase() === c.codice) return 'ragazzi';
  throw new Error(cred.pin ? 'PIN' : 'ACCESSO');
}
function foglio_() { return SpreadsheetApp.openById(config_().foglio).getSheetByName('dati'); }
function cartella_() { return DriveApp.getFolderById(config_().cartella); }
function righe_(sh) {
  const n = sh.getLastRow();
  return n < 2 ? [] : sh.getRange(2, 1, n - 1, COLONNE.length).getValues();
}
function entita_(r) {
  return {tipo: String(r[0]), id: String(r[1]), oid: String(r[2]), json: String(r[3]), agg: Number(r[4]) || 0, del: !!r[5]};
}
function prossimoNumero_(oid, minimo) {
  const prop = PropertiesService.getScriptProperties();
  const chiave = 'CONT_' + oid;
  const n = Math.max(Number(prop.getProperty(chiave) || 0), Number(minimo) || 0) + 1;
  prop.setProperty(chiave, String(n));
  return new Date().getFullYear() + '-' + ('00' + n).slice(-3);
}
function idFoto_(id) {
  id = String(id || '');
  if (!/^f[a-z0-9]{4,60}$/.test(id)) throw new Error('DATI');
  return id;
}

/* Unione a tre vie (uguale a quella della pagina): campi diversi si uniscono,
   gli elenchi con id si uniscono elemento per elemento, sullo stesso campo vince la versione nuova. */
function uguali_(a, b) { return JSON.stringify(a) === JSON.stringify(b); }
function oggetto_(x) { return x !== null && typeof x === 'object' && !Array.isArray(x); }
function conId_(x) { return Array.isArray(x) && x.every(function (e) { return oggetto_(e) && typeof e.id === 'string' && e.id; }); }
function unisci_(base, mio, loro) {
  if (uguali_(mio, base)) return loro;
  if (uguali_(loro, base) || uguali_(mio, loro)) return mio;
  if (oggetto_(mio) && oggetto_(loro)) {
    const b = oggetto_(base) ? base : {};
    const out = {}, chiavi = [];
    [mio, loro, b].forEach(function (o) { Object.keys(o).forEach(function (k) { if (chiavi.indexOf(k) < 0) chiavi.push(k); }); });
    chiavi.forEach(function (k) { const v = unisci_(b[k], mio[k], loro[k]); if (v !== undefined) out[k] = v; });
    return out;
  }
  if (conId_(mio) && conId_(loro) && (base === undefined || conId_(base))) {
    const bm = {}, mm = {}, visti = {}, out = [];
    (base || []).forEach(function (e) { bm[e.id] = e; });
    mio.forEach(function (e) { mm[e.id] = e; });
    loro.forEach(function (x) {
      visti[x.id] = true;
      const bb = bm[x.id], m = mm[x.id];
      if (m === undefined) { if (bb !== undefined && uguali_(x, bb)) return; out.push(x); return; }
      out.push(unisci_(bb, m, x));
    });
    mio.forEach(function (m) { if (visti[m.id]) return; const bb = bm[m.id]; if (bb !== undefined && uguali_(m, bb)) return; out.push(m); });
    return out;
  }
  return mio;
}

/* ---------- dati ---------- */
function carica(cred) {
  const ruolo = ruolo_(cred);
  const ora = Date.now();
  const entita = righe_(foglio_()).filter(function (r) { return r[0] && !r[5]; }).map(entita_);
  return {ruolo: ruolo, ora: ora, entita: entita, codice: ruolo === 'edu' ? config_().codice : null};
}

function cambiamenti(cred, dal) {
  const ruolo = ruolo_(cred);
  const ora = Date.now();
  dal = Number(dal) || 0;
  const ultimo = Number(CacheService.getScriptCache().get('ultimo') || 0);
  if (ultimo && ultimo <= dal) return {ruolo: ruolo, ora: ora, entita: []};
  const entita = righe_(foglio_()).filter(function (r) { return r[0] && Number(r[4]) > dal; }).map(entita_);
  return {ruolo: ruolo, ora: ora, entita: entita};
}

function salvaOps(cred, ops) {
  const ruolo = ruolo_(cred);
  if (!Array.isArray(ops) || ops.length > 2000) throw new Error('DATI');
  const lock = LockService.getScriptLock();
  lock.waitLock(25000);
  try {
    const sh = foglio_();
    const n = sh.getLastRow();
    const chiavi = n > 1 ? sh.getRange(2, 1, n - 1, 3).getValues() : [];
    const indice = {};
    chiavi.forEach(function (r, i) { indice[r[0] + ':' + r[1]] = {riga: i + 2, oid: String(r[2])}; });
    const ora = Date.now();
    const risultati = [];
    const ultime = {};
    ops.forEach(function (op) { if (op && op.tipo && op.id) ultime[op.tipo + ':' + op.id] = op; });
    const nuove = [];
    Object.keys(ultime).forEach(function (k) {
      const op = ultime[k];
      const tipo = String(op.tipo), id = String(op.id), cancella = op.op === 'del';
      const oid = String(op.oid || (indice[k] ? indice[k].oid : ''));
      if (!TIPI[tipo] || id.length > 200 || oid.length > 100) { risultati.push({k: k, errore: 'DATI'}); return; }
      if ((SOLO_EDUCATORE[tipo] || (tipo === 'off' && cancella)) && ruolo !== 'edu') { risultati.push({k: k, errore: 'PERMESSO'}); return; }
      if (cancella && !indice[k]) return;
      let json = cancella ? '' : String(op.json || '');
      if (json.length > MAX_CELLA) { risultati.push({k: k, errore: 'GRANDE'}); return; }
      let attuale = '';
      if (!cancella && indice[k]) attuale = String(sh.getRange(indice[k].riga, 4).getValue() || '');
      let cambiata = false;
      /* Qualcuno ha salvato dopo la versione da cui è partita questa postazione: si uniscono le modifiche */
      if (!cancella && attuale && op.base !== null && op.base !== undefined && attuale !== String(op.base)) {
        try {
          const unita = unisci_(JSON.parse(String(op.base)), JSON.parse(json), JSON.parse(attuale));
          if (unita !== undefined) { json = JSON.stringify(unita); cambiata = true; }
        } catch (e) { /* versione non leggibile: vale quella nuova */ }
      }
      if (!cancella && tipo === 'sch') {
        let d = null;
        try { d = JSON.parse(json); } catch (e) { d = null; }
        if (!d) { risultati.push({k: k, errore: 'DATI'}); return; }
        if (d.numProvv) {
          let numero = '';
          try { const a = attuale ? JSON.parse(attuale) : null; if (a && a.numero && !a.numProvv) numero = a.numero; } catch (e) { numero = ''; }
          d.numero = numero || prossimoNumero_(oid, op.numMin);
          delete d.numProvv;
          json = JSON.stringify(d);
          cambiata = true;
        }
      }
      if (cambiata && json.length > MAX_CELLA) { risultati.push({k: k, errore: 'GRANDE'}); return; }
      if (cambiata) risultati.push({k: k, json: json});
      const riga = [tipo, id, oid, json, ora, cancella ? 1 : ''];
      if (indice[k]) sh.getRange(indice[k].riga, 1, 1, COLONNE.length).setValues([riga]);
      else nuove.push(riga);
    });
    if (nuove.length) sh.getRange(sh.getLastRow() + 1, 1, nuove.length, COLONNE.length).setValues(nuove);
    CacheService.getScriptCache().put('ultimo', String(ora), 21600);
    return {ora: ora, risultati: risultati};
  } finally {
    lock.releaseLock();
  }
}

/* ---------- foto ---------- */
function fotoCarica(cred, id, base64, tipo) {
  ruolo_(cred);
  id = idFoto_(id);
  if (String(base64 || '').length > 8000000) throw new Error('GRANDE');
  const c = cartella_();
  if (c.getFilesByName(id + '.jpg').hasNext()) return {ok: true};
  const mime = /^image\/(jpeg|png|webp)$/.test(String(tipo)) ? String(tipo) : 'image/jpeg';
  c.createFile(Utilities.newBlob(Utilities.base64Decode(String(base64)), mime, id + '.jpg'));
  return {ok: true};
}
function fotoLeggi(cred, id) {
  ruolo_(cred);
  id = idFoto_(id);
  const it = cartella_().getFilesByName(id + '.jpg');
  if (!it.hasNext()) return null;
  const b = it.next().getBlob();
  return {mime: b.getContentType(), b64: Utilities.base64Encode(b.getBytes())};
}
function fotoElimina(cred, ids) {
  ruolo_(cred);
  const c = cartella_();
  (Array.isArray(ids) ? ids : []).slice(0, 100).forEach(function (id) {
    const it = c.getFilesByName(idFoto_(id) + '.jpg');
    while (it.hasNext()) it.next().setTrashed(true);
  });
  return {ok: true};
}

/* ---------- funzioni dell'educatore ---------- */
function educatore(cred, azione, dato) {
  if (ruolo_(cred) !== 'edu') throw new Error('PERMESSO');
  const prop = PropertiesService.getScriptProperties();
  switch (azione) {
    case 'verifica':
      return {codice: config_().codice};
    case 'pin':
      if (!/^\d{4,12}$/.test(String(dato))) throw new Error('PIN_FORMATO');
      prop.setProperty('PIN', String(dato));
      return {ok: true};
    case 'codice': {
      const c = nuovoCodice_();
      prop.setProperty('CODICE', c);
      return {codice: c};
    }
    case 'info': {
      let n = 0;
      const it = cartella_().getFiles();
      while (it.hasNext()) { it.next(); n++; }
      return {foto: n, foglio: SpreadsheetApp.openById(config_().foglio).getUrl(), cartella: cartella_().getUrl()};
    }
    case 'pulisci':
      return pulisci_();
  }
  throw new Error('DATI');
}
/* Toglie le foto che nessuna scheda usa più (se hanno più di un'ora)
   e le righe cancellate da più di un giorno. */
function pulisci_() {
  const lock = LockService.getScriptLock();
  lock.waitLock(25000);
  try {
    const sh = foglio_();
    const righe = righe_(sh);
    const usate = {};
    righe.forEach(function (r) {
      if (r[0] === 'sch' && !r[5]) {
        try { (JSON.parse(r[3]).foto || []).forEach(function (f) { usate[f.id] = true; }); } catch (e) { /* riga non leggibile */ }
      }
    });
    const unOraFa = Date.now() - 3600000;
    let fotoTolte = 0;
    const it = cartella_().getFiles();
    while (it.hasNext()) {
      const f = it.next();
      const id = f.getName().replace(/\.jpg$/, '');
      if (!usate[id] && f.getDateCreated().getTime() < unOraFa) { f.setTrashed(true); fotoTolte++; }
    }
    const ieri = Date.now() - 86400000;
    const tenere = righe.filter(function (r) { return r[0] && !(r[5] && Number(r[4]) < ieri); });
    if (tenere.length < righe.length) {
      sh.getRange(2, 1, righe.length, COLONNE.length).clearContent();
      if (tenere.length) sh.getRange(2, 1, tenere.length, COLONNE.length).setValues(tenere);
    }
    return {fotoTolte: fotoTolte, righeTolte: righe.length - tenere.length};
  } finally {
    lock.releaseLock();
  }
}
