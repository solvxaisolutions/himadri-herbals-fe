import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="min-h-screen bg-neutral-cream">
            {/* Header Skeleton */}
            <div className="bg-neutral-cream py-4 px-6 md:px-12 sticky top-0 z-50 shadow-sm border-b border-gray-200/50">
                <div className="relative flex items-center justify-between">
                    {/* Mobile Menu Icon Placeholder */}
                    <div className="md:hidden w-8 h-8 bg-primary/20 rounded animate-pulse"></div>

                    {/* Logo Placeholder */}
                    <div className="
                        h-12 w-32 md:h-16 md:w-40 bg-primary/20 rounded-md
                        absolute left-1/2 -translate-x-1/2
                        md:static md:translate-x-0
                        animate-pulse
                    "></div>

                    {/* Desktop Nav Placeholders */}
                    <div className="hidden md:flex gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-24 h-5 bg-primary/20 rounded animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hero Skeleton */}
            <div className="w-full h-[70vh] md:h-[80vh] bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>

                {/* Center Text Placeholder (Optional, just to mimic the hero structure) */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center">
                    <div className="w-3/4 max-w-lg h-24 bg-gray-400/20 rounded-lg animate-pulse"></div>
                </div>

                {/* Mobile Text Placeholder */}
                <div className="grid grid-cols-2 md:hidden h-full">
                    <div className="flex items-center pl-8">
                        <div className="w-32 h-32 bg-gray-400/20 rounded-lg animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Features Skeleton (Optional, to fill the screen if needed) */}
            <div className="max-w-7xl mx-auto px-6 py-24 hidden md:block">
                <div className="grid grid-cols-3 gap-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-64 bg-primary/10 rounded-2xl animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
