---
title: Universo statistico e unità rilevazione
slug: grundgesamtheit_erhebungseinheiten
description: " "
weight: 30
type: docs
keywords: []
---

{{<faqBlock>}}
Aprire tutte le domande: {{<collapsibleGroupCommand groupId="GGH">}}

{{<numberedList>}}
{{<listItem>}}
In merito all’introduzione di SpiGes o al momento di definire l’universo statistico per la prima rilevazione SpiGes, si utilizzeranno ancora i vecchi «elenchi ospedalieri» o si lavorerà già con SpiReg?
{{<collapsibleBlock groupId="GGH">}}
{{<markdown>}}
- In occasione della prima rilevazione SpiGes (dati 2024), nel 2025, verrà ancora fatta un’importazione manuale dell’universo statistico KS  sotto forma di elenchi Excel.
- Il precedente BUR  si chiamerà BURGESV  e rimarrà l’identificatore dell’ospedale. A partire dai dati 2024 (per la rilevazione 2025) il BUR-sede del trattamento sarà chiamato BUR. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Che differenza c’è tra un’impresa ospedaliera, un ospedale e una sede ospedaliera?
{{<collapsibleBlock groupId="GGH">}}
{{<markdown>}}
- Un’impresa ospedaliera è un’impresa con il codice NOGA 861001 (ospedali generali), 861002 (cliniche specializzate) o 869004 (case di maternità). È designato in modo univoco attraverso il numero di identificazione ENTID. 
- Nell’indagine SpiGes, l’ospedale è un’unità che compila un ITAR_K® e su cui si basa la definizione dei casi di secondo SwissDRG AG. Un ospedale è contrassegnato con il numero RIS GESV, che è presente solo nella banca dati di GESV.
- Una sede di ospedale è contrassegnata in modo univoco con il numero RIS e fa sempre capo a un’impresa ospedaliera ben precisa. 
La tabella seguente mostra un esempio di impresa (UID/ENTID)  con 12 ospedali (BURGESV)  e 14 sedi (RIS) :
{{</markdown>}}
{{<insertImage image="tableauFAQ1_it.png"  class="max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Quali termini sono usati come sinonimi nell’indagine SpiGes per impresa ospedaliera, ospedale e sede?
{{<collapsibleBlock groupId="GGH">}}
<table class="w-100">
  <tr>
    <th style="width:50%"> Livello </div></th>
    <th> Sinonimo dei termini </th>
  </tr>
  <tr>
    <td> <b> Impresa ospedaliera </b> <br /> 
    Entità giuridica
 	</td>
    <td> Impresa (ospedaliera) </td>
  </tr>
  <tr>
    <td> <b> Ospedale </b> (secondo l’indicazione Cantone, indagine MS/KS, definizione del caso) </td>
    <td> Ospedale, clinica, stabilimento (ospedalieri) </td>
  </tr>
  <tr>
    <td> <b> Sede </b> <br /> 
    Unità locale
	</td>
    <td> Sede </td>
  </tr>
</table>
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Come si determina a quale ospedale (burnr_gesv) appartiene una sede (burnr)? 
{{<collapsibleBlock groupId="GGH">}}
{{<markdown>}}
- L’attribuzione delle sedi (numeri BUR) agli ospedali (BUR-GESV) viene rilevata nel quadro della rilevazione dell’universo statistico. In questo processo, sono i Cantoni a fornirci le informazioni in collaborazione con gli ospedali.
- Il burnr_gesv viene rilevato anche su richiesta dei nostri partner.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Cosa si intende per Centro di prestazione medica principale (ad es. M000, M050)?
{{<collapsibleBlock groupId="GGH">}}
Un centro di prestazione è un’unità organizzativa di un ospedale nella quale sono erogate prestazioni mediche, medico-tecniche o medico-terapeutiche. Nell’indagine SpiGes viene richiesto il centro di prestazione medica principale in cui il paziente è in cura.  
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Se un ospedale ha diverse sedi, un caso viene sempre registrato in una sola sede, anche se è stato trasferito da una sede a un'altra sede dello stesso ospedale?
{{<collapsibleBlock groupId="GGH">}}
Sì, un caso viene sempre registrato in una sola sede, ossia la sede principale (vedere la variabile burnr).
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}