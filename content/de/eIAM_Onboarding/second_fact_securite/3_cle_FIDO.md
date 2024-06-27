---
title: FIDO Token
slug: FIDO_token
description: "Auf dieser Seite geben wir Ihnen alle Informationen über die Verwendung von FIDO Passkeys als zweiten Sicherheitsfaktor."
keywords: []
weight: 30
type: docs
---

Wenn Sie Windows Hello oder die Mobile ID nicht verwenden können, können Sie auch einen physischen FIDO-Sicherheitsschlüssel als starken Zweitsicherheitsfaktor verwenden.  

{{<alert color="warning">}}
Wir bitten Sie, wenn möglich, in erster Priorität Windows Hello und in zweiter Instanz die Mobile ID zu verwenden. Die Anschaffung eines FIDO-Schlüssels geht auf Ihre Kosten. 
{{</alert>}}

FIDO Passkeys sind Datenträger, z. B. in Form eines USB-Sticks welche kryptografisches Material enthalten.

eIAM unterstützt folgende FIDO Passkeys Typen für das CH-LOGIN.
- YubiKey 5 FIPS Series with NFC
- YubiKey 5 Series
- YubiKey 5 Series with NFC
- Security Key by Yubico with NFC
- Feitian BioPass FIDO2 Authenticator

##  Speichern eines KEY FIDO auf Ihrem CH_LOGIN

<!-- 1ere paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Loggen Sie sich mit Ihrem CH-LOGIN in Ihr <a href="https://www.myaccount.eiam.admin.ch/">Mein eIAM-Konto</a> ein und gehen Sie dann auf die Registerkarte "Login & Sicherheit". </p>

<p> Klicken Sie ganz unten auf der Seite auf "Zweitfaktor-Einstellungen ändern". </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="modif_parametres_de.png" class="edge max-w-90">}} 
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
Wählen Sie die Option "Passkey (FIDO)" und klicken Sie auf "Weiter".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_fido_de.png" class="edge max-w-90">}}
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
{{<insertImage image="fido_mdp_de.png" class="edge max-w-90">}}
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
{{<insertImage image="questions_secu_de.png" class="edge max-w-90">}} 
</div>

</div>

&nbsp;

<!-- 8eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Geben Sie Ihrem Passkey (FIDO) einen Namen und klicken Sie dann auf "Weiter".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="nom_fido_de.png" class="edge max-w-90">}}
</div>

</div>

&nbsp;

<!-- 9eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Stecken Sie Ihren FIDO-Schlüssel in Ihren Computer und klicken Sie dann auf "Start". 
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="config_fido.png" class="edge max-w-90">}}
</div>

</div>

&nbsp;
 
Auf Ihrem Computer wird ein Fenster geöffnet, wählen Sie aus den angebotenen Optionen "Sicherheitsschlüssel". 

Wenn Sie Ihren FIDO Passkey zum ersten Mal verwenden, müssen Sie ihn konfigurieren. Klicken Sie dazu auf "ok" und legen Sie dann einen PIN-Code für Ihren FIDO Passkey fest. 

Drücken Sie schließlich auf die Taste auf Ihrem FIDO Passkey (je nach Schlüsselmodell kann es sein, dass Sie den Schlüssel nur berühren müssen). 

<!-- 
Die Erläuterungen zum Speichern des FIDO Passkeys in Ihrer CH_LOGIN sind noch nicht verfügbar. In der Zwischenzeit können Sie sich auf [diese Anleitung](https://help.eiam.swiss/?c=passkeys&l=de) beziehen.
 

Die Erläuterungen zur Videoidentifikation für den FIDO Passkeys sind noch nicht verfügbar. In der Zwischenzeit können Sie sich auf [diese Anleitung](https://help.eiam.swiss/index.php?c=h!vipspasskey&l=de) beziehen.
-->

Nachdem Sie Ihren FIDO-Schlüssel als zweiten starken Faktor Ihrer CH-LOGIN registriert haben, können Sie als Nächstes die Videoidentifikation für Ihren FIDO-Schlüssel durchführen. Fahren Sie dazu mit dem Schritt Videoidentifikation fort.
