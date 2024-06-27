---
title: Admninistratif
slug: admninistratives
description: " "
weight: 10
type: docs
keywords: []
---

{{<faqBlock>}}
Aprire tutte le domande: {{<collapsibleGroupCommand groupId="admninistratives">}}

{{<numberedList>}}
{{<listItem>}}
Nel dataset SpiGes sono previsti casi a parentesi (= casi accorpati)? Nel campo della psichiatria, l'ANQ si aspetta un dataset con casi singoli, cioè non casi accorpati. Un dialogoo tra voi e l'ANQ in merito all'utilizzo del dataset SpiGes è in corso?
{{<collapsibleBlock groupId="admninistratives">}}
Il consolidamento dei casi viene gestito in SpiGes secondo le linee guida di SwissDRG AG. Siamo in dialogo con l'ANQ per quanto riguarda la gestione dei casi non accorpati.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
case_id_ch: Chi genera questo numero di caso e viene memorizzato automaticamente in Opale (sistema IRP)? Finora siamo riusciti a generare automaticamente in Opale l'identificazione del caso in entrambi i file (dati UST e file dei costi dei casi).
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
- Il numero di casi unici a livello svizzero è generato dalla piattaforma SpiGes. Quando i dati vengono esportati dalla piattaforma, questo case_id_ch è disponibile per gli utenti dei dati.
- L'identificatore del caso, la variabile fall_id, è generato dagli ospedali. Il software ospedaliero (ad es. Opale) dovrebbe continuare ad avere questa funzione.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Ci sono variabili (ad esempio la ventilazione) in cui il riferimento temporale è "intero caso" o "anno di indagine". Nella maggior parte degli ospedali, tuttavia, questa voce non viene registrata sull'asse temporale, ma solo una volta sul caso. Anche nel precedente dataset MS, tali voci erano sempre fornite solo per i casi A. Come pensate di fornire i casi B/C per queste variabili?
{{<collapsibleBlock groupId="admninistratives">}}
In effetti, le definizioni di questo aspetto potrebbero non essere ancora completamente dettagliate per tutte le variabili. Ad oggi, non è stato stabilito se queste variabili debbano essere fornite per i casi B e C. 
In linea di principio, dovrebbe essere possibile fornire le informazioni, solo allora sarà possibile calcolare i tassi di utilizzo con i dati. Tuttavia, è probabile che molti ospedali si trovino nella vostra stessa situazione e non dispongano dei dati per i casi B e C. In questo caso, le variabili per i casi B e C non sono disponibili quindi, le variabili relative ai casi B e C possono essere lasciate in bianco.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Qual è la definizione di «trasferimento interno»?
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
- È il passaggio da un reparto (acuto, psichiatria, riabilitazione) a un altro dello stesso ospedale (burnr_gesv)
- Oppure si riferisce ai cosiddetti «pazienti in attesa»
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
È possibile ottenere una definizione per il valore «7 = Rimpatrio»?
{{<collapsibleBlock groupId="admninistratives">}}
Rimpatrio di un paziente con residenza principale svizzera dall'estero alla Svizzera, senza particolari requisiti per i mezzi di trasporto o la scorta 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Qual è la definizione per «trasferimento»? (ad es. i codici «5 = Trasferimento entro 24 ore» e «6 = Paziente ritrasferito» della variabile Modalità di ammissione)
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
- La variabile Modalità di ammissione esisteva già nella MS e non ha subito modifiche nella piattaforma SpiGes. La differenza tra un trasferimento e un trasferimento interno, è che il primo non avviene all’interno dello stesso ospedale (BURGESV), ma tra ospedali diversi (due BURGESV diversi). La definizione si basa sui principi di SwissDRG AG, che potete trovare qui:  <a href="https://www.swissdrg.org/application/files/8616/7051/1879/Klarstellungen_und_Fallbeispiele_zu_den_Anwendungsregeln_Version_4.7_i.pdf"> https://www.swissdrg.org/application/files/8616/7051/1879/Klarstellungen_und_Fallbeispiele_zu_den_Anwendungsregeln_Version_4.7_i.pdf </a>
- La seguente specifica è stata comunicata da SwissDRG AG per il tipo di ricovero "6=Retransfer": Per un ricovero ininterrotto in un altro ospedale per più di 18 giorni e ritorno all'ospedale di origine. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Come vengono codificati i casi trasferiti dalla riabilitazione (tariffa ST-REHA) alla lungodegenza (tariffa «tasse per le cure») nella stessa struttura? Le variabili 1.2.V02 e 1.5.V03 non consentono di specificare «Lungodegenza, stesso stabilimento».
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
Questo era già così per la MS; il caso passa dalla riabilitazione alla SOMED (stesso stabilimento); il codice 2 contiene entrambe le opzioni (stesso stabilimento o altro stabilimento). Il caso deve essere codificato come segue:             
austritt_aufenthalt: 2 = casa di cura           
eintritt_aufenthalt: 84 = Reparto/Clinica di riabilitazione, stesso stabilimento
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

### Variabile «Wohnland»: 

{{<listItem>}}
Nella descrizione delle variabili è menzionata una distinta ripartizione dei Paesi extraeuropei in regioni. Questo elenco esiste già o sarà pubblicato in futuro?
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
- La procedura e l'elenco sono gli stessi della statistica MS. Ecco il link per consultare l’elenco:  <a href="https://www.bfs.admin.ch/bfs/it/home/statistiche/cataloghi-banche-dati.assetdetail.10687501.html"> https://www.bfs.admin.ch/bfs/it/home/statistiche/cataloghi-banche-dati.assetdetail.10687501.html </a>
- È possibile inserire le regioni per i Paesi non europei, ma è anche possibile specificare i codici dei Paesi. Questo è già il caso per la statistica MS e non è cambiato. Il formato è alfanumerico e può quindi contenere sia numeri che lettere.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

###	35.	Variabile "classe assicurativa": 

{{<listItem>}}
La descrizione della variabile afferma che deve essere specificata per tutti, tranne per coloro che pagano direttamente la prestazione. Nel file xsd, tuttavia, il campo è "required". Che cosa dobbiamo fornire per coloro che pagano direttamente la prestazione?
{{<collapsibleBlock groupId="admninistratives">}}
La formulazione è in realtà un po' contraddittoria. Si è ipotizzato che non ci siano mancanze. Poi, naturalmente, vale anche per coloro che pagano direttamente la prestazione, che sono codificati con 9=sconosciuto.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Secondo la nostra amministrazione dei pazienti, è difficile ottenere le informazioni per i casi con "assicurazione Flex" e inserire "8 = altro".  Ci saranno problemi in seguito nelle analisi o quali effetti ci saranno sulle statistiche se non (o non possiamo) inserire "8=altro"?
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
- I casi flex e tutti gli altri modelli assicurativi che stanno diventando sempre più popolari non sono davvero facili da mappare. Si tratta di una sfida per la classe assicurativa, ma non drammatica per le statistiche. In caso di dubbio, questi casi dovrebbero essere indicati come semi-privati.
- La variabile "liegeklasse", invece, è centrale per la mappatura dell'ITAR_K. Inoltre, non esiste la categoria "altro" e i casi con "sconosciuto" saranno esaminati. A seconda del valore di questa variabile, i casi in ITAR_K sono assegnati a una diversa colonna.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}