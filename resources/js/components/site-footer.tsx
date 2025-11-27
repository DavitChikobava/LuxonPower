import type { JSX } from 'react';

interface SiteFooterProps {
    navItems: string[];
    headline: string;
    blurb: string;
}

export function SiteFooter({ navItems, headline, blurb }: SiteFooterProps): JSX.Element {
    return (
        <footer className="mt-12 bg-[#082062] text-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
                <div className="max-w-xl space-y-3">
                    <p className="text-sm uppercase tracking-[0.32em] text-[#5b94b4]">LuxonPower</p>
                    <h2 className="text-2xl font-semibold leading-tight lg:text-3xl">{headline}</h2>
                    <p className="text-sm text-white/80">{blurb}</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    {navItems.map((item) => (
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
    );
}
