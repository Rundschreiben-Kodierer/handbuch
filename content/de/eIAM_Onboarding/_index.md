---
title: eIAM Onboarding Prozess
slug: onboarding
description: 'Auf dieser Seite finden Sie alle Informationen, die Sie für die Anmeldung bei der SpiGes-Plattform benötigen.'
keywords: []
weight: 10
type: docs
---

In diesem Kapitel finden Sie alle Schritte, die Sie unternehmen müssen, um ein verifiziertes Profil zu erstellen, mit dem Sie sich auf der SpiGes-Plattform einloggen können.

Um ein CH-Login mit einem starken Zweitfaktor mit verifizierter Identität für SpiGes zu erstellen, sind folgende Schritte nötig:

1.	CH-Login erstellen (mit berufliche Email Adresse)
2.	Hinzufügen eines starken Zweitfaktors zum CH-Login
3.	Die Identität auf dem starken Zweitfaktor verifizieren
4.	Verknüpfen (Onboarding) des eingerichteten CH-Login mit SpiGes

Diese Schritte werden auf den folgenden Seiten erläutert. Wenn Sie bereits über einen CH-Login verfügen, müssen Sie keinen neuen erstellen und können den entsprechenden Schritt überspringen. Vergewissern Sie sich jedoch, dass Ihr CH-Login funktioniert.

Wir empfehlen Ihnen, zunächst diese Anleitung zu lesen, bevor Sie versuchen, Ihren neuen sicheren Zugang einzurichten.

## Funktionsweise von eIAM

eIAM ist ein zentrales Zugangs- und Autorisierungssystem der Bundesverwaltung für Webanwendungen. Vereinfacht gesagt ist eIAM die zentrale Zugangsinfrastruktur des Bundes. Es ist das Ziel, die Einrichtung eines spezifischen Verfahrens für jede einzelne Anwendung zu vermeiden. Diese Zentralisierung ermöglicht Einsparungen und die Verwendung der gleichen Zugangsdaten für alle Anwendungen.

Jeder Benutzer, der sich in die SpiGes-Anwendung einloggt, wird automatisch zum eIAM-Portal für das Authentifizierungsverfahren weitergeleitet. Das System wird den Benutzer auffordern, seine Anmeldung auf seinem Mobiltelefon zu bestätigen, um sicherzustellen, dass es sich tatsächlich um die richtige Person handelt, die versucht, sich anzumelden.
{{<alert color="warning">}}
Da die Identität des Nutzers überprüft werden muss, sind die Konten in der Anwendung personalisiert. Ein Konto kann nicht von mehreren Personen genutzt werden.
{{</alert>}}

## Struktur der eIAM Units

Die verschiedenen Benutzer der SpiGes-Plattform sind wie folgt organisiert:

- Kanton
    - Unternehmen
        - Standorte

Ein Kanton enthält ein oder mehrere Unternehmen, die ihrerseits einen oder mehrere Krankenhausstandorte enthalten.

{{<alert color="warning">}}
In einigen Fällen sind der geografische Kanton eines Standorts und der administrative Kanton des Unternehmens nicht identisch.
{{</alert>}}

Beispiel:

<div class="two_column">

<div class="left_col">
<!-- First column content goes here -->
{{<numberedList>}}
  {{<listItem>}}
  In dieser Spalte sehen Sie die EntID auf Unternehmensebene und Sie sehen die Bur-Nummer auf Ebene der Krankenhausstandorte.
  {{</listItem>}}

  {{<listItem>}}
  In dieser Spalte sehen Sie den "administrativen" Kanton des Unternehmens / des Krankenhausstandorts.
  {{</listItem>}}

  {{<listItem>}}
  In dieser Spalte sehen Sie den geografischen Kanton des Unternehmens / des Krankenhausstandorts.
  {{</listItem>}}
{{</numberedList>}}

<p> Hier sehen Sie, dass der administrative und der geografische Kanton von Standort 1 nicht identisch sind.  </p>
</div>

<div class="right_col">
<!-- Second column content goes here -->
{{<insertImage image="Visu_entreprise.png" class="edge max-w-90">}}
</div>

</div>

&nbsp;
