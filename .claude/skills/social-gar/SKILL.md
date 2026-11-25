---
name: social-gar
description: Skill "social GaR" per ideare, scrivere e disegnare contenuti social di GaR (GenerAzioni in Rete, il nuovo nome del Progetto Policoro, ad Alessandria) - post, storie, caroselli, copertine per reel, didascalie, hashtag, testi alternativi e piani editoriali. Usala ogni volta che l'utente nomina GaR, GenerAzioni in Rete o Progetto Policoro insieme a social, Instagram, Facebook, post, storia, carosello, reel, grafica, didascalia o calendario editoriale, e anche quando chiede "qualcosa per i social" senza altri dettagli. Di solito si parte da un testo fornito dall'utente (articolo, enciclica, esortazione, messaggio, omelia). Usala ogni volta che l'utente incolla o allega un testo del genere e chiede di farne un contenuto, un riassunto per i social o una serie di post. Usala anche per valutare o correggere contenuti social già fatti.
argument-hint: "[che cosa ti serve: formato, argomento, testo di partenza]"
---

# Social GaR

Questa skill guida tutto il lavoro sui social di GaR: dall'idea al testo, alla grafica, alla consegna. È una prima versione e cresce nel tempo: quando l'utente corregge qualcosa, la regola va scritta qui (vedi «Come si aggiorna»).

## Uso come comando

Questa skill si richiama anche con `/social-gar`, seguito dalla richiesta. Esempi:

- `/social-gar carosello da questo articolo` (con il testo incollato o allegato)
- `/social-gar storia per l'incontro di giovedì`
- `/social-gar valuta questo post`
- `/social-gar piano del mese`

Richiesta ricevuta con il comando: $ARGUMENTS

Se la richiesta è vuota, chiedi in una riga che cosa serve (formato, argomento, testo di partenza) e poi procedi.

## Chi è GaR

GaR sta per **GenerAzioni in Rete**. È il nuovo nome del Progetto Policoro. Fa comunicazione sociale su Chiesa e Vangelo ad Alessandria.

- Scrivi il nome per esteso «GenerAzioni in Rete», con la A maiuscola in mezzo. «GaR» è la sigla.
- Il nome è nuovo: finché l'utente non dice altro, la prima volta in un contenuto si può ricordare che è il nuovo nome del Progetto Policoro. Chiedi all'utente se vuole questo richiamo.
- I contenuti parlano di Chiesa e Vangelo a persone di Alessandria e del suo territorio: fatti, luoghi e persone sono locali.
- Il tono è diretto (vedi `references/testi.md`).

## Che cosa non si sa ancora

Queste informazioni mancano. Se servono per il lavoro in corso e l'utente non le ha date, chiedile una volta sola, tutte insieme. Se non risponde, usa segnaposto tra parentesi quadre e dillo nella consegna.

- A chi parla di preciso (età, che cosa cerca).
- Nome dei profili e canali attivi.
- Logo e fotografie disponibili.
- Se dare del tu o del voi.
- Hashtag fissi, se ci sono.

Non inventare mai date, numeri, nomi, citazioni o fatti su GaR. Le citazioni vengono solo dal testo fornito dall'utente, alla lettera e con la fonte: una citazione sbagliata qui pesa più che altrove.

## Come procedere

1. **Parti dal testo, se c'è.** Di solito l'utente fornisce un articolo, un'enciclica o un altro documento. Leggi `references/da-un-testo.md` prima di tutto il resto: spiega come scegliere che cosa portare sui social e come citare senza tradire il testo.
2. **Capisci la richiesta e scegli l'impostazione.** Leggi `references/strategia.md`: ogni contenuto si costruisce attorno a un volto o a un gruppo, un dettaglio concreto e un solo gesto, e parla a un gradino preciso (vede, pensa, fa, resta). Che cosa si vuole ottenere (informare, invitare, raccontare, far rispondere), su quale canale, entro quando. Una richiesta vaga come «un post sull'evento» basta per partire: scegli tu formato e struttura e spiegalo in una riga.
3. **Scegli il formato.** Leggi `references/formati.md` per misure, margini e struttura. In breve: una sola informazione va in un post; una sequenza o una spiegazione in un carosello; un invito a rispondere o un promemoria in una storia.
4. **Scrivi i testi prima della grafica.** Leggi `references/testi.md`. Il testo decide quanto spazio serve; una grafica disegnata prima del testo va quasi sempre rifatta.
5. **Controlla persone e vincoli.** Se il contenuto mostra o nomina persone, usa musica, immagini trovate online o IA, chiede donazioni o prevede una sponsorizzazione, leggi `references/dignita-e-regole.md`. Chiedi all'utente dei consensi: non darli per scontati.
6. **Disegna.** Leggi `references/stile-visivo.md`. Crea un canvas Design nuovo per il lavoro, installa il design system e scrivi una tavola per ogni immagine. Parti dalla struttura del modello più vicino, senza modificare i modelli.
7. **Controlla e consegna.** Passa le quindici domande in fondo a `references/dignita-e-regole.md`, poi consegna come indicato sotto.

## Principi

Valgono per ogni contenuto. Il perché è in `references/strategia.md`.

- Originale, locale, utile: qualcosa che una persona invierebbe a un'altra.
- Relazione prima dei numeri: niente clickbait, niente esche («tagga», «commenta Amen»), niente screenshot di post altrui.
- La dignità delle persone viene prima dell'efficacia.
- Un solo invito, facile e con una scadenza. I più adatti: «Invialo a chi potrebbe servire», «Salvalo», «Scrivici in DM».
- Se si usa l'IA, si dichiara.

Questa skill aiuta anche a pianificare un mese di contenuti e a leggere i risultati: per entrambi parti da `references/strategia.md`.

## Riferimenti esterni

- Design system BSO Theme: https://claude.ai/artifact/SEb4HiXDF4pubjsNa1oCY6
- Modelli Instagram (post, storie, carosello): https://claude.ai/artifact/TySV9ptkUYYgLSGx1e2Usd

Prima di disegnare, leggi `project/README.md` e `project/tokens.json` del design system. Se un valore lì è diverso da quello scritto in questa skill, vale il design system.

## Che cosa consegnare

Ogni consegna contiene, in quest'ordine:

1. Il link al canvas con le immagini.
2. La didascalia pronta da incollare.
3. Gli hashtag, se l'utente li usa.
4. Un testo alternativo per ogni immagine.
5. Se si è partiti da un testo, l'elenco delle citazioni usate con il punto da cui vengono.
6. I punti delle quindici domande che deve verificare l'utente (consensi, musica, diritti sulle immagini) e ciò che è ancora un segnaposto.
7. Se una scelta dipende da una regola di Instagram o da una norma, una riga che dice di verificarla: le regole cambiano e questa skill non è consulenza legale.

L'utente esporta le immagini dal menu Condividi del canvas e pubblica a mano. Questa skill non pubblica nulla.

## Valutare contenuti già fatti

Quando l'utente chiede un parere, guarda il contenuto come lo vede chi scorre sul telefono, in due secondi:

- Si capisce subito di che cosa parla?
- L'informazione più utile (data, luogo, invito) è la più visibile?
- C'è una sola cosa da fare, ed è chiara?
- Il testo si legge su uno schermo piccolo?
- Le citazioni sono fedeli al testo di partenza e hanno la fonte?
- Rispetta la dignità di chi è mostrato o nominato?
- È originale, o è un contenuto altrui ripubblicato?
- Si riconosce che è di GaR?
- Parla in modo diretto, senza giri di parole e senza gergo di Chiesa?

Elenca le criticità dalla più grave e, se l'utente lo chiede, correggile.

## Come si aggiorna

La skill si raffina con l'uso. Quando l'utente dà una correzione che vale anche per i lavori futuri («i titoli sempre più corti», «mai il corallo sulle foto»):

1. Applica la correzione al lavoro in corso.
2. Proponi la riga da aggiungere e il file in cui va: regole di testo in `references/testi.md`, regole visive in `references/stile-visivo.md`, misure e strutture in `references/formati.md`, regole su fonti e citazioni in `references/da-un-testo.md`, scelte di strategia in `references/strategia.md`, regole su persone, consensi e vincoli in `references/dignita-e-regole.md`, informazioni su GaR nella sezione «Chi è GaR», togliendo la voce risolta da «Che cosa non si sa ancora».
3. Aggiungi una riga in `references/registro.md` con la data e la modifica.
4. Consegna il file della skill aggiornato, con lo stesso nome, perché l'utente lo salvi al posto del precedente.
