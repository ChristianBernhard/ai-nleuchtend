import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer'
import {Button} from "@/components/Button";
import { Header } from '@/components/Header'

export default function Imprint() {
  return (
    <>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo src="/Logo.svg" alt="Your Logo Alt Text" className="h-10 w-auto" />
        </Link>
      </div>

      <h1 className="text-2xl font-bold mt-8">Impressum</h1>

      <h2 className="text-lg font-semibold mt-4">ANGABEN GEMÄSS § 5 TMG:</h2>
      <p>Christian Bernhard</p>
      <p>Kolumbusstraße 1</p>
      <p>81543 München</p>

      <h2 className="text-lg font-semibold mt-4">KONTAKT:</h2>
      <p>Tel: 0177 8028796</p>
      <p>christianbernhard089@gmail.com</p>

      <h2 className="text-lg font-semibold mt-4">REGISTEREINTRAG:</h2>
      <p>Registergericht: …</p>
      <p>Registernummer: …</p>

      <h2 className="text-lg font-semibold mt-4">UMSATZSTEUER-ID:</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE 59071634483</p>

      <h2 className="text-lg font-semibold mt-4">VERANTWORTLICH FÜR DEN INHALT NACH § 55 ABS. 2 RSTV:</h2>
      <p>Christian Bernhard</p>

<h1 className="text-2xl font-bold mt-8">Haftungsausschluss (Disclaimer)</h1>
      <h2 className="text-lg font-semibold mt-4">Haftung für Inhalte:</h2>
Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      <h2 className="text-lg font-semibold mt-4">Haftung für Links:</h2>
Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      <h2 className="text-lg font-semibold mt-4">Urheberrecht:</h2>
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.

        <div className="flex justify-center mt-6 mb-8">
  <Button href="/" className="px-12 py-4">
    Zurück zur Startseite
  </Button>
</div>

    </>
  );
}
