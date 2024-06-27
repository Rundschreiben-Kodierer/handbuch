---
title: Trattamenti
slug: behandlungen
description: " "
weight: 50
type: docs
keywords: []
---

{{<faqBlock>}}
Aprire tutte le domande: {{<collapsibleGroupCommand groupId="behandlungen">}}

{{<numberedList>}}
{{<listItem>}}
Variabile «behandlung_id»: ci sono raccomandazioni per la sequenza da applicare in psichiatria? In particolare, gli item HoNOS, forniti nel quadro della CHOP, non sono specifici alla diagnosi o al trattamento.
{{<collapsibleBlock groupId="behandlungen">}}
{{<markdown>}}

- Conformemente alla descrizione delle variabili vale quanto segue:
Numero univoco progressivo del trattamento.
1 = Trattamento 1
2 = Trattamento 2
3 = Trattamento 3
(…) ecc. -> illimitato
Per la sequenza dei trattamenti si raccomanda di attenersi ai criteri seguenti:

1. Procedure per il trattamento della diagnosi principale
2. Procedure per il trattamento delle diagnosi secondarie
3. Procedure per la determinazione della diagnosi principale
4. Procedure per la determinazione delle diagnosi secondarie
5. Altre procedure

- Raccomandiamo una numerazione cronologica per gli item HoNOS (misurazioni HoNOS temporalmente remote = ID bassi, misurazioni HoNOS recenti = ID alti).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Siamo un po’ preoccupati che questi dati non vengano registrati in modo completo, soprattutto nei primi giorni, e che ciò renda necessari ulteriori aggiustamenti supplementari. Vorremmo quindi definire il campo come obbligatorio per i codici CHOP interessati. Esiste una classificazione per il catalogo CHOP per quanto riguarda i codici considerati operativi o interventistici?
{{<collapsibleBlock groupId="behandlungen">}}
L’UST è consapevole che con l’introduzione del nuovo modo di inserire i dati, all’inizio questi saranno incompleti. Dopo la consueta fase di consolidamento, si capirà quali precisazioni saranno necessarie. Non è possibile determinare chiaramente per ogni codice CHOP se richiede o meno l’indicazione dell’ora. Ci sono altre caratteristiche che sono decisive in questo caso: se il trattamento è legato all’utilizzo di una sala operatoria o di un laboratorio di cateterismo cardiaco.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Operatori: Qui c'è un problema di interpretazione delle specifiche nel file XML. La descrizione della variabile afferma che si possono contare al massimo due operatori per ogni operazione. Nella panoramica, tuttavia, l'attributo non indica se questo può essere esportato più volte.
{{<insertImage image="Image1.jpg" class="edge max-w-90">}}
{{<collapsibleBlock groupId="behandlungen">}}
Quanti chirurghi possono essere conteggiati per un'operazione è una questione concettuale e può variare da cantone a cantone (di solito 2, ma è una linea guida!). Tecnicamente, possono essere conteggiati più chirurghi.
{{<insertImage image="Image2.png" class="edge max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}
