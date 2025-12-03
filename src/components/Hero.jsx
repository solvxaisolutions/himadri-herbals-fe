import React from 'react';

const Hero = () => {
    return (
        <section className="bg-neutral-cream pb-16">
            {/* Banner Image Section */}
            <div className="relative w-full h-[60vh] md:h-[80vh] bg-gray-200 overflow-hidden">
                {/* Placeholder for Banner Image */}
                <img
                    src="https://images.unsplash.com/photo-1556228720-1987594b8d43?q=80&w=2070&auto=format&fit=crop"
                    alt="Natural herbal products"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <h2 className="text-4xl md:text-6xl text-white font-sans italic tracking-wide text-center px-4">
                        A dose of earthy goodness
                    </h2>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
                <h3 className="text-3xl md:text-4xl font-sans text-primary mb-8">About</h3>
                <p className="text-gray-700 font-body leading-relaxed mb-6 text-lg">
                    Welcome to <span className="font-semibold text-primary-dark">Himadri Herbals</span>, an ayurvedic beauty brand dedicated to embrace the essence of nature.
                    Rooted in the wisdom of Ayurveda, our journey began with a passion for creating authentic,
                    earth-friendly solutions that redefine natural beauty in a world often driven by artificial quick fixes.
                </p>

                <div className="mt-12 p-8 bg-white/50 rounded-2xl border border-primary-light/30">
                    <h4 className="text-2xl font-sans text-primary-dark mb-4">Our Vision</h4>
                    <p className="text-gray-700 font-body italic text-lg">
                        "To empower individuals to reconnect with the goodness of earth by embracing their natural beauty through authentic Ayurvedic care."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
