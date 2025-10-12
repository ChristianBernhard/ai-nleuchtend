'use client'

import Link from 'next/link'
import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'
import {Button} from '@/components/Button'

export function SimpleHeader() {
    return (
        <header className="py-10">
            <Container>
                <nav className="relative z-50 flex justify-between items-center">
                    <Link href="/" aria-label="Home">
                        <Logo src="/Logo.svg" alt="Logo" className="h-10 w-auto"/>
                    </Link>
                    <Button href="/" color="blue" className="text-sm">
                        Zurück zur Startseite
                    </Button>
                </nav>
            </Container>
        </header>
    )
}

