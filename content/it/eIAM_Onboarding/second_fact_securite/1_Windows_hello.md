---
title: Utilizzo di Windows Hello
slug: windows_hello
description: "In questa pagina vi forniamo tutte le informazioni necessarie per utilizzare Windows Hello come secondo fattore di sicurezza."
keywords: []
weight: 10
type: docs
---

Potete trovare informazioni su Windows Hello [qui](https://support.microsoft.com/it-it/windows/accedi-al-tuo-account-microsoft-con-windows-hello-800a8c01-6b61-49f5-0660-c2159bea4d84).

## Windows Hello aggiunto come secondo fattore
<!-- 1ere paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Accedere al proprio <a href="https://www.myaccount-r.eiam.admin.ch/">account eIAM</a> con il CH-LOGIN, quindi andare alla scheda "Accesso e sicurezza". </p>

<p> In fondo alla pagina, cliccate su "Modificare le impostazioni del secondo fattore". </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="modif_parametres_it.png" description="modification paramètres" class="edge max-w-90">}}    
</div>

</div>

&nbsp; 

<!-- 2eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Spuntare la casella "Abilita impostazioni avanzate di sicurezza" e fare clic su "Chiudi".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="activation_param_it.png" description="Activation paramètres avancés" class="edge max-w-90">}}     
</div>

</div>

&nbsp; 

<!-- 3eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Tornando alla scheda "Accesso e sicurezza", ora è presente anche la casella "Verificare un secondo fattore". </p>

<p> Nella casella "Registrare un secondo fattore per un accesso più sicuro", fare clic su "Registra". </p>

</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="ajout_facteur_it.png" description="ajout second facteur" class="edge max-w-90">}}           
</div>

</div>

&nbsp; 

<!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Scegliere l'opzione "Passkey (FIDO)" e fare clic su "Avanti".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_fido_it.png" class="edge max-w-90">}}
</div>

</div>

&nbsp; 

<!-- 6eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Immettere la password, quindi fare clic su "Avanti".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="fido_mdp_it.png" class="edge max-w-90">}}
</div>

</div>

&nbsp; 

<!-- 7eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Scegliere 3 domande di sicurezza, compilare le risposte e fare clic su "Avanti".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="questions_secu.png" description="ajout questions sécurité" class="edge max-w-90">}}         <!-- ATTENTION image en français -->
</div>

</div>


&nbsp;

<!-- 8eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Assegnare un nome alla chiave di accesso (FIDO), quindi fare clic su "Avanti".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="nom_fido_it.png" class="edge max-w-90">}}
</div>

</div>

<!-- 9eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Quindi fare clic su "Avvia".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="config_fido.png" class="edge max-w-90">}}
</div>

</div>

&nbsp;

Si aprirà una finestra sul computer, selezionate l'opzione "Windows Hello" e scegliete uno dei mezzi di identificazione (impronta digitale, riconoscimento facciale, password o codice PIN). Seguire i passaggi richiesti dal computer.

<!-- 
Les explications concernant l'enregistrement de la clé FIDO sur votre CH_LOGIN ne sont pas encore disponible. En attendant, vous pouvez vous réferer à [cette marche-à-suivre](https://help.eiam.swiss/?c=passkeys&l=fr). 

Les explications concernant l'identification vidéo pour la clé FIDO ne sont pas encore disponible. En attendant, vous pouvez vous réferer à [cette marche-à-suivre](https://help.eiam.swiss/index.php?c=h!vipspasskey&l=fr). 
-->

Una volta completati questi passaggi, la chiave FIDO apparirà come secondo fattore di sicurezza. È quindi possibile eseguire l'identificazione video della chiave FIDO. A tal fine, passare alla fase di identificazione video.

