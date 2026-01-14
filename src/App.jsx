import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SkeletonLoader from './components/SkeletonLoader';
import logo from './assets/logo.png';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = [
      logo,
      '/heroimage1.png'
    ];

    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    };

    Promise.all(images.map(preloadImage))
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="min-h-screen bg-neutral-cream">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
      <WhatsAppFloat/>
    </div>
  );
}

export default App;
