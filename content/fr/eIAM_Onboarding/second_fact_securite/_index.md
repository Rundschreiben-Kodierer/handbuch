---
title: Second facteur de sécurité
slug: second_fact
description: "Vous trouverez dans ce chapitre toutes les possibilités que vous avez comme second facteur de sécurité."
keywords: []
weight: 20
type: docs
---

eIAM propose plusieurs seconds facteurs de sécurité mais seuls deux d’entre eux sont considérés comme fort (condition nécessaire pour l’utilisation de SpiGes):  
1. Le Passkey FIDO
    - Windows Hello
    - Clé de sécurité physique (FIDO Token)
2. Le MobileID

{{<alert color="warning">}}
{{<markdown>}}
Il ne faut **pas** vérifier un autre second facteur que ceux proposé ci-dessus. Avec un autre second facteur vérifié, l'application SpiGes ne sera pas accessible.  
{{</markdown>}}
{{</alert>}}

Idéalement, privilégiez l’utilisation de Windows Hello sur l’ordinateur professionnel.          
Si cela est impossible, utilisez soit le MobileID, soit une clé de sécurité physique. 

**Tout accès à la plateforme SpiGes doit se faire depuis un ordinateur professionnel**

Les utilisateurs des cantons **ayant déjà un Vasco Digipass vérifié** (pour SOMED/Spitex) doivent pour l’instant l’utiliser comme second facteur pour SpiGes. 

Les personnes qui **n’ont pas de Vasco Digipass** doivent utiliser les moyens que nous présentons (Passkey FIDO ou Mobile ID).
