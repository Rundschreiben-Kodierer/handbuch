---
title: Coûts et produits non reliées à un cas 
slug: falldunabhangige
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="falldunabhangige">}}

{{<numberedList>}}
{{<listItem>}}
Comment saisir les coûts et les revenus des prestations d'intérêt général dans SpiGes ?
{{<collapsibleBlock groupId="falldunabhangige">}}
Pour ce faire, il suffit de sélectionner sous ktr_typ le code de la prestation PIG correspondante et de saisir les coûts et les revenus correspondants à l'aide des numéros de charge par nature ou de centre de charges et des comptes de revenus définis dans REKOLE®®. Ci-dessous vous trouvez la liste des différents types de PIG et le code ktr_typ correspondant :
<table class="w-100">
  <tr>
    <th style="width:20%"> Code </div></th>
    <th> GWL </th>
    <th style="width:60%"> Désignation </th>
  </tr>
  <tr>
    <td> 501 </td>
    <td> Typ a) </td>
    <td> Prestations en attente (exclus prestations en attente pour l’urgence) </td>
  </tr>
  <tr>
    <td> 502 </td>
    <td> Typ a) </td>
    <td> Service de sauvetage et d’ambulance / Appel d’urgence 144 </td>
  </tr>
  <tr>
    <td> 503 </td>
    <td> Typ a) </td>
    <td> Unités d’hôpital protégées </td>
  </tr>
  <tr>
    <td> 504 </td>
    <td> Typ a) </td>
    <td> Jardins d’enfants et écoles pour les patients </td>
  </tr>
  <tr>
    <td> 505 </td>
    <td> Typ a) </td>
    <td> Services sociaux pour patients </td>
  </tr>
  <tr>
    <td> 506 </td>
    <td> Typ a) </td>
    <td> Prévention / promotion de la santé </td>
  </tr>
  <tr>
    <td> 507 </td>
    <td> Typ a) </td>
    <td> Protection de la population </td>
  </tr>
  <tr>
    <td> 508 </td>
    <td> Typ a) </td>
    <td> Aumônerie hospitalière / lieu de recueillement </td>
  </tr>
  <tr>
    <td> 599 </td>
    <td> Typ a) </td>
    <td> Autres missions de l’hôpital </td>
  </tr>
  <tr>
    <td> 601 </td>
    <td> Typ b) </td>
    <td> Recherche, y compris le doctorat (MD et PhD) </td>
  </tr>
  <tr>
    <td> 602 </td>
    <td> Typ b) </td>
    <td> Formation universitaire de base (enseignement dispensé et formation reçue) </td>
  </tr>
  <tr>
    <td> 603 </td>
    <td> Typ b) </td>
    <td> Enseignement dispensé en formation postgraduée </td>
  </tr>
  <tr>
    <td> 701 </td>
    <td> Typ c) </td>
    <td> Maintien de surcapacités hospitalières pour des raisons de politiques régionales </td>
  </tr>
  <tr>
    <td> 702 </td>
    <td> Typ c) </td>
    <td> Maternité </td>
  </tr>
  <tr>
    <td> 703 </td>
    <td> Typ c) </td>
    <td> Tarifs ne couvrant pas les coûts (par ex. TARMED.) </td>
  </tr>
  <tr>
    <td> 799 </td>
    <td> Typ c) </td>
    <td> Autres prestations d'intérêt général liées à l'hôpital </td>
  </tr>
</table>
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Les objets de coûts non reliés à un cas peuvent-ils être rattachés à un hôpital (burnr_gesv) au lieu d'un site ? 
{{<collapsibleBlock groupId="falldunabhangige">}}
Non, ce n'est pas possible. 
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Peut-on utiliser les types KTR plusieurs fois ? Par exemple, pour 599, livrer plusieurs lignes avec un texte libre différent dans la variable «ktr_beschr» ?
{{<collapsibleBlock groupId="falldunabhangige">}}
Oui, c'est possible. Une unité finale d’imputation est attribuée à une colonne ITAR_K® sur la base de l'indication «ktr_typ». Ainsi, une des valeurs prédéfinies doit être utilisée dans la variable «ktr_typ». Il est toutefois possible d'indiquer plusieurs unités finales d’imputation avec le même type de KTR, par exemple pour le ktr_typ 205, une fois avec le texte libre «LAMal» et une fois avec le texte libre «CTM» dans la variable «ktr_beschr». Ces deux objets de coûts sont ensuite additionnés et représentés dans la colonne ITAR_K® «Psy. Hôpital de jour enfants, adolescents». En théorie, d'autres déclinaisons sont techniquement possibles, jusqu’au cas ambulatoire. Tant qu'ils présentent tous le même type KTR, ils sont additionnés et représentés comme décrit.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
La partie CUFI est-elle également attendue pour les cas ambulatoires ou se rapporte-t-elle également exclusivement aux cas hospitaliers ?
{{<collapsibleBlock groupId="falldunabhangige">}}
Pour pouvoir remplir ITAR_K®, les coûts des cas ambulatoires sont remplis sommairement par type de CUFI (p. ex. Tarif Dialyse).
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}