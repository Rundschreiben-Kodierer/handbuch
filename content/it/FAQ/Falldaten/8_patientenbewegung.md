---
title: Trasferimento pazienti 
slug: patientenbewegung
description: " "
weight: 80
type: docs
keywords: []
---

{{<faqBlock>}}
Aprire tutte le domande: {{<collapsibleGroupCommand groupId="patientenbewegung">}}

{{<numberedList>}}
{{<listItem>}}
Anche l’ammissione e la dimissione contano come un episodio?
{{<collapsibleBlock groupId="patientenbewegung">}}
L’ammissione e la dimissione sono indicate come prima nel campo «data di ammissione» e «data di dimissione». Se il caso non è stato trasferito, non viene registrato alcun episodio. Se però si dovesse arrivare a un trasferimento (p. es. una dimissione intermedia) quale episodio 1 varrebbe il periodo dalla data di ammissione a quella della dimissione intermedia. L’episodio 2 inizia con la dimissione intermedia e termina con la riammissione. L’episodio 3 inizia con la riammissione e termina con il trasferimento successivo (p. es. le vacanze). Così facendo, per uno stesso caso si possono avere diversi episodi (v. illustrazione). L’ultimo episodio (9) si conclude con la data di dimissione. Gli episodi sono gli intervalli temporali prima e dopo eventi riguardanti un caso, quali: cambio di sede, dimissioni intermedie / riammissioni, trattamenti ambulatoriali esterni, congedi e uscite di prova.
{{<insertImage image="Image3_it.jpg" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Un caso che cambia sede viene gestito in entrambe le sedi?
{{<collapsibleBlock groupId="patientenbewegung">}}
No, ogni caso viene gestito solo nella sede principale, anche se viene trasferito da una sede all’altra all’interno di un ospedale (BURGESV). Se un paziente viene trasferito in un altro ospedale (BURGESV), è necessario aprire un nuovo caso
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variabili "re-entry_stay" e "reason_re-entry": perché queste voci possono essere inserite solo per i casi A se tutte le voci degli episodi sono destinate ai casi ABC?
{{<collapsibleBlock groupId="patientenbewegung">}}
Da chiarimenti con SwissDRG AG è emerso che le due variabili "re_admission_stay" e "reason_re_admission" possono essere specificate per i casi statistici ABC. La descrizione delle variabili 1.4 ne terrà conto.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Episodio_id: riteniamo che per la nostra clinica non sia necessario differenziare gli episodi per i casi di ricovero, in quanto non registriamo alcun cambiamento di sede all'interno dell'ospedale. Abbiamo capito bene?
{{<collapsibleBlock groupId="patientenbewegung">}}
Questa ipotesi si applica agli episodi dovuti a cambiamenti di sede. Tuttavia, devono essere registrati gli episodi dovuti a uscite/rientri intermedi, vacanze, test da sforzo o trattamenti ambulatoriali fuori sede.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Abbiamo capito bene, ad esempio che l'ingresso al trattamento ambulatoriale fuori casa (vedi figura sotto) è già un episodio? Quindi abbiamo sempre un episode_type="1" tra vacanze, test da sforzo e trattamento ambulatoriale?
{{<collapsibleBlock groupId="patientenbewegung">}}
Corretto
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Nell'esempio (vedi figura sotto), non ci sono cambi di sede all'interno dello stesso ospedale. Abbiamo capito bene che l'ubicazione del numero BUR dell'ospedale deve essere sempre specificata per il tipo_di_episodio="1"?
{{<collapsibleBlock groupId="patientenbewegung">}}
Corretto
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Per quanto ne sappiamo, l'orario di rientro dal trattamento ambulatoriale non è documentato. Tuttavia, potrebbe essere registrato nei sistemi informativi degli ospedali. Queste informazioni sono obbligatorie?
{{<collapsibleBlock groupId="patientenbewegung">}}
Sì, la data e le ore devono essere fornite per tutti gli episodi, sia all'inizio che alla fine. Se la fine di un trattamento ambulatoriale extraospedaliero non è registrata, si consiglia di aggiungere questa informazione. Se ciò non è possibile (in tempi brevi), si consiglia di utilizzare una durata standard per il trattamento ambulatoriale fuori casa.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Il BURNR dell'ospedale fuori città è facoltativo, giusto? 
{{<collapsibleBlock groupId="patientenbewegung">}}
Sì, b n caso di trattamento ambulatoriale esterno, è possibile indicare il numero di BUR della sede di cura, se noto.
{{<insertImage image="Image4.jpg" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}