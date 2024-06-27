---
title: Mobile ID
slug: mobile_id
description: "Sur cette page, nous vous donnons toutes les informations relatives à l'utilisation du Mobile ID comme second facteur de sécurité."
keywords: []
weight: 20
type: docs
---

{{<alert color="warning">}}
Nous vous demandons si possible d'utiliser le Windows Hello.
{{</alert>}}

{{<alert color="warning">}}
Le Mobile ID est un moyen d'authentification différent du SMS mTAN.
{{</alert>}}

Si vous ne pouvez pas utiliser le Windows Hello comme second facteur de sécurité, vous pouvez utiliser le Mobile ID. Pour l'utilisation de Mobile ID, il faut disposer d'une carte SIM compatible avec Mobile ID. Si votre carte SIM n'est pas compatible avec Mobile ID, elle doit être remplacée. Vous trouverez les informations pour la remplacer [ici](https://www.mobileid.ch/fr/commander-sim).

{{<alert color="info">}}
Mobile ID est un service uniquement compatible avec une carte SIM suisse pour le moment.  
{{</alert>}}

## Activation du Mobile ID

Suivez les étapes suivantes pour activer le Mobile ID.

<!-- 1ere paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Rendez vous sur le site de <a href="https://www.mobileid.ch/fr">Mobile ID</a> puis sélectionnez '"essayer maintenant"'. 
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="mobile_id_fr.png" description="MobileID" class="edge max-w-90">}}
</div>

</div>

&nbsp;

<!-- 2eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Saisissez votre numéro de téléphone. </p>

<p> Vous allez ensuite recevoir un code par SMS au numéro indiqué, saisissez le code reçu. </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="saisie_tel_fr.png" description="Code SMS" class="edge max-w-90">}}
</div>

</div>

&nbsp;

Vous êtes maintenant sur votre tableau de bord Mobile ID. 

L'étape suivante sera d'activer le Mobile ID. 

{{<alert color="warning">}}
Pour l'utilisation de la plateforme SpiGes, l'activation doit nécessairement se faire par la carte SIM (l'activation par l'application MobileID ne suffit pas). Pour cela, il vous faudra une carte SIM compatible avec Mobile ID. 
{{</alert>}}

La compatibilité de votre carte SIM s'affiche sur votre tableau de bord Mobile ID. Si votre carte SIM n'est pas compatible, il faudra commander une nouvelle carte SIM auprès de votre opérateur téléphonique.

&nbsp; 

<!-- 3eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Si votre carte SIM est incompatible, le message suivant s'affichera sur votre tableau de bord Mobile ID.
{{<insertImage image="sim_incompatible_fr.png" description="Code SMS" class="edge max-w-90">}}

</div>

<div class="right_col">
<!-- Second column content goes here -->
Si votre carte SIM est compatible, le message suivant s'affichera sur votre tableau de bord Mobile ID.
{{<insertImage image="sim_compatible_fr.png" description="Code SMS" class="edge max-w-90">}}
</div>

</div>

&nbsp;

Si votre carte SIM est compatible, voici les étapes à suivre: 

&nbsp;

<!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Cliquez sur "activer" dans la case "activer Mobile ID". 
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="activer_mobile_id.png" description="activer MobileID" class="edge max-w-90">}}
</div>

</div>

&nbsp;

<!-- 5eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Sélectionnez la case "SIM, puis cliquez sur "suivant".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_sim.png" description="Choix carte SIM" class="edge max-w-90">}}
</div>

</div>

 &nbsp;

 <!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Acceptez les conditions d'utilisations puis cliquez sur "suivant".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="cond_utilisation_fr.png" description="Conditions d'utilisation" class="edge max-w-90">}}
</div>

</div>

 &nbsp;

  <!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Vous avez maintenant la possibilité de restaurer un Mobile ID si vous en aviez déjà un. Si ce n’est pas le cas ou si vous ne connaissez pas votre code de restauration, choisissez l’option «Je voudrais continuer sans l’option de restauration». Cliquez sur «suivant», puis validez votre choix en cliquant à nouveau sur «suivant».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_recup.png" description="Possibilité récupération" class="edge max-w-90">}}
</div>

</div>

 &nbsp;

Sur votre téléphone portable, une fenêtre va s’ouvrir et va vous demander de saisir un mot de passe à 6 chiffres. Puis une nouvelle fenêtre va s’ouvrir pour que vous confirmiez le mot de passe. 

Vous avez terminé. 

{{<alert color="warning">}}
Assurez-vous de noter votre code de récupération dans un endroit sûr. Puisque la vérification de votre identité sera basée sur votre Mobile ID, il est important que vous puissiez le restaurer si besoin. Cela est nécessaire en cas d'oubli du code PIN ou de remplacement de la carte SIM (par exemple en cas de perte du téléphone portable). 
{{</alert>}}


## Ajout du MobileID comme second facteur de sécurité

Cette étape permet d'ajouter le Mobile ID au CH-Login en tant que second facteur fort.
<!-- 
Si vous avez déjà un second facteur (faible) (mTAN), il est recommandé de le supprimer d'abord. Pour ce faire, cliquez sur Supprimer dans l’encadré Numéro mobile (mTAN). Vous pouvez ensuite suivre les instructions mentionnées ci-dessus pour enregistrer l'ID mobile comme second facteur (fort).
-->
&nbsp;

<!-- 1ere paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Connectez vous à votre <a href="https://www.myaccount.eiam.admin.ch/">Mon compte eIAM</a> avec votre CH-LOGIN, puis rendez-vous dans l'onglet "Connexion et sécurité". </p>

<p> Tout en bas de la page, cliquez sur «Modifier les paramètres de l’authentification à deux facteurs». </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="modif_parametres_fr.png" description="modification paramètres" class="edge max-w-90">}}
</div>

</div>

&nbsp; 

<!-- 2eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Cochez la case «Activer les paramètres de sécurité avancés» puis cliquez sur «Fermer».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="activation_param.png" description="Activation paramètres avancés" class="edge max-w-90">}}
</div>

</div>

&nbsp; 

<!-- 3eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> De retour dans l’onglet «Connexion et sécurité», vous avez maintenant la case «Vérifier un second facteur» en plus. </p>

<p> Dans la case «Enregistrer un second facteur pour vous connecter de manière plus sécurisée.», cliquez sur «Enregistrer». </p>

</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="ajout_facteur_fr.png" description="ajout second facteur" class="edge max-w-90">}}
</div>

</div>

&nbsp; 

<!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Choisissez l'option Mobile ID et cliquez sur "Continuer". </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_mobileid.png" description="ajout second facteur" class="edge max-w-90">}}
</div>

</div>

&nbsp; 

<!-- 5eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
{{<markdown>}}
Saisissez le code MIO suivant: **16783**, puis cliquez sur "enregistrer".
{{</markdown>}}
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="code_mio.png" description="ajout second facteur" class="edge max-w-90">}}
</div>

</div>

&nbsp; 

<!-- 6eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Entrez votre mot de passe, puis cliquez sur "continuer".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="mot_de_passe.png" description="Mot de passe" class="edge max-w-90">}}
</div>

</div>

&nbsp; 

<!-- 7eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Choisissez 3 quesions de sécurité, remplissez leur réponse puis cliquez sur "continuer".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="questions_secu.png" description="ajout questions sécurité" class="edge max-w-90">}}
</div>

</div>

&nbsp;

<!-- 8eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Saisissez votre numéro de téléphone (celui lié à votre Mobile ID), puis cliquez sur «enregistrer».
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="saisie_tel.png" description="ajout second facteur" class="edge max-w-90">}}
</div>

</div>

&nbsp;

Un message va s’afficher et votre téléphone va vous notifier de confirmer la connexion par la saisie de votre mot de passe Mobile ID. 

Une fois cela terminé, la case «Mobile ID» s’affichera comme moyen d'authentification à deux facteurs.
{{<insertImage image="mobileid_present.png" description="ajout second facteur" class="edge max-w-90">}}