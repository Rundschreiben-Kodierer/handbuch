---
title: Diagnostics 
slug: diagnose
description: " "
weight: 40
type: docs
keywords: []
---

{{<faqBlock>}}
Aprire tutte le domande: {{<collapsibleGroupCommand groupId="diagnose">}}

{{<numberedList>}}
{{<listItem>}}
Variabile POA: potrebbe dirci a quale scopo viene utilizzata la variabile diagnose_poa?  
{{<collapsibleBlock groupId="diagnose">}}
{{<markdown>}}
L’indicazione «POA» (present on admission) può essere utilizzata, tra l’altro, per migliorare la qualità e per la sicurezza dei pazienti. Si veda, ad esempio, la comunicazione del Cantone di Zurigo in merito (in tedesco). [Present on admission – Informationen zur Erfassung (zh.ch)](https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/gesundheit/gesundheitsversorgung/spitaeler_kliniken/daten_und_statistik_der_listenspitaeler/datenerhebung/poa_informationen.pdf).
{{</markdown>}}
{{</collapsibleBlock>}}
{{</listItem>}}

{{<listItem>}}
Variabile «diagnose_zusatz»: quali informazioni devono essere inserite qui per i codici con asterisco e i codici con punto esclamativo?
{{<collapsibleBlock groupId="diagnose">}}
{{<markdown>}}
-	Per i codici con asterisco, qui va inserito il corrispondente codice con croce. Per i codici con punto esclamativo, il codice da specificare. 
-	I codici con asterisco non sono contrassegnati come tali; sono assegnati secondo l’ICD-10-GM. 

**Esempio 4** nel Manuale di codifica (pag. 38)       
DP E10.73† Diabete mellito, tipo 1, con complicanze multipl, definito come scompensato      
DS I79.2* Angiopatia periferica in malattie classificate altrove      
DS H36.0* Retinopatia diabetica       
DS N08.3* Disturbi glomerulari in diabete mellito       
…va indicato in **SpiGe** come segue :   
{{</markdown>}}   
<table class="w-100">
  <tr>
    <th style="width:35%"> diagnose_kode </div></th>
    <th> diagnose_id </th>
    <th style="width:35%"> diagnose_zusatz </th>
  </tr>
  <tr>
    <td> E10.73 </td>
    <td> 1 </td>
    <td>  </td>
  </tr>
  <tr>
    <td> I79.2 </td>
    <td> 2 </td>
    <td> E10.73 </td>
  </tr>
  <tr>
    <td> H36.0 </td>
    <td> 3 </td>
    <td> E10.73 </td>
  </tr>
  <tr>
    <td> N08.3 </td>
    <td> 4 </td>
    <td> E10.73 </td>
  </tr>
</table>

{{<markdown>}}
**Esempio** nel Manuale di codifica (pag. 40)      
DP S37.03 Rottura completa del parenchima renale      
L 2       
DS V99! Incidente da trasporto non specificato      
DS S36.03 Lacerazione della milza con interessamento del parenchima       
DS S36.49 Traumatismo di altre e multiple parti dell’intestino tenue      
DS S31.83! Ferita aperta (qualsiasi parte dell’addome, dei lombi e della pelvi) in collegamento con traumatismo intraaddominale       
…va indicato in **SpiGe** come segue:     
{{</markdown>}} 
<table class="w-100">
  <tr>
    <th style="width:35%"> diagnose_kode </div></th>
    <th> diagnose_id </th>
    <th style="width:35%"> diagnose_zusatz </th>
  </tr>
  <tr>
    <td> S37.03 </td>
    <td> 1 </td>
    <td>  </td>
  </tr>
  <tr>
    <td> V99 </td>
    <td> 2 </td>
    <td> S37.03 </td>
  </tr>
  <tr>
    <td> S36.03 </td>
    <td> 3 </td>
    <td> </td>
  </tr>
  <tr>
    <td> S36.49 </td>
    <td> 4 </td>
    <td> </td>
  </tr>
  <tr>
    <td> S31.83 </td>
    <td> 5 </td>
    <td> S36.03 </td>
  </tr>
  <tr>
    <td> S31.83 </td>
    <td> 6 </td>
    <td> S36.49 </td>
  </tr>
  <tr>
    <td> S31.83 </td>
    <td> 7 </td>
    <td> S37.03 </td>
  </tr>
</table>
{{</collapsibleBlock>}}
{{</listItem>}}

{{</numberedList>}}
{{</faqBlock>}}