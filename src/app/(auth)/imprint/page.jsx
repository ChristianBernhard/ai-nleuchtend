import { SimpleHeader } from '@/components/SimpleHeader';
import { SimpleFooter } from '@/components/SimpleFooter';
import { Container } from '@/components/Container';

export default function Imprint() {
  return (
    <>
      <SimpleHeader />
      <main className="bg-slate-50">
        <Container className="py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Impressum</h1>
            <p className="text-lg text-slate-600">Angaben gemäß § 5 TMG</p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Company Information Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2 text-slate-700">
                <p className="font-semibold text-lg">Christian Bernhard</p>
                <p>Anzingerstraße 37A</p>
                <p>85604 Zorneding</p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Kontakt</h2>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+4917780287796" className="hover:text-blue-600 transition-colors">0177 8028796</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:christianbernhard089@gmail.com" className="hover:text-blue-600 transition-colors">christianbernhard089@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Tax Information */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <p className="text-blue-900 font-semibold">Kleingewerbe - Umsatzsteuer frei</p>
            </div>

            {/* Responsible Person */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-slate-700 font-semibold">Christian Bernhard</p>
            </div>

            {/* Disclaimer Section */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Haftungsausschluss (Disclaimer)</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Haftung für Inhalte</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Haftung für Links</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Urheberrecht</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <SimpleFooter />
    </>
  );
}
