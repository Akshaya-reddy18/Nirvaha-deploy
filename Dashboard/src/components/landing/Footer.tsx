import { Mail, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const MailIcon = Mail as any;
    const InstagramIcon = Instagram as any;
    const LinkedinIcon = Linkedin as any;

    const socials = [
        { icon: MailIcon, href: 'mailto:hello@projectverse.ai', aria: 'Email' },
        { icon: InstagramIcon, href: 'https://www.instagram.com/_nirvaha_/?igsh=c3huaDF1bTl6Ymd6#', aria: 'Instagram', blank: true },
        { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/soulverse23/', aria: 'LinkedIn', blank: true }
    ];

    return (
        <footer className="text-[#0A0F0F] pt-8 pb-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#FFFDF6 0%,#FFF7E3 100%)' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Nirvaha" className="h-10 w-10 object-contain rounded-lg" />
                        <span className="font-title text-lg">Nirvaha</span>
                    </div>
                    <div className="text-center text-sm text-[#4a4a4a] order-3 md:order-none">© 2024 Nirvaha Wellness LLP</div>
                    <div className="flex items-center gap-3">
                        {socials.map((s, i) => (
                            <a
                                key={i}
                                href={s.href}
                                aria-label={s.aria}
                                className="w-9 h-9 rounded-xl bg-white/80 border border-yellow-200/60 flex items-center justify-center hover:shadow transition-all"
                                {...(s.blank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                                <s.icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;