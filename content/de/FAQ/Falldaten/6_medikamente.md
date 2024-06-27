---
title: Medikamente 
slug: medikamente
description: " "
weight: 60
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="medikamente">}}

{{<numberedList>}}
{{<listItem>}}
Variable «medi_id»: Die Leistungsnummern können bei unseren Kunden alphanumerisch sein, die Variable ist nur numerisch vorgesehen. Wäre es hier auch möglich, den Pharmacode oder den GTIN zu exportieren?
{{<collapsibleBlock groupId="medikamente">}}
Diese Variable musste aus rein technischen Gründen hinzugefügt werden (XML Struktur) und stellt eine eindeutige Zeilennummer der thematischen Tabelle «Medikamente» dar. Solange die Variable eindeutig und vollständig ausgefüllt wird, wären theoretisch auch Pharmacode oder GTIN als Angabe möglich. Das BFS bezweifelt jedoch, ob diese Bedingungen für restlos alle Medikamente eingehalten werden könnten. Für gewisse liegen diese Infos einfach noch nicht vor.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}