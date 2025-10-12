import { SimpleHeader } from '@/components/SimpleHeader';
import { SimpleFooter } from '@/components/SimpleFooter';
import { Container } from '@/components/Container';

export default function DataProtection() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-slate-50">
        <Container className="py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Datenschutzerklärung</h1>
            <p className="text-lg text-slate-600">Informationen zur Datenverarbeitung gemäß DSGVO</p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Responsible Party */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Verantwortliche Stelle</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
              </p>
              <p className="text-slate-900 font-semibold">Christian Bernhard</p>
            </div>

            {/* Rights */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Ihre Betroffenenrechte</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-blue-900">Wichtig:</strong> Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                </p>
              </div>
              <p className="text-slate-700 leading-relaxed mt-4">
                Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.
              </p>
              <p className="text-slate-700 leading-relaxed mt-2">
                Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" className="text-blue-600 hover:text-blue-800 underline">https://www.bfdi.bund.de</a>
              </p>
            </div>

            {/* Cookies */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Cookies</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Wie viele andere Webseiten verwenden wir auch so genannte „Cookies". Cookies sind kleine Textdateien, die von einem Websiteserver auf Ihre Festplatte übertragen werden. Hierdurch erhalten wir automatisch bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser, Betriebssystem und Ihre Verbindung zum Internet.
                </p>
                <p>
                  Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen. Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die korrekte Anzeige unserer Webseiten ermöglichen.
                </p>
                <p>
                  In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung eine Verknüpfung mit personenbezogenen Daten hergestellt.
                </p>
                <p>
                  Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Internet-Browser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.
                </p>
              </div>
            </div>

            {/* Google Analytics */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Verwendung von Google Analytics</h2>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Art und Zweck der Verarbeitung:</h3>
                  <p>
                    Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (nachfolgend: „Google"). Google Analytics verwendet sog. „Cookies", also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Rechtsgrundlage:</h3>
                  <p>Die Verarbeitung der Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Widerruf der Einwilligung:</h3>
                  <p>
                    Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Webfonts */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts" der Google LLC zur Darstellung von Schriften.
                </p>
                <p>
                  Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: <a href="https://www.google.com/policies/privacy/" className="text-blue-600 hover:text-blue-800 underline">https://www.google.com/policies/privacy/</a>
                </p>
                <p>
                  <strong className="text-slate-900">Rechtsgrundlage:</strong> Rechtsgrundlage für die Einbindung von Google Webfonts und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-xl font-bold text-blue-900 mb-3">Änderung unserer Datenschutzbestimmungen</h2>
              <p className="text-blue-900 leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Fragen an den Datenschutzbeauftragten</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:
              </p>
              <p className="text-slate-900 font-semibold">Christian Bernhard</p>
              <a href="mailto:christianbernhard089@gmail.com" className="text-blue-600 hover:text-blue-800 underline">christianbernhard089@gmail.com</a>
            </div>
          </div>
        </Container>
      </main>
      <SimpleFooter />
    </>
  );
}
