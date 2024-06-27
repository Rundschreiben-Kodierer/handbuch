---
title: 2. Contrôle des données
slug: kontrole
description: "Sur cette page, nous vous expliquons comment contrôler les données importées par votre site hospitalier sur la plateforme SpiGes."
keywords: []
weight: 30
type: docs
---

{{<alert title="Vérification à la source" color="info">}}
{{<markdown>}}
Idéalement, les données sont contrôlées directement dans le système de saisie de l’hôpital, en amont du processus de relevé.

Les hôpitaux contrôlent les données « à la source » dans leur propre système et peuvent au préalable intégrer dans leur système les outils de vérification mis à leur disposition par l’OFS à cet effet. Il est également possible de faire contrôler les données en cours d’année, avant la collecte de données proprement dite, sur la plateforme SpiGes. Étant donné que ce contrôle a lieu avant le début ordinaire du relevé (janvier de l'année suivante), le statut du relevé est à l'état de "préparation".
{{</markdown>}}
{{</alert>}}

## Vérification autonome

Lors d’un import, toutes les vérifications sont effectuées automatiquement. Leurs résultats sont enregistrés et présentés. Les compléments sont également apportés automatiquement, de sorte que les données peuvent aussi être contrôlées à ce sujet.

L’établissement traite les résultats du contrôle de manière autonome et corrige les données lorsque cela est possible en téléchargeant les données corrigées.
Si la correction n’est pas possible ou que le contrôle a détecté une erreur à tort, l’établissement saisit une justification dans la section commentaire prévu à cette effet sur la plateforme. La vérification peut aussi générer un avertissement, qui se veut informatif et n’implique pas forcément une justification ou une correction. La vérification autonome est terminée une fois que toutes les erreurs ont été corrigées ou justifiées, ce qui doit être fait d’ici à la fin avril.

### Contrôle du format

{{<insertImage image="test_format_fr.png" class="edge max-w-90">}}

&nbsp;

1. Dans cette colonne, vous pouvez voir la date et l'heure du dernier import de données.

2. Dans cette colonne, vous voyez si les données concernées ont passé les tests de contrôle du format. En cas d'erreur, vous pouvez cliquer dessus pour afficher les détails de l'erreur afin de la corriger dans le fichier XML et la réimporter. **ATTENTION:** l'import de nouvelles données remplace les données précédemment importées.

3. Une fois le contrôle du format validé, vous voyez dans cette colonnes les erreurs de cas individuels à traiter. Vous pouvez cliquer dans la catégorie souhaitée pour voir les erreurs plus en détails.

4. Vous voyez ici les commentaires qui ont été postés précédemment. Vous pouvez poster des commentaires pour justifier vos erreurs ou pour répondre aux commentaires précédents. Vous pouvez également créer un nouveau thème de discussion en cliquant sur la bulle de dialogue au milieu en haut.

### Contrôle des cas individuels

{{<insertImage image="controle_fr.png" class="edge max-w-90">}}

&nbsp;

1. La section filtre vous permet de trier les sections afin de trouver plus rapidement ce que vous cherchez.

2. Dans cette colonne, vous pouvez voir le statut de chaque section.

3. Vous pouvez ici télécharger les données.

4. Cette flèche permet de développer la règle et d'afficher tous les cas individuels pour lesquels la règle a échoué.

&nbsp;

{{<insertImage image="controle_detail_fr.png" class="edge max-w-90">}}

&nbsp;

1. Les cases carrées vous permettent de selectionner plusieurs erreurs.

2. Dans cette colonne, vous pouvez voir une description de l'erreur, vous pouvez également avoir plus de détails en cliquant sur l'erreur dans la colonne "Fall-Id".

3. Dans cette colonne, vous pouvez voir si l'erreur est encore "ouverte", si elle est déjà résolue ("OK") ou si elle a été définitivement jugée comme "erreur".

4. Vous pouvez ici commenter (en cliquant sur la case "bulle de dialogue") ou télécharger les données (en cliquant sur la flèche vers le bas). Vous agirez sur la globalité des erreurs lorsqu'aucune erreur n'est séléctionnée, et sur les erreurs séléctionnées sinon.

5. Vous pouvez également saisir un commentaire au niveau de l'erreur concernée.
