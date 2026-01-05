import React from 'react';
import { Leaf, Droplets, Sparkles, Heart, Flower2 } from 'lucide-react';

const Features = () => {
    const features = [
        { icon: <Leaf className="w-10 h-10 text-primary" />, text: "Chemical free promise" },
        { icon: <Droplets className="w-10 h-10 text-primary" />, text: "100% natural ingredients" },
        { icon: <Sparkles className="w-10 h-10 text-primary" />, text: "Ayurvedic expertise" },
        { icon: <Heart className="w-10 h-10 text-primary" />, text: "Cruelty free" },
        { icon: <Flower2 className="w-10 h-10 text-primary" />, text: "Holistic care" }
    ];

    return (
        <section id="why" className="relative py-20 bg-white overflow-hidden">

            {/* LEFT SVG LEAF */}
            <svg
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-56 opacity-60"
                viewBox="0 0 200 400"
                fill="none"
            >
                <path
                    d="M180 20C80 120 60 240 20 380"
                    stroke="#7eaa2d"
                    strokeWidth="3"
                    fill="none"
                />
                <path
                    d="M150 80C120 110 110 160 130 200C160 170 180 130 150 80Z"
                    fill="#7eaa2d"
                />
                <path
                    d="M120 160C90 190 80 240 100 280C130 250 150 210 120 160Z"
                    fill="#7eaa2d"
                />
            </svg>

            {/* RIGHT SVG LEAF */}
            <svg
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-56 opacity-60 rotate-180"
                viewBox="0 0 200 400"
                fill="none"
            >
                <path
                    d="M180 20C80 120 60 240 20 380"
                    stroke="#7eaa2d"
                    strokeWidth="3"
                    fill="none"
                />
                <path
                    d="M150 80C120 110 110 160 130 200C160 170 180 130 150 80Z"
                    fill="#7eaa2d"
                />
                <path
                    d="M120 160C90 190 80 240 100 280C130 250 150 210 120 160Z"
                    fill="#7eaa2d"
                />
            </svg>

            {/* CONTENT */}
            <div className="relative max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-sans text-center text-primary-dark mb-16">
                    Why Himadri Herbals?
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 rounded-full bg-neutral-cream flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <p className="font-body text-gray-700 font-medium text-sm md:text-base">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
