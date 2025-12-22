import { Mail, Phone, Globe, Facebook, Twitter, Instagram, Linkedin, Lock } from 'lucide-react';

const Footer = () => {
    // Create icon components to avoid TypeScript issues
    const LockIcon = Lock as any;
    const PhoneIcon = Phone as any;
    const MailIcon = Mail as any;
    const GlobeIcon = Globe as any;
    const footerSections = [
        {
            title: 'Company',
            links: [
                'About Us',
                'Our Mission',
                'Careers',
                'Press Kit',
                'Contact'
            ]
        },
        {
            title: 'Legal',
            links: [
                'Privacy Policy',
                'Terms of Service',
                // 'HIPAA Compliance',
                'Cookie Policy',
                'Accessibility'
            ]
        }
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
                        {[
                            { icon: Facebook as any, href: '#' },
                            { icon: Twitter as any, href: '#' },
                            { icon: Instagram as any, href: '#' },
                            { icon: Linkedin as any, href: '#' }
                        ].map((social, i) => (
                            <a key={i} href={social.href} className="w-9 h-9 rounded-xl bg-white/80 border border-yellow-200/60 flex items-center justify-center hover:shadow transition-all">
                                <social.icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;