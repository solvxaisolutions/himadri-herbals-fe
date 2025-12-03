import React from 'react';
import { Leaf, Droplets, Sparkles, Heart, Flower2 } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Leaf className="w-10 h-10 text-primary" />,
            text: "Chemical free promise"
        },
        {
            icon: <Droplets className="w-10 h-10 text-primary" />,
            text: "100% natural ingredients"
        },
        {
            icon: <Sparkles className="w-10 h-10 text-primary" />,
            text: "Ayurvedic expertise"
        },
        {
            icon: <Heart className="w-10 h-10 text-primary" />,
            text: "Cruelty free"
        },
        {
            icon: <Flower2 className="w-10 h-10 text-primary" />,
            text: "Holistic care"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-sans text-center text-primary-dark mb-16">
                    Why Himadri herbals?
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
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
