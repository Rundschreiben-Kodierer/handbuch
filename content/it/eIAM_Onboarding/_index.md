---
title: Onboarding eIAM
slug: onboarding
description: 'Questo capitolo contiene tutte le informazioni necessarie per collegarsi alla piattaforma SpiGes.'
keywords: []
weight: 20
type: docs
---

In questo capitolo troverete tutti i passaggi da seguire per creare un profilo verificato che vi permetterà di connettervi alla piattaforma SpiGes.

Per creare un CH-login con un secondo fattore forte e un'identità verificata per l'utilizzo della piattaforma SpiGes, sono necessari i seguenti passaggi:

1. Creare un login CH. (con indirizzo e-mail professionale)
2. Aggiunta di un secondo forte fattore di sicurezza a CH-Login.
3. Verificare l'identità del secondo forte fattore.
4. A bordo del login CH stabilito con SpiGes.

Questi passaggi sono spiegati nelle pagine seguenti. Se si dispone già di un CH-Login o di un Mobile ID, non è necessario crearne uno nuovo e si può saltare il passaggio corrispondente. Tuttavia, verificate che il vostro CH-Login o Mobile ID sia funzionante.

Vi consigliamo di leggere queste pagine di istruzioni prima di provare a configurare il vostro nuovo accesso sicuro.

## Come funziona eIAM

eIAM è il sistema centrale di accesso e autorizzazione alle applicazioni web dell'Amministrazione federale. In parole povere, eIAM è l'infrastruttura di accesso centralizzata della Confederazione. Il suo scopo è quello di evitare la creazione di una procedura specifica per ogni applicazione. Questa centralizzazione consente di risparmiare denaro e di utilizzare gli stessi dati di accesso per tutte le applicazioni.
Ogni utente che accede all'applicazione SpiGes viene automaticamente reindirizzato al portale eIAM per la procedura di autenticazione. Il sistema chiederà quindi all'utente di convalidare la connessione sul proprio telefono cellulare per verificare che si tratti effettivamente della persona giusta che sta cercando di connettersi.  

{{<alert color="warning">}}
Poiché l'identità dell'utente deve essere verificata, gli account dell'applicazione sono personali. Lo stesso account non può essere utilizzato da più persone.
{{</alert>}}

## Struttura delle unità eIAM

I diversi utenti della piattaforma SpiGes sono organizzati come segue:

- Cantone
    - Aziende
        - Siti ospedalieri

Un cantone contiene una o più aziende, che a loro volta contengono uno o più siti ospedalieri.  

{{<alert color="warning">}}
In alcuni casi, il cantone geografico di un sito e il cantone amministrativo dell'azienda non coincidono.
{{</alert>}}

Per esempio:

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
{{<numberedList>}}
{{<listItem>}}
In questa colonna si vede l'EntID a livello di azienda e il numero Bur a livello di sito ospedaliero.
{{</listItem>}}

{{<listItem>}}
In questa colonna, si vede il cantone "amministrativo" dell'azienda/sito ospedaliero.
{{</listItem>}}

{{<listItem>}}
In questa colonna, si vede il cantone geografico dell'azienda/sito ospedaliero.
{{</listItem>}}
{{</numberedList>}}

<p> Si può notare che il cantone amministrativo e il cantone geografico del sito 1 non sono gli stessi.  </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="Visu_entreprise.png" class="edge max-w-90">}}
</div>

</div>

&nbsp;
