import Link from 'next/link';
import {Container} from '@/components/Container';
import {Logo} from '@/components/Logo';

export function SimpleFooter() {
    return (
        <footer className="bg-slate-50">
            <Container>
                <div className="py-8 flex flex-col items-center text-center">
                    <Link href="/" aria-label="Home">
                        <Logo src="/Logo.svg" alt="AI-nleuchtend Logo" className="h-10 w-auto"/>
                    </Link>
                </div>
                <div
                    className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
                    <div className="flex gap-x-6">
                        {/* Impressum and Datenschutz links */}
                        <Link href="/imprint" className="text-slate-500 hover:text-slate-700 transition-colors">
                            Impressum
                        </Link>
                        <Link href="/dataprotection" className="text-slate-500 hover:text-slate-700 transition-colors">
                            Datenschutz
                        </Link>
                        <Link
                            href="https://www.youtube.com/@CodingWerkstatt"
                            className="group"
                            aria-label="Coding Werkstatt Youtube"
                        >
                            <svg
                                aria-hidden="true"
                                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                            >
                                <path
                                    d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z"/>
                            </svg>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/ainleuchtend"
                            className="group"
                            aria-label="AI-nleuchtend LinkedIn"
                        >
                            <svg
                                aria-hidden="true"
                                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                            >
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-slate-500 sm:mt-0">
                        Copyright &copy; {new Date().getFullYear()} AI-nleuchtend. All rights
                        reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
}

