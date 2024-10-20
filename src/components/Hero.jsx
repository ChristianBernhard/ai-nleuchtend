import Image from 'next/image'
import {Container} from '@/components/Container'
import logoHPMedizin from 'public/logos/hpmedizin.png'
import logoWulff from 'public/logos/wulff-removebg-preview.png'
import logoVHS from 'public/logos/vhs.png'
import logoKVB from 'public/logos/kvb.png'
import logoHPConsulting from 'public/logos/hpconsulting.png'
import logoBeckAkademie from 'public/logos/beckakademie.png'
import logoExpedia from 'public/logos/expedia.png'



export function Hero() {
    return (
        <Container className="pb-10 pt-20 text-center lg:pt-16 relative">
            <h1 className="mx-auto max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 sm:tracking-normal relative z-10">
                Wir machen{' '}
                <span className="relative whitespace-normal text-blue-600 inline-block"> {/* Inline-block for span */}
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        className="absolute left-0 top-full h-[0.58em] w-full fill-blue-300/70"
                        style={{top: '100%', transform: 'translateY(-50%)'}} // Center vertically
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"/>
                    </svg>
                    <span className="relative">Künstliche Intelligenz</span>
                </span>{' '}
                greifbar.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                Vergessen Sie kurzzeitige Trends und Buzzwords: Durch uns bekommen Sie fundierte Einblicke und ein
                tiefgreifendes Verständnis für die Welt der KI.
                {/* Für Beginner und Experten. */}
            </p>

            <div className="mt-20 lg:mt-16">
                <p className="font-display text-base text-slate-900 mb-8">
                    KI-Weiterbildung? Unsere Kunden bestätigen den Erfolg!
                </p>
                <div className="overflow-hidden">
                    <ul
                        role="list"
                        className="flex items-center justify-start gap-x-8 animate-infinite-scroll"
                        style={{
                            width: 'calc(200% + 4rem)', // This assumes the total width of logos is half the container's size
                        }}
                    >
                        {/* Repeat the logo groups twice for a seamless animation ignore */}
                        {[...Array(3)].flatMap(_ => [
                            [
                                {name: 'KVB', logo: logoKVB},
                                {name: 'HPMedizin', logo: logoHPMedizin},
                                {name: 'VHS', logo: logoVHS},
                            ],
                            [
                                {name: 'Wulff', logo: logoWulff},
                                {name: 'HPConsulting', logo: logoHPConsulting},
                                {name: 'BeckAkademie', logo: logoBeckAkademie},
                                {name: 'Expedia', logo: logoExpedia},

                            ],
                        ]).map((group, groupIndex) => (
                            <li key={groupIndex}>
                                <ul role="list"
                                    className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
                                    {group.map((company) => (
                                        <li key={company.name} className="flex items-center justify-center w-[170px] h-[70px]">
    <Image
      src={company.logo}
      alt={company.name}
      unoptimized
      className="filter grayscale brightness-60 object-contain w-full h-full" // Fill the container
    />
</li>

                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Container>
    )
}
