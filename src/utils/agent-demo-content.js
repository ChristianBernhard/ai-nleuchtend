// Market & Web Analysis Agent for AInleuchtend
const promptMd = "Führe eine Markt- und Webanalyse zum Thema 'Nachhaltige Verpackungen Deutschland' durch – inkl. Marktgröße, Wachstum, Top-Wettbewerber und visualisierten Daten";

const step01Md = "# Websuche\n## Durchsuche relevante Quellen\n\n• 🔍 Suche nach 'Nachhaltige Verpackungen Deutschland Marktgröße' …\n• … Gefunden: 127 relevante Artikel, Reports und Studien\n• … Quellen: Statista, Bundesverband, Branchenberichte 2024\n• … Zugriff auf aktuelle Marktdaten erfolgreich";

const step02Md = "# Datenextraktion\n## Strukturiere Informationen\n\n• 📊 Extrahiere Marktgröße und Wachstumsdaten …\n• … Marktvolumen: 4,8 Mrd. € (2024), Wachstum: +12,3% p.a.\n• … Top 5 Wettbewerber identifiziert: DS Smith, Smurfit Kappa, Mondi, Stora Enso, Prinzhorn\n• … Marktanteile und Umsatzzahlen strukturiert erfasst\n• … Trend-Analyse: Bio-Plastik +45%, Papier +28%, Recycling +35%";

const step03Md = "# Python-Code Generierung\n## Erstelle Visualisierungen mit matplotlib\n\n• 🐍 Generiere Python-Code für Marktanalyse-Charts …\n• … Chart 1: Marktwachstum 2020-2025 (Liniendiagramm)\n• … Chart 2: Marktanteile Top-Wettbewerber (Kreisdiagramm)\n• … Chart 3: Segmentvergleich nach Materialtyp (Balkendiagramm)\n• … Code optimiert für professionelle Präsentationen";

const step04Md = "# Code-Ausführung & Visualisierung\n## Führe Python-Code auf Server aus\n\n• ⚙️ Sende Code an Server-Endpoint /api/execute-plot …\n• … Server antwortet: Status 200 OK\n• … Diagramme erfolgreich generiert (PNG, 300 DPI)\n• … 3 Charts empfangen und in Analyse integriert\n• … Visualisierungen bereit für Report";

const step05Md = "# Draft-Erstellung & Selbst-Review\n## Agent ruft sich selbst zur Qualitätsprüfung auf\n\n• 📝 Erstelle Report-Draft mit allen Daten und Charts …\n• … Draft Version 1.0 generiert (7 Seiten)\n• 🔄 Rufe mich selbst auf: Agent-Review für Tonalität & Struktur\n• … Self-Call: Prüfe professionelle Sprache → ✓ Optimierungen vorgenommen\n• … Self-Call: Validiere Daten-Konsistenz → ✓ Alle Zahlen korrekt\n• … Self-Call: Executive Summary optimieren → ✓ Kernaussagen geschärft\n• … Draft Version 2.0 finalisiert";

const step06Md = "# PDF-Report Erstellung\n## Generiere finales Dokument\n\n• ✅ Erstelle finales Marktanalyse-PDF aus geprüftem Draft …\n• … PDF generiert: Marktanalyse_Nachhaltige_Verpackungen_DE_2024.pdf\n• … Enthält: Executive Summary, Charts, Wettbewerbsanalyse\n• … 8 Seiten, optimiert für Management-Präsentation\n• … Qualitätsgeprüft durch Self-Review\n• … Bereit zum Download";

const step08Md = "**Perfekt!** Ihre Marktanalyse ist abgeschlossen.\n\n**Folgende Schritte wurden ausgeführt:**\n• 🔍 Websuche (127 Quellen durchsucht)\n• 📊 Datenextraktion (Marktgröße, Wachstum, Top-5 Wettbewerber)\n• 🐍 Python-Code generiert (3 professionelle Charts)\n• ⚙️ Code ausgeführt (Diagramme visualisiert)\n• 🔄 Draft & Selbst-Review (Tonalität & Qualität geprüft)\n• ✅ PDF-Report erstellt (8 Seiten Analyse)\n\n👉 **Das Dokument wurde durch Self-Review qualitätsgeprüft und ist präsentationsfertig.**\n\n**Möchten Sie den Report in Ihrem System speichern?**";

const uploadingMd = "Speichere Marktanalyse...\n\nÜbertrage den Report sicher in Ihr Dokumentenmanagementsystem und benachrichtige das Marketing-Team.";

const uploadedMd = "✅ Erfolgreich gespeichert!\n\nDie Marktanalyse wurde in Ihrem System hinterlegt und das Marketing-Team wurde automatisch benachrichtigt. Die Daten können jetzt für Strategieentscheidungen genutzt werden.";

const footerMd = "AI-nleuchtend Agent Demo • Markt- & Webanalyse Edition • Powered by AI";

function parseStepContent(markdown) {
  const lines = markdown.trim().split('\n');
  const title = lines[0].replace('# ', '');
  const summary = lines[1].replace('## ', '');
  const bullets = lines.slice(3).filter(line => line.startsWith('•')).map(line => line.replace('• ', ''));
  
  return { title, summary, bullets };
}

export function loadContent() {
  return {
    prompt: promptMd.trim(),
    steps: [
      parseStepContent(step01Md),
      parseStepContent(step02Md),
      parseStepContent(step03Md),
      parseStepContent(step04Md),
      parseStepContent(step05Md),
      parseStepContent(step06Md),
    ],
    finalPdfText: step08Md.trim(),
    uploadingText: uploadingMd.trim(),
    uploadedText: uploadedMd.trim(),
    footer: footerMd.trim(),
  };
}

