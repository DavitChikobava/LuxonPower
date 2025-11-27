import { SiteHeader } from '@/components/site-header';
import type { Language } from '@/types/language';
import { SiteFooter } from '@/components/site-footer';
import {
    Activity,
    BarChart3,
    BatteryCharging,
    Bolt,
    FileText,
    Gauge,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Link2,
    MessageCircle,
    PlugZap,
    ShieldCheck,
    Sun,
    Wrench,
} from 'lucide-react';
import { Head } from '@inertiajs/react';
import type { JSX } from 'react';
import { useEffect, useRef, useState } from 'react';

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
        productsIntro: { kicker: string; title: string };
        products: {
            categories: Array<{
                key: string;
                label: string;
                items: Array<{
                    name: string;
                    badge?: string;
                    summary: string;
                    highlights: string[];
                }>;
            }>;
            news: Array<{
                title: string;
                excerpt: string;
                tag: string;
                date: string;
                isPlaceholder?: boolean;
            }>;
            usefulLinks: Array<{
                title: string;
                description: string;
            }>;
            docs: Array<{
                title: string;
                description: string;
            }>;
            faqs: Array<{
                question: string;
                answer: string;
            }>;
        };
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
        productsIntro: {
            kicker: 'პროდუქტები',
            title: 'ენერგიის პროდუქტები მზად სწრაფი დანერგვისთვის',
        },
        products: {
            categories: [
                {
                    key: 'solar',
                    label: 'მზის პანელი',
                    items: [
                        {
                            name: '550W მონო პანელი',
                            badge: 'N-ტიპი',
                            summary: 'მაღალი ეფექტიანობა მცირე სახურავებისთვის და დაბალი დეგრადაცია.',
                            highlights: ['550W output', 'კორუზია/ამინდი IP68', '25 წლიანი გარანტია'],
                        },
                        {
                            name: '600W ბიფაციური პანელი',
                            badge: 'ბიფაციური',
                            summary: 'თეთრი მემბრანაზე მაღალი უკანა გენერაციით კომერციული ობიექტებისთვის.',
                            highlights: ['600W bifacial', 'ვერცხლის ჩარჩო', 'ჰოტ-სპოტის დაცვა'],
                        },
                    ],
                },
                {
                    key: 'inverter',
                    label: 'გარდამქმნელი',
                    items: [
                        {
                            name: 'ჰიბრიდული ინვერტორი 8კვტ',
                            badge: 'ჰიბრიდი',
                            summary: 'AC/DC კავშირი ბატარეასთან სწრაფი გადართვით და დისტანციური მონიტორინგით.',
                            highlights: ['UPS <10ms', 'AFCI/დაცვები', 'ვებ და მობილური კონტროლი'],
                        },
                        {
                            name: 'სტრინგ ინვერტორი 50კვტ',
                            badge: 'სტრინგი',
                            summary: 'ინდუსტრიული ხაზებისთვის მაღალი ეფექტიანობა და დინამიკური MPPT.',
                            highlights: ['98% ეფექტურობა', '6 MPPT', 'IEC/EN სერტიფიცირებული'],
                        },
                    ],
                },
                {
                    key: 'battery',
                    label: 'აკუმულატორი',
                    items: [
                        {
                            name: 'LFP კედლის ბატარეა 10კვს',
                            badge: 'LFP',
                            summary: 'სახლებისთვის კომპაქტური ბატარეა, მაღალი ციკლებით და უსაფრთხოებით.',
                            highlights: ['10კვს გამოყენებადი', '7000+ ციკლი', 'IP65, -10°C~50°C'],
                        },
                        {
                            name: 'Rack LFP ბატარეა 100კვს',
                            badge: 'მოდულური',
                            summary: 'გადავსაფარი მოდულები საწარმოო და საოფისე დატვირთვისთვის.',
                            highlights: ['100კვს usable', 'CAN/RS485', 'სერვერ-რეკი ფორმ-ფაქტორი'],
                        },
                    ],
                },
                {
                    key: 'wind',
                    label: 'ქარის ტურბინა',
                    items: [
                        {
                            name: 'ქარის ტურბინა 20კვტ',
                            badge: 'დაბალი ქარი',
                            summary: 'სოფლად და კუთვნილ ობიექტებზე დაბალი ქარის დასაწყისით.',
                            highlights: ['Cut-in 2.5 მ/წ', 'ჰიბრიდი PV-თან', 'ჯარიმაგამძლე ლაქი'],
                        },
                        {
                            name: 'ქარის ტურბინა 200კვტ',
                            badge: 'კომერციული',
                            summary: 'ინდუსტრიული ობიექტებისთვის სტაბილური გამომუშავებით.',
                            highlights: ['დისტანციური SCADA', 'ჰიდრავლიკური დამუხრუჭება', 'IEC61400'],
                        },
                    ],
                },
            ],
            news: [
                {
                    title: 'საგრანტო პროგრამა მცირე სადგურებისთვის',
                    excerpt:
                        'LuxonPower დაეხმარება მცირე ბიზნესებს ახალი საგრანტო პაკეტის შესარჩევად და განაცხადის მომზადებაში.',
                    tag: 'გრანტები',
                    date: '2025-02-18',
                },
                {
                    title: 'ახალი სერვისი: ენერგიის მონიტორინგი 24/7',
                    excerpt:
                        'ქლაუდ პლატფორმა რეალურ დროში ალერტებით და პროგნოზით, ინტეგრაცია არსებული ინვერტორებით.',
                    tag: 'მონიტორინგი',
                    date: '2025-01-30',
                },
                {
                    title: 'EV სწრაფი დამმუხტველები რეგიონებში',
                    excerpt:
                        '120კვტ-იანი დისფენსერები იწყებს ინსტალაციას სამ რეგიონულ ჰაბში ენერგოეფექტური დატვირთვის განაწილებით.',
                    tag: 'EV ინფრა',
                    date: '2024-12-12',
                },
            ],
            usefulLinks: [
                {
                    title: 'ინსტალაციის ჩეკლისტი',
                    description: 'საწყისი მონაცემები და ფოტოები, რომლებიც დაგჭირდებათ შეთავაზებამდე.',
                },
                {
                    title: 'ელექტრო უსაფრთხოების სახელმძღვანელო',
                    description: 'სწრაფი წესები მონტაჟის ჯგუფებისთვის და კლიენტებისთვის.',
                },
                {
                    title: 'Net Metering 안내',
                    description: 'როგორ მუშაობს ბალანსირება და რა დრო სჭირდება მიბმას.',
                },
            ],
            docs: [
                {
                    title: 'ენერგეტიკის და განახლებადი ენერგიის კანონი',
                    description: 'ძირითადი ჩარჩო კანონი O&M, უსაფრთხოებისა და დისტანციური კონტროლის მოთხოვნებით.',
                },
                {
                    title: 'ტექნიკური რეგლამენტი AC/DC მონტაჟზე',
                    description: 'ინსტალაციის სტანდარტები სახურავზე და მიწის სადგურებისთვის, რეკომენდებული ინჟინერიით.',
                },
                {
                    title: 'დაცვითი დისტანცია და მიწის გამოყენება',
                    description: 'სატრანსფორმატორო და PV ზონების მინიმალური დაცვითი დისტანცია.',
                },
            ],
            faqs: [
                {
                    question: 'რამდენ ხანში სრულდება Rooftop პროექტი?',
                    answer: 'საშუალოდ 10-14 სამუშაო დღეა, მოიცავს დიზაინს, ნებართვებს და მონტაჟს.',
                },
                {
                    question: 'UPS გადართვა რამდენ ხანში ხდება?',
                    answer: 'ჰიბრიდული ინვერტორების შემთხვევაში <10ms, ამიტომ კრიტიკული დატვირთვები არ ითიშება.',
                },
                {
                    question: 'შეგიძლიათ არსებული სისტემის მოდერნიზება?',
                    answer: 'დიახ, ვმუშაობთ ინვერტორის/ბატარეის განახლებაზე, მონიტორინგის ინტეგრაციით.',
                },
            ],
        },
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
        productsIntro: {
            kicker: 'Products',
            title: 'Energy products built for fast deployment',
        },
        products: {
            categories: [
                {
                    key: 'solar',
                    label: 'Solar Panel',
                    items: [
                        {
                            name: '550W Mono Panel',
                            badge: 'N-type',
                            summary: 'High efficiency footprint for rooftops with slow degradation.',
                            highlights: ['550W output', 'IP68 weather sealing', '25-year performance'],
                        },
                        {
                            name: '600W Bifacial Panel',
                            badge: 'Bifacial',
                            summary: 'Rear-gain friendly for light commercial arrays with white membrane.',
                            highlights: ['600W bifacial', 'Durable silver frame', 'Hot-spot protection'],
                        },
                    ],
                },
                {
                    key: 'inverter',
                    label: 'Inverter',
                    items: [
                        {
                            name: 'Hybrid Inverter 8 kW',
                            badge: 'Hybrid',
                            summary: 'AC/DC battery ready with fast transfer and cloud monitoring.',
                            highlights: ['UPS <10 ms', 'AFCI + protections', 'Web and mobile control'],
                        },
                        {
                            name: 'String Inverter 50 kW',
                            badge: 'String',
                            summary: 'High-efficiency MPPT for commercial roofs and small ground-mounts.',
                            highlights: ['98% efficiency', '6 MPPT inputs', 'IEC/EN certified'],
                        },
                    ],
                },
                {
                    key: 'battery',
                    label: 'Battery',
                    items: [
                        {
                            name: 'LFP Wall Battery 10 kWh',
                            badge: 'LFP',
                            summary: 'Compact home storage with long lifecycle and safe chemistry.',
                            highlights: ['10 kWh usable', '7000+ cycles', 'IP65, -10°C~50°C'],
                        },
                        {
                            name: 'Rack LFP Battery 100 kWh',
                            badge: 'Modular',
                            summary: 'Scalable rack stack for offices and light industrial loads.',
                            highlights: ['100 kWh usable', 'CAN/RS485 comms', 'Server-rack form'],
                        },
                    ],
                },
                {
                    key: 'wind',
                    label: 'Wind Turbine',
                    items: [
                        {
                            name: 'Wind Turbine 20 kW',
                            badge: 'Low wind',
                            summary: 'Designed for remote sites with early cut-in and hybrid PV pairing.',
                            highlights: ['Cut-in 2.5 m/s', 'PV hybrid ready', 'Ice-resistant coating'],
                        },
                        {
                            name: 'Wind Turbine 200 kW',
                            badge: 'Commercial',
                            summary: 'For industrial parks with reliable output and remote SCADA.',
                            highlights: ['SCADA remote', 'Hydraulic braking', 'IEC61400 compliance'],
                        },
                    ],
                },
            ],
            news: [
                {
                    title: 'Grant program for small PV sites',
                    excerpt:
                        'LuxonPower teams will help SMEs choose the right grant package and prepare submissions.',
                    tag: 'Grants',
                    date: '2025-02-18',
                },
                {
                    title: 'New 24/7 energy monitoring service',
                    excerpt:
                        'Cloud platform with live alerts and forecasting, integrating with most inverter brands.',
                    tag: 'Monitoring',
                    date: '2025-01-30',
                },
                {
                    title: 'EV fast chargers rolling out regionally',
                    excerpt:
                        '120 kW dispensers start installation at three regional hubs with dynamic load sharing.',
                    tag: 'EV Infra',
                    date: '2024-12-12',
                },
            ],
            usefulLinks: [
                {
                    title: 'Installation checklist',
                    description: 'What we need from you before quoting: photos, loads, single-line diagram.',
                },
                {
                    title: 'Electrical safety guide',
                    description: 'Quick safety principles for installers and site owners.',
                },
                {
                    title: 'Net metering 101',
                    description: 'How balancing works and typical interconnection timelines.',
                },
            ],
            docs: [
                {
                    title: 'Renewable Energy Act',
                    description: 'Core legal framework covering O&M, safety, and remote control requirements.',
                },
                {
                    title: 'AC/DC installation code',
                    description: 'Standards for rooftop and ground-mount PV with recommended engineering practices.',
                },
                {
                    title: 'Setback & land-use guidance',
                    description: 'Minimum clearances for transformer yards and PV arrays by zone.',
                },
            ],
            faqs: [
                {
                    question: 'How long does a rooftop build take?',
                    answer: 'Typically 10–14 business days including design, permits, and installation.',
                },
                {
                    question: 'How fast is UPS transfer?',
                    answer: 'Hybrid inverters switch in under 10 ms, keeping critical loads online.',
                },
                {
                    question: 'Can you retrofit existing systems?',
                    answer: 'Yes, we upgrade inverters/batteries and add monitoring to legacy arrays.',
                },
            ],
        },
    },
};

export default function Welcome(): JSX.Element {
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

    const initialLanguage = getInitialLanguage();

    const [language, setLanguage] = useState<Language>(initialLanguage);
    const [showLangMenu, setShowLangMenu] = useState(false);
    const [isStuck, setIsStuck] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [heroReadyLine1, setHeroReadyLine1] = useState(false);
    const [heroReadyLine2, setHeroReadyLine2] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string>(
        copy[initialLanguage].products.categories[0]?.key ?? ''
    );
    const [isCategoryTransitioning, setIsCategoryTransitioning] = useState(false);
    const categoryTimerRef = useRef<number | null>(null);
    const pageRef = useRef<HTMLDivElement | null>(null);
    const newsScrollerRef = useRef<HTMLDivElement | null>(null);
    const scrollFadeRefs = useRef<NodeListOf<HTMLElement> | null>(null);

    useEffect(() => {
        setHeroReadyLine1(true);
        const timer = window.setTimeout(() => setHeroReadyLine2(true), 300);
        const container = pageRef.current;
        const handleScroll = (): void => {
            const scrollPosition = container?.scrollTop ?? window.scrollY;
            setIsStuck(scrollPosition > 24);
            setShowScrollTop(scrollPosition > 240);
            setShowLangMenu(false);
        };

        container?.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            container?.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScroll);
            window.clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        window.localStorage.setItem('luxon-language', language);
        document.documentElement.lang = language === 'ge' ? 'ka' : 'en';
    }, [language]);

    useEffect(() => {
        const categories = copy[language].products.categories;
        if (!categories.some((category) => category.key === activeCategory)) {
            setActiveCategory(categories[0]?.key ?? '');
        }
    }, [language, activeCategory]);

    useEffect(() => {
        return () => {
            if (categoryTimerRef.current) {
            window.clearTimeout(categoryTimerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const animatedElements = Array.from(
            document.querySelectorAll<HTMLElement>('[data-animate]')
        );

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
    }, [language, activeCategory]);

    useEffect(() => {
        scrollFadeRefs.current = document.querySelectorAll<HTMLElement>('[data-scroll-fade]');
        const containers = Array.from(scrollFadeRefs.current ?? []);
        const cleanup: Array<() => void> = [];

        containers.forEach((container) => {
            const scroller = container.querySelector<HTMLElement>('[data-scroll-fade-target]');
            if (!scroller) {
                return;
            }

            const updateState = (): void => {
                const needsScroll = scroller.scrollHeight - scroller.clientHeight > 1;
                const atBottom =
                    scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 1;

                container.classList.toggle('is-scrollable', needsScroll);
                container.classList.toggle('at-bottom', atBottom || !needsScroll);
            };

            const handleScroll = (): void => updateState();
            const resizeObserver = new ResizeObserver(updateState);

            scroller.addEventListener('scroll', handleScroll, { passive: true });
            resizeObserver.observe(scroller);
            updateState();

            cleanup.push(() => {
                scroller.removeEventListener('scroll', handleScroll);
                resizeObserver.disconnect();
            });
        });

        return () => {
            cleanup.forEach((fn) => fn());
        };
    }, [language]);

    const t = copy[language];
    const contactUrl =
        'https://soft.salesapp.ge/generated-lead-form/luxonpower-servisis-ganatskhadis-forma/Pzjk';
    const productsForCategory =
        t.products.categories.find((category) => category.key === activeCategory)?.items.slice(0, 3) ??
        t.products.categories[0]?.items.slice(0, 3) ??
        [];
    const newsItemsBase = t.products.news.slice(0, 10);
    const placeholderNews = Array.from({ length: Math.max(0, 6 - newsItemsBase.length) }).map((_, idx) => ({
        title: language === 'ge' ? `სათაური ჩადგმა ${idx + 1}` : `Placeholder headline ${idx + 1}`,
        excerpt:
            language === 'ge'
                ? 'ეს არის დროებითი ტექსტი, რომ დაინახოთ ბარათის განლაგება.'
                : 'Temporary copy to preview the card layout.',
        tag: language === 'ge' ? 'ჩადგმა' : 'Placeholder',
        date: '—',
        isPlaceholder: true,
    }));
    const newsItems = [...newsItemsBase, ...placeholderNews];
    const faqItems = t.products.faqs.slice(0, 3);
    const toggleLangMenu = (): void => setShowLangMenu((value) => !value);
    const closeLangMenu = (): void => setShowLangMenu(false);
    const scrollToTop = (): void => {
        const container = pageRef.current;
        if (container) {
            container.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleCategoryChange = (categoryKey: string): void => {
        if (categoryKey === activeCategory || isCategoryTransitioning) {
            return;
        }

        setIsCategoryTransitioning(true);
        categoryTimerRef.current = window.setTimeout(() => {
            setActiveCategory(categoryKey);
            setIsCategoryTransitioning(false);
        }, 220);
    };
    const scrollNews = (direction: 'left' | 'right'): void => {
        const scroller = newsScrollerRef.current;
        if (!scroller) {
            return;
        }

        const offset = 340;
        scroller.scrollBy({
            left: direction === 'left' ? -offset : offset,
            behavior: 'smooth',
        });
    };

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
                .scroll-fade {
                    position: relative;
                    overflow: hidden;
                }
                .scroll-fade::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 88px;
                    pointer-events: none;
                    background: linear-gradient(
                        180deg,
                        rgba(255, 255, 255, 0) 0%,
                        rgba(245, 247, 251, 0.48) 55%,
                        rgba(245, 247, 251, 0.82) 78%,
                        rgba(245, 247, 251, 0.94) 100%
                    );
                    opacity: 0;
                    transition: opacity 200ms ease;
                }
                .scroll-fade.is-scrollable::after {
                    opacity: 1;
                }
                .scroll-fade.at-bottom::after {
                    opacity: 0;
                }
                @keyframes productPulse {
                    0% { transform: translate3d(0, 0, 0); opacity: 0.78; }
                    50% { transform: translate3d(8px, -8px, 0); opacity: 1; }
                    100% { transform: translate3d(0, 0, 0); opacity: 0.78; }
                }
                .product-card {
                    position: relative;
                    isolation: isolate;
                }
                .product-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 24px;
                    background: linear-gradient(140deg, rgba(231, 103, 1, 0.12), rgba(8, 32, 98, 0.06));
                    opacity: 0;
                    transition: opacity 220ms ease;
                    z-index: -1;
                }
                .product-card:hover::after {
                    opacity: 1;
                }
            `}</style>
            <div
                ref={pageRef}
                className="relative h-screen overflow-y-auto bg-white text-[#082062] snap-y snap-proximity scroll-smooth"
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
                    showLangMenu={showLangMenu}
                    onLanguageChange={setLanguage}
                    toggleLangMenu={toggleLangMenu}
                    closeLangMenu={closeLangMenu}
                />

                <main>
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

                    <section className="bg-white px-4 pb-28 pt-20 lg:px-12">
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

                    <section className="bg-[#082062] px-4 pb-24 pt-24 text-white lg:px-0">
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

                    <section className="relative overflow-hidden bg-white px-4 pb-28 pt-24 lg:px-12">
                       
                        <div
                            className="absolute right-[-8%] bottom-[-16%] h-80 w-80 rounded-full bg-[#082062]/28 blur-[170px] animate-[productPulse_12s_ease-in-out_infinite]"
                            aria-hidden="true"
                        />
                        <div className="relative mx-auto flex max-w-7xl flex-col gap-8">
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                                <div className="space-y-3 reveal" data-animate>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#5b94b4]">
                                        {t.productsIntro.kicker}
                                    </p>
                                    <h2
                                        className="text-4xl font-semibold leading-[1.15] text-[#082062] lg:text-5xl"
                                        style={{ animation: 'aboutFadeUp 1s ease 60ms forwards', opacity: 0 }}
                                    >
                                        {t.productsIntro.title}
                                    </h2>
                                    <div className="flex flex-wrap gap-3 pt-1">
                                        {t.products.categories.map((category) => {
                                            const isActive = category.key === activeCategory;

                                            return (
                                                <button
                                                    key={category.key}
                                                    type="button"
                                                    onClick={() => handleCategoryChange(category.key)}
                                                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${isActive
                                                            ? 'border-[#e76701] bg-[#e76701]/10 text-[#082062]'
                                                            : 'border-[#0d2345]/10 bg-white text-[#082062]/80 hover:border-[#e76701]/60 hover:bg-[#e76701]/8'
                                                        } shadow-[0_10px_30px_rgba(8,32,98,0.08)]`}
                                                >
                                                    {category.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`grid grid-cols-1 gap-5 transition duration-300 ease-out sm:grid-cols-2 lg:grid-cols-3 ${isCategoryTransitioning ? 'translate-y-2 opacity-0 blur-[1px]' : 'translate-y-0 opacity-100'}`}
                            >
                                {productsForCategory.map((product, index) => {
                                    const productIcons = [Sun, BatteryCharging, PlugZap, Gauge, Activity, BarChart3] as const;
                                    const Icon = productIcons[index % productIcons.length];

                                    return (
                                        <article
                                            key={product.name}
                                            className="product-card reveal flex h-full flex-col rounded-3xl border border-[#0d2345]/5 bg-white/90 p-6 text-[#082062] shadow-[0_24px_70px_rgba(8,32,98,0.12)] backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(231,103,1,0.35)]"
                                            data-animate
                                            style={{ animationDelay: `${index * 80}ms` }}
                                        >
                                            <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0d2345]/5 text-sm font-semibold text-[#082062]/50">
                                                <span>{language === 'ge' ? 'სურათი მალე დაემატება' : 'Image coming soon'}</span>
                                            </div>
                                            <div className="mt-5 flex items-start gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e76701]/15 text-[#e76701] shadow-[0_10px_30px_rgba(231,103,1,0.2)]">
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    {product.badge ? (
                                                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5b94b4]">
                                                            {product.badge}
                                                        </span>
                                                    ) : null}
                                                    <h3 className="text-xl font-semibold leading-tight text-[#082062]">
                                                        {product.name}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p className="mt-4 text-sm leading-6 text-[#082062]/80">{product.summary}</p>
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {product.highlights.map((highlight) => (
                                                    <span
                                                        key={highlight}
                                                        className="rounded-full bg-[#0d2345]/5 px-3 py-1 text-xs font-semibold text-[#082062]/90"
                                                    >
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mt-auto pt-6">
                                                <div className="flex items-center gap-2 text-sm font-semibold text-[#e76701]">
                                                    <span className="inline-flex h-2 w-2 rounded-full bg-[#e76701] shadow-[0_0_0_6px_rgba(231,103,1,0.12)]" />
                                                    <span>{language === 'ge' ? 'მზად არის შესარჩევად' : 'Ready to deploy'}</span>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                            <div className="reveal flex justify-center pt-6" data-animate>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#e76701] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(231,103,1,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(231,103,1,0.5)]"
                                >
                                    {language === 'ge' ? 'ყველა პროდუქტს ნახე' : 'See all products'}
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-[#0c1f45] via-[#0f285c] to-[#0a1b3d] px-4 pb-18 pt-16 text-white lg:px-12">
                        <div className="mx-auto flex max-w-7xl flex-col gap-10">
                                <div className="space-y-4 reveal" data-animate>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#5b94b4]">
                                        {language === 'ge' ? 'სიახლეები' : 'News'}
                                    </p>
                                    <h2 className="text-4xl font-semibold leading-[1.1] text-white lg:text-5xl">
                                        {language === 'ge' ? 'ენერგიის სიახლეები და რჩევები' : 'Energy news and insights'}
                                    </h2>
                                <div className="relative">
                                    <div
                                        className="hide-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto pt-2"
                                        ref={newsScrollerRef}
                                        style={{ scrollSnapType: 'x mandatory' }}
                                    >
                                        {newsItems.map((article, index) => (
                                            <article
                                                key={article.title}
                                                className="group min-w-0 flex-[0_0_calc(100%-1rem)] snap-start overflow-hidden rounded-3xl border border-white/15 bg-white/95 text-[#082062] shadow-[0_18px_50px_rgba(8,32,98,0.22)] transition duration-300 hover:-translate-y-2 sm:flex-[0_0_calc((100%-1rem)/2)] md:flex-[0_0_calc((100%-1rem)/2)] lg:flex-[0_0_calc((100%-2rem)/3)] xl:flex-[0_0_calc((100%-3rem)/4)] flex flex-col"
                                                data-animate
                                                style={{ animationDelay: `${index * 60}ms` }}
                                            >
                                                <div className="flex h-64 w-full items-center justify-center bg-[#0d2345]/15 text-sm font-semibold text-[#082062]/60">
                                                    {article.isPlaceholder
                                                        ? language === 'ge'
                                                            ? 'თამბლერი — ჩადგმა'
                                                            : 'Thumbnail placeholder'
                                                        : language === 'ge'
                                                            ? 'თამბლერი მალე დაემატება'
                                                            : 'Thumbnail coming soon'}
                                                </div>
                                                <div className="flex flex-1 flex-col gap-2 p-3">
                                                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.08em] text-[#5b94b4]">
                                                        <span>{article.tag}</span>
                                                        <span className="text-[#082062]/60">{article.date}</span>
                                                    </div>
                                                    <h3 className="text-lg font-semibold leading-tight text-[#082062]">
                                                        {article.title}
                                                    </h3>
                                                    <p
                                                        className="text-sm leading-6 text-[#082062]/80"
                                                        style={{
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden',
                                                        }}
                                                    >
                                                        {article.excerpt}
                                                    </p>
                                                    <div className="mt-auto pt-2">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#e76701] transition hover:translate-x-1"
                                                        >
                                                            {language === 'ge' ? 'ვრცლად' : 'Read more'}
                                                            <Link2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex justify-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() => scrollNews('left')}
                                            className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#e76701] text-white transition hover:-translate-y-0.5"
                                            aria-label="Scroll news left"
                                        >
                                            <ChevronLeft className="h-5 w-5" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => scrollNews('right')}
                                            className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#e76701] text-white transition hover:-translate-y-0.5"
                                            aria-label="Scroll news right"
                                        >
                                            <ChevronRight className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
                                <div className="rounded-3xl bg-white p-5 shadow-[0_18px_50px_rgba(8,32,98,0.22)] reveal" data-animate>
                                    <div className="flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-[#5b94b4]">
                                        <Link2 className="h-4 w-4" />
                                        <span>{language === 'ge' ? 'სასარგებლო ბმულები' : 'Useful links'}</span>
                                    </div>
                                    <div
                                        className="scroll-fade mt-4 rounded-2xl bg-[#f5f7fb]/70 p-1"
                                        data-scroll-fade
                                    >
                                        <div
                                            className="hide-scrollbar max-h-56 space-y-2 overflow-y-auto px-3 py-2"
                                            data-scroll-fade-target
                                        >
                                            {t.products.usefulLinks.map((link) => (
                                                <a
                                                    key={link.title}
                                                    href="#"
                                                    className="group block rounded-xl border border-[#0d2345]/5 bg-white px-3 py-3 transition hover:-translate-y-1 hover:border-[#e76701]/50 hover:shadow-[0_10px_26px_rgba(231,103,1,0.25)]"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-sm font-semibold text-[#082062]">{link.title}</h3>
                                                        <Link2 className="h-4 w-4 text-[#5b94b4] transition group-hover:translate-x-1 group-hover:text-[#e76701]" />
                                                    </div>
                                                    <p className="mt-1 text-xs leading-5 text-[#082062]/70">{link.description}</p>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-3xl bg-white p-5 shadow-[0_18px_50px_rgba(8,32,98,0.22)] reveal" data-animate>
                                    <div className="flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-[#5b94b4]">
                                        <FileText className="h-4 w-4" />
                                        <span>{language === 'ge' ? 'მარეგულირებელი დოკუმენტაცია' : 'Regulatory docs'}</span>
                                    </div>
                                    <div
                                        className="scroll-fade mt-4 rounded-2xl bg-[#f5f7fb]/70 p-1"
                                        data-scroll-fade
                                    >
                                        <div
                                            className="hide-scrollbar max-h-56 space-y-2 overflow-y-auto px-3 py-2"
                                            data-scroll-fade-target
                                        >
                                            {t.products.docs.map((link) => (
                                                <a
                                                    key={link.title}
                                                    href="#"
                                                    className="group block rounded-xl border border-[#0d2345]/5 bg-white px-3 py-3 transition hover:-translate-y-1 hover:border-[#e76701]/50 hover:shadow-[0_10px_26px_rgba(231,103,1,0.25)]"
                                                >
                                                    <h3 className="text-sm font-semibold text-[#082062]">{link.title}</h3>
                                                    <p className="mt-1 text-xs leading-5 text-[#082062]/70">{link.description}</p>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-2 rounded-3xl bg-white/15 p-5 shadow-[0_18px_50px_rgba(8,32,98,0.22)] backdrop-blur reveal" data-animate>
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-[#9bc6de]">
                                            <MessageCircle className="h-4 w-4" />
                                            <span>{language === 'ge' ? 'ხშირად დასმული კითხვები' : 'FAQ'}</span>
                                        </div>
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
                                        >
                                            {language === 'ge' ? 'ყველა კითხვა' : 'All FAQs'}
                                            <ChevronRight className="h-4 w-4" />
                                        </a>
                                    </div>
                                    <div className="mt-4 grid grid-cols-1 gap-3">
                                        {faqItems.map((faq) => (
                                            <div
                                                key={faq.question}
                                                className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white"
                                            >
                                                <p className="text-sm font-semibold">{faq.question}</p>
                                                <p className="mt-1 text-xs leading-6 text-white/85">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <SiteFooter
                        navItems={t.nav}
                        headline={t.footerHeadline}
                        blurb={t.footerBlurb}
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
