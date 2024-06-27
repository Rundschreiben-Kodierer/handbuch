---
title: Clé FIDO
slug: FIDO_token
description: "Sur cette page, nous vous donnons toutes les informations relatives à l'utilisation de clé de sécurité physique FIDO comme second facteur de sécurité."
keywords: []
weight: 30
type: docs
---

Si vous ne pouvez pas utiliser le Windows Hello ou le Mobile ID, vous pouvez également utiliser une clé de sécurité physique FIDO comme second facteur de sécurité fort. 

{{<alert color="warning">}}
Nous vous demandons si possible d'utiliser en priorité le Windows Hello et en deuxième lieu le Mobile ID. L'aquisition d'une clé FIDO est à vos frais. 
{{</alert>}}

Les jetons FIDO sont des supports de données qui peuvent prendre la forme d'une clé USB et qui contiennent du matériel cryptographique.

eIAM supporte les types de clé FIDO suivants pour le CH-LOGIN:
- YubiKey 5 FIPS Series with NFC
- YubiKey 5 Series
- YubiKey 5 Series with NFC
- Security Key par Yubico avec NFC
- Feitian BioPass FIDO2 Authenticator

## Enregistrement d'une clé FIDO sur votre CH_LOGIN

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
Choisissez l'option "Passkey (FIDO)" et cliquez sur "Continuer".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_fido_fr.png" class="edge max-w-90">}}
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
{{<insertImage image="fido_mdp_fr.png" class="edge max-w-90">}}
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
Nommez votre passkey (FIDO), puis cliquez sur "continuer".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="nom_fido_fr.png" class="edge max-w-90">}}
</div>

</div>

&nbsp;

<!-- 9eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Insérez votre clé FIDO dans votre ordinateur, puis cliquez ensuite sur "Démarer". 
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="config_fido.png" class="edge max-w-90">}}
</div>

</div>

&nbsp;

Une fenêtre va s'ouvrir sur votre ordinateur, choisissez "clé de sécurité" dans les options proposées. 

Si cela est la première fois que vous utilisez votre passkey FIDO, il faudra la configurer. Pour cela, veuillez cliquer sur "ok" puis définir un code PIN pour votre passkey FIDO. 

Pour finir appuyez sur le bouton sur votre passkey FIDO (selon les modèles de clé, il se peut que l'action à effectuer soit simplement toucher la clé). 

<!-- 
Les explications concernant l'enregistrement de la clé FIDO sur votre CH_LOGIN ne sont pas encore disponible. En attendant, vous pouvez vous réferer à [cette marche-à-suivre](https://help.eiam.swiss/?c=passkeys&l=fr). 

Les explications concernant l'identification vidéo pour la clé FIDO ne sont pas encore disponible. En attendant, vous pouvez vous réferer à [cette marche-à-suivre](https://help.eiam.swiss/index.php?c=h!vipspasskey&l=fr). 
-->

Une fois votre clé FIDO enregistrée comme second facteur fort de votre CH-LOGIN, vous pouvez ensuite effectuer l'identification vidéo pour votre clé FIDO. Pour cela, passez à l'étape de l'identification vidéo.

