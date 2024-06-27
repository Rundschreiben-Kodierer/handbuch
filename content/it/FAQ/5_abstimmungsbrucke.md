---
title: Ponte di sintonizzazione  
slug: abstimmungsbrucke
description: " "
weight: 50
type: docs
keywords: []
---

{{<faqBlock>}}
Aprire tutte le domande: {{<collapsibleGroupCommand groupId="abstimmungsbrucke">}}

{{<numberedList>}}
{{<listItem>}}
Conosco il concetto di contabilità delle delimitazioni dalla piattaforma per la rilevazione dei dati ospedalieri (Spitaldatenerhebungsplattform, SDEP). Tale contabilità ci sarà anche in SpiGes o solo conformemente a ITAR_K®?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
SpiGes utilizza il ponte di sintonizzazione della CDS / di REKOLE®.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
All’interno dell’UST, dove sono integrate le motivazioni delle delimitazioni? Come stanno le cose?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
Le motivazioni vengono registrate a mo’ di verifica in SpiGes. In altre parole, se un importo secondo CoFi non corrisponde a quello secondo COAZ, occorre motivarne la differenza. Tali motivazioni vengono poi utilizzate anche altrove, ad esempio per il rapporto di verifica e per ITAR_K® o anche per il ponte di sintonizzazione della CDS.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Dove nel ponte di sintonizzazione vengono considerati i costi dei pazienti ospedalizzati a cavallo di due anni?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
Nella contabilità per unità finali d’imputazione di SpiGes è possibile calcolare i costi dei pazienti dimessi nel corso dell’anno (casi A). Questi pazienti possono essere stati ammessi all’ospedale già nel corso degli anni precedenti e aver generato dei costi. Nella contabilità finanziaria gli oneri sono registrati per anno (calcolo temporale). La differenza risultante viene corretta nel ponte di sintonizzazione di SpiGes.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Per il 2024 (dati 2023), SwissDRG AG ha richiesto i dettagli dei costi di utilizzo delle immobilizzazioni dei casi secondo la OCPrere. In SpiGes, le variabili «_ank» consentono di inviare a REKOLE® i dettagli dei costi di utilizzo delle immobilizzazioni dei casi. Dal momento che SwissDRG AG ora necessita di questo dettaglio, non sarebbe opportuno in SpiGes prevedere la fornitura delle variabili «_ank» anche per i risultati OCPrere? 
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
{{<markdown>}}
- Si tratta solo di una rilevazione di prova da parte di SwissDRG AG. In caso di passaggio definitivo alla OCPrere, i costi di utilizzo delle immobilizzazioni per centro di costo in SpiGes verrebbero addebitati in base alla OCPrere anziché a REKOLE® e i costi di utilizzo delle immobilizzazioni di REKOLE® come totale. 
- In sintesi, i costi di utilizzo delle immobilizzazioni devono essere rilevati secondo i seguenti metodi:
{{</markdown>}}
<table class="w-100">
  <tr>
    <th style="width:65%"> Variabili </div></th>
    <th> Metodo ANK </th>
  </tr>
  <tr>
    <td> Variabili CUFI da «ktr_10_ank» fino a «ktr_77_ank» </td>
    <td> REKOLE® </td>
  </tr>
  <tr>
    <td> Variabile CUFI «ktr_44_vkl» </td>
    <td> OCPre </td>
  </tr>
  <tr>
    <td> KS FiBu: SA6, in particolare la Var. dalla A.15.06 fino alla A.15.06.05
 </td>
    <td> OCPre </td>
  </tr>
  <tr>
    <td> Ponte di sintonizzazione KS: SA81-84
 </td>
    <td> OCPre </td>
  </tr>
  <tr>
    <td> Ponte di sintonizzazione KS: SA85, Var. dalla A.17.22.25 fino alla A.17.24.28
 </td>
    <td> REKOLE® </td>
  </tr>
</table>
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Il conto 441 non è incluso nel calcolo dei costi di utilizzo delle immobilizzazioni né dall’OCPre né da REKOLE®. Siete in grado di confermarlo?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
{{<markdown>}}
I costi di utilizzo delle immobilizzazioni (secondo REKOLE® e OCPre) corrispondono ai seguenti tipi di costi:       
- 442 Ammortamenti      
- 444 Altri canoni di locazione (compreso il leasing operativo)       
- 448 Interessi calcolatori sull’attivo fisso       
Per ulteriori informazioni, consultare il manuale REKOLE® (capitolo 6.5.3).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}