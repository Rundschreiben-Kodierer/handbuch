---
title: Zweitfaktoren
slug: second_fact
description: "In diesem Kapitel finden Sie alle Möglichkeiten, die Sie als Zweitfaktor haben."
keywords: []
weight: 20
type: docs
---

eIAM bietet mehrere Zweitsicherheitsfaktoren an, aber nur zwei davon werden als stark eingestuft (eine notwendige Bedingung für die Verwendung von SpiGes):  
1. Der FIDO-Passkey
    - Windows Hello
    - Physischer Sicherheitsschlüssel (FIDO Token).
2. Die MobileID

{{<alert color="warning">}}
{{<markdown>}}
Sie dürfen **keinen** anderen Zweitfaktor als die oben genannten verifizieren. Wenn ein anderer Zweitfaktor überprüft wird, ist die SpiGes-Anwendung nicht zugänglich.
{{</markdown>}}
{{</alert>}}

Idealerweise bevorzugen Sie die Verwendung von Windows Hello auf dem Arbeitscomputer.          
Wenn dies nicht möglich ist, verwenden Sie entweder die MobileID oder einen physischen Sicherheitsschlüssel. 

**Jeder Zugriff auf die SpiGes-Plattform muss von einem Arbeitscomputer aus erfolgen**.

Benutzer der Kantone, die **bereits einen verifizierten Vasco Digipass** (für SOMED/Spitex) haben, müssen diesen derzeit als Zweitfaktor für SpiGes verwenden. 

Personen, **die keinen Vasco Digipass** haben, müssen die Möglichkeiten nutzen, die wir hier vorstellen (FIDO Passkey oder Mobile ID).
