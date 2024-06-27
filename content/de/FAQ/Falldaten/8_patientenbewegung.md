---
title: Patientenbewegung 
slug: patientenbewegung
description: " "
weight: 80
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="patientenbewegung">}}

{{<numberedList>}}
{{<listItem>}}
Gelten der Eintritt und Austritt auch als Episode?
{{<collapsibleBlock groupId="patientenbewegung">}}
Eintritt und Austritt werden wie bisher unter Eintrittsdatum und Austrittsdatum angegeben. Falls der Fall nicht transferiert wurde, werden keine Episoden erfasst. Sobald es aber zu einem Transfer kommt (z.B. ein Zwischenaustritt) wird Episode 1 vom Eintrittsdatum bis zum Zwischenaustritt erfasst. Episode 2 beginnt beim Zwischenausstritt und endet mit dem Wiedereintritt. Episode 3 beginnt mit dem Wiedereintritt und endet mit dem nächsten Transfer (z.B. Urlaub). Dies kann für den gleichen Fall in mehrere Episoden enden (siehe Abbildung). Die letzte Episode (9) endet mit dem Austrittsdatum. Episoden sind die Abschnitte vor und nach einem Standortwechsel eines Falls, Zwischenaustritte / Wiedereintritte, externe ambulante Behandlungen, Urlaube und Belastungserprobungen.
{{<insertImage image="Image3.jpg" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wird ein Fall, der den Standort wechselt, in beiden Standorten geführt?
{{<collapsibleBlock groupId="patientenbewegung">}}
Nein, jeder Fall wird nur am Hauptstandort geführt, auch wenn er innerhalb eines Spitals (BURGESV) von einem Standort zum anderen verlegt wird. Wechselt ein Patient in ein anderes Spital (BURGESV), ist ein neuer Fall zu eröffnen. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variablen "wiedereintritt_aufenthalt" und "grund_wiedereintritt": Wieso können diese Angaben nur für A Fälle gemacht werden, wenn sämtliche Episodenangaben für ABC Fälle gedacht sind?
{{<collapsibleBlock groupId="patientenbewegung">}}
Abklärungen mit der SwissDRG AG haben ergeben, dass die beiden Variablen "wiedereintritt_aufenthalt" und "grund_wiedereintritt" für Statistikfälle ABC angegeben werden können. Wir werden dies im Variablenbeschrieb 1.4 anpassen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
episode_id: Wir sind der Meinung, dass für unsere Klinik bei den stationären Fällen keine Episoden unterschieden werden müssen, da wir keine Standortwechsel innerhalb des Spitals verzeichnen. Ist das unsererseits richtig verstanden?
{{<collapsibleBlock groupId="patientenbewegung">}}
Die Vermutung trifft zu, was Episoden aufgrund von Standortwechseln betrifft. Episoden aufgrund von Zwischenaustritten/Wiedereintritten, Urlaub, Belastungserprobung oder ambulanten Behandlungen auswärts sind jedoch zu erfassen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Verstehen wir dies richtig, dass z.B. der Eintritt bis zur ambulanten Behandlung auswärts (siehe Abbildung unten) bereits eine Episode ist? Wir haben also zwischen Urlauben, Belastungserprobungen und auswärtigen Behandlungen immer eine episode_art="1"?
{{<collapsibleBlock groupId="patientenbewegung">}}
Richtig
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wir haben im Beispiel (siehe Abbildung unten) keine Standortwechsel innerhalb desselben Spitals. Verstehen wir es richtig, dass bei der episode_art="1" immer die BUR Nummer Standort des Spitals anzugeben ist?
{{<collapsibleBlock groupId="patientenbewegung">}}
Richtig
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Die Zeitangabe für die Rückkehr von der ambulanten Behandlung auswärts wird unseres Wissens nach nicht dokumentiert. Eventuell wird dies aber in den Krankenhausinformationssystemen der Spitäler erfasst. Ist diese Angabe zwingend?
{{<collapsibleBlock groupId="patientenbewegung">}}
Ja, Datum und Stundenangabe müssen für alle Episoden sowohl für den Beginn als auch für das Ende geliefert werden. Falls das Ende einer ambulanten auswärtigen Behandlung nicht erfasst wird, empfehlen wir diese Erfassung zu ergänzen. Sollte dies nicht (so rasch) möglich sein, empfehlen wir für ambulante auswärtige Behandlungen einen Standarddauer zu verwenden.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Die Angabe der BURNR des auswärts behandelnden Spitals ist fakultativ, richtig? 
{{<collapsibleBlock groupId="patientenbewegung">}}
Ja, bei externen ambulanten Behandlungen kann die BUR-Nummer des behandelnden  Standorts angegeben werden, falls diese bekannt ist.
{{<insertImage image="Image4.jpg" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}