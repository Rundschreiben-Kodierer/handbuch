---
title: Abstimmungsbrücke 
slug: abstimmungsbrucke
description: " "
weight: 50
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="abstimmungsbrucke">}}

{{<numberedList>}}
{{<listItem>}}
Aus SDEP ist mir die Abgrenzungsrechnung bekannt. Wird es diese in SpiGes auch geben oder nur gemäss ITAR_K?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
SpiGes nutzt die Abstimmbrücke der GDK / von REKOLE.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wo im BFS werden die Begründungen zu den Abgrenzungen integriert? Bzw wie muss ich mir das vorstellen?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
Die Begründungen werden als Prüfungen in SpiGes erfasst. D.h. wenn ein Betrag von FiBu und BeBu nicht übereinstimmt, muss die Differenz begründet werden. Diese Begründungen werden dann auch weiterverwendet, z.B. für das Prüfprotokoll und für ITAR_K oder auch für die GDK Abstimmbrücke.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wo werden die Kosten der Überlieger in der Abstimmungsbrücke berücksichtigt?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
In der Kostenträgerrechnung von SpiGes lassen sich die Kosten der übers Jahr ausgetretenen Patienten (A Fälle) berechnen. Diese können bereits im Vorjahr ins Spital eingetreten sein und Kosten verursacht haben. In der Finanzbuchhaltung wird der Aufwand pro Jahr (Zeitrechnung) eingegeben. Die daraus entstehende Differenz wird in der Abstimmungsbrücke von SpiGes korrigiert.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Für 2024 (Daten 2023) hat die SwissDRG AG die Details der Anlagenutzungskosten der Fälle nach VKL angefordert. In SpiGes ermöglichen es die Variablen "_ank", die Details der Anlagenutzungskosten der Fälle nach REKOLE zu senden. Da dieses Detail nun für SwissDRG AG benötigt wird, sollte man in SpiGes die "_ank"-Variablen nicht auch für die VKL-Ergebnisse vorsehen?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
{{<markdown>}}
-	Es handelt sich hierbei lediglich um eine Testerhebung der SwissDRG AG. Sollte der definitive Wechsel zu VKL erfolgen, würden die Anlagenutzungskosten pro Kostenstelle in SpiGes nach VKL statt nach REKOLE erhoben werden und die REKOLE-Anlagenutzungskosten als Summe. 
-	Zusammengefasst sind die Anlagenutzungskosten nach folgenden Methoden abzubilden:
{{</markdown>}}
<table class="w-100">
  <tr>
    <th style="width:65%"> Variablen </div></th>
    <th> ANK-Methodik </th>
  </tr>
  <tr>
    <td> KTR-Variablen «ktr_10_ank» bis «ktr_77_ank» </td>
    <td> REKOLE </td>
  </tr>
  <tr>
    <td> KTR-Variable «ktr_44_vkl» </td>
    <td> VKL </td>
  </tr>
  <tr>
    <td> KS FiBu: SA6, insbesondere Var. A.15.06 bis A.15.06.05 </td>
    <td> VKL </td>
  </tr>
  <tr>
    <td> KS Abstimmbrücke: SA81-84 </td>
    <td> VKL </td>
  </tr>
  <tr>
    <td> KS Abstimmbrücke: SA85, Var. A.17.22.25 bis A.17.24.28 </td>
    <td> REKOLE </td>
  </tr>
</table>
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
 Das Konto 441 wird weder von VKL noch von REKOLE in die Berechnung der Anlagenutzungskosten einbezogen. Können Sie das bestätigen?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
{{<markdown>}}
Die Anlagenutzungskosten (nach REKOLE® und OCP) entsprechen folgenden Kostenarten:

- 442 Abschreibungen
- 444 Übrige Mietzinse (inkl. operatives Leasing)
- 448 Kalkulatorische Verzinsung des Anlagevermögens
Weitere Informationen sind im REKOLE®-Handbuch (Kapitel 6.5.3) zu finden.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}