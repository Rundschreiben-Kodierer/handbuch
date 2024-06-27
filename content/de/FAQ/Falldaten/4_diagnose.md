---
title: Diagnose 
slug: diagnose
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="diagnose">}}

{{<numberedList>}}
{{<listItem>}}
POA-Variable: Könnten Sie uns bitte sagen, zu welchem Zweck die Variable diagnose_poa verwendet wird?
{{<collapsibleBlock groupId="diagnose">}}
{{<markdown>}}
Die Angabe «POA» kann unter anderem zur Verbesserung der Qualität und der Patientensicherheit verwendet werden. Siehe z. B. die Mitteilung des Kantons Zürich zu diesem Thema. [Present on admission - Informationen zur Erfassung (zh.ch)](https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/gesundheit/gesundheitsversorgung/spitaeler_kliniken/daten_und_statistik_der_listenspitaeler/datenerhebung/poa_informationen.pdf)
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
 Variable «diagnose_zusatz»: Welche Angaben müssen hier bei Stern-Kodes und Kodes mit Ausrufezeichen gemacht werden?
{{<collapsibleBlock groupId="diagnose">}}
{{<markdown>}}
-	Bei Stern-Kodes wird hier der zugehörige Kreuz-Kode angegeben. Bei Kodes mit Ausrufezeichen, der zu präzisierende Kode. 
-	Stern-Kodes werden nicht als solche markiert, die Vergabe erfolgt gemäss ICD-10-GM. 

**Beispiel 4** im Kodierhandbuch (Seite 38)      
HD E10.73† Diabetes mellitus, Typ 1, mit multiplen Komplikationen, als entgleist bezeichnet       
ND I79.2* Periphere Angiopathie bei anderenorts klassifizierten Krankheiten       
ND H36.0* Retinopathia diabetica      
ND N08.3* Glomeruläre Krankheiten bei Diabetes mellitus       
…wird wie folgt in **SpiGes** erfasst:  
{{</markdown>}}
<table class="w-100">
  <tr>
    <th style="width:35%"> diagnose_kode </div></th>
    <th> diagnose_id </th>
    <th style="width:35%"> diagnose_zusatz </th>
  </tr>
  <tr>
    <td> E10.73 </td>
    <td> 1 </td>
    <td>  </td>
  </tr>
  <tr>
    <td> I79.2 </td>
    <td> 2 </td>
    <td> E10.73 </td>
  </tr>
  <tr>
    <td> H36.0 </td>
    <td> 3 </td>
    <td> E10.73 </td>
  </tr>
  <tr>
    <td> N08.3 </td>
    <td> 4 </td>
    <td> E10.73 </td>
  </tr>
</table>
{{<markdown>}}
**Beispiel 4** im Koderhandbuch (Seite 40)       
HD S37.03 Komplette Ruptur des Nierenparenchyms       
L 2       
ND V99! Transportmittelunfall       
ND S36.03 Rissverletzung der Milz mit Beteiligung des Parenchyms      
ND S36.49 Verletzung sonstiger und mehrerer Teile des Dünndarmes      
ND S31.83! Offene Wunde (jeder Teil des Abdomens, der Lumbosakralgegend und des Beckens) mit Verbindung zu einer intraabdominalen Verletzung      
…wird wie folgt in SpiGes erfasst:      
{{</markdown>}}
<table class="w-100">
  <tr>
    <th style="width:35%"> diagnose_kode </div></th>
    <th> diagnose_id </th>
    <th style="width:35%"> diagnose_zusatz </th>
  </tr>
  <tr>
    <td> S37.03 </td>
    <td> 1 </td>
    <td>  </td>
  </tr>
  <tr>
    <td> V99 </td>
    <td> 2 </td>
    <td> S37.03 </td>
  </tr>
  <tr>
    <td> S36.03 </td>
    <td> 3 </td>
    <td> </td>
  </tr>
  <tr>
    <td> S36.49 </td>
    <td> 4 </td>
    <td> </td>
  </tr>
  <tr>
    <td> S31.83 </td>
    <td> 5 </td>
    <td> S36.03 </td>
  </tr>
  <tr>
    <td> S31.83 </td>
    <td> 6 </td>
    <td> S36.49 </td>
  </tr>
  <tr>
    <td> S31.83 </td>
    <td> 7 </td>
    <td> S37.03 </td>
  </tr>
</table>
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}