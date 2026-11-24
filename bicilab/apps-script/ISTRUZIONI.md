# BiciLab online – come pubblicarlo sull'account della scuola

Con la versione online più postazioni lavorano sugli stessi dati: ogni modifica si salva subito e le altre postazioni la vedono dopo pochi secondi. L'educatore vede tutte le officine in tempo reale.

**Dove stanno i dati:** in un foglio Google («BiciLab – dati») e in una cartella di Drive («BiciLab – foto»), nel Drive dell'account che pubblica l'app. Nessun altro servizio.

**Come si entra:** i ragazzi non hanno un account della scuola, quindi entrano con un **codice del laboratorio** (6 lettere e cifre). L'educatore entra con il **PIN**. Il codice e il PIN sono controllati dal server a ogni richiesta: senza PIN non si entra nell'area educatore.

Ti servono 15 minuti, l'account `@cnosfap.net` e i file di questa cartella:

- `Codice.gs` – il programma che gira sul server;
- `../index.html` – la pagina dell'app (lo stesso file della versione offline);
- `appsscript.json` – le impostazioni del progetto (facoltativo).

---

## 1. Crea il progetto

1. Apri **script.google.com** con l'account della scuola.
2. Premi **Nuovo progetto**. In alto, al posto di «Progetto senza titolo», scrivi **BiciLab**.
3. Nel file `Codice.gs` che c'è già, cancella tutto. Incolla tutto il contenuto del file `Codice.gs` di questa cartella.
4. A sinistra, accanto a **File**, premi **+** e scegli **HTML**. Chiama il file **Index**: con la I maiuscola e senza `.html`, perché l'editor lo aggiunge da solo.
5. Nel nuovo file `Index.html` cancella tutto. Incolla tutto il contenuto di `index.html` (il file di BiciLab).
6. Premi l'icona del dischetto (**Salva progetto**).

## 2. Prepara il foglio e la cartella (una volta sola)

1. In alto, accanto a **Esegui** e **Debug**, c'è un menu a tendina con il nome di una funzione. Aprilo e scegli **installa**: deve essere scritto «installa», non «doGet» né altro.
2. Premi **Esegui**.
3. La prima volta Google chiede le autorizzazioni. Premi **Rivedi autorizzazioni**, scegli il tuo account e poi **Consenti**. BiciLab chiede di usare Fogli e Drive solo per creare e usare il suo foglio e la sua cartella.
4. In basso compare il **Registro di esecuzione** con:
   - il **codice del laboratorio** da dare ai ragazzi;
   - il **PIN** iniziale dell'educatore: **1234**.

Nel tuo Drive adesso ci sono il foglio «BiciLab – dati» e la cartella «BiciLab – foto». Non spostarli e non rinominarli.

**Per controllare:** scegli la funzione **controlla** e premi **Esegui**. Il registro deve dire «BiciLab è installato». Poi **ricarica** la pagina dell'app: un messaggio rimasto sullo schermo non sparisce da solo.

## 3. Pubblica l'app

1. In alto a destra premi **Esegui il deployment** → **Nuovo deployment**.
2. Accanto a «Seleziona tipo» premi la rotella e scegli **App web**.
3. Compila così:
   - **Descrizione:** BiciLab
   - **Esegui come:** **Me** (il tuo account)
   - **Chi ha accesso:** **Chiunque**
4. Premi **Esegui il deployment**. Copia l'**URL dell'app web**: finisce con `/exec`.

**Se «Chiunque» non compare:** l'amministratore del dominio della scuola ha bloccato le app aperte a chi non ha un account. Chiedi all'amministratore di permettere le app web di Apps Script con accesso «Chiunque» per il tuo account, oppure di pubblicarla lui. Senza «Chiunque» i ragazzi senza account della scuola non possono entrare.

## 4. Prepara le postazioni

1. Su ogni postazione apri l'URL `/exec` e salvalo nei preferiti (o crea un collegamento sul desktop).
2. Scrivi il codice del laboratorio e premi **Entra**. La postazione ricorda il codice: la volta dopo entra da sola.
3. Sul tuo computer premi **Entra con il PIN**, scrivi 1234 e vai in **Area educatore → Impostazioni**:
   - cambia subito il **PIN** (usa almeno 6 cifre);
   - qui vedi sempre il **codice del laboratorio** e puoi cambiarlo.

In alto a destra c'è l'indicatore del salvataggio:

- **Salvato online**: tutto è sul foglio della scuola.
- **Salvo...**: sta inviando le ultime modifiche.
- **Senza rete: salvo qui**: la connessione è caduta. La postazione continua a funzionare e invia tutto quando la rete torna. Non chiudere il browser finché non torna «Salvato online».

## 5. Come si comporta con più postazioni

- Più gruppi, ognuno con la sua officina: nessun problema.
- Più postazioni nella **stessa officina**: vedono le stesse schede. Le modifiche arrivano alle altre postazioni in circa 8 secondi.
- Due postazioni sulla **stessa scheda** nello stesso momento: le modifiche su parti diverse si uniscono (per esempio una scrive la richiesta e l'altra fa il controllo dei freni). Anche le foto e i lavori segnati come «fatto» si uniscono. Se due postazioni cambiano proprio lo stesso campo, resta l'ultima modifica.
- I numeri delle schede (2026-001, 2026-002...) li assegna il server: non si ripetono. Per un attimo la scheda nuova mostra «N. …».
- Le schermate si aggiornano da sole, ma non mentre qualcuno sta scrivendo in un campo o ha una finestra aperta. In quel caso l'aggiornamento arriva appena finisce.

**Foto:** su tablet e telefono «Scatta una foto» apre la fotocamera del dispositivo. Dentro l'app online la fotocamera del PC potrebbe non accendersi, perché Google mostra la pagina in un riquadro protetto. In quel caso BiciLab propone «Carica una foto».

## 6. Aggiornare l'app dopo una modifica

Quando ricevi un `index.html` o un `Codice.gs` nuovo:

1. Apri il progetto su script.google.com.
2. Sostituisci il contenuto del file cambiato (`Index` oppure `Codice.gs`) e salva.
3. Premi **Esegui il deployment** → **Gestisci deployment**.
4. Premi la matita, poi alla voce **Versione** scegli **Nuova versione** e premi **Esegui il deployment**.

L'URL `/exec` resta lo stesso: le postazioni non devono cambiare niente. **Non** rieseguire «installa»: i dati restano dove sono.

## 7. Fine del corso

- **Area educatore → Dati → Salva una copia di tutto** (facoltativo): un file con officine, schede e foto.
- **Area educatore → Dati → Cancella tutte le officine**: svuota le officine per tutte le postazioni.
- **Area educatore → Impostazioni → Cambia il codice**: le postazioni dei ragazzi non entrano più con il codice vecchio.
- Puoi anche archiviare il foglio «BiciLab – dati» e la cartella «BiciLab – foto» nel tuo Drive.

## Limiti da conoscere

- Le postazioni hanno bisogno di internet per condividere i dati. Senza rete lavorano lo stesso, ma le altre postazioni non vedono le modifiche finché la rete non torna.
- L'app gira con il tuo account (opzione «Esegui come: Me»): Google conta le richieste di tutte le postazioni sul tuo account. Per una classe di 10–15 postazioni non è un problema.
- Chi conosce l'indirizzo `/exec` e il codice può entrare. Non pubblicare l'indirizzo e il codice in posti pubblici. Se serve, cambia il codice.
- Dopo 10 PIN sbagliati l'area educatore si blocca per 10 minuti.
