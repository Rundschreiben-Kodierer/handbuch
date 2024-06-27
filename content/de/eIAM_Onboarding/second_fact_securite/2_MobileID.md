---
title: Mobile ID
slug: mobile_id
description: "Auf dieser Seite finden Sie alle Informationen über die Verwendung der Mobile ID als Zweitsicherheitfaktor."
keywords: []
weight: 20
type: docs
---

{{<alert color="warning">}}
Wir bitten Sie, wenn möglich, Windows Hello zu verwenden.
{{</alert>}}

{{<alert color="warning">}}
Die Mobile ID ist ein anderes Authentifizierungsmittel als die mTAN-SMS.
{{</alert>}}

Wenn Sie Windows Hello als Zweitsicherheitfaktor nicht verwenden können, können Sie Mobile ID verwenden. Für die Verwendung von Mobile ID benötigen Sie eine SIM-Karte, die mit Mobile ID kompatibel ist. Wenn Ihre SIM-Karte nicht mit Mobile ID kompatibel ist, muss sie ausgetauscht werden. Informationen, wie Sie sie ersetzen können, finden Sie [hier](https://www.mobileid.ch/de/sim-bestellen)

{{<alert color="info">}}
Mobile ID ist ein Dienst, der derzeit nur mit einer Schweizer SIM-Karte kompatibel ist.
{{</alert>}}

## Aktivierung der Mobile ID

Folgen Sie den nachstehenden Schritten, um die Mobile ID zu aktivieren.

<!-- 1ere paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Gehen Sie auf die Website von <a href="https://www.mobileid.ch/fr">MobileID</a> und wählen Sie "jetzt probieren". 
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="mobile_id_de.png" description="MobileID" class="edge max-w-90">}} 
</div>

</div>

&nbsp;

<!-- 2eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Geben Sie Ihre Telefonnummer ein. </p>

<p> Sie erhalten dann einen Code per SMS an die angegebene Nummer, geben Sie den erhaltenen Code ein. </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="saisie_tel_de.png" description="Code SMS" class="edge max-w-90">}} 
</div>

</div>

&nbsp;

Sie befinden sich nun auf Ihrem Mobile ID Dashboard. 

Der nächste Schritt besteht darin, die Mobile ID zu aktivieren.

{{<alert color="warning">}}
Für die Nutzung der SpiGes-Plattform muss die Aktivierung über die SIM-Karte erfolgen (die Aktivierung über die MobileID-Anwendung ist nicht ausreichend). Hierfür benötigen Sie eine SIM-Karte, die mit Mobile ID kompatibel ist. 
{{</alert>}}

Die Kompatibilität Ihrer SIM-Karte wird auf Ihrem Mobile ID Dashboard angezeigt. Wenn Ihre SIM-Karte nicht kompatibel ist, müssen Sie eine neue SIM-Karte bei Ihrem Telefonanbieter bestellen.

&nbsp; 

<!-- 3eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Wenn Ihre SIM-Karte nicht kompatibel ist, wird die folgende Nachricht auf Ihrem Mobile ID Dashboard angezeigt.
{{<insertImage image="sim_incompatible_fr.png" description="Code SMS" class="edge max-w-90">}}  <!-- Image en français -->

</div>

<div class="right_col">
<!-- Second column content goes here -->
Wenn Ihre SIM-Karte kompatibel ist, wird die folgende Nachricht auf Ihrem Mobile ID Dashboard angezeigt.
{{<insertImage image="sim_compatible_fr.png" description="Code SMS" class="edge max-w-90">}}  <!-- Image en français -->
</div>

</div>

&nbsp;

Wenn Ihre SIM-Karte kompatibel ist, gehen Sie wie folgt vor: 

&nbsp;

<!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Klicken Sie auf "Aktivieren" im Feld "Mobile ID aktivieren".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="activer_mobile_id.png" description="activer MobileID" class="edge max-w-90">}}  <!-- Image en français -->
</div>

</div>

&nbsp;

<!-- 5eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Wählen Sie das Feld "SIM" und klicken Sie dann auf "Weiter".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_sim.png" description="Choix carte SIM" class="edge max-w-90">}}  <!-- Image en français -->
</div>

</div>

 &nbsp;

 <!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Akzeptieren Sie die Nutzungsbedingungen und klicken Sie auf "Weiter".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="cond_utilisation_fr.png" description="Conditions d'utilisation" class="edge max-w-90">}}  <!-- Image en français -->
</div>

</div>

 &nbsp;

  <!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Sie haben jetzt die Möglichkeit, eine Mobile ID wiederherzustellen, wenn Sie bereits eine hatten. Wenn dies nicht der Fall ist oder Sie Ihren Wiederherstellungscode nicht kennen, wählen Sie die Option "Ich möchte ohne die Wiederherstellungsoption fortfahren". Klicken Sie auf "Weiter" und bestätigen Sie Ihre Wahl durch erneutes Klicken auf "Weiter".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_recup.png" description="Possibilité récupération" class="edge max-w-90">}}  <!-- Image en français -->
</div>

</div>

 &nbsp;

Auf Ihrem Mobiltelefon wird sich ein Fenster öffnen, in dem Sie aufgefordert werden, ein sechsstelliges Passwort einzugeben. Dann wird ein neues Fenster geöffnet, in dem Sie das Passwort bestätigen müssen.

Sie sind fertig.

{{<alert color="warning">}}
Stellen Sie sicher, dass Sie Ihren Wiederherstellungscode an einem sicheren Ort notieren. Da die Überprüfung Ihrer Identität auf Ihrer Mobile ID basiert, ist es wichtig, dass Sie diese bei Bedarf wiederherstellen können. Dies ist notwendig, wenn Sie den PIN-Code vergessen haben oder die SIM-Karte ausgetauscht werden muss (z.B. bei Verlust des Mobiltelefons).
{{</alert>}}

## Hinzufügung der Mobile ID als Zweitfaktor

In diesem Schritt wird die Mobile ID dem CH-Login als starker Zweitfaktor hinzugefügt.
<!-- Wenn Sie bereits einen (schwachen) Zweitfaktor (mTAN) haben, wird empfohlen diesen zuerst zu entfernen. Klicken Sie dazu in der Kachel Mobile-Nummer (mTAN) auf Entfernen. Danach können Sie der oben erwähnten Anleitung folgen um die Mobile ID als (starken) Zweitfaktor zu registrieren. -->


&nbsp;

<!-- 1ere paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Loggen Sie sich mit Ihrem CH-LOGIN in Ihr <a href="https://www.myaccount.eiam.admin.ch/">Mein eIAM-Konto</a> ein und gehen Sie dann auf die Registerkarte "Login & Sicherheit". </p>

<p> Klicken Sie ganz unten auf der Seite auf "Zweitfaktor-Einstellungen ändern". </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="modif_parametres_de.png" description="modification paramètres" class="edge max-w-90">}} 
</div>

</div>

&nbsp; 

<!-- 2eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Aktivieren Sie das Kontrollkästchen "Erweiterte Sicherheitseinstellungen aktivieren" und klicken Sie dann auf "Schliessen».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="activation_param_de.png" description="Activation paramètres avancés" class="edge max-w-90">}} 
</div>

</div>

&nbsp; 

<!-- 3eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Zurück in der Registerkarte "Anmeldung und Sicherheit" haben Sie nun das Kästchen "Verifizieren Sie einen Zweitfaktor." zusätzlich. </p>

<p> Klicken Sie im Feld "Registrieren Sie einen Zweitfaktor für ein noch sichereres Anmelden" auf "Registrieren". </p>

</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="ajout_facteur_de.png" description="ajout second facteur" class="edge max-w-90">}} 
</div>

</div>

&nbsp; 

<!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Wählen Sie die Option Mobile ID und klicken Sie auf "Weiter". </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_mobileid_de.png" description="ajout second facteur" class="edge max-w-90">}} 
</div>

</div>

&nbsp; 

<!-- 5eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
{{<markdown>}}
Geben Sie den folgenden MIO-Code ein **16783** und klicken Sie auf "Speichern".
{{</markdown>}}
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="code_mio_de.png" description="ajout second facteur" class="edge max-w-90">}} 
</div>

</div>

&nbsp; 

<!-- 6eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Geben Sie Ihr Passwort ein und klicken Sie auf "Weiter".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="mot_de_passe_de.png" description="Mot de passe" class="edge max-w-90">}} 
</div>

</div>

&nbsp; 

<!-- 7eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Wählen Sie 3 Sicherheitsfragen aus, füllen Sie die Antworten aus und klicken Sie dann auf "Weiter".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="questions_secu_de.png" description="ajout questions sécurité" class="edge max-w-90">}} 
</div>

</div>

&nbsp;

<!-- 8eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Geben Sie Ihre Telefonnummer ein (die Nummer, die mit Ihrer Mobile ID verknüpft ist) und klicken Sie auf "Speichern".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="saisie_tel_all.png" description="ajout second facteur" class="edge max-w-90">}} 
</div>

</div>

&nbsp;

Es wird eine Nachricht angezeigt und Ihr Telefon wird Sie auffordern, die Verbindung durch die Eingabe Ihres Mobile ID-Passworts zu bestätigen. 

Sobald Sie dies getan haben, wird das Feld "Mobile ID" als Mittel zur Zwei-Faktor-Authentifizierung angezeigt.
{{<insertImage image="mobileid_present_de.png" description="ajout second facteur" class="edge max-w-90">}}
