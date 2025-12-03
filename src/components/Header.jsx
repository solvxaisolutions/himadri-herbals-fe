import React from 'react';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="bg-neutral-cream py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-sm">
            <div className="flex items-center gap-4">
                <button className="md:hidden">
                    <Menu className="w-6 h-6 text-primary" />
                </button>
                <div className="flex flex-col items-center">
                    <img src={logo} alt="Himadri Herbals" className="h-12 md:h-16 object-contain" />
                </div>
            </div>

            <nav className="hidden md:flex gap-8 font-body text-sm tracking-wide text-primary-dark font-medium">
                <a href="#" className="hover:text-primary transition-colors">SHOP</a>
                <a href="#" className="hover:text-primary transition-colors">ABOUT US</a>
                <a href="#" className="hover:text-primary transition-colors">GET HELP</a>
            </nav>

            <div className="flex items-center gap-6 text-primary-dark">
                <Search className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                <User className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            </div>
        </header>
    );
};

export default Header;
