import type { Language } from '@/types/language';
import type { JSX } from 'react';

interface SiteHeaderProps {
    language: Language;
    navItems: string[];
    contactLabel: string;
    contactUrl: string;
    showLangMenu: boolean;
    onLanguageChange: (language: Language) => void;
    toggleLangMenu: () => void;
    closeLangMenu: () => void;
}

export function SiteHeader({
    language,
    navItems,
    contactLabel,
    contactUrl,
    showLangMenu,
    onLanguageChange,
    toggleLangMenu,
    closeLangMenu,
}: SiteHeaderProps): JSX.Element {
    const flag = language === 'ge' ? '🇬🇪' : '🇬🇧';

    return (
        <header className="absolute inset-x-0 top-0 z-30">
            <div className="mt-4 mx-4 flex items-center justify-between rounded-2xl bg-white/95 px-6 py-3 text-base font-semibold shadow-[0_18px_44px_rgba(0,0,0,0.14)] backdrop-blur transition-all duration-300 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 md:px-8 lg:px-12 lg:py-3.5">
                <div className="flex items-center gap-4">
                    <img
                        src="/images/luxonpower-logo.png"
                        alt="LuxonPower logo"
                        className="h-[72px] w-[72px] object-contain"
                    />
                    <nav className="hidden items-center gap-5 text-base font-semibold lg:flex">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="rounded-full px-3 py-2 transition hover:bg-[#5b94b4]/10"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-3">
                <a
                    href={contactUrl}
                    className="hidden rounded-full bg-[#e76701] px-5 py-2 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(231,103,1,0.55)] sm:inline-flex"
                    target="_blank"
                    rel="noreferrer"
                >
                    {contactLabel}
                </a>
                <div className="relative hidden lg:block">
                    <button
                        type="button"
                        onClick={toggleLangMenu}
                        className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-base font-semibold shadow-[0_8px_18px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] cursor-pointer"
                    >
                        <span className="text-sm leading-none">{language === 'ge' ? 'GE' : 'EN'}</span>
                    </button>
                        {showLangMenu ? (
                            <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-black/5 bg-white p-2 text-base shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                                <button
                                    type="button"
                                    onClick={() => {
                                        onLanguageChange('ge');
                                        closeLangMenu();
                                    }}
                                    className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left transition hover:bg-[#5b94b4]/10"
                                >
                                    <span aria-hidden="true">GE</span>
                                    <span>ქართული</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onLanguageChange('en');
                                        closeLangMenu();
                                    }}
                                    className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left transition hover:bg-[#5b94b4]/10"
                                >
                                    <span aria-hidden="true">EN</span>
                                    <span>English</span>
                                </button>
                            </div>
                        ) : null}
                    </div>
                <button
                    type="button"
                    onClick={toggleLangMenu}
                    className="flex items-center gap-2 rounded-md bg-white px-3 py-2.5 text-base font-semibold shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] lg:hidden"
                    aria-label="Open menu"
                >
                    <span className="text-sm leading-none cursor-pointer">{language === 'ge' ? 'GE' : 'EN'}</span>
                    <div className="h-6 w-px bg-[#d6d9e4]" />
                    <div className="flex flex-col gap-1.5">
                        <span className="block h-0.5 w-6 rounded-full bg-[#082062]" />
                        <span className="block h-0.5 w-6 rounded-full bg-[#082062]" />
                        <span className="block h-0.5 w-6 rounded-full bg-[#082062]" />
                    </div>
                </button>
                    {showLangMenu && (
                    <div className="absolute left-4 right-4 top-full mt-2 flex flex-col gap-2 rounded-xl border border-black/5 bg-white p-3 text-base shadow-[0_18px_40px_rgba(0,0,0,0.14)] sm:left-6 sm:right-6 md:left-8 md:right-8 lg:hidden">
                        <a
                            href={contactUrl}
                            className="rounded-lg bg-[#e76701] px-4 py-2 text-center font-semibold text-white transition hover:shadow-[0_10px_26px_rgba(231,103,1,0.4)]"
                            target="_blank"
                            rel="noreferrer"
                            onClick={closeLangMenu}
                        >
                            {contactLabel}
                            </a>
                            <div className="flex items-center justify-between gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        onLanguageChange('ge');
                                        closeLangMenu();
                                    }}
                                    className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 transition ${language === 'ge'
                                            ? 'bg-[#5b94b4]/15 text-[#082062] font-semibold'
                                            : 'bg-white text-[#082062]'
                                        } border border-black/5`}
                                >
                                    <span aria-hidden="true">GE</span>
                                    <span>ქართული</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onLanguageChange('en');
                                        closeLangMenu();
                                    }}
                                    className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 transition ${language === 'en'
                                            ? 'bg-[#5b94b4]/15 text-[#082062] font-semibold'
                                            : 'bg-white text-[#082062]'
                                        } border border-black/5`}
                                >
                                    <span aria-hidden="true">EN</span>
                                    <span>English</span>
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 pt-1 text-sm text-[#082062]/80">
                                {navItems.map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="rounded-lg px-3 py-2 hover:bg-[#5b94b4]/10"
                                        onClick={closeLangMenu}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
