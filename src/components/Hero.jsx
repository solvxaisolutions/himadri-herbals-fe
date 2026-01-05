import React from 'react';

const Hero = () => {
    return (
        <>
            {/* HOME SECTION */}
            <section id="home" className="bg-neutral-cream">
                {/* Banner Image */}
                <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                    <img
                        src="/heroimage1.png"
                        alt="Natural herbal products"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl text-white font-sans italic tracking-wide text-center px-4">
                            A dose of earthy goodness
                        </h1>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section
                id="about"
                className="bg-neutral-cream pb-16 scroll-mt-24"
            >
                <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-sans text-primary mb-8">
                        About
                    </h2>

                    <p className="text-gray-700 font-body leading-relaxed mb-6 text-lg">
                        Welcome to{' '}
                        <span className="font-semibold text-primary-dark">
                            Himadri Herbals
                        </span>
                        , an ayurvedic beauty brand dedicated to embracing the
                        essence of nature. Rooted in the wisdom of Ayurveda, our
                        journey began with a passion for creating authentic,
                        earth-friendly solutions that redefine natural beauty in
                        a world often driven by artificial quick fixes.
                    </p>

                    <div className="mt-12 p-8 bg-white/50 backdrop-blur rounded-2xl border border-primary-light/30">
                        <h3 className="text-2xl font-sans text-primary-dark mb-4">
                            Our Vision
                        </h3>
                        <p className="text-gray-700 font-body italic text-lg">
                            “To empower individuals to reconnect with the
                            goodness of earth by embracing their natural beauty
                            through authentic Ayurvedic care.”
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
