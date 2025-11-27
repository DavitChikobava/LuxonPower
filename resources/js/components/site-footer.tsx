import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import type { JSX } from 'react';

interface SiteFooterProps {
    navItems: string[];
    headline: string;
    blurb: string;
}

export function SiteFooter({ navItems, headline, blurb }: SiteFooterProps): JSX.Element {
    const [showNewsletter, setShowNewsletter] = useState(false);

    const contactDetails = [
        {
            label: 'Phone',
            value: '+995 598 883 740',
            href: 'tel:+995598883740',
            Icon: Phone,
        },
        {
            label: 'Email',
            value: 'info@luxonpower.ge',
            href: 'mailto:info@luxonpower.ge',
            Icon: Mail,
        },
        {
            label: 'Address',
            value: 'საქართველო, თბილისი, მ/ს  სარაჯიშვილის მიმდებარე ტერიტორია',
            href: 'https://maps.google.com/?q=LuxonPower',
            Icon: MapPin,
        },
    ] as const;

    const socialLinks = [
        { name: 'WhatsApp', href: '#', Icon: MessageCircle },
        { name: 'LinkedIn', href: '#', Icon: Linkedin },
        { name: 'Facebook', href: '#', Icon: Facebook },
        { name: 'Instagram', href: '#', Icon: Instagram },
    ] as const;

    return (
        <footer className="mt-12 bg-[#082062] text-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-start lg:justify-between lg:px-10">
                <div className="max-w-xl space-y-3 lg:w-[38%]">
                    <p className="text-sm uppercase tracking-[0.32em] text-[#5b94b4]">LuxonPower</p>
                    <h2 className="text-2xl font-semibold leading-tight lg:text-3xl">{headline}</h2>
                    <p className="text-sm text-white/80">{blurb}</p>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
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

                <div className="flex flex-1 flex-col gap-6 lg:w-[30%]">
                    <div className="space-y-3 rounded-2xl bg-white/5 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur">
                        <h3 className="text-lg font-semibold">Contact</h3>
                        <div className="space-y-3 text-sm text-white/85">
                            {contactDetails.map(({ label, value, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="group flex items-start gap-3 rounded-xl border border-white/5 px-3 py-2 transition hover:border-[#e76701]/60 hover:bg-white/5"
                                >
                                    <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-[#e76701]">
                                        <Icon className="h-4 w-4" />
                                    </span>
                                    <span className="flex-1 leading-6">
                                        <span className="block text-xs uppercase tracking-[0.12em] text-[#5b94b4]">
                                            {label}
                                        </span>
                                        <span className="block text-white group-hover:text-white">
                                            {value}
                                        </span>
                                    </span>
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center gap-3 pt-1">
                            {socialLinks.map(({ name, href, Icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    aria-label={name}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-[#e76701]/60 hover:bg-[#e76701]"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 rounded-2xl bg-white/5 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur lg:w-[32%]">
                    <h3 className="text-lg font-semibold">Contact us</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-[#e76701] focus:outline-none focus:ring-1 focus:ring-[#e76701]"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-[#e76701] focus:outline-none focus:ring-1 focus:ring-[#e76701]"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-[#e76701] focus:outline-none focus:ring-1 focus:ring-[#e76701]"
                        />
                        <textarea
                            name="message"
                            rows={3}
                            placeholder="How can we help?"
                            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-[#e76701] focus:outline-none focus:ring-1 focus:ring-[#e76701]"
                        />
                        <button
                            type="button"
                            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#e76701] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(231,103,1,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                        >
                            Send
                            <Send className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="mt-2 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold">Subscribe to newsletter</p>
                                <p className="text-xs text-white/70">Get updates on new services and grants.</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowNewsletter((prev) => !prev)}
                                className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:border-[#e76701]/60 hover:bg-[#e76701]"
                            >
                                {showNewsletter ? 'Close' : 'Subscribe'}
                            </button>
                        </div>
                        {showNewsletter ? (
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <input
                                    type="email"
                                    name="newsletterEmail"
                                    placeholder="Your email"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/60 focus:border-[#e76701] focus:outline-none focus:ring-1 focus:ring-[#e76701]"
                                />
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e76701] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(231,103,1,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                                >
                                    Join
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
                © {new Date().getFullYear()} LuxonPower — Renewable energy solutions
            </div>
        </footer>
    );
}
