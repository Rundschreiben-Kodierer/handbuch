---
title: Technische Fragen 
slug: technische_fragen
description: " "
weight: 60
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="technische_fragen">}}

{{<numberedList>}}
{{<listItem>}}
Gibt es für den Datenimport in die SpiGes Applikation eine Formatvorlage?
{{<collapsibleBlock groupId="technische_fragen">}}
Ja, die Formate im Schnittstellenkonzept sind zu übernehmen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wurden die grossen Anbieter von Pat.-Admin-Software (SAP) ebenfalls vom BFS informiert und entwickeln sie bereits Software-Lösungen? Vermutlich sollte das XML-File künftig in der Pat.-Admin-Software erstellt werden.
{{<collapsibleBlock groupId="technische_fragen">}}
Im Januar 2023 haben wir ein Informationsveranstaltung Richtung KIS Hersteller (Pat.-Admin-Software) gemacht. SAP war auch repräsentiert. Das BFS informiert diese Gruppe laufend über den Stand von SpiGes.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Gemäss Variablenliste 1.3 gibt es folgende Tabellen:
<table>
  <tr>
    <td> 1 </td>
    <td> Administratives </td>
  </tr>
  <tr>
    <td> 2 </td>
    <td> Neugeborene </td>
  </tr>
  <tr>
    <td> 3 </td>
    <td> Psychiatrie </td>
  </tr>
  <tr>
    <td> 4 </td>
    <td> KTR </td>
  </tr>
  <tr>
    <td> 5 </td>
    <td> Diagnosen </td>
  </tr>
  <tr>
    <td> 6 </td>
    <td> Behandlungen </td>
  </tr>
  <tr>
    <td> 7 </td>
    <td> Operierende </td>
  </tr>
  <tr>
    <td> 8 </td>
    <td> Medikamente </td>
  </tr>
  <tr>
    <td> 9 </td>
    <td> Rechnungen </td>
  </tr>
  <tr>
    <td> 10 </td>
    <td> Patientenbewegung </td>
  </tr>
  <tr>
    <td> 11 </td>
    <td> Kantonsdaten </td>
  </tr>
  <tr>
    <td> 12 </td>
    <td> Personenidentifikator </td>
  </tr>
</table>
Kann man unter SpiGes diese Tabellen alle als einzelnes xml-File abgeben?
{{<collapsibleBlock groupId="technische_fragen">}}
Die Tabelle 12 Personenidentifikatoren muss in einem separaten File geliefert werden (aus Datenschutzgründen). Für die restlichen Tabellen ist ein anderes File definiert, welches aber Teillieferungen unterstützt. Theoretisch ist es also möglich, alle Tabellen in einem einzelnen XML-File als Teillieferungen zu liefern. Wir empfehlen dies jedoch nicht, da dies eine aufwändige Abstimmung der verschiedenen Tabellen erfordert (Sicherstellen, dass die Informationen zu allen Fällen in allen Files vorhanden sind).  Genauere Informationen zu diesem Thema finden Sie in der Beschreibung der XML-Datei für den Datenimport in die SpiGes-Plattform auf unserer Webseite <a href="https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.html"> https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.html </a>
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Gibt es eine Möglichkeit für kleine Betriebe aus einem Excel (in der die KTR eingetragen ist) ein XML-File herzustellen. Gibt es ein Anbieter, der dies plant umzusetzen?
{{<collapsibleBlock groupId="technische_fragen">}}
Diese Möglichkeit wird zurzeit vom BFS geprüft.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Ist geplant eine Excel für die fallunabhängigen Kosten zur Verfügung zu stellen, in welchem der Betrieb die fallunabhängigen Kosten im Excel-Format ausfüllen kann und dann als XML-Format exportieren kann? 
{{<collapsibleBlock groupId="technische_fragen">}}
Die separate Lieferung von verschiedenen Arten von XML-Elementen ist möglich. D.h. die fallunabhängigen Kostenträger können grundsätzlich in einem anderen File als die fallabhängigen Kostenträger geliefert werden. Ob wir ein Tool für die Transformation der Daten aus einem Excel-File bereitstellen können, müssen wir noch abklären.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Hat das SpiGes Exportfile die gleiche Struktur wie das File, welches die Spitäler in SpiGes importieren?
{{<collapsibleBlock groupId="technische_fragen">}}
Es wird mehrere Exportfiles geben. Einerseits wird man das XML-File, was die Spitäler importieren, auch exportieren können und andererseits wird ein Export in einem flachen Format (mehrere CSV-Dateien) möglich sein.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Spielt im XML-Format die Reihenfolge der Variablen innerhalb einer Zeile eine Rolle?
{{<collapsibleBlock groupId="technische_fragen">}}
{{<markdown>}}
- Die Reihenfolge der Elemente ist vorgegeben und nicht veränderbar. Elemente können höchstens weggelassen werden. Also für das Fall-Element sind die Unterelemente immer in der Reihenfolge «Administratives», «Neugeborene», «Psychiatrie», «KostenträgerFall», «Diagnose», «Behandlung», «Medikament», «Rechnung», «Patientenbewegung» und «Kantonsdaten» anzugeben. 
- Die Reihenfolge der Attribute ist hingegen frei wählbar. So kann z.B. im Element «Administratives» sowohl «…geschlecht="2" alter="37"…» als auch «…alter="37" geschlecht="2"…» angegeben werden. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Können auch Variablen innerhalb einer Zeile fehlen, falls die Klinik in dieser Zeile nichts zu der entsprechenden Variable auszufüllen hat? Oder müssen immer alle Variablen der Schnittstelle in jeder Zeile stehen?
{{<collapsibleBlock groupId="technische_fragen">}}
Ja, Variablen können fehlen. Gewisse Variablen müssen aber zwingend angegeben werden. Diese sind im XSD-Definitionsfile als «required» gekennzeichnet («xs:attribute name="fall_id" use="required"»). In der Variablenliste werden wir diese Information auch noch ergänzen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Können die Variablen, welche keinen Inhalt haben, auch mit einem NULLWERT geliefert werden (zum Beispiel vollständige KTR-Zeilen mit NULLEN in den Variablen wo nichts vorhanden ist)? 
{{<collapsibleBlock groupId="technische_fragen">}}
Das kommt auf die Variablen an. Bei den KTR-Variablen ist es möglich, alle Variablen mit dem Wert «0» zu erfassen. Leere Variablen («») oder Nullwerte («NULL») sind jedoch nicht zulässig. Falls Sie das konkret überprüfen möchten, können Sie ihr XML-File gegen die XSD-Definition validieren. Dazu gibt es online gratis Tools. Bitte beachten Sie dabei, dass keine echten Daten auf solche Plattformen hochgeladen werden dürfen. Fiktive Beispiel-Files können sie aber so überprüfen. Auch die SpiGes Plattform wird eine solche Validierung bereitstellen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wird es eine Plausibilisierungssoftware analog Medplaus geben, die vor dem Upload lokal innerhalb der Spitäler eingesetzt werden kann?
{{<collapsibleBlock groupId="technische_fragen">}}
Es wird ein Prüftool via API (Application Programming Interfaces) zur Verfügung gestellt werden. Dies wird jedoch erst im Laufe des kommenden Jahres bereitstehen. Bis dahin empfehlen wir MedPlaus weiter zu verwenden. Davon wird es auch eine Version für das Jahr 2024 geben.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Ist schon bekannt, wie das Vorgehen in Bezug auf die kantonalen Zusatzdaten sein wird? Verschiedene Kantone (z.B. LU, GR, VS und VD) haben ja bereits heute eine MK-Zeile. Zudem erheben die Kantone ZH und BE im Rahmen von SDEP ebenfalls zusätzliche Daten. Wissen Sie bereits, ob diese Daten in den Export SpiGes integriert werden oder ob diese separat exportiert werden müssen?
{{<collapsibleBlock groupId="technische_fragen">}}
{{<markdown>}}
- Die kantonalen Zusatzdaten wurden in der Schnittstelle berücksichtigt; siehe Beschreibung der XML-Datei für den Datenimport in die SpiGes-Plattform 1.3:
Stationäre Spitalaufenthalte: [Mehrfachnutzung der Daten (Projekt SpiGes)](https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.html). 
- Die kantonalen Zusatzdaten können zwar im XML angegeben werden, werden beim Import auf die SpiGes Plattform jedoch nicht weiterverarbeitet. Sie werden von den Kantonen separat plausibilisiert und bearbeitet. 
- Exportierbar sind die Kantonsdaten nur durch das Spital selbst und durch den Kanton. Voraussichtlich sind die Kantonsdaten für diese User im selben XML-File enthalten, wie die restlichen Daten. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Wird es möglich sein, Korrekturen direkt auf der Plattform vorzunehmen?
{{<collapsibleBlock groupId="technische_fragen">}}
Nein, die Plattform bietet keine Möglichkeit, Daten einzugeben oder zu korrigieren. Ziel ist es, die Fehler an der Quelle, d.h. in den Systemen der Krankenhäuser, zu korrigieren, damit die späteren Exporte konsistent sind und die Fehler in den nächsten Erhebungen nicht mehr auftauchen.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Neue Formate: Es gibt neue Formate. Beispielweise bei rech_betrag. Das Format lautet N10.2 Wir vermuten, es handelt sich hierbei um die Angabe von Dezimalstellen. In diesem Fall 2 Dezimalstellen und eine Gesamtlänge von 12. Ist dies korrekt?
{{<collapsibleBlock groupId="technische_fragen">}}
Nicht ganz. N10.2 bezeichnet eine Zahl mit insgesamt 10 Stellen, davon 2 Nachkommastellen (und ergo max. 8 Vorkommastellen).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Neue Variablen medi_id und rech_id: Aus der Beschreibung sind wir uns nicht sicher, ob hier laufende Nummern oder tatsächliche ID aus dem System gemeint sind. Wenn ja, welche? Bei der medi_id dachten wir sofort an den ATC_Code, jedoch gibt es hierfür eine extra Variable.
{{<collapsibleBlock groupId="technische_fragen">}}
{{<markdown>}}
- Es handelt sich bei de beiden neuen Variablen «medi_id» und «rech_id» um Identifikatoren, die zur eindeutigen Zuordnung aus technischen Gründen nötig. Diese müssen nicht zwingend mit 1 beginnen, sie müssen aber für jeden Fall eindeutig sein. 
- In der XML-Musterdatei 1.3, welche Sie auf unserer Homepage vorfinden, ist auch ein Beispiel enthalten. medi_id="1" enthält die Information, dass es sich um das erste hochteure Medikament gemäss den Vorgaben der SwissDRG AG für diesen spezifischen Fall handelt. 
{{</markdown>}}
{{<insertImage image="Image5.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
In den Beispieldateien für das Identifikatoren-File und das Daten-File gibt es zwei Felder für die Version. Diese Versionen stimmen aber nicht überein. So wird im Header die Version 1.0 angegeben und beim Tag Unternehmen die Version 1.3. Warum sind die Versionsnummern unterschiedlich? Woher wissen wir wann welche Versionsnummer anzugeben ist?
{{<collapsibleBlock groupId="technische_fragen">}}
{{<insertImage image="Image6.jpg" class="edge max-w-90">}}
«?xml version=“1.0″» steht immer so. Die oberste Version bezieht sich also auf das «XML» selbst, und die untere auf das spezifische SpiGes XML.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}