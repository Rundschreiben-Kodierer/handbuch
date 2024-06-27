---
title:	Costi e ricavi non legati ai casi 
slug: falldunabhangige
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Aprire tutte le domande: {{<collapsibleGroupCommand groupId="falldunabhangige">}}

{{<numberedList>}}
{{<listItem>}}
Come possono essere registrati i costi e i ricavi delle prestazioni economicamente d’interesse generale (PEIG) in SpiGes?
{{<collapsibleBlock groupId="falldunabhangige">}}
Per la registrazione, selezionare il codice appropriato per le relative prestazioni PEIG sotto ktr_typ e inserire i relativi costi e ricavi utilizzando i numeri dei tipi di costo o dei centri di costo e i conti dei ricavi definiti in REKOLE®. In allegato l’elenco dei diversi tipi di PEG e il relativo codice ktr_typ:
<table class="w-100">
  <tr>
    <th style="width:20%"> Codice </div></th>
    <th> PEIG </th>
    <th style="width:60%"> Désignation </th>
  </tr>
  <tr>
    <td> 501 </td>
    <td> Tipo a) </td>
    <td> Prestazioni a disposizione (escluse prestazioni a disposizione per urgenze) </td>
  </tr>
  <tr>
    <td> 502 </td>
    <td> Tipo a) </td>
    <td> Servizio di salvataggio e di ambulanza / centrale di allarme 144 </td>
  </tr>
  <tr>
    <td> 503 </td>
    <td> Tipo a) </td>
    <td> Reparti ospedalieri protetti </td>
  </tr>
  <tr>
    <td> 504 </td>
    <td> Tipo a) </td>
    <td> Scuole dell’infanzia e scuole per pazienti </td>
  </tr>
  <tr>
    <td> 505 </td>
    <td> Tipo a) </td>
    <td> Prestazioni dei servizi sociali per pazienti </td>
  </tr>
  <tr>
    <td> 506 </td>
    <td> Tipo a) </td>
    <td> Prevenzione / promozione della salute </td>
  </tr>
  <tr>
    <td> 507 </td>
    <td> Tipo a) </td>
    <td> Protezione della popolazione </td>
  </tr>
  <tr>
    <td> 508 </td>
    <td> Tipo a) </td>
    <td> Assistenza spirituale / cappella ecumenica </td>
  </tr>
  <tr>
    <td> 599 </td>
    <td> Tipo a) </td>
    <td> Ulteriori compiti speciali </td>
  </tr>
  <tr>
    <td> 601 </td>
    <td> Tipo b) </td>
    <td> Ricerca, compreso il dottorato (MD e PhD) </td>
  </tr>
  <tr>
    <td> 602 </td>
    <td> Tipo b) </td>
    <td> Formazione universitaria di base (insegnamento impartito e formazione ricevuta) </td>
  </tr>
  <tr>
    <td> 603 </td>
    <td> Tipo b) </td>
    <td> Insegnamento impartito nel perfezionamento professionale </td>
  </tr>
  <tr>
    <td> 701 </td>
    <td> Typ c) </td>
    <td> Mantenimento di sovracapacità ospedaliere per motivi di politica regionale </td>
  </tr>
  <tr>
    <td> 702 </td>
    <td> Typ c) </td>
    <td> Maternità </td>
  </tr>
  <tr>
    <td> 703 </td>
    <td> Typ c) </td>
    <td> Tariffe che non coprono i costi (ad es. TARMED) </td>
  </tr>
  <tr>
    <td> 799 </td>
    <td> Typ c) </td>
    <td> Ulteriori prestazioni economicamente d'interesse generale legate agli ospedali </td>
  </tr>
</table>
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Le unità di imputazione indipendenti dal caso possono essere collegate a un ospedale (burnr_gesv) invece che a una sede?
{{<collapsibleBlock groupId="falldunabhangige">}}
No, non è possibile. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
I tipi UFI possono essere utilizzati più di una volta? Ad esempio, per 599 consegnare più righe con testo libero diverso nella variabile «ktr_beschr»?
{{<collapsibleBlock groupId="falldunabhangige">}}
Sì, è possibile. Sulla base dell’indicazione «ktr_typ» viene assegnate un’unità di imputazione di una colonna ITAR_K®. Ciò significa che nella variabile «ktr_typ» deve essere utilizzato uno dei valori predefiniti. Tuttavia, è possibile indicare più unità di imputazione con lo stesso tipo di UFI, ad esempio per ktr_typ 205 una volta con il testo libero «LAMal» e una volta con il testo libero «CTM» nella variabile «ktr_beschr». Queste due unità di imputazione vengono poi sommate e riportate nella colonna ITAR_K® «Ospedali di giorno psichiatria infantile e adolescenziale». In teoria, sono tecnicamente possibili anche altre suddivisioni, ad eccezione del caso ambulatoriale. Se hanno tutti lo stesso tipo UFI, vengono sommati e raffigurati come descritto. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
La parte KTR è prevista anche per i casi ambulatoriali o si riferisce esclusivamente ai casi di ricovero?
{{<collapsibleBlock groupId="falldunabhangige">}}
Per poter completare un ITAR_K, i costi dei casi ambulatoriali sono riassunti per tipo di KTR (ad esempio, tariffa per la dialisi).
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}