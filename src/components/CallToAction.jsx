import {Container} from '@/components/Container'

export function CallToAction() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-slate-900"
        >
            {/*<div*/}
            {/*  style={{*/}
            {/*    position: 'absolute',*/}
            {/*    top: 0,*/}
            {/*    left: 0,*/}
            {/*    width: '100%',*/}
            {/*    height: '100%',*/}
            {/*    zIndex: 0,*/}
            {/*    maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',*/}
            {/*    WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <video*/}
            {/*    autoPlay*/}
            {/*    loop*/}
            {/*    muted*/}
            {/*    style={{ opacity: 0.5 }}*/}
            {/*    className="w-full h-full object-cover"*/}
            {/*  >*/}
            {/*    <source src="/hd_web.mp4" type="video/mp4" />*/}
            {/*  </video>*/}
            {/*</div>*/}
            <Container className="relative z-10 mb-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                        Kontaktieren Sie uns jetzt!
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-white">
                        Tel.: 0177-8028796
                    </p>
                    <p className="mt-4 text-lg tracking-tight text-white">
                        Email: christianbernhard089@gmail.com
                    </p>
                </div>
            </Container>
        </section>
    )
}

