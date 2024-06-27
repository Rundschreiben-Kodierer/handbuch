---
title: Identifiants 
slug: identifikatoren
description: " "
weight: 20
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="identifikatoren">}}

{{<numberedList>}}
{{<listItem>}}
Le numéro AVS est un champ obligatoire. Malgré tout, il y aura des cas sans numéro AVS. Où est décrit ce qui doit être mis dans la variable dans ce cas ?
{{<collapsibleBlock groupId="identifikatoren">}}
Précisément cette question est encore ouverte. Dans la description des variables, on peut lire : «Remarque : en ce qui concerne les personnes qui ne peuvent pas avoir de numéro AVS, des clarifications sont encore en cours (voir aussi la colonne "A indiquer pour")». A court terme, il est envisagé de laisser la variable vide dans ce cas ou d'indiquer un numéro fictif. Mais certains cantons frontaliers se sont fortement opposés à cette idée, raison pour laquelle cette question sera encore clarifiée plus en détail à long terme.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Le numéro AVS doit être utilisé pour la collecte des données. Le numéro AVS sera-t-il également visible pour les caisses maladie via les partenaires tarifaires ?
{{<collapsibleBlock groupId="identifikatoren">}}
Lors de la transmission des données, les identifiants et les données sont envoyés séparément. Le canal de données est crypté. L'OFS utilise un validateur pour vérifier le numéro AVS. Une fois que le numéro AVS a été crypté, il est enregistré dans la base de données sécurisée des identifiants. Pendant le traitement des données sur la plateforme, le numéro AVS est ainsi pseudonymisé et n'est pas stocké avec l'ensemble des données de prestations. Le numéro AVS ne peut être transmis aux utilisateurs de données que sous forme cryptée. Comme ces utilisateurs de données ne connaissent pas la clé, le numéro AVS est anonymisé pour eux. Il n'est pas possible d'en déduire la valeur originale.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Le canton a-t-il accès au fichier ID des livraisons ?
{{<collapsibleBlock groupId="identifikatoren">}}
Le canton peut exporter des données pendant l'enquête à des fins de plausibilisation, le NAVS sera alors pseudonymisé.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}