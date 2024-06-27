---
title: Unità d’imputazione «caso»
slug: kostentraeger_fall
description: " "
weight: 90
type: docs
keywords: []
---

{{<faqBlock>}}
Aprire tutte le domande: {{<collapsibleGroupCommand groupId="kostentraeger">}}

{{<numberedList>}}
{{<listItem>}}
Come devono essere presentati i costi dei casi C medico-legali (vari anni di degenza)? Per il caso intero (intera durata di degenza) o solo per i costi del rispettivo anno solare e il resto tramite delimitazioni?
{{<collapsibleBlock groupId="kostentraeger">}}
Per i casi B e C, vanno indicati i costi per l’anno solare; per i casi A, i costi per l’intera durata del caso. Anche per le unità di imputazione ambulatoriali e quelle non legate a un caso, i costi si riferiscono all’anno solare. Si veda anche la colonna «Riferimento temporale» nell’elenco delle variabili. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
I casi di lungodegenza possono essere forniti in SpiGes con KTR tipo 101=lungodegenza come unità di costo indipendente dal caso, anche se il SOMED per l'assistenza di lungodegenza viene registrato in parallelo?
{{<collapsibleBlock groupId="kostentraeger">}}
Se l'organizzazione compila il SOMED, questi costi devono essere registrati in SpiGes tramite il tipo KTR 101. Al contrario, i singoli casi di lunga durata in cure acute e riabilitazione (pazienti in attesa) devono essere mappati come tipo KTR 1 (=caso) e la corrispondente tariffa 7 (=tassa di cura). In questo modo si garantisce la correttezza dell'ITAR_K e delle statistiche.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Supplementi per i costi di utilizzo degli impianti (ANK) per i costi diretti: secondo REKOLE® , i supplementi ANK possono essere registrati 
per i costi diretti (requisiti medici 400 e 401). Per queste variabili KTR, tuttavia, non esistono variabili ANK separate in SpiGes e nei dataset dei costi SwissDRG, a differenza delle spese generali, sulle quali è possibile registrare i costi di utilizzo degli impianti secondo REKOLE. In ITAR_K, i conti 400 e 401 devono essere specificati senza supplementi ANK. Cosa si deve fare con questi supplementi ANK sui conti 400 e 401?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}
- Le maggiorazioni dell'ANK non devono essere registrate nei conti 400 e 401. Tuttavia, devono essere inclusi nelle variabili totali dell'ANK (ktr_44_vkl / ktr_44_rekole). 
- Con la versione 1.4 dell'interfaccia, la variabile ktr_44_rekole viene convertita da variabile calcolata a variabile raccolta (e aggiunta all'XML), in modo da poter raccogliere un totale ANK REKOLE diverso dalla somma delle singole variabili KTR. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}