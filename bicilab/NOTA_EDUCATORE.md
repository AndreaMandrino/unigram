# BiciLab – Nota per l'educatore

BiciLab è il gestionale didattico dell'officina bici del Maker Lab (Oratorio Don Bosco Alessandria). I ragazzi della scuola media registrano i clienti, aprono le schede di intervento, preparano il preventivo e fanno il conto. Ogni scheda ha una seconda scheda, «Cosa studio», che collega i lavori fatti alle materie della scuola secondaria di primo grado.

È un solo file, `index.html`. Funziona senza connessione e non manda dati a nessun servizio esterno.

## 1. Come si apre

BiciLab funziona in due modi, con lo stesso file `index.html`.

- **Versione online (più postazioni insieme):** BiciLab è pubblicato come app web Google Apps Script sull'account della scuola. Tutte le postazioni lavorano sugli stessi dati, salvati in un foglio Google e in una cartella di Drive della scuola. Le modifiche arrivano alle altre postazioni in pochi secondi, e tu vedi le officine in tempo reale. I ragazzi entrano con il **codice del laboratorio**, tu con il **PIN**. Come pubblicarlo: `apps-script/ISTRUZIONI.md`.
- **Versione offline (una postazione per gruppo):** scarica `index.html` e aprilo con Chrome, Edge o Firefox, oppure incollalo in OneCompiler. I dati restano in quel browser. Per riunire i dati usa le copie (sezione «I dati»).

Nella versione online, in alto a destra, c'è l'indicatore «Salvato online / Salvo... / Senza rete: salvo qui». Senza rete la postazione continua a lavorare e invia tutto quando la rete torna.

## 2. Primo avvio

1. Nella prima schermata scegli **«Vai all'area educatore»**.
2. Il PIN iniziale è **1234**. Cambialo subito in **Impostazioni**.
3. Controlla le impostazioni:
   - **Tariffa della manodopera:** 36 € all'ora. Con questa tariffa 5 minuti costano 3 € e i conti vengono senza troppi decimali.
   - **Sconti:** attivi. I ragazzi possono scegliere uno sconto dal 5 al 50 %.
   - **IVA:** spenta. I prezzi sono «IVA compresa». Per le classi terze puoi attivarla: i prezzi del listino diventano «senza IVA» e al conto si aggiunge l'IVA (22 %).
   - **Il computer può fare il conto:** attivo. Se lo spegni, i ragazzi devono fare il conto da soli. Dopo 3 errori sulla stessa riga possono vedere i passaggi.
   - **Seconda lingua:** francese o spagnolo.
   - **Nome dell'attività:** compare in fondo alle stampe. Puoi aggiungere anche il nome dell'officina con cui collaborate.
4. In **Listino** puoi cambiare i nomi e i prezzi dei ricambi. Le schede già fatte tengono i prezzi di quando sono state create.
5. Se vuoi provare l'app prima dell'incontro, usa **«Crea un'officina di esempio»**: nasce un'officina con tre clienti e tre schede inventati.

## 3. Come si svolge l'attività

**Un gruppo = un'officina.** Ogni gruppo crea la sua officina: nome, simbolo, colore e i nomi dei ragazzi (solo i nomi, senza cognomi). L'officina è la «stanza» del gruppo: contiene i suoi clienti, le sue schede e i suoi progressi.

**Ruoli a rotazione (proposta).** In ogni gruppo da 3–4 ragazzi:

- **Accettazione:** accoglie il cliente, scrive la richiesta, registra la bici.
- **Meccanico:** fa il controllo della bici e sceglie i lavori.
- **Cassiere:** prepara il preventivo e fa il conto.
- **Studioso:** guida il gruppo nella scheda «Cosa studio» e legge le domande.

Cambiate i ruoli a ogni nuova bici. I clienti possono essere altri ragazzi, gli educatori o personaggi inventati.

**La scheda intervento in 6 passi.** Ogni passo ha un solo pulsante principale, «Avanti».

1. **Cliente:** si sceglie un cliente o si registra un cliente nuovo.
2. **Bici:** tipo, marca, colore, misura delle ruote, numero del telaio, foto della bici all'arrivo.
3. **Controllo:** la richiesta del cliente e il controllo di 12 parti (va bene / da sistemare / non c'è). Per ogni parte «da sistemare» si può fotografare il problema.
4. **Lavori:** 18 lavori in 6 gruppi. I lavori collegati alle parti «da sistemare» compaiono per primi. Ogni lavoro mostra le materie collegate. Si può aggiungere un lavoro diverso.
5. **Preventivo:** ricambi (dal listino o di recupero), manodopera, sconto, conto.
6. **Salva:** data di consegna. Il cliente accetta subito o decide dopo.

Poi la scheda passa per gli stati: preventivo da accettare → accettato → in lavorazione (i ragazzi segnano ogni lavoro come «fatto») → pronta da ritirare → consegnata. «Annulla l'ultimo passaggio» corregge un clic sbagliato.

## 4. Il correttore del conto

Nel preventivo i totali restano nascosti finché il gruppo non fa il conto. Il gruppo scrive ogni risultato (ricambi, manodopera, eventuale sconto e IVA, totale) e preme «Controlla il conto».

- Una riga giusta diventa verde e si blocca.
- Una riga sbagliata dà un indizio. Al primo errore l'indizio è generale. Al secondo errore l'indizio contiene i numeri da usare.
- Il correttore riconosce gli errori più comuni e li spiega: tariffa usata come prezzo al minuto, minuti divisi per 100 invece che per 60, quantità dimenticate, sconto del 10 % letto come 10 euro, totale con IVA scritto al posto della sola IVA, risultato finale giusto ma costruito su un numero sbagliato.
- Dopo 3 errori sulla stessa riga compare «Vedi i passaggi».

La calcolatrice è ammessa: per i ragazzi con discalculia è uno strumento compensativo. Lo scopo è capire che cosa si calcola e in quale ordine.

## 5. La scheda «Cosa studio»

Ogni scheda ha la sua «Cosa studio». Contiene:

- tre argomenti fissi, validi per ogni lavoro: Italiano (accogliere il cliente), Matematica (il preventivo), Tecnologia (organizzare il lavoro e lavorare sicuri);
- per ogni lavoro scelto, 2–4 argomenti di materie diverse, ognuno con una spiegazione breve, un'attività «Prova a» e una domanda con correttore (indizio al primo errore, risposta giusta al secondo);
- le parole del mestiere in inglese e nella seconda lingua.

**Schema ad albero.** Quando si apre «Cosa studio», compare lo schema della scheda: a sinistra la scheda, al centro i lavori (i rami), a destra le materie collegate (le foglie), ognuna con il suo colore. Toccando una foglia si apre l'argomento da studiare. Le domande già risolte hanno la spunta verde. Si può passare anche alla lettura «per lavoro» o «per materia».

Dal menu «Cosa studio» si apre la mappa delle 13 materie, con i lavori collegati e il dizionario dell'officina. Con «Schema ad albero» si vede lo schema completo di tutti i lavori, divisi in gruppi: i lavori già fatti dall'officina sono segnati in verde. «Stampa lo schema» produce la versione da dare ai docenti della scuola media. Il file `schema_interventi_discipline.pdf`, accanto a BiciLab, è lo stesso schema già stampato.

In tutto ci sono 99 argomenti. Le materie toccate sono: Italiano, Inglese, Francese o Spagnolo, Storia, Geografia, Matematica, Scienze, Tecnologia, Musica, Arte e immagine, Educazione fisica, Religione cattolica, Educazione civica. L'elenco completo è in fondo a questa nota: puoi darlo ai docenti della scuola media per collegare l'attività alle loro lezioni.

## 6. Le stampe

Dalla scheda premi **Stampa** e scegli che cosa stampare:

- **Scheda intervento e preventivo:** dati del cliente e della bici, controllo, lavori, preventivo, firme. In alto c'è il **cartellino da ritagliare e appendere al manubrio**, come in un'officina vera. Se il conto non è ancora fatto, al posto dei numeri ci sono righe vuote da completare a mano.
- **Cosa studio:** in apertura lo schema ad albero dei lavori e delle materie, poi tutti gli argomenti della scheda, con le domande a crocette e uno spazio «Che cosa ho imparato oggi».

Nella finestra di stampa puoi scegliere anche «Salva come PDF». La stampa rispetta le scelte di leggibilità del dispositivo (testo grande, maiuscolo, spaziatura). In fondo a ogni pagina c'è scritto: «Simulazione didattica: non è un documento fiscale».

## 7. Le foto

Le foto documentano la bici, come in un'officina vera.

- **All'arrivo:** nel passo «Bici» si fotografa la bici intera, di lato.
- **Il problema:** nel passo «Controllo», accanto a ogni parte «da sistemare», c'è «Fotografa il problema».
- **Durante il lavoro e alla consegna:** nella scheda, riquadro «Foto della bici». Le nuove foto vanno automaticamente nel momento giusto, in base allo stato della scheda.
- Quando ci sono la foto all'arrivo e quella alla consegna, compare il riquadro **«Prima e dopo»**. La prima foto della bici compare anche sul cartellino nell'elenco delle schede.
- Toccando una foto si apre in grande: si scrive la didascalia, si sceglie il momento e la parte della bici, si elimina. Con le frecce della tastiera si passa da una foto all'altra.
- **Come si scatta:** su tablet e telefono «Scatta una foto» apre la fotocamera del dispositivo. Su PC e Chromebook con webcam si apre la fotocamera dentro BiciLab. Al primo uso il browser chiede il permesso. «Carica una foto» prende una o più foto già salvate.
- Le foto vengono ridotte (lato lungo 1200 pixel, circa 150–250 KB l'una) e restano solo sul dispositivo. Massimo 24 foto per scheda.
- In stampa le foto vanno nella scheda intervento: prima e dopo in grande, le altre più piccole, con le didascalie.
- Quando una scheda ha almeno una foto, la sua «Cosa studio» aggiunge tre argomenti: Arte e immagine (fotografare per documentare), Italiano (scrivere la didascalia), Educazione civica (foto e privacy).

**Regola da dare ai ragazzi:** si fotografa solo la bici, senza persone, nomi o indirizzi. L'app lo ricorda accanto ai pulsanti.

## 8. Entrare nelle stanze e seguire i progressi

Nell'area educatore, scheda **Officine**, ogni officina mostra:

- livello e barra delle 7 prove del percorso;
- numero di clienti, schede (in officina e consegnate), domande di «Cosa studio» giuste;
- data dell'ultima attività e stato dell'ultimo imprevisto.

Con **«Entra nell'officina»** vedi l'officina come la vedono i ragazzi, con una fascia gialla che ti ricorda che sei in modalità educatore. In questa modalità puoi anche modificare il listino.

**Imprevisti.** Con **«Manda un imprevisto»** scegli una situazione pronta (cliente insoddisfatto, ricambio finito, richiesta di sconto, cliente che parla inglese, controllo del Codice della strada...) oppure ne scrivi una tu. Il gruppo la vede sul banco di lavoro. Quando la risolve, scrive in poche parole che cosa ha fatto: tu leggi la risposta nella scheda dell'officina.

## 9. Il percorso dei ragazzi

Il percorso ha 7 prove in ordine. Ogni prova superata apre la successiva:

1. Accoglienza: registrare il primo cliente.
2. Controllo: controllare una bici in tutte le 12 parti.
3. Preventivo: salvare un preventivo con almeno 2 lavori.
4. Conto giusto: fare il conto senza guardare i passaggi.
5. Consegna: segnare come fatti tutti i lavori e consegnare la bici.
6. Studio: rispondere giusto a 5 domande di «Cosa studio».
7. Capo officina: consegnare 3 bici, con almeno 6 lavori diversi.

Livelli: Apprendista → Aiuto meccanico → Meccanico → Meccanico esperto → Capo officina.

**Leve motivazionali (framework Octalysis).** Questa parte è solo per te: nell'app i ragazzi vedono il linguaggio del mestiere (prove, livelli, abilitazioni), senza riferimenti a giochi.

- *Significato (Epic Meaning):* l'officina ripara bici vere o simulate per la comunità. Gli argomenti su riuso, Agenda 2030 e Laudato si' rafforzano il senso del lavoro.
- *Sviluppo e risultato (Development & Accomplishment):* 7 prove in sequenza, livelli, barra di avanzamento, avviso a ogni prova superata.
- *Creatività e feedback (Empowerment):* il gestionale è un laboratorio libero. Il correttore risponde subito con indizi graduali.
- *Possesso (Ownership):* ogni gruppo ha la sua officina con nome, simbolo, colore, clienti e storico.
- *Relazione (Social Influence):* ruoli a rotazione e imprevisti da risolvere in squadra.
- *Imprevedibilità (Unpredictability):* gli imprevisti mandati dall'educatore.

Le leve di pressione (scarsità, paura di perdere) sono volutamente leggere: niente tempi, niente punti persi, niente classifiche tra gruppi.

## 10. Accessibilità (DSA e altri bisogni)

- Font senza grazie, testo a 18 px, interlinea ampia, niente corsivo, sfondo crema invece del bianco.
- Pulsante **«Leggibilità»** in alto: testo grande o molto grande, sfondo giallo o azzurro chiaro, lettere più distanziate, tutto in stampato maiuscolo. Le scelte valgono solo su quel dispositivo.
- Pulsanti **«Ascolta»**: leggono ad alta voce istruzioni, argomenti e parole straniere, con la pronuncia della lingua giusta. Usano solo le voci installate sul dispositivo, senza connessione. Se il dispositivo non ha una voce offline per una lingua, l'app lo dice.
- Ogni informazione ha testo e icona, mai solo il colore. Tutto funziona anche da tastiera.
- **Sfondo e movimento.** Ai bordi della pagina ci sono ingranaggi, ruote e una catena disegnati come un disegno tecnico. Girano piano, e quando si scorre la pagina le ruote girano un po'. Il centro della pagina resta libero, per non disturbare la lettura. Il colore dei disegni è quello dell'officina. Ogni prova superata aggiunge un pezzo: l'officina «cresce» con il gruppo.
- I pulsanti rispondono al tocco: si abbassano come un tasto vero e fanno un'onda nel punto toccato. Una scelta fatta «salta» con un piccolo rimbalzo. Una risposta sbagliata trema. Un conto giusto fa partire i coriandoli. Una prova superata mostra una medaglia al centro dello schermo, e un lettore di schermo la legge ad alta voce.
- In **«Leggibilità»** si possono spegnere i disegni sullo sfondo e il movimento. Se nel computer o nel telefono è attiva l'opzione di sistema «riduci movimento», BiciLab parte già senza movimento.
- Una sola azione principale per schermata, frasi brevi, messaggi di errore che dicono che cosa fare.

## 11. I dati

- **Versione online:** i dati sono nel foglio Google «BiciLab – dati» e le foto nella cartella «BiciLab – foto», nel Drive dell'account che ha pubblicato l'app. Ogni postazione tiene anche una copia di lavoro, che serve quando manca la rete.
- **Versione offline:** i dati restano **solo nel browser** del dispositivo dove si usa l'app. Nessun dato esce dal dispositivo.
- Per i clienti scrivete solo nome e cognome (o un personaggio inventato) e un numero di telefono inventato.
- Le foto sono salvate nel database del browser (IndexedDB), che ha molto spazio. In **Dati** vedi quante foto ci sono e quanto spazio usano. Se lo spazio finisce, «Elimina le foto delle bici consegnate» libera spazio e lascia le schede.
- Le copie salvate («Salva una copia dell'officina» e «Salva una copia di tutto») contengono anche le foto: il file diventa più grande, circa 0,2–0,3 MB per foto.
- **Più dispositivi:** ogni gruppo, dal banco di lavoro, preme «Salva una copia dell'officina» e ti passa il file. Tu lo carichi in **Dati → Caricare una copia**.
- **Copia di sicurezza:** a fine incontro, in **Dati**, premi «Salva una copia di tutto».
- **Fine del corso:** in **Dati** premi «Cancella tutte le officine». Impostazioni e listino restano.
- **Versione offline:** il PIN evita solo i clic per errore e non protegge davvero i dati. Chi apre il file può leggere tutto quello che c'è nel browser, perché un file HTML da solo non può separare in modo sicuro educatori e ragazzi.
- **Versione online:** il codice e il PIN sono controllati dal server. Senza codice non si entra; senza PIN non si entra nell'area educatore, non si cambiano impostazioni e listino e non si eliminano officine. Dopo 10 PIN sbagliati l'area educatore si blocca per 10 minuti.

## 12. Che cosa ho verificato e che cosa devi verificare tu

Verificato in Chrome (computer e telefono): tutti i passi della scheda, il correttore con risposte giuste e sbagliate (anche con sconto e IVA), le domande di «Cosa studio», il percorso, l'area educatore con PIN, imprevisti e copie dei dati, la stampa, il salvataggio dopo la ricarica della pagina, nessuna chiamata a servizi esterni. Per le foto: caricamento di una o più foto, foto del problema, fotocamera dentro l'app con una webcam simulata, didascalie, «prima e dopo», stampa, copia con le foto e ripristino su un altro browser, cancellazione delle foto insieme alla scheda.

Versione online: provata con il vero `Codice.gs` su un ambiente Google simulato, con due postazioni e l'educatore insieme. Ho verificato: codice giusto e sbagliato, PIN, officine e schede viste dalle altre postazioni, modifiche contemporanee sulla stessa scheda (si uniscono), numeri delle schede senza doppioni, imprevisti, listino protetto, foto su Drive, lavoro senza rete e invio al ritorno della rete, cambio del codice. Non ho potuto provarla sui server veri di Google: fai una prova con due postazioni prima dell'attività.

Da provare sui vostri dispositivi:

- la lettura ad alta voce: dipende dalle voci installate (Windows, ChromeOS, Android);
- il salvataggio e la stampa dentro OneCompiler;
- la stampa reale su carta A4 della stampante dell'oratorio;
- nella versione online: che il dominio della scuola permetta l'accesso «Chiunque» (vedi `apps-script/ISTRUZIONI.md`), la stampa e la fotocamera del PC dentro la pagina di Google;
- la fotocamera vera: su tablet e telefono (fotocamera del sistema) e sui PC o Chromebook della scuola (permesso del browser per la webcam).

## Elenco dei collegamenti tra lavori e materie

- **Ogni scheda, qualunque sia il lavoro**
  - Italiano: Accogliere il cliente
  - Matematica: Fare il preventivo
  - Tecnologia: Organizzare il lavoro e lavorare sicuri
  - Inglese e seconda lingua: parole del mestiere

### Ruote e gomme
- **Riparare una foratura** (20 min)
  - Scienze: L'aria spinge: la pressione
  - Tecnologia: La toppa e il mastice
  - Storia: La gomma piena d'aria
  - Inglese e seconda lingua: parole del mestiere
- **Sostituire la camera d'aria** (15 min)
  - Matematica: Pollici e centimetri
  - Tecnologia: Tre tipi di valvola
  - Educazione civica: Una camera d'aria rotta non è un rifiuto
  - Inglese e seconda lingua: parole del mestiere
- **Sostituire il copertone** (20 min)
  - Matematica: Leggere la sigla della gomma
  - Scienze: Attrito e aderenza
  - Geografia: Da dove viene la gomma
  - Inglese e seconda lingua: parole del mestiere
- **Gonfiare le gomme alla pressione giusta** (5 min)
  - Matematica: Bar e PSI: due unità di misura
  - Scienze: L'aria si può comprimere
  - Educazione fisica: Meno fatica a pedalare
  - Inglese e seconda lingua: parole del mestiere
- **Centrare la ruota e tendere i raggi** (30 min)
  - Musica: Il suono dei raggi
  - Matematica: Il cerchio e gli angoli
  - Arte e immagine: Simmetria e raggiera
  - Tecnologia: Una struttura in tensione
  - Inglese e seconda lingua: parole del mestiere

### Freni
- **Regolare i freni** (15 min)
  - Tecnologia: La leva del freno
  - Scienze: L'attrito ferma la bici
  - Educazione civica: Due freni per legge
  - Inglese e seconda lingua: parole del mestiere
- **Sostituire i pattini dei freni** (15 min)
  - Scienze: L'attrito consuma
  - Matematica: Più veloce vai, più strada ti serve per fermarti
  - Tecnologia: Materiali morbidi e duri
  - Inglese e seconda lingua: parole del mestiere
- **Sostituire cavo e guaina del freno** (20 min)
  - Tecnologia: Il cavo porta il movimento
  - Storia: Un'invenzione di fine Ottocento
  - Matematica: Misurare e tagliare
  - Inglese e seconda lingua: parole del mestiere

### Catena e cambio
- **Pulire e lubrificare la catena** (15 min)
  - Scienze: La ruggine
  - Tecnologia: L'olio riduce l'attrito
  - Educazione civica: Olio e stracci: dove li butti?
  - Inglese e seconda lingua: parole del mestiere
- **Sostituire la catena** (25 min)
  - Matematica: Il rapporto: denti davanti e denti dietro
  - Storia: La bicicletta di sicurezza
  - Tecnologia: La trasmissione del moto
  - Inglese e seconda lingua: parole del mestiere
- **Regolare il cambio** (20 min)
  - Matematica: Quanta strada con un giro di ruota
  - Scienze: Marce leggere e marce dure
  - Musica: Pedalare a ritmo
  - Inglese e seconda lingua: parole del mestiere

### Luci e campanello
- **Montare luci e catadiottri** (15 min)
  - Scienze: La luce rimbalza: la riflessione
  - Tecnologia: Il circuito elettrico
  - Educazione civica: Farsi vedere: che cosa dice la legge
  - Inglese e seconda lingua: parole del mestiere
- **Montare il campanello** (5 min)
  - Musica: Il suono è una vibrazione
  - Scienze: Quanto corre il suono
  - Educazione civica: Il campanello è obbligatorio
  - Inglese e seconda lingua: parole del mestiere

### Sella, manubrio e pedali
- **Regolare la sella sulla misura del ciclista** (10 min)
  - Matematica: Una formula per la sella
  - Educazione fisica: Pedalare nella posizione giusta
  - Scienze: Il ginocchio: un'articolazione
  - Inglese e seconda lingua: parole del mestiere
- **Regolare manubrio e serie sterzo** (15 min)
  - Tecnologia: I cuscinetti a sfere
  - Scienze: Strisciare o rotolare
  - Inglese e seconda lingua: parole del mestiere
- **Sostituire i pedali** (10 min)
  - Tecnologia: Il pedale sinistro si svita al contrario
  - Scienze: La pedivella è una leva
  - Matematica: Gli angoli dei pedali
  - Inglese e seconda lingua: parole del mestiere

### Cura della bici
- **Pulizia e controllo completo di una bici usata** (45 min)
  - Educazione civica: Riparare invece di buttare
  - Religione cattolica: Prendersi cura delle cose e delle persone
  - Italiano: Scrivere un annuncio
  - Geografia: Città in bicicletta
  - Inglese e seconda lingua: parole del mestiere
- **Personalizzare la bici** (30 min)
  - Arte e immagine: I colori complementari
  - Tecnologia: Disegnare in scala
  - Educazione civica: Decorare in sicurezza
  - Inglese e seconda lingua: parole del mestiere

### Foto della bici (quando la scheda ha almeno una foto)
- **Fotografare la bici**
  - Arte e immagine: Fotografare per documentare
  - Italiano: Scrivere la didascalia
  - Educazione civica: Foto e privacy
