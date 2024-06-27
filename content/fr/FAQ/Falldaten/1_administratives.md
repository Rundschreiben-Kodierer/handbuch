---
title: Admninistratif
slug: admninistratives
description: " "
weight: 10
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="admninistratives">}}

{{<numberedList>}}
{{<listItem>}}
Le jeu de données SpiGes attend-il les cas de parenthèses de cas (= cas regroupés) ? Dans le domaine de la psychiatrie, l'ANQ attend un jeu de données avec les cas individuels, donc des cas non regroupés. Existe-t-il déjà un échange entre vous et l'ANQ concernant l'utilisation du jeu de données SpiGes ?
{{<collapsibleBlock groupId="admninistratives">}}
Le regroupement des cas est géré à SpiGes conformément aux directives de SwissDRG SA. Nous sommes en discussion avec l'ANQ concernant la gestion des cas non regroupés.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
fall_id_ch : Qui génère ce numéro de cas et celui-ci est-il automatiquement déposé dans Opale (système IRP) ? Jusqu'à présent, nous pouvions générer automatiquement l'identifiant de cas dans les deux fichiers (données OFS et fichier des coûts par cas) dans Opale.
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
- Le numéro de cas clair pour toute la Suisse est généré par la plateforme SpiGes. Lors d'une exportation de données à partir de la plateforme, ce fall_id_ch est à la disposition des utilisateurs de données. 
- L'identifiant du cas, la variable fall_id, est généré par les hôpitaux. Les logiciels hospitaliers (comme Opale par exemple) devraient continuer à disposer de cette fonction. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Il existe des variables (p. ex. beatmung) pour lesquelles la référence temporelle est "cas complet" ou "année de relevé". Dans la plupart des hôpitaux, cette position n'est toutefois pas gérée sur l'axe temporel, mais une seule fois sur le cas. De même, dans l'ancien jeu de données MS, de telles positions n'étaient toujours livrées que pour les cas A. Comment envisagez-vous une livraison des cas B/C pour ces variables ?
{{<collapsibleBlock groupId="admninistratives">}}
Jusqu'à présent, il n'a pas été défini si ces variables doivent être fournies pour les cas B et C. En principe, il devrait être possible de fournir ces informations, c'est la seule façon de calculer les taux d'occupation à partir des données. Toutefois, il est probable que de nombreux hôpitaux soient comme vous et ne disposent pas des données pour les cas B et C. Dans ce cas, les variables pour les cas B et C peuvent être laissées vides.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment est définie le «Transfert interne» ?
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
- Le transfert interne d’un domaine de prestations (soins aigus, psychiatrie, réadaptation) vers un autre domaine de prestations au sein du même hôpital (ree_gesv) 
- ou pour les cas considérés comme étant en attente de placement. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Est-il possible d’avoir une définition pour la valeur « 7 = rapatriement » ?
{{<collapsibleBlock groupId="admninistratives">}}
Rapatriement d'un patient ou d'une patiente avec une résidence principale suisse de l'étranger vers la Suisse, sans exigences particulières quant au moyen de transport ou à l'accompagnement.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment est défini un « transfert » ? (p. ex. les codes «5 = transfert dans les 24 heures» et «6 = retransfert» de la variable type d'admission).
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
- La variable Type d'admission existe déjà dans la MS et n'a pas non plus changé avec SpiGes. Un transfert se distingue d'un transfert interne par le fait qu'il n'a pas lieu dans le même hôpital (REEGESV), mais dans un autre hôpital (deux REEGESV différents). La définition se base sur les principes de SwissDRG SA, que vous trouverez ici:  <a href="https://www.swissdrg.org/fr/somatique-aigue/systeme-swissdrg-1302024/regles-et-definitions"> https://www.swissdrg.org/fr/somatique-aigue/systeme-swissdrg-1302024/regles-et-definitions </a> 
-	Bei der Eintrittsart «6=Rückverlegung» wurde von der SwissDRG AG folgende Spezifizierung kommuniziert: Bei ununterbrochenem Spitalaufenthalt in einem anderen Spital von mehr als 18 Tagen und Rückkehr in das ursprüngliche Spital 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment coder les cas qui passent de la réadaptation (tarif ST-REHA) aux soins de longue durée (tarif "taxe de soins") du même établissement ? Les variables 1.2.V02 et 1.5.V03 ne nous permettent pas d'indiquer "soins de longue durée, même établissement".
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
C'était déjà le cas pour la MS ; le cas change de réadaptation à SOMED (même établissement) ; pour le code 2, les deux possibilités sont simplement incluses (même établissement ou autre établissement). Le cas doit être codé comme suit :           
sortie_séjour : 2 = établ. de santé non hospit. médicalisé             
entrée_séjour : 84 = division/clinique de réadaptation, même établissement  
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

### Variable "(Pays de résidence)"

{{<listItem>}}
La description de la variable mentionne une répartition séparée des pays extra-européens en régions. Cette liste existe-t-elle déjà ou sera-t-elle publiée ?
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
- La procédure et la liste sont restées les mêmes que pour la MS. Ci-joint le lien vers la liste : [https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medsreg.html](https://www.bfs.admin.ch/bfs/de/home/statistiken/gesundheit/nomenklaturen/medsreg.html) 
- Pour les pays extra-européens, il est possible de saisir des régions, mais aussi d'indiquer les codes des pays. Ceci est déjà le cas dans la MS et n'a pas changé. Le format est alphanumérique et peut donc contenir aussi bien des chiffres que des lettres. 
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

###	Variable "Classe d'assurance" 

{{<listItem>}}
Dans la description de la variable, il est indiqué qu'il faut l'indiquer pour tous, sauf pour les personnes payant elles-mêmes. Mais dans le xsd, le champ est "required". Que faut-il alors fournir pour les personnes payant elles-mêmes ?
{{<collapsibleBlock groupId="admninistratives">}}
La formulation peut en effet porter à confusion. Pour qu'il n'y ait pas de missings ici, required a été présupposé. Cela concerne aussi les self-payeurs, qui sont codés avec 9=inconnu.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variable "Classe d'assurance" : selon notre administration des patients, il est difficile d'obtenir l'information pour les cas avec une "assurance Flex" et de la consigner avec "8 = autre".  Y a-t-il un problème lors des analyses ultérieures ou quelles sont les conséquences sur les statistiques si nous n'indiquons pas (ou ne pouvons pas indiquer) "8=autres" ?
{{<collapsibleBlock groupId="admninistratives">}}
{{<markdown>}}
- Les cas Flex et tous les autres modèles d'assurance qui deviennent de plus en plus populaires ne sont pas faciles à représenter. Malgré ces difficultés, d’un point de vue statistique, cela n’est pas dramatique pour la variable Classe d'assurance si l’information n’est pas sure. En cas de doute, ces cas devraient être représentés en tant que semi-privés.
- La variable "liegeklasse" est en revanche centrale pour la représentation de l'ITAR_K. Il n'y a pas non plus de catégorie "autre" et les cas avec "inconnu" seront examinés de près. En fonction de la valeur de cette variable, les cas sont attribués dans des colonnes différentes dans l’ITAR_K®.
{{</markdown>}}  
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}