---
title: FIDO Key
slug: FIDO_token
description: "In questa pagina vi forniamo tutte le informazioni necessarie per utilizzare una FIDO key come secondo fattore di sicurezza."
keywords: []
weight: 30
type: docs
---

Se non potete usare Windows Hello o Mobile ID, potete anche usare una chiave di sicurezza fisica FIDO come secondo fattore di sicurezza forte. 

{{<alert color="warning">}}
Se possibile, vi chiediamo di utilizzare prima Windows Hello e poi Mobile ID. È necessario acquistare una chiave FIDO a proprie spese. 
{{</alert>}}

I token FIDO sono supporti di dati che possono assumere la forma di una chiave USB e contenere materiale crittografico.

eIAM supporta i seguenti tipi di token FIDO per CH-LOGIN:
- YubiKey Serie 5 FIPS con NFC
- Serie YubiKey 5
- YubiKey Serie 5 con NFC
- Chiave di sicurezza di Yubico con NFC
- Autenticatore Feitian BioPass FIDO2

## Registrazione di una key FIDO sul proprio CH_LOGIN

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

&nbsp;

<!-- 9eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Inserire la chiave FIDO nel computer, quindi fare clic su "Start". 
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="config_fido.png" class="edge max-w-90">}}
</div>

</div>

&nbsp;


Inserire la chiave FIDO nel computer, quindi scegliere "chiave di sicurezza" dalle opzioni. 

Se è la prima volta che si utilizza la chiave FIDO, è necessario configurarla. A tal fine, fare clic su "ok" e definire un codice PIN per la chiave FIDO. 

Infine, premere il pulsante della chiave FIDO (a seconda del modello di chiave, potrebbe essere sufficiente toccare la chiave). 

<!-- 

Le spiegazioni su come registrare la chiave FIDO sul proprio CH_LOGIN non sono ancora disponibili. Nel frattempo, è possibile fare riferimento a [queste istruzioni](https://help.eiam.swiss/?c=passkeys&l=fr). 

Una volta che la chiave FIDO è stata registrata come secondo fattore forte del CH-LOGIN, è possibile eseguire l'identificazione video della chiave FIDO. 

Le spiegazioni sull'identificazione video della chiave FIDO non sono ancora disponibili. Nel frattempo, è possibile consultare [queste istruzioni](https://help.eiam.swiss/index.php?c=h!vipspasskey&l=en). 

-->

Una volta che la chiave FIDO è stata registrata come secondo fattore forte del CH-LOGIN, è possibile effettuare l'identificazione video della chiave FIDO. A tal fine, passare alla fase di identificazione video.


