import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (id) => {
        scrollToSection(id);
        setMenuOpen(false); // close menu after click
    };

    return (
        <header className="bg-neutral-cream py-4 px-6 md:px-12 sticky top-0 z-50 shadow-sm">
            <div className="flex justify-between items-center">
                {/* Left */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? (
                            <X className="w-6 h-6 text-primary" />
                        ) : (
                            <Menu className="w-6 h-6 text-primary" />
                        )}
                    </button>

                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Himadri Herbals"
                        className="h-12 md:h-16 object-contain"
                    />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 font-body text-sm tracking-wide text-primary-dark font-medium">
                    <button onClick={() => handleNavClick('home')} className="cursor-pointer hover:text-primary transition-colors">
                        HOME
                    </button>
                    <button onClick={() => handleNavClick('about')} className="cursor-pointer hover:text-primary transition-colors">
                        ABOUT US
                    </button>
                    <button onClick={() => handleNavClick('why')} className="cursor-pointer hover:text-primary transition-colors">
                        WHY US
                    </button>
                    <button onClick={() => handleNavClick('contact')} className="cursor-pointer hover:text-primary transition-colors">
                        CONTACT US
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <nav className="md:hidden mt-6 flex flex-col gap-4 font-body text-sm tracking-wide text-primary-dark font-medium bg-white rounded-xl p-4 shadow-md">
                    <button onClick={() => handleNavClick('home')} className="text-left hover:text-primary">
                        HOME
                    </button>
                    <button onClick={() => handleNavClick('about')} className="text-left hover:text-primary">
                        ABOUT US
                    </button>
                    <button onClick={() => handleNavClick('why')} className="text-left hover:text-primary">
                        WHY US
                    </button>
                    <button onClick={() => handleNavClick('contact')} className="text-left hover:text-primary">
                        CONTACT US
                    </button>
                </nav>
            )}
        </header>
    );
};

export default Header;
