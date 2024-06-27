---
title: Secondo fattore di sicurezza
slug: second_fact
description: "In questo capitolo troverete tutte le possibilità che avete come secondo fattore di sicurezza."
keywords: []
weight: 20
type: docs
---

eIAM offre diversi fattori di sicurezza secondari, ma solo due di essi sono considerati forti (condizione necessaria per l'uso di SpiGes):  
1. La chiave d'accesso FIDO
    - Windows Hello
    - Chiave di sicurezza fisica (FIDO Token)
2. MobileID

{{<alert color="warning">}}
{{<markdown>}}
**Non** selezionare un secondo fattore diverso da quelli suggeriti sopra. Se si seleziona un altro secondo fattore, l'applicazione SpiGes non sarà accessibile.
{{</markdown>}}
{{</alert>}}

L'ideale sarebbe utilizzare Windows Hello sul computer di lavoro.          
Se ciò non è possibile, utilizzare MobileID o una chiave di sicurezza fisica. 

**Tutti gli accessi alla piattaforma SpiGes devono avvenire da un computer professionale.**

Gli utenti dei Cantoni **che hanno già un Vasco Digipass verificato** (per SOMED/Spitex) devono per il momento utilizzarlo come secondo fattore per gli SpiGes. 

Le persone che **non hanno un Vasco Digipass** devono utilizzare i mezzi che presentiamo (Passkey FIDO o Mobile ID).