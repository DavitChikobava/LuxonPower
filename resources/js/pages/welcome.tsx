import { SiteHeader } from '@/components/site-header';
import type { Language } from '@/types/language';
import { Head } from '@inertiajs/react';
import type { JSX } from 'react';
import { useEffect, useState } from 'react';

const copy: Record<
    Language,
    {
        nav: string[];
        contact: string;
        tagline: string;
        hero: { line1: string; energy: string };
        footerHeadline: string;
        footerBlurb: string;
    }
> = {
    ge: {
        nav: ['ჩვენ შესახებ', 'სერვისები', 'პროდუქტები', 'ბლოგი'],
        contact: 'კონტაქტი',
        tagline: 'გამოუშვი მომავლის ენერგია',
        hero: {
            line1: 'ერთად შევქმნათ უწყვეტი',
            energy: 'ენერგია',
        },
        footerHeadline: 'მოიზიდე ენერგია, რომელიც შენს მომავალს ამაღლებს',
        footerBlurb:
            'LuxonPower განახლებადი ენერგიის გადაწყვეტილებებს გთავაზობთ უსაფრთხო, სუფთა და უწყვეტი მომავლისთვის.',
    },
    en: {
        nav: ['About', 'Services', 'Products', 'Blog'],
        contact: 'Contact',
        tagline: 'Power the future today',
        hero: {
            line1: 'Let’s build uninterrupted',
            energy: 'energy',
        },
        footerHeadline: 'Capture the energy that elevates your future',
        footerBlurb:
            'LuxonPower delivers renewable energy solutions for a safer, cleaner, and continuous tomorrow.',
    },
};

export default function Welcome(): JSX.Element {
    const [language, setLanguage] = useState<Language>('ge');
    const [showLangMenu, setShowLangMenu] = useState(false);
    const [isStuck, setIsStuck] = useState(false);
    const [heroReadyLine1, setHeroReadyLine1] = useState(false);
    const [heroReadyLine2, setHeroReadyLine2] = useState(false);

    useEffect(() => {
        setHeroReadyLine1(true);
        const timer = window.setTimeout(() => setHeroReadyLine2(true), 300);
        const onScroll = (): void => {
            setIsStuck(window.scrollY > 24);
            setShowLangMenu(false);
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.clearTimeout(timer);
        };
    }, []);

    const t = copy[language];
    const contactUrl =
        'https://soft.salesapp.ge/generated-lead-form/luxonpower-servisis-ganatskhadis-forma/Pzjk';
    const toggleLangMenu = (): void => setShowLangMenu((value) => !value);
    const closeLangMenu = (): void => setShowLangMenu(false);

    return (
        <>
            <Head title="LuxonPower | Renewable Energy">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;600;700&family=Sora:wght@500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div
                className="relative min-h-screen bg-white text-[#082062]"
                style={{
                    fontFamily:
                        '"Noto Sans Georgian", "Sora", "Space Grotesk", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
                }}
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[80vh] overflow-hidden">
                    <img
                        src="/images/home-background.png"
                        alt=""
                        className="h-full w-full object-cover"
                        loading="eager"
                    />
                </div>
                <SiteHeader
                    language={language}
                    navItems={t.nav}
                    contactLabel={t.contact}
                    contactUrl={contactUrl}
                    isStuck={isStuck}
                    showLangMenu={showLangMenu}
                    onLanguageChange={setLanguage}
                    toggleLangMenu={toggleLangMenu}
                    closeLangMenu={closeLangMenu}
                />

                <main>
                    <section className="relative isolate overflow-hidden">
                        <img
                            src="/images/home-background.png"
                            alt="Renewable energy landscape"
                            className="h-[80vh] w-full object-cover"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#082062]/75 via-[#082062]/35 to-transparent" />

                        <div className="absolute inset-0 flex flex-col justify-end p-4 pb-8 lg:p-12">
                            <div
                                className={`max-w-4xl transition-all duration-700 ease-out ${heroReadyLine1
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-8 opacity-0'
                                    }`}
                            >
                                <h1 className="text-white">
                                    <span
                                        className={`block whitespace-nowrap text-[clamp(44px,5.8vw,74px)] font-semibold leading-[1.05] transition-all duration-700 ${heroReadyLine1
                                                ? 'translate-y-0 opacity-100'
                                                : 'translate-y-8 opacity-0'
                                            }`}
                                    >
                                        {t.hero.line1}
                                    </span>
                                    <span
                                        className={`block text-[clamp(92px,11vw,150px)] font-extrabold leading-[0.95] transition-all duration-700 delay-200 ${heroReadyLine2
                                                ? 'translate-y-0 opacity-100'
                                                : 'translate-y-8 opacity-0'
                                            }`}
                                    >
                                        {t.hero.energy}
                                    </span>
                                </h1>
                            </div>

                            <div className="pointer-events-none absolute -right-10 bottom-10 hidden select-none md:block lg:right-12">
                                <div className="relative h-64 w-64">
                                    <div className="absolute inset-0 rounded-full bg-[#e76701] shadow-[0_22px_60px_rgba(231,103,1,0.45)]" />
                                    <div
                                        className="absolute inset-[-10px] rounded-full blur-[10px]"
                                        style={{
                                            background:
                                                'conic-gradient(from 120deg, rgba(91,148,180,0.5) 18%, rgba(231,103,1,0) 72%)',
                                        }}
                                    />
                                    <div
                                        className="absolute inset-[-8px] rounded-full animate-[spin_7s_linear_infinite]"
                                        style={{
                                            background:
                                                'conic-gradient(from 90deg, rgba(91,148,180,0.8) 18%, rgba(231,103,1,0) 80%)',
                                            mask: 'radial-gradient(farthest-side, transparent calc(100% - 10px), black calc(100% - 8px))',
                                            WebkitMask:
                                                'radial-gradient(farthest-side, transparent calc(100% - 10px), black calc(100% - 8px))',
                                        }}
                                    />
                                    <div className="absolute inset-8 rounded-full bg-[#082062]/80 backdrop-blur" />
                                    <div className="absolute inset-8 flex items-center justify-center">
                                        <img
                                            src="/images/Luxonpower-logo-white.png"
                                            alt="LuxonPower logo"
                                            className="h-40 w-40 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="mt-12 bg-[#082062] text-white">
                        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                            <div className="max-w-xl space-y-3">
                                <p className="text-sm uppercase tracking-[0.32em] text-[#5b94b4]">
                                    LuxonPower
                                </p>
                                <h2 className="text-2xl font-semibold leading-tight lg:text-3xl">
                                    {t.footerHeadline}
                                </h2>
                                <p className="text-sm text-white/80">{t.footerBlurb}</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                {t.nav.map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#e76701] hover:bg-[#e76701]"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
                            © {new Date().getFullYear()} LuxonPower — Renewable energy solutions
                        </div>
                    </footer>
                </main>
            </div>
        </>
    );
}
