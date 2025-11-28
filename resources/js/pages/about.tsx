import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import type { Language } from '@/types/language';
import { Head } from '@inertiajs/react';
import {
    Award,
    Building2,
    ChevronUp,
    Sparkles,
    Users,
} from 'lucide-react';
import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';

type Copy = {
    nav: string[];
    contact: string;
    heroTitle: string;
    heroSubtitle: string;
    missionTitle: string;
    missionBody: string;
    projectTitle: string;
    projectBody: string;
    statsTitle: string;
    stats: Array<{ value: string; label: string }>;
    teamTitle: string;
    teamSubtitle: string;
};

const teamMembers = [
    {
        ge: { name: 'თამარ კობახიძე', role: 'პროექტ მენეჯერი' },
        en: { name: 'Tamar Kobakhidze', role: 'Project Manager' },
    },
    {
        ge: { name: 'ლევან გიორგაძე', role: 'ძირითადი ინჟინერი' },
        en: { name: 'Levan Giorgadze', role: 'Lead Engineer' },
    },
    {
        ge: { name: 'ნინო ბერიძე', role: 'ენერგოეფექტიანობის სპეციალისტი' },
        en: { name: 'Nino Beridze', role: 'Energy Efficiency Specialist' },
    },
    {
        ge: { name: 'გიორგი ქაფანაძე', role: 'ტექნიკური ზედამხედველი' },
        en: { name: 'Giorgi Kapanadze', role: 'Technical Supervisor' },
    },
    {
        ge: { name: 'ანა ჩოგოვაძე', role: 'ბიზნესის განვითარება' },
        en: { name: 'Ana Chogovadze', role: 'Business Development' },
    },
    {
        ge: { name: 'თემო მერკვილაძე', role: 'მონტაჟის ხელმძღვანელი' },
        en: { name: 'Temo Merkvildze', role: 'Installation Lead' },
    },
    {
        ge: { name: 'ქეთი ჯინჭარაძე', role: 'კლიენტთა გამოცდილება' },
        en: { name: 'Keti Jintcharadze', role: 'Client Experience' },
    },
    {
        ge: { name: 'ლუკა ხერგიანი', role: 'დაზღვევის ინჟინერი' },
        en: { name: 'Luka Khergiani', role: 'Reliability Engineer' },
    },
    {
        ge: { name: 'სოფი ლოლაძე', role: 'მარკეტინგის მენეჯერი' },
        en: { name: 'Sofi Loladze', role: 'Marketing Manager' },
    },
    {
        ge: { name: 'დავით მაისურაძე', role: 'დაგეგმვის ინჟინერი' },
        en: { name: 'Davit Maisuradze', role: 'Planning Engineer' },
    },
    {
        ge: { name: 'მარიამ დვალი', role: 'ჯეოდეზისტი' },
        en: { name: 'Mariam Dvali', role: 'Geodesist' },
    },
    {
        ge: { name: 'კონსტანტინე სვანიძე', role: 'სისტემების არქიტექტორი' },
        en: { name: 'Konstantine Svanidze', role: 'Systems Architect' },
    },
] as const;

const copy: Record<Language, Copy> = {
    ge: {
        nav: ['ჩვენ შესახებ', 'სერვისები', 'პროდუქტები', 'ბლოგი'],
        contact: 'კონტაქტი',
        heroTitle: 'ჩვენ შესახებ',
        heroSubtitle: 'თანამედროვე ენერგეტიკული გადაწყვეტილებები, შთაგონებული ადამიანების გუნდით.',
        missionTitle:
            'თანამედროვე ტექნოლოგიებითა და გონივრული გადაწყვეტილებებით შევქმნათ მდგრადი და უსაფრთხო საინჟინრო ინფრასტრუქტურა.',
        missionBody:
            'ჩვენ ვერთიანებთ ინჟინრიულ გამოცდილებას, მწვანე ტექნოლოგიებს და ჭკვიან მონიტორინგს, რათა ენერგია იყოს საიმედო, გამძლე და ხელმისაწვდომი. თითოეული პროექტი იწყება დეტალური ანალიზით და მთავრდება უწყვეტი მომსახურებით.',
        projectTitle: 'ჩვენი წამყვანი პროექტი',
        projectBody:
            'ქარისა და მზის ჰიბრიდული სისტემა, რომელიც ამცირებს ქსელზე დამოკიდებულებას და აკავშირებს საცხოვრებელ და კომერციულ დატვირთვებს ოპტიმიზირებული მენეჯმენტით.',
        statsTitle: 'სტატისტიკა',
        stats: [
            { value: '24', label: 'დასრულებული პროექტი' },
            { value: '224+', label: 'მიღებული ჯილდო' },
            { value: '14k', label: 'აქტიური კლიენტი' },
        ],
        teamTitle: 'ექსპერტთა გუნდი',
        teamSubtitle: 'ინჟინრები, მენეჯერები და ენერგეტიკის სპეციალისტები, რომლებიც ქმნიან მომავალს.',
    },
    en: {
        nav: ['About', 'Services', 'Products', 'Blog'],
        contact: 'Contact',
        heroTitle: 'About Us',
        heroSubtitle: 'Modern energy solutions delivered by a team that cares.',
        missionTitle:
            'We build resilient and safe engineering infrastructure with modern tech and smart decisions.',
        missionBody:
            'Our approach blends engineering rigor, green technology, and smart monitoring so power stays reliable and efficient. Every engagement starts with analysis, then execution, and ongoing service.',
        projectTitle: 'Flagship project',
        projectBody:
            'A hybrid wind-and-solar system that lowers grid dependence and links residential and commercial loads with optimized management.',
        statsTitle: 'Statistics',
        stats: [
            { value: '24', label: 'Projects complete' },
            { value: '224+', label: 'Awards' },
            { value: '14k', label: 'Clients running' },
        ],
        teamTitle: 'Expert team',
        teamSubtitle: 'Engineers, managers, and energy specialists shaping the future.',
    },
};

const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
        const stored = window.localStorage.getItem('luxon-language');

        if (stored === 'ge' || stored === 'en') {
            return stored;
        }

        if (typeof navigator !== 'undefined') {
            return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'ge';
        }
    }

    return 'ge';
};

export default function About(): JSX.Element {
    const initialLanguage = getInitialLanguage();
    const [language, setLanguage] = useState<Language>(initialLanguage);
    const [showLangMenu, setShowLangMenu] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const pageRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        window.localStorage.setItem('luxon-language', language);
        document.documentElement.lang = language === 'ge' ? 'ka' : 'en';
    }, [language]);

    useEffect(() => {
        const container = pageRef.current;
        const handleScroll = (): void => {
            const containerIsScrollable =
                container != null && container.scrollHeight > container.clientHeight + 1;
            const scrollPosition = containerIsScrollable
                ? container.scrollTop
                : window.scrollY;
            setShowScrollTop(scrollPosition > 200);
            if (scrollPosition > 24) {
                setShowLangMenu(false);
            }
        };

        container?.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            container?.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const animatedElements = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'));
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        animatedElements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, [language]);

    const t = copy[language];
    const contactUrl =
        'https://soft.salesapp.ge/generated-lead-form/luxonpower-servisis-ganatskhadis-forma/Pzjk';
    const team = teamMembers.map((member) => member[language]);

    const scrollToTop = (): void => {
        const container = pageRef.current;
        const containerIsScrollable =
            container != null && container.scrollHeight > container.clientHeight + 1;

        if (container && containerIsScrollable) {
            container.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Head title="LuxonPower | About">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;600;700&family=Sora:wght@500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <style>{`
                @keyframes fadeUp {
                    0% { opacity: 0; transform: translateY(18px); }
                    100% { opacity: 1; transform: translateY(0); }
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
            `}</style>
            <div
                ref={pageRef}
                className="relative min-h-screen bg-white text-[#082062]"
                style={{
                    fontFamily:
                        '"Noto Sans Georgian", "Sora", "Space Grotesk", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
                }}
            >
                <SiteHeader
                    language={language}
                    navItems={t.nav}
                    contactLabel={t.contact}
                    contactUrl={contactUrl}
                    showLangMenu={showLangMenu}
                    onLanguageChange={setLanguage}
                    toggleLangMenu={() => setShowLangMenu((open) => !open)}
                    closeLangMenu={() => setShowLangMenu(false)}
                />

                <main>
                    <section className="relative isolate h-[70vh] w-full overflow-hidden">
                        <img
                            src="/images/luxonpower-about-page.png"
                            alt="LuxonPower about background"
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#082062]/75 via-[#082062]/35 to-[#0d2345]/20" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                            <h1
                                className="text-[clamp(48px,10vw,120px)] font-extrabold leading-[0.95] drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)] reveal"
                                data-animate
                                style={{ animation: 'fadeUp 1s ease forwards' }}
                            >
                                {t.heroTitle}
                            </h1>
                            <p
                                className="mt-4 max-w-3xl text-lg text-white/85 reveal"
                                data-animate
                                style={{ animation: 'fadeUp 1s ease 120ms forwards' }}
                            >
                                {t.heroSubtitle}
                            </p>
                        </div>
                    </section>

                    <section className="bg-white px-4 pb-20 pt-16 lg:px-12">
                        <div className="mx-auto flex max-w-6xl flex-col gap-8">
                            <div className="flex flex-col gap-2 reveal" data-animate>
                                <p className="text-xs uppercase tracking-[0.24em] text-[#5b94b4]">
                                    {language === 'ge' ? 'ჩვენ შესახებ' : 'About us'}
                                </p>
                                <h2 className="text-4xl font-semibold leading-tight lg:text-5xl">
                                    {language === 'ge' ? 'ჩვენი მისია' : 'Our mission'}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-2">
                                <article
                                    className="reveal flex flex-col justify-between p-6 lg:p-8"
                                    data-animate
                                >
                                    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#5b94b4]">
                                        <Sparkles className="h-4 w-4" />
                                        <span>{language === 'ge' ? 'მისია' : 'Mission'}</span>
                                    </div>
                                    <div className="mt-4 space-y-3">
                                        <h3 className="text-2xl font-semibold leading-snug text-[#082062]">
                                            {t.missionTitle}
                                        </h3>
                                        <p className="text-lg leading-8 text-[#082062]/85">
                                            {t.missionBody}
                                        </p>
                                    </div>
                                </article>

                                <div
                                    className="reveal flex items-center justify-center p-6"
                                    data-animate
                                >
                                    <div className="relative h-60 w-60 sm:h-72 sm:w-72 hidden lg:block">
                                        <div
                                            className="absolute inset-[-10px] rounded-full animate-[spin_5s_linear_infinite_reverse]"
                                            style={{
                                                background:
                                                    'conic-gradient(from 90deg, rgb(225, 98, 35) 20%, rgba(225, 98, 35, 0) 60%)',
                                                mask: 'radial-gradient(farthest-side, transparent calc(100% - 10px), black calc(100% - 8px))',
                                                WebkitMask:
                                                    'radial-gradient(farthest-side, transparent calc(100% - 10px), black calc(100% - 8px))',
                                            }}
                                        />
                                        <div className="absolute inset-[10px] flex items-center justify-center rounded-full bg-white">
                                            <img
                                                src="/images/luxonpower-logo.png"
                                                alt="LuxonPower logo"
                                                className="h-48 w-48 sm:h-60 sm:w-60 object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="group relative overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(8,32,98,0.12)] reveal"
                                    data-animate
                                >
                                    <img
                                        src="/images/luxonpower-project-stock-iamge.jpg"
                                        alt="LuxonPower project"
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-105"
                                        loading="lazy"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                                </div>

                                <article
                                    className="reveal flex flex-col gap-4 rounded-3xl bg-white/80 p-6 shadow-[0_22px_60px_rgba(8,32,98,0.12)] backdrop-blur lg:p-8"
                                    data-animate
                                >
                                    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#5b94b4]">
                                        <Building2 className="h-4 w-4" />
                                        <span>{t.projectTitle}</span>
                                    </div>
                                    <p className="text-base leading-7 text-[#082062]/85">
                                        {t.projectBody}
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#082062] px-4 py-16 text-white lg:px-12">
                        <div className="mx-auto flex max-w-6xl flex-col gap-8">
                            <div className="reveal space-y-2" data-animate>
                                <p className="text-xs uppercase tracking-[0.24em] text-[#9bc6de]">
                                    {t.statsTitle}
                                </p>
                                <h3 className="text-3xl font-semibold leading-tight lg:text-4xl">
                                    {language === 'ge'
                                        ? 'ჩვენი ზრდა და შედეგები'
                                        : 'Our growth and results'}
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {t.stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="reveal flex flex-col rounded-3xl bg-white/10 p-5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur"
                                        data-animate
                                    >
                                        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.14em] text-[#9bc6de]">
                                            <Award className="h-5 w-5" />
                                            <span>{t.statsTitle}</span>
                                        </div>
                                        <span className="mt-3 text-5xl font-extrabold leading-tight">
                                            {stat.value}
                                        </span>
                                        <span className="mt-2 text-sm text-white/80">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="bg-white px-4 pb-10 pt-16 lg:px-12">
                        <div className="mx-auto flex max-w-6xl flex-col gap-8">
                            <div className="reveal space-y-2" data-animate>
                                <p className="text-xs uppercase tracking-[0.24em] text-[#5b94b4]">
                                    {t.teamTitle}
                                </p>
                                <h3 className="text-3xl font-semibold leading-tight text-[#082062] lg:text-4xl">
                                    {t.teamSubtitle}
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                                {team.map((member, index) => (
                                    <article
                                        key={`${member.name}-${index}`}
                                        className="reveal group overflow-hidden rounded-2xl bg-[#f5f7fb] p-4 shadow-[0_14px_40px_rgba(8,32,98,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(231,103,1,0.22)]"
                                        data-animate
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white">
                                            <img
                                                src="/images/luxonpower-about-team-member.png"
                                                alt={member.name}
                                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <p className="text-lg font-semibold text-[#082062]">
                                                {member.name}
                                            </p>
                                            <p className="text-sm text-[#082062]/70">{member.role}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <SiteFooter
                        navItems={t.nav}
                        headline={
                            language === 'ge'
                                ? 'მოიზიდე ენერგია, რომელიც მომავალს ამაღლებს'
                                : 'Capture the energy that elevates your future'
                        }
                        blurb={
                            language === 'ge'
                                ? 'LuxonPower განახლებადი ენერგიის გადაწყვეტილებებს გთავაზობთ უსაფრთხო, სუფთა და უწყვეტი მომავლისთვის.'
                                : 'LuxonPower delivers renewable energy solutions for a safer, cleaner, and continuous tomorrow.'
                        }
                        language={language}
                    />
                </main>

                <button
                    type="button"
                    onClick={scrollToTop}
                    className={`fixed bottom-6 right-8 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#e76701] text-white shadow-[0_16px_40px_rgba(231,103,1,0.45)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(231,103,1,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${showScrollTop ? 'opacity-100' : 'pointer-events-none opacity-0 translate-y-3'}`}
                    aria-label={language === 'ge' ? 'ზევით დაბრუნება' : 'Back to top'}
                >
                    <ChevronUp className="h-7 w-7" />
                </button>
            </div>
        </>
    );
}
