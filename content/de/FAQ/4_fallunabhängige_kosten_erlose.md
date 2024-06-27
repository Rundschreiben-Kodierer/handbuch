---
title: Fallunabhängige Kosten und Erlöse 
slug: falldunabhangige
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="falldunabhangige">}}

{{<numberedList>}}
{{<listItem>}}
Wie lassen sich die Kosten und Erlöse der gemeinwirtschaftlichen Leistungen in SpiGes erfassen?
{{<collapsibleBlock groupId="falldunabhangige">}}
Dazu wählen Sie unter ktr_typ den passenden Code der entsprechenden GWL Leistung aus und tragen die entsprechenden Kosten und Erlöse anhand den in REKOLE® definierten Kostenarten-, bzw. Kostenstellennummern und Erlöskonten ein. Anbei die Liste der unterschiedlichen GWL Typen und dem entsprechenden ktr_typ Code:
<table class="w-100">
  <tr>
    <th style="width:20%"> Code </div></th>
    <th> GWL </th>
    <th style="width:60%"> Bezeichnung </th>
  </tr>
  <tr>
    <td> 501 </td>
    <td> Typ a) </td>
    <td> Vorhalteleistungen (exkl. Vorhalteleistungen für den Notfall) </td>
  </tr>
  <tr>
    <td> 502 </td>
    <td> Typ a) </td>
    <td> Rettungswesen/Notruf 144 </td>
  </tr>
  <tr>
    <td> 503 </td>
    <td> Typ a) </td>
    <td> Geschützte Spitalbereiche </td>
  </tr>
  <tr>
    <td> 504 </td>
    <td> Typ a) </td>
    <td> Kindergarten und Schule für Patientinnen und Patienten </td>
  </tr>
  <tr>
    <td> 505 </td>
    <td> Typ a) </td>
    <td> Sozialdienstliche Leistungen für Patienten </td>
  </tr>
  <tr>
    <td> 506 </td>
    <td> Typ a) </td>
    <td> Prävention/Gesundheitsförderung </td>
  </tr>
  <tr>
    <td> 507 </td>
    <td> Typ a) </td>
    <td> Bevölkerungsschutz </td>
  </tr>
  <tr>
    <td> 508 </td>
    <td> Typ a) </td>
    <td> Spitalseelsorge / Andachtsraum </td>
  </tr>
  <tr>
    <td> 599 </td>
    <td> Typ a) </td>
    <td> Weitere Spezialaufgaben </td>
  </tr>
  <tr>
    <td> 601 </td>
    <td> Typ b) </td>
    <td> Forschung, inkl. Doktorat (MD und PhD) </td>
  </tr>
  <tr>
    <td> 602 </td>
    <td> Typ b) </td>
    <td> Erteilte und erhaltene universitäre Ausbildung </td>
  </tr>
  <tr>
    <td> 603 </td>
    <td> Typ b) </td>
    <td> Erteilte berufliche Weiterbildung </td>
  </tr>
  <tr>
    <td> 701 </td>
    <td> Typ c) </td>
    <td> Aufrechterhaltung von Überkapazitäten aus regionalpolitischen Gründen </td>
  </tr>
  <tr>
    <td> 702 </td>
    <td> Typ c) </td>
    <td> Geburtshilfe </td>
  </tr>
  <tr>
    <td> 703 </td>
    <td> Typ c) </td>
    <td> Nicht kostendeckende Tarife (z. B.TARMED.) </td>
  </tr>
  <tr>
    <td> 799 </td>
    <td> Typ c) </td>
    <td> Weitere spitalbezogene gemeinwirtschaftliche Leistungen </td>
  </tr>
</table>
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Können fallunabhängige Kostenträger einem Spital (burnr_gesv) angehängt werden anstelle eines Standortes?
{{<collapsibleBlock groupId="falldunabhangige">}}
Nein, das ist nicht möglich.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Kann man KTR-Typen auch mehrfach verwenden? Zum Beispiel bei 599 mehrfache Zeilen abliefern mit unterschiedlichem Freitext in der Variable "ktr_beschr" ?
{{<collapsibleBlock groupId="falldunabhangige">}}
Ja, das ist möglich. <br />
Anhand der Angabe «ktr_typ» wird ein Kostenträger einer ITAR_K-Spalte zugeordnet. Somit muss in der Variable «ktr_typ» einer der vordefinierten Werte verwendet werden. Es ist jedoch möglich mehrere Kostenträger mit demselben KTR-Typ anzugeben, z.B. für den ktr_typ 205 einmal mit dem Freitext «KVG» und einmal mit dem Freitext «MTK» in der Variable «ktr_beschr». Diese beiden Kostenträger werden dann summiert und in der ITAR_K-Spalte «Tagesklinik Kind- & Jugendpsychiatrie» abgebildet. Theoretisch sind auch weitere Aufteilungen technisch möglich, bis auf den ambulanten Fall. Solange alle denselben KTR-Typ aufweisen, werden sie wie beschrieben summiert und abgebildet.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wird der KTR-Teil auch bei ambulanten Fällen erwartet, oder bezieht sich dieser ebenfalls ausschliesslich auf stationäre Fälle?
{{<collapsibleBlock groupId="falldunabhangige">}}
Um ein ITAR_K ausfüllen zu können, werden die Kosten der ambulanten Fälle summarisch pro KTR Typ (z.B. Tarif Dialyse) abgefüllt.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}