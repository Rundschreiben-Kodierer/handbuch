---
title: Identifiants 
slug: identifikatoren
description: " "
weight: 20
type: docs
keywords: []
---

{{<faqBlock>}}
Aprire tutte le domande: {{<collapsibleGroupCommand groupId="identifikatoren">}}

{{<numberedList>}}
{{<listItem>}}
Il NAVS è un campo obbligatorio. Tuttavia, ci saranno casi senza numero AVS. Dove è descritto cosa occorre indicare nella variabile in questo caso?
{{<collapsibleBlock groupId="identifikatoren">}}
La questione è ancora aperta. Nel set di dati è riportato: «Nota Bene: sono ancora in corso chiarimenti riguardo alle persone che non possono avere un numero AVS (v. anche la colonna "Da indicare per")». A breve termine, in questo caso si prevede di lasciare la variabile vuota o di indicare un numero dummy. Tuttavia, alcuni Cantoni confinanti con Paesi terzi si sono opposti con forza a questa soluzione, motivo per cui la questione sarà chiarita in modo più dettagliato nel lungo periodo.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Per la rilevazione dei dati infatti bisognerebbe utilizzare il NAVS. Il NAVS, attraverso i partner tariffari, sarà visibile anche alle casse malati?
{{<collapsibleBlock groupId="identifikatoren">}}
Al momento della trasmissione dei dati, gli identificatori e i dati vengono inviati separatamente. Il canale dei dati è criptato. Per il controllo dei NAVS viene utilizzato il «sistema di validazione UST NAVS». Una volta crittografato, il NAVS viene salvato nella banca dati sicura degli identificatori. Durante l’elaborazione dei dati sulla piattaforma, quindi, il NAVS è pseudonimizzato e non è salvato insieme al set di dati delle prestazioni. Il NAVS può essere trasmesso agli utenti dei dati solo in forma criptata. Dal momento che questi utenti dei dati non ne conoscono la chiave, per loro il NAVS è anonimizzato. Non è possibile risalire al numero originale.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Il Cantone ha accesso al file degli ID delle forniture?
{{<collapsibleBlock groupId="identifikatoren">}}
Durante la rilevazione il Cantone può esportare dati a scopi di plausibilizzazione; in questa fase il NAVS sarà pseudonimizzato.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}