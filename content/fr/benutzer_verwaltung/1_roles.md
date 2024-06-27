---
title: Rôles
slug: rollen
description: "Sur cette page, nous vous expliquons les différents rôles existants sur la plateforme."
weight: 10
type: docs
keywords: []
---

### Rôles Cantons

<table style="width:100%">
  <tr>
    <th style="width:23%"> Nom </div></th>
    <th>Tâches </th>
    <th style="width:20%"> Compétences </div> </th>
    <th style="width:30%"> Responsabilités </div> </th>
  </tr>
  <tr>
    <td> KT_Superuser </td>
    <td> Lors de la phase d'initialisation, il informe ses entreprises ou sites hospitaliers des nouveautés et contrôle la population de base avant l'enquête. Pendant le relevé, il veille à ce que ses sites hospitaliers respectent les délais de livraison. Les établissements en retard sont rappelés. Il vérifie la qualité des données à l'aide de la règle de contrôle automatique et des commentaires complémentaires des sites hospitaliers et les valide. En cas de difficultés de la part des hôpitaux, il fournit le premier support. Il gère tous les utilisateurs de ses sites et entreprises hospitalières. Il gère également les utilisateurs sur le portail eIAM. Le KT_Superuser peut déléguer ces tâches au KT_ErhV ou au KT_User en fonction de leurs compétences et est alors responsable de la supervision. </td>
    <td>Il peut lire, télécharger, commenter, modifier les statistiques de contrôle, exporter à des fins de plausibilité, clôturer toutes les données de ses entreprises et sites hospitaliers et gérer les utilisateurs de tous les rôles hospitaliers de ses sites et entreprises hospitaliers. </td>
    <td> Il veille à ce que l'enquête soit réalisée dans les entreprises hospitalières situées sur sa juridiction et les informe des nouveautés à venir. En cas de questions conceptuelles, techniques ou de contenu, les cantons sont les premiers interlocuteurs. Ils effectuent des contrôles d'entrée ainsi que des demandes de précisions et se chargent des rappels. Jusqu'à la fin juin de l'année du relevé, le canton veille à ce que les informations demandées à toutes les entreprises et sites hospitaliers établis dans le canton et disposant d'une autorisation d'exploitation en matière de police sanitaire soient correctes et complètes. Le canton vérifie la plausibilité des justifications fournies par l'entreprise hospitalière en cas d'annonce d'erreur sur le protocole de contrôle et les accepte. Il est responsable de surveiller les activités des utilisateurs et de les désactiver lorsqu'ils n'ont plus besoin d'accès. </td>
  </tr>
  <tr>
    <td> KT_ErhV(stat_Abschlussuser) </td>
    <td> Il exécute les tâches déléguées par le KT_Superuser. </td>
    <td> Il peut lire toutes les données de ses entreprises et sites hospitaliers, les télécharger, les commenter, modifier les statistiques de contrôle, les exporter à des fins de plausibilité, les clôturer. </td>
    <td> Pour l'année de relevé concernée, l'office cantonal de recensement libère fin juillet les données des entreprises hospitalières situées sur son territoire en vue de leur utilisation selon la LSF. </td>
  </tr>
  <tr>
    <td> KT_Admin_Abschlussuser </td>
    <td> En consultant les données de ses sites ou entreprises hospitalières, il libère les données pour une utilisation administrative à la fin de l'enquête. </td>
    <td> Il peut lire toutes les données de ses entreprises et sites hospitaliers, les télécharger, les commenter, modifier les statistiques de contrôle, les exporter à des fins de plausibilité, les clôturer. </td>
    <td> Pour l'année de relevé concernée, l'office cantonal de la santé publique libère fin juillet les données des entreprises hospitalières situées sur son territoire en vue de leur utilisation selon la LAMal. </td>   
  </tr>
  <tr>
    <td> KT_User </td>
    <td> Il exécute les tâches déléguées par le KT_Superuser. </td>
    <td> Il peut lire, télécharger, commenter toutes les données de ses entreprises et sites hospitaliers. </td>
    <td> Il assiste le KT_Superuser dans ses tâches. </td>
  </tr>
  <tr>
    <td> KT_Read </td>
    <td> En cas de besoin, il peut consulter l'état de l'enquête sur la plateforme. </td>
    <td> Il peut lire toutes les données de toutes les entreprises hospitalières de son canton. </td>
    <td> Il est tenu au secret professionnel et ne doit pas divulguer à des personnes non autorisées les informations qu'il a lues sur la plateforme. </td>
  </tr>
</table>

### Rôles Hôpitaux

<table>
  <tr>
    <th><div style="width:160px"> Nom </div></th>
    <th>Tâches </th>
    <th> <div style="width:110px"> Compétences </div> </th>
    <th> <div style="width:120px"> Responsabilités </div> </th>
  </tr>
  <tr>
    <td>SP_ErhV_Unternehmen </td>
    <td> Pendant la phase d'initialisation, il lit les nouveautés concernant le relevé et les met en œuvre si nécessaire. Pendant le relevé, il veille à ce que ses sites hospitaliers respectent les délais de livraison. Il télécharge les données, vérifie la qualité des données à l'aide du système de contrôle automatique et les commente si nécessaire. A la fin du processus de collecte, il libère les données au niveau de l'entreprise hospitalière (clôturer) afin qu'elles puissent être transmises dans le processus (libération du canton). </td>
    <td>Il peut lire, télécharger, commenter, exporter à des fins de plausibilité et clôturer toutes les données de son entreprise hospitalière et de ses sites. </td>
    <td>Il veille à ce que les données de son entreprise hospitalière soient disponibles dans les délais impartis et de bonne qualité et les valide au niveau de l'entreprise hospitalière. </td>
  </tr>
  <tr>
    <td>SP_ErhV_Standort</td>
    <td>Il télécharge les données de son site hospitalier, vérifie la qualité des données au moyen du système de contrôle automatique et les commente si nécessaire. A la fin du processus de collecte, il libère les données au niveau du site hospitalier afin qu'elles puissent être transmises dans le processus (libération de l'entreprise hospitalière).</td>
    <td> Il peut lire toutes les données de son site hospitalier, les télécharger, les commenter, les exporter à des fins de plausibilité et les clôturer. </td>
    <td>Il veille à ce que les données de son site hospitalier soient disponibles dans les délais impartis et de bonne qualité et les valide au niveau du site hospitalier.</td>
  </tr>
  <tr>
    <td> SP_User_Unternehmen </td>
    <td> Il exécute les tâches déléguées par le SP_ErhV_Unternehmen. </td>
    <td> Il peut lire, télécharger, commenter toutes les données de son entreprise hospitalière et de ses sites. </td>
    <td> Il soutient le SP_ErhV_Unternehmen dans ses tâches. </td>
  </tr>
  <tr>
    <td> SP_User_Standort </td>
    <td> Il exécute les tâches déléguées par le SP_ErhV_Standort. </td>
    <td> Il peut lire, télécharger, commenter toutes les données de son site hospitalier. </td>
    <td> Il soutient le SP_ErhV_Standort dans ses tâches. </td>
  </tr>
  <tr>
    <td> SP_Read_Unternehmen </td>
    <td> En cas de besoin, il peut consulter l'état de l'enquête sur la plateforme. </td>
    <td> Il peut lire les données de son entreprise hospitalière. </td>
    <td> Il est tenu au secret professionnel et ne doit pas divulguer à des personnes non autorisées les informations qu'il a lues sur la plateforme. </td>
  </tr>
  <tr>
    <td> SP_Read_Standort </td>
    <td> En cas de besoin, il peut consulter l'état de l'enquête sur la plateforme. </td>
    <td> Il peut lire les données de son site hospitalier. </td>
    <td> Il est tenu au secret professionnel et ne doit pas divulguer à des personnes non autorisées les informations qu'il a lues sur la plateforme. </td>
  </tr>
</table>