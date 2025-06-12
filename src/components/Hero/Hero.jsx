import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import Scroll from '../Scroll/Scroll'

// Hero Component
// Displays the main section of the page with title, description, and action button
const Hero = () => {
  const images = [
    { src: assets.restArea1, alt: 'Rest Area Pendapa Ageng' },
    { src: assets.joglo4, alt: 'Pendapa Ageng Main Hall' },
    { src: assets.kerajinan1, alt: 'Traditional Crafts' },
    { src: assets.joglo2, alt: 'Pendapa Performance Area' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto slide function
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 300);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(timer);
  }, []); // Empty dependency array so it runs only once

  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };
  return (
    <div className="bg-white min-h-screen sm:min-h-[600px] flex items-center relative overflow-hidden py-12 sm:py-16 md:py-20">
      <Scroll />
      {/* Hiasan dekoratif bagian kanan */}
      <div className="absolute -right-20 -top-20 w-[300px] sm:w-[400px] md:w-[500px] animate-pulse transform hover:scale-105 transition-transform duration-700 hover:rotate-3">
        <img src={assets.element1remove} alt="Decorative element 1" className="w-full h-auto opacity-40 sm:opacity-60 hover:opacity-80 transition-opacity duration-300 filter hover:brightness-110" />
      </div>
      <div className="absolute -right-20 -bottom-20 w-[250px] sm:w-[350px] md:w-[450px] animate-pulse delay-700 transform hover:scale-105 transition-transform duration-700 hover:-rotate-3">
        <img src={assets.element2remove} alt="Decorative element 2" className="w-full h-auto opacity-40 sm:opacity-60 hover:opacity-80 transition-opacity duration-300 filter hover:brightness-110" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Bagian kiri - Teks dan tombol */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-6">
              <h1 className="text-[#8B4513] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">
                Pendapa Ageng Hand Asta Sih
              </h1>
              <div className="space-y-1">
                <h2 className="text-xl md:text-2xl font-medium text-[#8B4513]/90">
                  Javanese Cultural & Culinary Tourism
                </h2>
                <p className="text-lg text-[#8B4513]">
                  Blitar Regency, East Java
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-md leading-relaxed max-w-xl">
              Experience authentic Javanese culture at Pendapa Ageng. We offer enchanting cultural tourism, delicious traditional cuisine, and a comfortable rest area for you.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              {/* Tombol pendaftaran */}
              <Link
                to="/cultural"
                className="bg-[#8B4513] hover:bg-[#A0522D] text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
              >
                Explore Now
              </Link>

            </div>
          </div>

          {/* Bagian kanan - Gambar */}
          <div className="relative mt-8 lg:mt-0">
            {/* Hiasan di belakang gambar */}
            <div className="absolute -top-6 -right-6 w-32 sm:w-40 md:w-48 animate-pulse transform hover:rotate-6 transition-transform duration-700">
              <img src={assets.element1} alt="Decorative element 1" className="w-full h-auto opacity-20 sm:opacity-30 hover:opacity-50 transition-opacity duration-300 filter hover:brightness-125" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 sm:w-40 md:w-48 animate-pulse delay-1000 transform hover:-rotate-6 transition-transform duration-700">
              <img src={assets.element2} alt="Decorative element 2" className="w-full h-auto opacity-20 sm:opacity-30 hover:opacity-50 transition-opacity duration-300 filter hover:brightness-125" />
            </div>
            
            {/* Gambar utama */}
            <div className="relative z-10 overflow-hidden rounded-lg shadow-lg aspect-[4/3] max-w-2xl mx-auto group">
              {/* Navigation Buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#8B4513] p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#8B4513] p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image */}
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className={`w-full h-full object-cover hover:scale-105 transition-all duration-300 transform-gpu ${isTransitioning ? 'opacity-80 scale-105' : 'opacity-100 scale-100'}`}
              />

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isTransitioning && index !== currentIndex) {
                        setIsTransitioning(true);
                        setCurrentIndex(index);
                        setTimeout(() => setIsTransitioning(false), 300);
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-4' : 'bg-white/60 hover:bg-white/80'}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero