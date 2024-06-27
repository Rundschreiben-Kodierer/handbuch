---
title: Adaptations du contenu
slug: inhaltliche_anpassungen
description: " "
weight: 20
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="contenu">}}

{{<numberedList>}}
{{<listItem>}}
Quelles sont les variables qui changent avec SpiGes ?
{{<collapsibleBlock groupId="contenu">}}
{{<markdown>}}
- SpiGes a surtout des répercussions importantes sur le processus de contrôle des données et le format des données de la livraison. En ce qui concerne les données médicales (MS actuel), seuls quelques points changent. Les plus importants pour vous devraient être les suivants :
    - Le traitement principal est supprimé.
	- Le complément au diagnostic principal est supprimé.
	- Les diagnostics et les traitements peuvent désormais être saisis en nombre illimité. 
	- Le temps de prestation chirurgicale est saisi pour les procédures chirurgicales.
	- Le début du traitement doit être saisi avec l'heure (de l'opération dans son ensemble) pour les procédures chirurgicales. 
	- La référence entre plusieurs diagnostics (dague/étoile, point d'exclamation) est désormais saisie avec une variable de référence (diagnose_zusatz) saisi à la place du caractère spécial.
- La meilleure façon de suivre toutes les modifications apportées à l'ensemble de données ainsi que les détails exacts est de prendre la liste des variables et de filtrer la colonne "Nouveau/Variable MS" pour distinguer les nouvelles variables et les variables adaptées.
- Les données de facturation et les coûts, respectivement les recettes, sont désormais collectées.
- Vous trouverez ici le jeu de données complet : [https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.assetdetail.25885643.html](https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/gesundheitswesen/projekt-spiges.assetdetail.25885643.html)
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Quel est l'impact de SpiGes sur les directives de codage ?
{{<collapsibleBlock groupId="contenu">}}
{{<markdown>}}
Vous trouverez ces informations dans le manuel de codage. Celui-ci peut être téléchargé sous le lien suivant : [https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medkk.html](https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medkk.html).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Quel est le contenu du rapport national de vérification ?
{{<collapsibleBlock groupId="contenu">}}
Le contenu exact du rapport national de vérification dépend des contrôles qui sont actuellement élaborés avec un groupe de travail comprenant toutes les parties prenantes. Pour l'essentiel, le rapport national de vérification comprend les contrôles positifs ainsi que les justifications officielles de ces contrôles (un extrait du chat relatif au contrôle).
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Les hôpitaux pilotes seront en mesure de créer un premier jeu de données dès le printemps 2024. D'autres cantons exigent la remise d'un premier fichier de données XML d'ici septembre. Pour ces remises, attend-on des données réelles d'un système productif ou des données de test d'un système de test suffisent-elles ? En d'autres termes, la vraie analyse ne commencera-t-elle qu'en 2025 ou l'OFS veut-il déjà analyser les données réelles de 2024 ?
{{<collapsibleBlock groupId="contenu">}}
{{<markdown>}}
- Pour le pilote au printemps 2024, on attend des hôpitaux pilotes qu'ils fournissent des données réelles issues d'un système productif. Celles-ci ne seront analysées que dans le but d'acquérir des connaissances sur le pilote. 
- En août 2024, tous les hôpitaux (dans tous les cantons) devront effectuer un test d'interface afin de montrer que la mise en œuvre technique de l'interface fonctionne. Pour cela, des livraisons partielles, même à partir de systèmes de test, suffisent.
- A partir du 1er janvier 2025, tous les hôpitaux devront fournir des données réelles de l'année 2024 issues des systèmes productifs et les vérifier intégralement avant fin avril et les justifier le cas échéant.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Valeurs inversées : Nous avons remarqué que les valeurs de certaines variables sont différentes de celles des statistiques MS.       
Par exemple, il y a la valeur des signes vitaux.
{{<markdown>}}        
Statistiques sur la MS :        
0 = mort-né         
1 = né vivant.      
Spiges (exactement l'inverse) :         
0 = naissance vivante        
1 = mort-né.        
D'autres exemples seraient la formation scolaire ou l'État civil. De notre point de vue, ce n'est pas optimal et nous aimerions savoir si c'est l'intention et, si oui, pourquoi ? 
{{</markdown>}}
{{<collapsibleBlock groupId="contenu">}}
Dans l'esprit du "once only", nous avons intégré les listes de codes et les métadonnées dans un système OFS, qui sera ensuite publié. Les nouvelles listes de codes correspondent désormais au standard suisse de la plateforme d'interopérabilité i14y.admin.ch, alors qu'auparavant il s'agissait d'une solution spéciale MS.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Valeurs calculées : Dans la liste des variables, il y a quelques lignes qui sont grisées avec la remarque calculées (exemple uid). Cela signifie-t-il que nous les livrons vides dans le XML et que l'OFS les calculera et les inscrira ? Ou est-ce que nous ne fournissons pas ces valeurs et les ignorons ? 
{{<collapsibleBlock groupId="contenu">}}
Comme vous pouvez le constater dans le schéma XML, ces variables calculées ne sont pas incluses. Vous pouvez les ignorer.
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}