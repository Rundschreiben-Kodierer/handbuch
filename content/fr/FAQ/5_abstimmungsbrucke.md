---
title: Passerelle d’ajustement  
slug: abstimmungsbrucke
description: " "
weight: 50
type: docs
keywords: []
---

{{<faqBlock>}}
Ouvrir toutes les questions: {{<collapsibleGroupCommand groupId="abstimmungsbrucke">}}

{{<numberedList>}}
{{<listItem>}}
Je connais la comptabilité des ajustements dans SDEP. Est-ce qu'elle existera aussi dans SpiGes ou seulement selon ITAR_K® ?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
SpiGes utilise la passerelle d’ajustement de la CDS / de REKOLE®.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Où les justifications des délimitations sont-elles intégrées dans l'OFS ? Ou comment dois-je comprendre cela ?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
Les justifications sont saisies en tant que contrôles dans SpiGes. Cela signifie que si un montant de la comptabilité financière et de la comptabilité analytique ne concorde pas, la différence doit être justifiée. Ces justifications sont ensuite utilisées, par exemple pour le rapport national de vérification et pour ITAR_K®, ou encore pour la passerelle d’ajustement de la CDS.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Où sont pris en compte les coûts des séjours à cheval dans la passerelle d’ajustement ?  
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
Dans la comptabilité par unité finale d'imputation de SpiGes, il est possible de calculer les coûts des patients sortis au cours de l'année (cas A). Ces coûts seront donc calculés par l’OFS. Ceux-ci peuvent déjà être entrés à l'hôpital l'année précédente et avoir généré des coûts. Dans la comptabilité financière, les charges sont saisies par année (calcul périodique). La différence qui en résulte est corrigée dans la passerelle d’ajustement de SpiGes.
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Pour 2024 (données 2023), SwissDRG a demandé le détail des coûts d’utilisation des immobilisations des cas selon OCP. Dans SpiGes, les variables "_ank" permettent d’envoyer le détail des coûts d’utilisation des immobilisations des cas selon REKOLE®.
Ce détail étant maintenant nécessaire à SwissDRG, ne faudrait-il pas prévoir dans SpiGes les variables "_ank" pour les résultats OCP également ? 
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
{{<markdown>}}
- Il ne s'agit que d'un relevé test de SwissDRG SA. Si le passage définitif à OCP devait avoir lieu, les coûts d'utilisation des immobilisations par centre de charges dans SpiGes seraient livrés selon OCP au lieu de REKOLE® et les coûts d'utilisation des immobilisations REKOLE® seraient relevés sous forme de somme. 
- En résumé, les coûts d’utilisation des immobilisations doivent être représentés selon les méthodes suivantes :
{{</markdown>}}
<table class="w-100">
  <tr>
    <th style="width:65%"> Variables </div></th>
    <th> Méthodologie CUI </th>
  </tr>
  <tr>
    <td> Variables «ktr_10_ank» jusqu’à «ktr_77_ank» </td>
    <td> REKOLE® </td>
  </tr>
  <tr>
    <td> Variable «ktr_44_vkl» </td>
    <td> OCP </td>
  </tr>
  <tr>
    <td> KS FiBu: SA6, en particulier Var. A.15.06 jusqu’à A.15.06.05
 </td>
    <td> OCP </td>
  </tr>
  <tr>
    <td> KS Passerelle d’ajustement : SA81-84
 </td>
    <td> OCP </td>
  </tr>
  <tr>
    <td> KS Passerelle d’ajustement : SA85, Var. A.17.22.25 jusqu’à A.17.24.28
 </td>
    <td> REKOLE® </td>
  </tr>
</table>
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Le compte 441 ne rentre dans aucun calcul des coûts d’utilisation des immobilisations, ni selon OCP, ni selon REKOLE®. Pouvez-vous confirmer cela ?
{{<collapsibleBlock groupId="abstimmungsbrucke">}}
{{<markdown>}}
Les coûts d’utilisation des immobilisations (selon REKOLE® et OCP) correspondent aux charges par nature suivante : 
- 442 Amortissements 
- 444 Autres loyers (y compris leasing opérationnel) 
- 448 Charges des intérêts calculés sur les actifs immobilisés 
De plus amples informations sont disponibles dans le manuel REKOLE® (chapitre 6.5.3).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}