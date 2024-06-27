---
title: Kostenträger Fall 
slug: kostentraeger_fall
description: " "
weight: 90
type: docs
keywords: []
---

{{<faqBlock>}}
Um alle Fragen zu öffnen: {{<collapsibleGroupCommand groupId="kostentraeger">}}

{{<numberedList>}}
{{<listItem>}}
Wie sollen die Kosten für forensische C-Fälle (mehrere Jahre Liegedauer) eingereicht werden? Für den ganzen Fall (ganze Liegedauer) oder nur die Kosten für das jeweilige Kalenderjahr und der Rest über Abgrenzungen?
{{<collapsibleBlock groupId="kostentraeger">}}
Für B- und C-Fälle sind die Kosten im Kalenderjahr anzugeben, für A-Fälle die Kosten über die ganze Falldauer. Für ambulante und nicht-fallbezogene Kostenträger auch die Kosten im Kalenderjahr. Siehe auch Spalte «Zeitbezug» der Variablenliste. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Zuschläge für Anlagenutzungskosten (ANK) bei den Einzelkosten:  Auf den Einzelkosten (Medizinischer Bedarf 400 und 401) dürfen gemäss REKOLE® ANK-Zuschläge erfasst werden. Für diese KTR-Variablen existieren in SpiGes und im SwissDRG Kostendatensatz aber im Gegensatz zu den Gemeinkosten keine separaten ANK-Variablen, auf denen die Anlagenutzungskosten gemäss REKOLE angegeben werden können. In ITAR_K müssen die Konten 400 und 401 ohne ANK-Zuschläge angegeben werden. Wie ist mit diesen ANK-Zuschlägen auf den Konten 400 und 401 zu verfahren?
{{<collapsibleBlock groupId="kostentraeger">}}
{{<markdown>}}
-	Die ANK-Zuschläge sind auf den Konten 400 und 401 nicht zu erfassen. Sie sind jedoch in den Total-Variablen der ANK einzuschliessen (ktr_44_vkl / ktr_44_rekole). 
-	Die Variable ktr_44_rekole wird mit der Version 1.4 der Schnittstelle von einer berechneten in eine erhobene Variable umgewandelt (und im XML hinzugefügt), so dass damit ein Total ANK REKOLE erhoben werden kann, das von der Summe der einzelnen KTR-Variablen abweicht. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}