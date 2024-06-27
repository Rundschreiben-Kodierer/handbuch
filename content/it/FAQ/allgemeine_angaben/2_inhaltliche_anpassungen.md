---
title: Adeguamenti del contenuto
slug: inhaltliche_anpassungen
description: " "
weight: 20
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="contenu">}}

{{<numberedList>}}
{{<listItem>}}
Quali variabili cambiano con SpiGes?
{{<collapsibleBlock groupId="contenu">}}
{{<markdown>}}

- SpiGes ha un impatto importante sul processo di verifica e sul formato dei dati contenuti nella fornitura. Per quanto riguarda i dati medici (attuale MS ), cambiano solo pochi punti. I più importanti sono probabilmente i seguenti:
    - il trattamento principale è abolito;
   	- il complemento alla diagnosi principale è abolito;
   	- novità: è possibile registrare un numero illimitato di diagnosi e trattamenti;
   	- il tempo di prestazione medica chirurgica viene registrato sotto procedure chirurgiche;
   	- per le procedure chirurgiche, l’inizio del trattamento deve essere registrato con l’ora (dell’operazione nel suo complesso);
   	- la relazione tra più diagnosi (croce/asterisco, punto esclamativo) viene ora registrata con una variabile di riferimento (diagnose_zusatz) anziché con il carattere speciale.
- Il modo migliore per tenere traccia di tutte le modifiche apportate al set di dati e dei dettagli esatti è quello di esaminare l’elenco delle variabili e filtrare la colonna «Nuova / Variabile MS» secondo le variabili nuove e quelle adattate.
- Da ora i dati delle fatture e i costi o i ricavi vengono raccolti per ogni caso.
- Il set di dati completo è disponibile qui: [https://www.bfs.admin.ch/bfs/fr/home/statistiques/sante/systeme-sante/projet-spiges.assetdetail.25885643.html](https://www.bfs.admin.ch/bfs/fr/home/statistiques/sante/systeme-sante/projet-spiges.assetdetail.25885643.html)
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Che ripercussioni ha SpiGes sulle direttive di codifica?
{{<collapsibleBlock groupId="contenu">}}
{{<markdown>}}
Queste informazioni sono riportate nel Manuale di codifica, scaricabile al link seguente: [https://www.bfs.admin.ch/bfs/it/home/statistiche/salute/nomenclature/medkk.html](https://www.bfs.admin.ch/bfs/it/home/statistiche/salute/nomenclature/medkk.html).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Qual è il contenuto del rapporto di verifica?
{{<collapsibleBlock groupId="contenu">}}
Il contenuto esatto del rapporto di verifica dipende dalle verifiche, che sono attualmente in fase di elaborazione all’interno di un gruppo di lavoro in cui sono rappresentati tutti gli stakeholder. In sostanza, il rapporto di verifica contiene tutte le verifiche che sono state avviate e le motivazioni ufficiali relative a tali verifiche (un estratto della chat relativa alla verifica).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Gli ospedali che fanno parte della fase pilota del progetto potranno creare un "set di dati" iniziale già nella primavera del 2024. Altri cantoni richiedono l'invio di un file di dati XML iniziale entro settembre. Per questi invii sono attesi i dati reali di un sistema produttivo o sono sufficienti i dati di un sistema di prova? In altre parole: la valutazione "reale" inizierà solo nel 2025 o l'UST vuole valutare anche i dati reali del 2024?
{{<collapsibleBlock groupId="contenu">}}
{{<markdown>}}

- I dati reali di un sistema produttivo sono attesi dagli ospedali che fanno parte della fase pilota del progetto nella primavera del 2024. Questi dati saranno analizzati solo per ottenere informazioni sul progetto pilota.
- Entro agosto 2024, tutti gli ospedali (in tutti i cantoni) devono effettuare un test dell'interfaccia per dimostrare che l'implementazione tecnica dell'interfaccia funziona. A tal fine sono sufficienti anche le consegne parziali dei sistemi di prova.
- A partire dal 1° gennaio 2025, tutti gli ospedali devono fornire i dati reali per il 2024 dai sistemi di produzione e verificarli completamente e, se necessario, giustificarli entro la fine di aprile.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Valori scambiati: Abbiamo notato che i valori di alcune variabili sono diversi dalle statistiche MS. Un esempio è il valore del segno vitale.
{{<markdown>}}		
Statistiche MS:
0 = nato morto
1 = nato vivo
SpiGes (al contrario):
0 = nato vivo
1 = nato morto
Altri esempi potrebbero essere l'istruzione scolastica o lo stato civile. A nostro avviso, questo non è l'ideale e vorremmo sapere se questa è l'intenzione e, in caso affermativo, perché?
{{</markdown>}}
{{<collapsibleBlock groupId="contenu">}}
Questa è l'intenzione. Nello spirito di once only, abbiamo integrato gli elenchi di codici e i metadati in un sistema UST, che sarà poi pubblicato. I nuovi elenchi di codici corrispondono ora allo standard svizzero della piattaforma di interoperabilità i14y.admin.ch; in precedenza si trattava di una soluzione speciale di MS.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Valori calcolati: Nell'elenco delle variabili ci sono alcune righe che sono "oscurate" con il commento "calcolato" (ad esempio uid). Significa che dobbiamo fornirle vuote nell'XML e che l'UST le calcolerà e le inserirà? Oppure non dobbiamo fornire affatto questi valori e ignorarli?
{{<collapsibleBlock groupId="contenu">}}
Come si può vedere dallo schema XML, queste variabili calcolate non sono incluse. È possibile ignorarle.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
