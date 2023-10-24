import Link from "next/link";
import {Logo} from "@/components/Logo";
import {Button} from "@/components/Button";

export default function DataProtection() {
  return (
    <>
        <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo src="/Logo.svg" alt="Your Logo Alt Text" className="h-10 w-auto" />
        </Link>
      </div>
      <h1 className="text-2xl font-bold mt-8">Datenschutzerklärung</h1>
      <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
      <p>Christian Bernhard</p>

      <h2 className="text-lg font-semibold mt-4">Ihre Betroffenenrechte</h2>
      <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
      <ul className="list-disc ml-8">
        <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)</li>
        <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)</li>
      </ul>
      <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
      <p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
      <p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>

      <h2 className="text-lg font-semibold mt-4">Cookies</h2>
      <p>Wie viele andere Webseiten verwenden wir auch so genannte „Cookies”. Cookies sind kleine Textdateien, die von einem Websiteserver auf Ihre Festplatte übertragen werden. Hierdurch erhalten wir automatisch bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser, Betriebssystem und Ihre Verbindung zum Internet.</p>
      <p>Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen. Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.</p>
      <p>In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.</p>
      <p>Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Internet-Browser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.</p>

      <h2 className="text-lg font-semibold mt-4">Verwendung von Google Analytics</h2>
      <p>Art und Zweck der Verarbeitung:</p>
      <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (nachfolgend: „Google“). Google Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p>
      <p>Die Zwecke der Datenverarbeitung liegen in der Auswertung der Nutzung der Website und in der Zusammenstellung von Reports über Aktivitäten auf der Website. Auf Grundlage der Nutzung der Website und des Internets sollen dann weitere verbundene Dienstleistungen erbracht werden.</p>
      <p>Rechtsgrundlage: Die Verarbeitung der Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).</p>
      <p>Empfänger: Empfänger der Daten ist Google als Auftragsverarbeiter. Hierfür haben wir mit Google den entsprechenden Auftragsverarbeitungsvertrag abgeschlossen.</p>
      <p>Speicherdauer: Die Löschung der Daten erfolgt, sobald diese für unsere Aufzeichnungszwecke nicht mehr erforderlich sind.</p>
      <p>Drittlandtransfer: Google verarbeitet Ihre Daten in den USA und hat sich dem EU-US Privacy Shield unterworfen. Außerdem haben wir Standarddatenschutzklauseln mit Google für den Einsatz von Google Analytics abgeschlossen.</p>
      <p>Bereitstellung vorgeschrieben oder erforderlich: Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden, kann es hierdurch zu Funktionseinschränkungen auf der Website kommen.</p>
      <p>Widerruf der Einwilligung: Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: Browser Add On zur Deaktivierung von Google Analytics.</p>
      <p>Zusätzlich oder als Alternative zum Browser-Add-On können Sie das Tracking durch Google Analytics auf unseren Seiten unterbinden, indem Sie diesen Link anklicken. Dabei wird ein Opt-out-Cookie auf Ihrem Gerät installiert. Damit wird die Erfassung durch Google Analytics für diese Website und für diesen Browser zukünftig verhindert, so lange das Cookie in Ihrem Browser installiert bleibt.</p>
      <p>Profiling: Mit Hilfe des Tracking-Tools Google Analytics kann das Verhalten der Besucher der Webseite bewertet und die Interessen analysiert werden. Hierzu erstellen wir ein pseudonymes Nutzerprofil.</p>

      <h2 className="text-lg font-semibold mt-4">Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
      <p>Art und Zweck der Verarbeitung:</p>
      <p>Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.</p>
      <p>Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a></p>
      <p>Rechtsgrundlage: Rechtsgrundlage für die Einbindung von Google Webfonts und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>
      <p>Empfänger: Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass der Betreiber in diesem Fall Google Daten erhebt.</p>
      <p>Speicherdauer: Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Webfonts.</p>
      <p>Weitere Informationen zu Google Web Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a></p>
      <p>Drittlandtransfer: Google verarbeitet Ihre Daten in den USA und hat sich dem EU-US Privacy Shield unterworfen.</p>
      <p>Bereitstellung vorgeschrieben oder erforderlich: Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich, noch vertraglich vorgeschrieben. Allerdings kann ohne die korrekte Darstellung der Inhalte von Standardschriften nicht ermöglicht werden.</p>
      <p>Widerruf der Einwilligung: Zur Darstellung der Inhalte wird regelmäßig die Programmiersprache JavaScript verwendet. Sie können der Datenverarbeitung daher widersprechen, indem Sie die Ausführung von JavaScript in Ihrem Browser deaktivieren oder einen Einbindung JavaScript-Blocker installieren. Bitte beachten Sie, dass es hierdurch zu Funktionseinschränkungen auf der Website kommen kann.</p>
      <h2 className="text-lg font-semibold mt-4">Änderung unserer Datenschutzbestimmungen</h2>
Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
      <h2 className="text-lg font-semibold mt-4">Fragen an den Datenschutzbeauftragten</h2>
Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:
Christian Bernhard
         <div className="flex justify-center mt-6 mb-8">
  <Button href="/" className="px-12 py-4">
    Zurück zur Startseite
  </Button>
</div>
    </>
  );
}
