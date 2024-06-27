---
title: Populations et unités d'enquête
slug: grundgesamtheit_erhebungseinheiten
description: " "
weight: 30
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="GGH">}}

{{<numberedList>}}
{{<listItem>}}
Lors de l'introduction de SpiGes ou au moment de la définition de la population de base pour la première enquête SpiGes, travaille-t-on encore avec les «listes d'hôpitaux» traditionnelles ou déjà avec SpiReg ?
{{<collapsibleBlock groupId="GGH">}}
{{<markdown>}}
- Lors de la première enquête SpiGes (données 2024) en 2025, la population KS est encore importée manuellement sous forme de listes Excel.
- L'actuel «REE» s'appellera «REEGESV» et restera l'identifiant de l'hôpital. Le «REE de site» s'appellera «REE» à partir des données 2024 (relevé 2025).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Quelle est la différence entre une entreprise hospitalière, un hôpital et un site hospitalier ?
{{<collapsibleBlock groupId="GGH">}}
{{<markdown>}}
- Une entreprise hospitalière est une entreprise dont le code NOGA est 861001 (hôpitaux généraux), 861002 (cliniques spécialisées) ou 869004 (maisons de naissance). Elle est désignée de manière univoque par le numéro d'identification IDENT.
- Dans le relevé SpiGes, l'hôpital est une unité qui remplit un ITAR_K et sur lequel se base la définition de cas de SwissDRG SA. Un hôpital est identifié par le n° REE GESV qui n'est géré que sur la base de données de GESV.
- Un site hospitalier est clairement identifié par le numéro REE et appartient toujours à une seule entreprise hospitalière.
Le tableau suivant montre, à titre d'exemple, une entreprise (IDE/IDENT) avec 12 hôpitaux (REEGESV) et 14 sites (REE) :
{{</markdown>}}
{{<insertImage image="tableauFAQ1_fr.png"  class="max-w-90">}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Quels sont les termes synonymes d'entreprise hospitalière, d'hôpital et de site hospitalier utilisés dans l'enquête SpiGes ?
{{<collapsibleBlock groupId="GGH">}}
<table class="w-100">
  <tr>
    <th style="width:50%"> Niveau </div></th>
    <th> Termes synonymes </th>
  </tr>
  <tr>
    <td> <b> Entreprise hospitalière </b> <br /> 
    Unité juridique
 	</td>
    <td> Entreprise (hospitalière) </td>
  </tr>
  <tr>
    <td> <b> Hôpital </b> (selon indication du canton, enquête MS/KS, définition de cas) </td>
    <td> Hôpital, institution, clinique, établissement (hospitalier) </td>
  </tr>
  <tr>
    <td> <b> Site de l'hôpital </b> <br /> 
    Unité locale
	</td>
    <td> Site (hospitalier) </td>
  </tr>
</table>
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Comment déterminer à quel hôpital (REEGESV) appartient un site (REE) ?
{{<collapsibleBlock groupId="GGH">}}
{{<markdown>}}
- Nous demandons l'attribution des sites (REE) aux hôpitaux (REEGESV) lors de la collecte de la population de base. Dans ce processus, ce sont les cantons, en collaboration avec les hôpitaux, qui nous donnent l’information.
- Le burnr_gesv est également relevé à la demande de nos partenaires.
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Qu'est-ce qu'un centre de prestations principal (p. ex. M000, M050) ?
{{<collapsibleBlock groupId="GGH">}}
Un centre de prestations est une unité organisationnelle de l'hôpital dans laquelle sont fournies, entre autres, des prestations médicales, médico-techniques ou médico-thérapeutiques. L'enquête SpiGes indique dans quel centre de prestations médicales principal le patient est traité. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Si un hôpital a plusieurs sites, un cas est-il toujours enregistré sur un seul site, même s'il a été transféré d'un site vers un autre site du même hôpital ?
{{<collapsibleBlock groupId="GGH">}}
Oui, un cas est toujours enregistré sur un seul site, et ce sur le site principal (cf. variable burnr).
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}