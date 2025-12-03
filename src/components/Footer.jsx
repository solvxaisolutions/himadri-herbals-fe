import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-neutral-cream py-16">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

                {/* Left Side: Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-4 bg-neutral-cream p-2 rounded-lg">
                        <img src={logo} alt="Himadri Herbals" className="h-16 object-contain" />
                    </div>
                    <p className="font-sans italic text-lg opacity-90">
                        A dose of earthy goodness
                    </p>
                </div>

                {/* Right Side: Contact & Social */}
                <div className="flex flex-col items-center md:items-end gap-8">

                    <div className="flex flex-col items-center md:items-end gap-3 font-body text-sm">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <a href="mailto:contact@himadriherbals.com" className="hover:text-white transition-colors">contact@himadriherbals.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>+91 123 456 7890</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>123, Nature's Way, Green Valley, India</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                        <span className="font-sans text-sm uppercase tracking-wider opacity-80">Follow Us</span>
                        <a
                            href="https://www.instagram.com/himadri.herbals/profilecard/?igsh=MWxiY3RwcjY0NnRuZQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-neutral-cream text-primary-dark p-2 rounded-full hover:bg-white transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>

                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-neutral-cream/20 text-center text-xs font-body opacity-60">
                © {new Date().getFullYear()} Himadri Herbals. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
