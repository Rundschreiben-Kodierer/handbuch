---
title: Domande tecniche 
slug: technische_fragen
description: " "
weight: 60
type: docs
keywords: []
---

{{<faqBlock>}}
Aprire tutte le domande: {{<collapsibleGroupCommand groupId="technische_fragen">}}

{{<numberedList>}}
{{<listItem>}}
C’è un modello di formato per l’importazione dei dati nell’applicazione SpiGes?
{{<collapsibleBlock groupId="technische_fragen">}}
Sì, vanno utilizzati imperativamente i formati nel piano dell’interfaccia. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
L’UST ha informato anche i grandi fornitori di software per l’amministrazione dei pazienti (SAP)? Stanno già sviluppando soluzioni software? Presumibilmente in futuro il file XML dovrebbe poter essere creato nel software per l’amministrazione dei pazienti.
{{<collapsibleBlock groupId="technische_fragen">}}
Nel gennaio 2023 abbiamo organizzato un evento informativo per il produttore KIS (software per l’amministrazione dei pazienti). Era presente anche SAP. L’UST tiene costantemente informato questo gruppo sullo stato di avanzamento della piattaforma SpiGes.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
In base all’elenco delle variabili 1.3 vi sono le seguenti tabelle:
<table>
  <tr>
    <td> 1 </td>
    <td> Amministrativo </td>
  </tr>
  <tr>
    <td> 2 </td>
    <td> Neonati </td>
  </tr>
  <tr>
    <td> 3 </td>
    <td> Psichiatria </td>
  </tr>
  <tr>
    <td> 4 </td>
    <td> CUFI </td>
  </tr>
  <tr>
    <td> 5 </td>
    <td> Diagnosi </td>
  </tr>
  <tr>
    <td> 6 </td>
    <td> Trattamenti </td>
  </tr>
  <tr>
    <td> 7 </td>
    <td> Operatore</td>
  </tr>
  <tr>
    <td> 8 </td>
    <td> Medicamenti </td>
  </tr>
  <tr>
    <td> 9 </td>
    <td> Fatture </td>
  </tr>
  <tr>
    <td> 10 </td>
    <td> Trasferimento pazienti </td>
  </tr>
  <tr>
    <td> 11 </td>
    <td> Dati cantonali </td>
  </tr>
  <tr>
    <td> 12 </td>
    <td> Identificatore personale </td>
  </tr>
</table>
È possibile presentare tutte queste tabelle come un unico file xml in SpiGes?
{{<collapsibleBlock groupId="technische_fragen">}}
{{<markdown>}}
La tabella 12 Identificatori personali deve essere fornita in un file separato (per motivi di protezione dei dati). Per le tabelle rimanenti viene definito un file diverso, che però supporta le forniture parziali. In teoria, è quindi possibile consegnare tutte le tabelle in un unico file XML come consegne parziali. Tuttavia, si sconsiglia questa soluzione, in quanto richiede una laboriosa armonizzazione delle varie tabelle (per garantire che le informazioni su tutti i casi siano disponibili in tutti i file). Informazioni più dettagliate su questo argomento sono disponibili nella descrizione del file XML per l’importazione dei dati nella piattaforma SpiGes sul nostro sito web. [https://www.bfs.admin.ch/bfs/fr/home/statistiques/sante/systeme-sante/projet-spiges.html](https://www.bfs.admin.ch/bfs/fr/home/statistiques/sante/systeme-sante/projet-spiges.html)
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Esiste la possibilità per le piccole imprese di creare un file XML a partire da un file Excel (in cui viene inserita la CUFI)? C’è un fornitore che ha in programma di attuare questa soluzione?
{{<collapsibleBlock groupId="technische_fragen">}}
Questa possibilità è attualmente al vaglio dell’UST.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
È previsto di mettere a disposizione un Excel per i costi indipendenti dai casi, in cui l’impresa possa compilare i costi indipendenti dai casi in formato Excel e poi esportarli in formato XML? 
{{<collapsibleBlock groupId="technische_fragen">}}
La fornitura separata di diversi tipi di elementi XML è consentita. Ciò significa che i centri di costo indipendenti dai casi possono sempre essere consegnati in un file diverso da quello dei centri di costo dipendenti dai casi. Dobbiamo ancora chiarire se possiamo fornire un tool per trasformare i dati tratti da un file Excel.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Il file di esportazione SpiGes ha la stessa struttura del file che gli ospedali importano in SpiGes?
{{<collapsibleBlock groupId="technische_fragen">}}
Ci saranno diversi file di esportazione. Da un lato, sarà possibile esportare il file XML che gli ospedali importano, dall’altro sarà possibile esportare in un formato semplice (diversi file CSV). 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nel formato XML la sequenza delle variabili all’interno di una riga è determinante?
{{<collapsibleBlock groupId="technische_fragen">}}
{{<markdown>}}
- La sequenza degli elementi è predefinita e non può essere modificata. Al massimo possono essere omessi degli elementi. Quindi, per l’elemento caso, i sottoelementi devono sempre essere inseriti nell’ordine «Amministrativo», «Neonati», «Psichiatria», «CUFI (caso)», «Diagnosi», «Trattamenti», «Medicamenti», «Fattura», «Trasferimento paziente» e «Dati cantonali». 
- La sequenza dei singoli attributi da inserire nei campi può invece essere scelta liberamente. Ad esempio, nell’elemento «Amministrativo» si possono inserire attributi sia nella sequenza «...sesso=«2» età=«37»..» sia «...età=«37» sesso=«2»...». 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
È anche possibile che il campo relativo a una variabile all’interno di una riga sia vuoto laddove la clinica non abbia nulla da inserire in quella riga per quella determinata variabile? Oppure in ogni riga devono sempre esse compilate tutte le variabili dell’interfaccia?
{{<collapsibleBlock groupId="technische_fragen">}}
Sì, è possibile che il campo relativo a una variabile venga lasciato vuoto. Alcune variabili, tuttavia, devono essere inserite imperativamente. Esse sono contrassegnate come «required» nel file di definizione XSD ("xs:attribute name="fall_id" use="required"). Aggiungeremo questa informazione anche all’elenco delle variabili.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Le variabili prive di contenuto possono essere consegnate anche con un valore ZERO (ad es., righe CUFI complete con ZERI nelle variabili in cui non è presente nulla)? 
{{<collapsibleBlock groupId="technische_fragen">}}
Dipende dalle variabili. Per le variabili CUFI, è possibile compilare tutte le variabili con il valore «0». Tuttavia, le variabili vuote («») o i valori nulli (»ZERO») non sono ammessi. Se si desidera controllare questo aspetto in concreto, è possibile convalidare il file XML rispetto alla definizione XSD. A tal fine esistono online appositi strumenti gratuiti. Si noti che su tali piattaforme non è consentito caricare dati reali. Tuttavia, è possibile utilizzarle per controllare esempi di file fittizi. Anche la piattaforma SpiGes appronterà una convalida del genere. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Ci sarà un software di plausibilità simile a Medplaus che potrà essere utilizzato localmente all’interno degli ospedali prima del caricamento?
{{<collapsibleBlock groupId="technische_fragen">}}
Un simile tool di test sarà messo a disposizione tramite API (Application Programming Interfaces). Tuttavia, sarà pronto solo nel corso del prossimo anno. Fino ad allora, consigliamo di continuare a utilizzare MedPlaus. Ve ne sarà anche una versione per il 2024.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Si sa già quale sarà la procedura per quanto riguarda i dati cantonali aggiuntivi? Diversi Cantoni (ad es. LU, GR, VS e VD) dispongono già di una riga MK. Inoltre, anche i Cantoni di ZH e BE raccolgono dati aggiuntivi all’interno della piattaforma SDEP (Spitaldatenerhebungsplattform). Sapete già se questi dati saranno integrati nell’esportazione SpiGes o se dovranno essere esportati separatamente?
{{<collapsibleBlock groupId="technische_fragen">}}
{{<markdown>}}
- I dati cantonali aggiuntivi sono stati presi in considerazione nell’interfaccia; vedi la descrizione del file XML per l’importazione dei dati nella piattaforma SpiGes 1.3: [https://www.bfs.admin.ch/bfs/fr/home/statistiques/sante/systeme-sante/projet-spiges.html](https://www.bfs.admin.ch/bfs/fr/home/statistiques/sante/systeme-sante/projet-spiges.html)
- Sebbene i dati cantonali aggiuntivi possano essere indicati in XML, quando vengono importati sulla piattaforma SpiGes non vengono poi elaborati ulteriormente. I Cantoni ne verificano la plausibilità e li elaborano separatamente. 
- La parte SpiGes dei dati SDEP sarà integrata nell’esportazione SpiGes e resa disponibile agli utenti dei dati secondo la LAMal dalla piattaforma SpiGes. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Sarà possibile effettuare correzioni direttamente sulla piattaforma?
{{<collapsibleBlock groupId="technische_fragen">}}
No, la piattaforma non offre la possibilità di inserire o correggere i dati. L’obiettivo è correggere gli errori alla fonte, cioè nei sistemi degli ospedali, in modo che le future esportazioni siano coerenti e che nelle prossime rilevazioni gli errori non si verifichino più
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nuovi formati: Ci sono nuovi formati. Ad esempio, per rech_betrag. Il formato è N10.2 Si presume che si riferisca alla specificazione delle cifre decimali. In questo caso, 2 cifre decimali e una lunghezza totale di 12. È corretto?
{{<collapsibleBlock groupId="technische_fragen">}}
Non proprio. N10.2 indica un numero con un totale di 10 cifre, di cui 2 dopo la virgola (e quindi un massimo di 8 cifre prima della virgola).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nuove variabili medi_id e rech_id: dalla descrizione non si capisce se si tratta di numeri sequenziali o di ID effettivi del sistema. Se sì, quale? Con medi_id abbiamo subito pensato all'ATC_Code, ma c'è una variabile in più per questo.  
{{<collapsibleBlock groupId="technische_fragen">}}
{{<markdown>}}
- Le due nuove variabili "medi_id" e "rech_id" sono 0  identificatori necessari per ragioni tecniche per una chiara assegnazione . Non devono necessariamente iniziare con 1, ma devono essere uniche per ogni caso. 
- Il file XML di esempio 1.3, disponibile sulla nostra homepage all'indirizzo , contieneriporta anche un esempio. medi_id ="1" contiene l'informazione che si tratta del primo farmaco ad alto costo secondo le specifiche di SwissDRG AG per questo caso specifico. 
{{</markdown>}}
{{<insertImage image="Image5.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nei file di esempio per il file di identificazione e il file di dati, ci sono due campi per la versione. Tuttavia, queste versioni non corrispondono. La versione 1.0 è specificata nell'intestazione e la versione 1.3 nel tag aziendale. Perché i numeri di versione sono diversi? Come si fa a sapere quando specificare quale numero di versione?
{{<collapsibleBlock groupId="technische_fragen">}}
{{<insertImage image="Image6.jpg" class="edge max-w-90">}}
"?xml version="1.0″" è sempre in questo modo. La versione superiore si riferisce quindi all'"XML" stesso, mentre quella inferiore si riferisce all'XML specifico di SpiGes.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}