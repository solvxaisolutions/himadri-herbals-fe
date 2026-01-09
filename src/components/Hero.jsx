import React from 'react';

const Hero = () => {
    return (
        <>
            {/* HOME SECTION */}
            <section id="home" className="bg-neutral-cream scroll-mt-32">
                <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">

                    {/* Background image */}
                    <img
                        src="/heroimage1.png"
                        alt="Natural herbal products"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* ===== MOBILE POSTER TEXT ===== */}
                    <div className="relative h-full grid grid-cols-2 md:hidden">
                        <div className="flex items-center">
                            <div className="pl-8">
                                <h1
                                    className="
                            font-sans font-extrabold uppercase text-white
                            text-[42px] leading-[0.9]
                            tracking-tight
                        "
                                >
                                    A dose <br />
                                    of <br />
                                    earthy <br />
                                    goodness
                                </h1>
                            </div>
                        </div>
                        <div />
                    </div>

                    {/* ===== DESKTOP NORMAL CENTER TEXT ===== */}
                    <div className="hidden md:flex absolute inset-0 bg-black/30 items-center justify-center">
                        <h1
                            className="
            font-sans font-extrabold uppercase
            text-white
            text-5xl lg:text-6xl
            tracking-tight
            text-center
            px-4
        "
                        >
                            A dose of earthy goodness
                        </h1>
                    </div>


                </div>
            </section>





            {/* ABOUT SECTION */}
            <section
                id="about"
                className="bg-neutral-cream pb-16 scroll-mt-32"
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
                        , an Ayurveda-based beauty and personal care company founded in 2015, and we’ve proudly completed 10 successful years of serving customers with nature-inspired formulations. We have grown from a Kerala-focused brand to a strong distribution network across all districts in Kerala, and we are now expanding step-by-step to the rest of India. Rooted in traditional Ayurvedic wisdom and made for modern lifestyles, our products are created to support everyday beauty routines with trusted herbal care..
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
