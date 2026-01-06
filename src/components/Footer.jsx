import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer id="contact" className="bg-primary-dark text-neutral-cream py-16">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">

                {/* LEFT: Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-4 bg-neutral-cream p-2 rounded-lg">
                        <img src={logo} alt="Himadri Herbals" className="h-16 object-contain" />
                    </div>
                    <p className="font-sans italic text-lg opacity-90">
                        A dose of earthy goodness
                    </p>
                </div>

                {/* MIDDLE: Contact Info */}
                <div className="flex flex-col items-center md:items-start gap-3 font-body text-sm">

                    {/* Email */}
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a
                            href="mailto:contact@himadriherbals.com"
                            className="hover:text-white transition-colors"
                        >
                            contact@himadriherbals.com
                        </a>
                    </div>

                    {/* Phone → WhatsApp */}
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <a
                            href="https://wa.me/919495528319"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            +91 94955 28319
                        </a>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <a
                            href="https://maps.app.goo.gl/EXFU8Rdzeao4bxD47?g_st=ipc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            Karuppadanna, Kodungallur, Kerala 680670
                        </a>
                    </div>
                </div>

                {/* RIGHT: Map + Social */}
                <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">

                    {/* Google Map Embed */}
                    <div className="w-full md:w-64 h-40 rounded-xl overflow-hidden border border-neutral-cream/20">
    <iframe
        title="Himadri Herbals Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.244660356445!2d76.20275149999999!3d10.271190299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081d900ec8d30d%3A0x28247d9ea3715966!2sHimadri%20Herbals!5e1!3m2!1sen!2sin!4v1767683148049!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    />
</div>


                    {/* Social Icons */}
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <span className="font-sans text-sm uppercase tracking-wider opacity-80">
                            Follow Us
                        </span>

                        <div className="flex gap-3">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/himadri.herbals/profilecard/?igsh=MWxiY3RwcjY0NnRuZQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-neutral-cream text-primary-dark p-2 rounded-full hover:bg-white transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919495528319"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="bg-neutral-cream text-primary-dark p-2 rounded-full hover:bg-white transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M16.04 2.4c-7.52 0-13.64 6.12-13.64 13.64 0 2.4.63 4.74 1.83 6.8L2.4 29.6l6.96-1.83c1.98 1.08 4.2 1.66 6.68 1.66h.01c7.52 0 13.64-6.12 13.64-13.64S23.56 2.4 16.04 2.4zm0 24.9c-2.15 0-4.25-.58-6.06-1.67l-.43-.26-4.13 1.09 1.1-4.02-.28-.41c-1.14-1.84-1.74-3.96-1.74-6.14 0-6.34 5.16-11.5 11.5-11.5s11.5 5.16 11.5 11.5-5.16 11.5-11.5 11.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-neutral-cream/20 text-center text-xs font-body opacity-60">
                © {new Date().getFullYear()} Himadri Herbals. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
