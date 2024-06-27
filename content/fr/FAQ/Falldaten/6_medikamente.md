---
title: Médicaments 
slug: medikamente
description: " "
weight: 60
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="medikamente">}}

{{<numberedList>}}
{{<listItem>}}
Variable «medi_id»: Les numéros de prestations peuvent être alphanumériques chez nos clients, la variable n'est prévue que sous forme numérique. Serait-il également possible d'exporter ici le pharmacode ou le GTIN ?
{{<collapsibleBlock groupId="medikamente">}}
Cette variable a dû être ajoutée pour des raisons purement techniques (structure XML) et représente un numéro de ligne unique du tableau thématique "Médicaments". Tant que la variable est remplie de manière univoque et complète, il serait théoriquement possible d'indiquer un pharmacode ou un GTIN. L'OFS doute toutefois que ces conditions puissent être respectées pour tous les médicaments. Pour certains, ces informations ne sont tout simplement pas encore disponibles.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}