import {Faqs} from '@/components/Faqs'
import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'
import {Hero} from '@/components/Hero'
import {Pricing} from '@/components/Pricing'
import {CallToAction} from '@/components/CallToAction'
import {SecondaryFeatures} from '@/components/SecondaryFeatures'
import {EUAIActBanner} from '@/components/EUAIActBanner'

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <EUAIActBanner/>
                {/*<PrimaryFeatures/>*/}
                <SecondaryFeatures/>
                <Pricing/>
                <CallToAction/>
                <Faqs/>
            </main>
            <Footer/>
        </>
    )
}
