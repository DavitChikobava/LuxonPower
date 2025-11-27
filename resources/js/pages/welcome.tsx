import { SiteHeader } from '@/components/site-header';
import type { Language } from '@/types/language';
import { SiteFooter } from '@/components/site-footer';
import { BarChart3, Bolt, ShieldCheck, Wrench } from 'lucide-react';
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
        about: {
            kicker: string;
            title: string;
            statLabel: string;
            statValue: string;
            description: string;
            cta: string;
        };
        services: Array<{
            title: string;
            items: string[];
        }>;
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
        about: {
            kicker: 'ვინ ვართ',
            title: 'განახლებადი ენერგია მარტივად, ხელმისაწვდომად და სანდოდ',
            statLabel: 'კლიენტი',
            statValue: '18k+',
            description:
                'ჩვენ გთავაზობთ მდგრად მზის ენერგიის გადაწყვეტილებებს, ვუერთდებით საერთაშორისო სტანდარტებს და მზის ენერგიას თქვენს ყოველდღიურობაში მივიტანთ.',
            cta: 'ვრცლად ჩვენზე',
        },
        services: [
            {
                title: 'განახლებადი ენერგია და მწვანე ტექნოლოგიები',
                items: [
                    'მზის ელექტროსადგური',
                    'ქარის ელექტროსადგური',
                    'EV დამმუხტველი მოწყობილობები',
                    'ენერგოეფექტური და მწვანე ტექნოლოგიების დანერგვა',
                ],
            },
            {
                title: 'ენერგოეფექტურობა და ენერგოაუდიტი',
                items: [
                    'საკონსულტაციო მომსახურება, ენერგო აუდიტი',
                    'ენერგოეფექტურობის სერტიფიკატი',
                    'ლაბორატორიული შემოწმება',
                    'ენერგიის შენახვის სისტემები',
                    'ენერგო დამზოგავი მოწყობილობები',
                    'მონიტორინგის და პროგნოზირების სისტემები',
                ],
            },
            {
                title: 'საინჟინრო და სამონტაჟო სამუშაოები',
                items: [
                    'მოდერნიზაცია და ახალი პროექტების იმპლემენტაცია',
                    'ელექტრო ქსელი და მართვის სისტემები',
                    'სახანძრო უსაფრთხოების სისტემები',
                    'ავტომატიზაციის სისტემები',
                    'დამიწება/მეხამრიდი',
                    'ავარიული და დაცვითი სიგნალიზაცია',
                    'ჭკვიანი სახლი და მოწყობილობები',
                    'უწყვეტი კვების წყაროები (UPS)',
                    'დიზელ გენერატორები',
                    'შიდა ელექტროქსელის მოწყობა',
                    'ელექტრო ფარების წარმოება',
                    'ძაბვის რეგულატორები',
                    'სატრანსფორმატორო ქვესადგურები',
                ],
            },
            {
                title: 'პრევენციული და გადაუდებელი მომსახურება',
                items: [
                    'გეგმიურ-პრევენციული მომსახურება',
                    'გადაუდებელი მომსახურება 24/7',
                    'ინსპექტირება',
                    'ლაბორატორიული შემოწმება',
                    'მონიტორინგის სისტემების ინტეგრაცია',
                ],
            },
        ],
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
        about: {
            kicker: 'Who we are',
            title: 'Making renewable energy simple, affordable, and reliable',
            statLabel: 'Customers',
            statValue: '18k+',
            description:
                'We deliver sustainable solar energy solutions that meet global standards and bring clean power into everyday life.',
            cta: 'More about us',
        },
        services: [
            {
                title: 'Renewable Energy & Green Technologies',
                items: [
                    'Solar power plants',
                    'Wind power plants',
                    'EV charging infrastructure',
                    'Green tech and efficiency deployment',
                ],
            },
            {
                title: 'Energy Efficiency & Audits',
                items: [
                    'Consulting and energy audits',
                    'Efficiency certification',
                    'Laboratory testing',
                    'Energy storage systems',
                    'Energy-saving devices',
                    'Monitoring and forecasting systems',
                ],
            },
            {
                title: 'Engineering & Installation',
                items: [
                    'Modernization and new project implementation',
                    'Grid and control systems',
                    'Fire safety systems',
                    'Automation systems',
                    'Grounding/lightning protection',
                    'Emergency and security signaling',
                    'Smart home and devices',
                    'UPS systems',
                    'Diesel generators',
                    'Internal electrical network setup',
                    'Panelboard production',
                    'Voltage regulators',
                    'Transformer substations',
                ],
            },
            {
                title: 'Preventive & Emergency Services',
                items: [
                    'Scheduled preventive maintenance',
                    '24/7 emergency service',
                    'Inspections',
                    'Laboratory testing',
                    'Monitoring system integration',
                ],
            },
        ],
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

    useEffect(() => {
        const animatedElements = Array.from(
            document.querySelectorAll<HTMLElement>('[data-animate]')
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.2 }
        );

        animatedElements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
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
            <style>{`
                @keyframes aboutFadeUp {
                    0% { opacity: 0; transform: translateY(22px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes aboutFloat {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                    100% { transform: translateY(0); }
                }
                @keyframes serviceSwipe {
                    0% { transform: translateX(18px) scale(1.02); opacity: 0; }
                    100% { transform: translateX(0) scale(1); opacity: 1; }
                }
                @keyframes serviceCard {
                    0% { opacity: 0; transform: translateY(24px) scale(0.98); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .reveal {
                    opacity: 0;
                    transform: translateY(18px);
                    transition: opacity 700ms ease, transform 700ms ease;
                }
                .reveal.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
            <div
                className="relative min-h-screen bg-white text-[#082062] snap-y snap-mandatory scroll-smooth"
                style={{
                    fontFamily:
                        '"Noto Sans Georgian", "Sora", "Space Grotesk", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
                }}
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] overflow-hidden md:h-[75vh] lg:h-[80vh]">
                    <img
                        src="/images/home-background.png"
                        alt=""
                        className="h-full w-full object-cover reveal"
                        data-animate
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

                <main className="snap-y snap-mandatory">
                    <section className="relative isolate overflow-hidden snap-start">
                        <img
                            src="/images/home-background.png"
                            alt="Renewable energy landscape"
                            className="h-[70vh] w-full object-cover md:h-[75vh] lg:h-[80vh]"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#082062]/75 via-[#082062]/35 to-transparent" />

                        <div className="absolute inset-0 grid grid-cols-1 items-center gap-6 p-4 pt-10 pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-20 lg:pb-20 lg:pt-12">
                            <div className="order-2 max-w-5xl lg:order-1 lg:pr-8 max-lg:w-full">
                                <h1 className="text-white">
                                    <span
                                        className={`block whitespace-normal text-[clamp(20px,5vw,48px)] font-semibold leading-[1.08] text-white/65 transition-all duration-700 lg:whitespace-nowrap lg:text-[clamp(26px,3.8vw,58px)] ${heroReadyLine1
                                                ? 'translate-y-0 opacity-100'
                                                : 'translate-y-8 opacity-0'
                                            }`}
                                    >
                                        {t.hero.line1}
                                    </span>
                                    <span
                                        className={`block text-[clamp(64px,11vw,150px)] font-extrabold leading-[0.95] transition-all duration-700 delay-200 lg:text-[clamp(82px,8.5vw,160px)] ${heroReadyLine2
                                                ? 'translate-y-0 opacity-100'
                                                : 'translate-y-8 opacity-0'
                                            }`}
                                    >
                                        {t.hero.energy}
                                    </span>
                                </h1>
                            </div>

                            <div className="order-1 flex justify-start lg:order-2 lg:justify-end max-lg:hidden">
                                <div className="relative h-46 w-46 lg:h-52 lg:w-52">
                                    {/* <div className="absolute inset-0 rounded-full bg-[#e76701]" /> */}
                                    <div
                                        className="absolute inset-[-9px] rounded-full animate-[spin_5s_linear_infinite_reverse]"
                                        style={{
                                            background:
                                                'conic-gradient(from 90deg, rgb(53, 153, 211) 20%, rgba(231,103,1,0) 60%)',
                                            mask: 'radial-gradient(farthest-side, transparent calc(100% - 10px), black calc(100% - 8px))',
                                            WebkitMask:
                                                'radial-gradient(farthest-side, transparent calc(100% - 10px), black calc(100% - 8px))',
                                        }}
                                    />
                                    <div className="absolute inset-2 flex items-center justify-center">
                                        <img
                                            src="/images/Luxonpower-logo-white.png"
                                            alt="LuxonPower logo"
                                            className="h-52 w-52 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="snap-start bg-white px-4 pb-26 pt-18 lg:px-12">
                        <div className="mx-auto flex max-w-7xl flex-col gap-16">
                            <div className="space-y-3 lg:pl-2 reveal" data-animate>
                                <p className="text-xs uppercase tracking-[0.18em] text-[#5b94b4]">
                                    {t.about.kicker}
                                </p>
                                <h2
                                    className="text-3xl font-semibold leading-[1.2] text-[#082062] lg:text-5xl"
                                    style={{ animation: 'aboutFadeUp 900ms ease 50ms forwards', opacity: 0 }}
                                >
                                    {t.about.title}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
                                <div
                                    className="overflow-hidden bg-[#f5f7fb] shadow-[0_26px_80px_rgba(0,0,0,0.12)] transition duration-700 lg:h-full lg:hover:-translate-y-2 lg:hover:shadow-[0_32px_90px_rgba(0,0,0,0.14)] reveal"
                                    data-animate
                                    style={{ animation: 'aboutFloat 7s ease-in-out infinite' }}
                                >
                                    <img
                                        src="/images/luxonpower-about-us-homepage.png"
                                        alt="About LuxonPower"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex h-full flex-col p-6 lg:p-8 reveal" data-animate>
                                    <div className="flex items-baseline gap-3 text-[#082062]">
                                        <span className="text-4xl font-extrabold lg:text-6xl">
                                            {t.about.statValue}
                                        </span>
                                        <span className="text-sm font-semibold uppercase tracking-[0.1em] text-[#5b94b4]">
                                            {t.about.statLabel}
                                        </span>
                                    </div>
                                    <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[#e76701]/70 to-transparent" />
                                    <p className="text-base leading-7 text-[#082062]/80 lg:text-lg">
                                        {t.about.description}
                                    </p>
                                    <div className="mt-auto pt-5">
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 rounded-full bg-[#e76701] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(231,103,1,0.4)]"
                                        >
                                            {t.about.cta}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="snap-start bg-[#082062] px-4 pb-20 pt-20 text-white lg:px-0">
                        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-12">
                            <div className="w-full lg:w-1/2 lg:pl-12">
                                <div className="space-y-4 reveal" data-animate>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#5b94b4]">
                                        {language === 'ge' ? 'ჩვენი სერვისები' : 'Our services'}
                                    </p>
                                    <h2 className="text-4xl font-semibold leading-[1.15] lg:text-5xl" style={{ animation: 'aboutFadeUp 1s ease 60ms forwards', opacity: 0 }}>
                                        {language === 'ge' ? 'ჩვენი სერვისები' : 'Our Services'}
                                    </h2>
                                </div>
                                <div className="mt-8 overflow-hidden rounded-3xl bg-[#0d2345] shadow-[0_26px_80px_rgba(0,0,0,0.35)] lg:mt-10 lg:mr-8 reveal" data-animate>
                                    <img
                                        src="/images/luxonpower-service-img-1.png"
                                        alt={language === 'ge' ? 'სერვისების გამოსახულება' : 'Services visual'}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                        style={{ animation: 'serviceSwipe 900ms ease forwards', opacity: 0 }}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 lg:pr-12">
                                <div className="flex flex-col gap-5 hide-scrollbar pr-0 lg:max-h-[520px] lg:overflow-y-auto lg:pr-0">
                                    {t.services.map((service, index) => {
                                        const iconComponents = [Bolt, BarChart3, Wrench, ShieldCheck] as const;
                                        const Icon = iconComponents[index] ?? ShieldCheck;

                                        return (
                                            <div
                                                key={service.title}
                                                className="group reveal animate-in relative flex flex-col overflow-hidden rounded-3xl bg-white p-6 text-[#082062] shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition duration-300 hover:bg-[#e76701] hover:text-[#082062] lg:min-h-[320px] lg:flex-none lg:p-7"
                                                data-animate
                                            >
                                                <div className="pointer-events-none absolute inset-0 translate-y-full bg-[#e76701] transition duration-400 ease-out group-hover:translate-y-0" />
                                                <div className="relative z-10 flex items-center gap-3 rounded-2xl bg-[#f1f4fb] px-4 py-3 text-lg font-semibold text-[#082062] transition group-hover:bg-[#082062] group-hover:text-white">
                                                    <Icon className="h-6 w-6 text-[#e76701] group-hover:text-white" />
                                                    <span className="leading-tight">{service.title}</span>
                                                </div>
                                                <ul className="relative z-10 mt-4 space-y-2 text-sm leading-6 text-[#082062]/85 group-hover:text-[#082062]">
                                                    {service.items.map((item) => (
                                                        <li key={item} className="flex items-start gap-2">
                                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#5b94b4] group-hover:bg-[#082062]" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    <SiteFooter navItems={t.nav} headline={t.footerHeadline} blurb={t.footerBlurb} />
                </main>
            </div>
        </>
    );
}
