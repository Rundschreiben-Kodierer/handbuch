---
title: Mobile ID
slug: mobile_id
description: "In questa pagina vi forniamo tutte le informazioni necessarie per utilizzare il Mobile ID come secondo fattore di sicurezza."
keywords: []
weight: 20
type: docs
---

{{<alert color="warning">}}
Se possibile, vi chiediamo di utilizzare Windows Hello.
{{</alert>}}

{{<alert color="warning">}}
Il Mobile ID è un metodo di autenticazione diverso dall'SMS mTAN.
{{</alert>}}

Se non è possibile utilizzare Windows Hello come secondo fattore di sicurezza, è possibile utilizzare Mobile ID. Per utilizzare Mobile ID, è necessaria una scheda SIM compatibile con Mobile ID. Se la scheda SIM non è compatibile con Mobile ID, deve essere sostituita. È possibile trovare informazioni su come sostituirlo [qui](https://www.mobileid.ch/it/comessa-sim).

{{<alert color="info">}}
Mobile ID è un servizio attualmente compatibile solo con una carta SIM svizzera.
{{</alert>}}

## Attivazione del Mobile ID

Per attivare Mobile ID, procedere come segue.

<!-- 1ere paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Andate sul sito web <a href="https://www.mobileid.ch/it">MobileID</a> e selezionate "Prova subito". 
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="mobile_id_it.png" description="MobileID" class="edge max-w-90">}}  
</div>

</div>

&nbsp;

<!-- 2eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
<p> Inserire il numero di telefono. </p>

<p> Riceverete quindi un codice via SMS al numero indicato, inserite il codice ricevuto. </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="saisie_tel_it.png" description="Code SMS" class="edge max-w-90">}}    
</div>

</div>

&nbsp;

Ora siete sulla vostra dashboard Mobile ID. 

Il passo successivo è l'attivazione di Mobile ID. 

{{<alert color="warning">}}
Per utilizzare la piattaforma SpiGes, l'attivazione deve avvenire tramite la carta SIM (l'attivazione tramite l'applicazione MobileID non è sufficiente). È necessaria una carta SIM compatibile con Mobile ID. 
{{</alert>}}

La compatibilità della carta SIM è visualizzata sul cruscotto del Mobile ID. Se la vostra carta SIM non è compatibile, dovrete ordinare una nuova carta SIM presso il vostro operatore telefonico.

&nbsp; 

<!-- 3eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Se la carta SIM è incompatibile, sulla dashboard di Mobile ID viene visualizzato il seguente messaggio.
{{<insertImage image="sim_incompatible_fr.png" description="Code SMS" class="edge max-w-90">}}    <!-- ATTENTION image en français -->

</div>

<div class="right_col">
<!-- Second column content goes here -->
Se la carta SIM è compatibile, sulla dashboard di Mobile ID viene visualizzato il seguente messaggio.
{{<insertImage image="sim_compatible_fr.png" description="Code SMS" class="edge max-w-90">}}      <!-- ATTENTION image en français -->
</div>

</div>

&nbsp;

Se la scheda SIM è compatibile, ecco i passaggi da seguire: 

&nbsp;

<!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Fare clic su "attiva" nel riquadro "attiva ID mobile". 
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="activer_mobile_id.png" description="activer MobileID" class="edge max-w-90">}}    <!-- ATTENTION image en français -->
</div>

</div>

&nbsp;

<!-- 5eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Selezionare la casella "SIM", quindi fare clic su "Avanti".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_sim.png" description="Choix carte SIM" class="edge max-w-90">}}     <!-- ATTENTION image en français -->
</div>

</div>

 &nbsp;

 <!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Accettare i termini e le condizioni, quindi fare clic su "Avanti".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="cond_utilisation_fr.png" description="Conditions d'utilisation" class="edge max-w-90">}}      <!-- ATTENTION image en français -->
</div>

</div>

 &nbsp;

  <!-- 4eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Ora avete la possibilità di ripristinare un Mobile ID se ne avevate già uno. In caso contrario o se non si conosce il codice di ripristino, scegliere l'opzione "Desidero continuare senza l'opzione di ripristino". Fare clic su "Avanti", quindi confermare la scelta facendo nuovamente clic su "Avanti".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_recup.png" description="Possibilité récupération" class="edge max-w-90">}}      <!-- ATTENTION image en français -->
</div>

</div>

 &nbsp;

Sul cellulare si apre una finestra che chiede di inserire una password di 6 cifre. Si aprirà quindi una nuova finestra che chiederà di confermare la password. 

Il gioco è fatto. 

{{<alert color="warning">}}
Assicuratevi di annotare il codice di recupero in un luogo sicuro. Poiché la verifica della vostra identità si baserà sul vostro Mobile ID, è importante che possiate ripristinarlo se necessario. Questo è necessario se si dimentica il codice PIN o se si deve sostituire la carta SIM (ad esempio, se si perde il cellulare). 
{{</alert>}}


## Aggiunta del Mobile ID come secondo fattore

Questo passaggio aggiunge il Mobile ID al CH-Login come secondo fattore forte.

<!-- Se avete già un secondo fattore (debole) (mTAN), vi consigliamo di eliminarlo prima. A tal fine, fate clic su Elimina nella casella Numero di cellulare (mTAN). È quindi possibile seguire le istruzioni di cui sopra per registrare l'ID cellulare come secondo fattore (forte). -->


&nbsp;

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
<p> Scegliere l'opzione ID cellulare e fare clic su "Continua". </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="choix_mobileid_it.png" description="ajout second facteur" class="edge max-w-90">}}       
</div>

</div>

&nbsp;

<!-- 5eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
{{<markdown>}}
Immettere il seguente codice MIO: **16783**, quindi fare clic su "Salva".
{{</markdown>}}
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="code_mio_it.png" description="ajout second facteur" class="edge max-w-90">}} 
</div>

</div>

&nbsp; 

<!-- 6eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Immettere la password, quindi fare clic su "continua".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="mot_de_passe.png" description="Mot de passe" class="edge max-w-90">}}           <!-- ATTENTION image en français -->
</div>

</div>

&nbsp; 

<!-- 7eme paire de colonnes -->

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
Scegliere 3 domande di sicurezza, compilare le risposte e fare clic su "continua".
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
Inserite il vostro numero di telefono (quello collegato al vostro Mobile ID), quindi fate clic su "Salva".
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="saisie_tel.png" description="ajout second facteur" class="edge max-w-90">}}         <!-- ATTENTION image en français -->
</div>

</div>

&nbsp;

Verrà visualizzato un messaggio e il telefono chiederà di confermare la connessione inserendo la password Mobile ID. 

Una volta effettuata questa operazione, apparirà la casella "Mobile ID" come metodo di autenticazione a due fattori. 

{{<insertImage image="mobileid_present.png" description="ajout second facteur" class="edge max-w-90">}}           <!-- ATTENTION image en français -->
