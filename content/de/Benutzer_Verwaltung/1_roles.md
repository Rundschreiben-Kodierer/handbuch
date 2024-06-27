---
title: Rollen
slug: rollen
description: "Auf dieser Seite erklären wir Ihnen die verschiedenen Rollen, die es auf der Plattform gibt."
weight: 10
type: docs
keywords: []
---

### Rollen Kantone

<table style="width:100%">
  <tr>
    <th style="width:22%"> Name </div></th>
    <th> Aufgaben </th>
    <th style="width:20%"> Kompetenzen </div> </th>
    <th style="width:32%"> Verantwortung </div> </th>
  </tr>
  <tr>
    <td> KT_Superuser </td>
    <td> In der Initialisierungsphase informiert er seine Spitalunternehmen oder -standorte über Neuerungen und kontrolliert die Grundgesamtheit vor der Erhebung. Während der Erhebung sorgt er dafür, dass seine Spitalstandorte die Lieferfristen einhalten. Säumige Betriebe werden daran erinnert. Er überprüft die Qualität der Daten mittels des automatischen Prüfregelwerks und den ergänzenden Kommentaren der Spitalstandorte und gibt diese frei. Bei Schwierigkeiten seitens der Spitäler liefert er den ersten support. Er verwaltet alle user seiner Spitalstandorte und -unternehmen. Er verwaltet auch die Benutzer auf dem eIAM-Portal. Diese Aufgaben kann der KT_Superuser an den KT_ErhV oder KT_User entsprechend derer Kompetenzen delegieren und ist dann für die Supervision zuständig. </td>
    <td> Er kann alle Daten seiner Spitalunternehmen und- standorte lesen, hochladen, kommentieren, Prüfstati ändern, zu Plausibiliserungszwecken exportieren, abschliessen und die user aller Spitalrollen seiner Spitalstandorte und -unternehmen verwalten. </td>
    <td> Er sorgt dafür, dass die Erhebung in den Spitalunternehmen innerhalb seines Zuständigkeitsgebiets durchgeführt wird und informiert diese über anstehende Neuerungen. Bei konzeptuellen, technischen oder inhaltlichen Fragen sind die Kantone erste Anlaufstelle. Sie führen Eingangskontrollen sowie Rückfragen durch und besorgen das Mahnwesen. Bis Ende Juni des Erhebungsjahres sorgt der Kanton dafür, dass die verlangten Informationen aller im Kanton ansässigen Spitalunternehmen und -standorten mit gesundheitspolizeilicher Betriebsbewilligung korrekt und vollständig vorliegen. Die vom Spitalunternehmen angegebenen Begründungen bei Fehlermeldungen auf dem Prüfprotokoll werden vom Kanton auf ihre Plausibilität hin überprüft und akzeptiert. Er ist dafür verantwortlich, die Aktivitäten der Nutzer zu überwachen und sie zu deaktivieren, wenn sie den Zugriff nicht mehr benötigen. </td>
  </tr>
  <tr>
    <td> KT_ErhV(stat_Abschlussuser) </td>
    <td> Er führt die durch den KT_Superuser delegierten Aufgaben durch. </td>
    <td> Er kann alle Daten seiner Spitalunternehmen und- standorte lesen, hochladen, kommentieren, Prüfstati ändern, zu Plausibiliserungszwecken exportieren, abschliessen. </td>
    <td> Die kantonale Erhebungsstelle gibt für das betroffene Erhebungsjahr Ende Juli die Daten der Spitalunternehmen auf ihrem Hoheitsgebiet für die Nutzung nach BStatG frei. </td>
  </tr>
  <tr>
    <td> KT_Admin_Abschlussuser </td>
    <td> Mittels Einsicht in die Daten seiner Spitalstandorte oder -unternehmen gibt er die Daten am Ende der Erhebung für die administrative Nutzung frei. </td>
    <td> Er kann alle Daten seiner Spitalunternehmen und- standorte lesen, hochladen, kommentieren, Prüfstati ändern, zu Plausibiliserungszwecken exportieren, abschliessen. </td>
    <td> Das kantonale Gesundheitsamt gibt für das betroffene Erhebungsjahr Ende Juli die Daten der Spitalunternehmen auf ihrem Hoheitsgebiet für die Nutzung nach KVG frei. </td>   
  </tr>
  <tr>
    <td> KT_User </td>
    <td> Er führt die durch den KT_Superuser delegierten Aufgaben durch. </td>
    <td> Er kann alle Daten seiner Spitalunternehmen und- standorte lesen, hochladen, kommentieren. </td>
    <td> Er unterstützt den KT_Superuser in seinen Aufgaben. </td>
  </tr>
  <tr>
    <td> KT_Read </td>
    <td> Er kann bei Bedarf auf der Plattform den Stand der Erhebung einsehen. </td>
    <td> Er kann alle Daten aller Spitalunternehmen seines Kantons lesen. </td>
    <td> Er unterliegt der Schweigepflicht und darf keine Information über gelesene Informationen auf der Plattform Unbefugten mitteilen. </td>
  </tr>
</table>

### Rollen Spitäler
 
<table>
  <tr>
    <th><div style="width:155px"> Name </div></th>
    <th> Aufgaben </th>
    <th> <div style="width:110px"> Kompetenzen </div> </th>
    <th> <div style="width:120px"> Verantwortung </div> </th>
  </tr>
  <tr>
    <td>SP_ErhV_Unternehmen </td>
    <td> In der Initialisierungsphase liest er die Neuerungen bezüglich der Erhebung und setzt diese bei Bedarf um. Während der Erhebung sorgt er dafür, dass seine Spitalstandorte die Lieferfristen einhalten. Er ladet die Daten hoch, überprüft die Qualität der Daten mittels des automatischen Prüfregelwerks und kommentiert diese bei Bedarf. Am Ende des Erhebungsprozesses gibt er die Daten auf Spitalunternehmensebene frei (abschliessen), damit diese im Prozess weitergereicht werden können (Freigabe des Kantons). </td>
    <td> Er kann alle Daten seines Spitalunternehmen und dessen Standorte lesen, hochladen, kommentieren, zu Plausibiliserungszwecken exportieren und abschliessen. </td>
    <td> Er sorgt dafür, dass die Daten seines Spitalunternehmens innerhalb der vorgegebenen Frist und in guter Qualität vorliegen und gibt diese auf Ebene Spitalunternehmen frei. </td>
  </tr>
  <tr>
    <td>SP_ErhV_Standort</td>
    <td> Er ladet die Daten seines Spitalstandortes hoch, überprüft die Qualität der Daten mittels des automatischen Prüfregelwerks und kommentiert diese bei Bedarf. Am Ende des Erhebungsprozesses gibt er die Daten auf Spitalstandortebene frei (abschliessen), damit diese im Prozess weitergereicht werden können (Freigabe des Spitalunternehmens). </td>
    <td> Er kann alle Daten seines Spitalstandorts lesen, hochladen, kommentieren, zu Plausibiliserungszwecken exportieren und abschliessen. </td>
    <td> Er sorgt dafür, dass die Daten seines Spitalstandorts innerhalb der vorgegebenen Frist und in guter Qualität vorliegen und gibt diese auf Ebene Spitalstandort frei. </td>
  </tr>
  <tr>
    <td> SP_User_Unternehmen </td>
    <td> Er führt die durch den SP_ErhV_Unternehmen delegierten Aufgaben durch. </td>
    <td> Er kann alle Daten seines Spitalunternehms und dessen Standorte lesen, hochladen, kommentieren. </td>
    <td> Er unterstützt den SP_ErhV_Unternehmen in seinen Aufgaben. </td>
  </tr>
  <tr>
    <td> SP_User_Standort </td>
    <td> Er führt die durch den SP_ErhV_Standort delegierten Aufgaben durch. </td>
    <td> Er kann alle Daten seines Spitalstandorts lesen, hochladen, kommentieren. </td>
    <td> Er unterstützt den SP_ErhV_Standort in seinen Aufgaben. </td>
  </tr>
  <tr>
    <td> SP_Read_Unternehmen </td>
    <td> Er kann bei Bedarf auf der Plattform den Stand der Erhebung einsehen. </td>
    <td> Er kann die Daten seines Spitalunternehmens lesen. </td>
    <td> Er unterliegt der Schweigepflicht und darf keine Information über gelesene Informationen auf der Plattform Unbefugten mitteilen. </td>
  </tr>
  <tr>
    <td> SP_Read_Standort </td>
    <td> Er kann bei Bedarf auf der Plattform den Stand der Erhebung einsehen. </td>
    <td> Er kann die Daten seines Spitalstandorts lesen. </td>
    <td> Er unterliegt der Schweigepflicht und darf keine Information über gelesene Informationen auf der Plattform Unbefugten mitteilen. </td>
  </tr>
</table>

<!-- 

  <tr>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>

  -->