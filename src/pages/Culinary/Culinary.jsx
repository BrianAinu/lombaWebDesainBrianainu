import React from 'react'
import { Link } from 'react-router-dom'
import Scroll from '../../components/Scroll/Scroll'
import Rating from '../../components/Rating/Rating'
import FormUpload from '../../components/formupload/FormUpload'
import { assets } from '../../assets/assets'

const Culinary = () => {
  // Culinary venues data
  const culinaryVenues = [
    {
      id: 1,
      title: 'Main Dining Hall',
      description: 'Experience the grandeur of Javanese dining in our majestic main hall. Savor authentic dishes while immersed in traditional ambiance.',
      image: assets.culinary1,
      capacity: '50 People',
      features: [
        'Traditional Floor Seating',
        'Garden View',
        'Live Gamelan Music',
        'Air-Conditioned Space'
      ]
    },
    {
      id: 2,
      title: 'Garden Pavilion',
      description: 'An elegant outdoor dining space set in traditional gazebos. Perfect for enjoying light meals while surrounded by natural beauty.',
      image: assets.culinary2,
      capacity: '20 People',
      features: [
        'Private Gazebos',
        'Natural Ambiance',
        'Garden Views',
        'Open-Air Setting'
      ]
    },
    {
      id: 3,
      title: 'Village Kitchen',
      description: 'A rustic dining area offering an authentic village kitchen experience. Enjoy traditional dishes in a warm, homely atmosphere.',
      image: assets.culinary3,
      capacity: '30 People',
      features: [
        'Open Kitchen',
        'Traditional Seating',
        'Rural Atmosphere',
        'Local Specialties'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#FFF8F3] relative">
      <Scroll />
      {/* Header Section with Batik Pattern */}
      <div className="bg-[#8B4513] text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated Decorative Elements */}
        <div className="absolute w-48 animate-float-slow" 
          style={{top: '-5%', left: '-8%', animationDelay: '0s'}}>
          <img src={assets.element1Remove} alt="" className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity duration-300" />
        </div>
        <div className="absolute w-48 animate-float-medium" 
          style={{top: '-5%', right: '-8%', animationDelay: '2s', transform: 'scaleX(-1)'}}>
          <img src={assets.element1Remove} alt="" className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity duration-300" />
        </div>
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-white/30 rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-white/30 rounded-tr-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-medium mb-3 tracking-wider uppercase">Culinary Area</h1>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-0.5 bg-white/60"></div>
            <div className="w-2 h-2 bg-white/80 transform rotate-45"></div>
            <div className="w-12 h-0.5 bg-white/60"></div>
          </div>
          <p className="text-sm md:text-base opacity-90 max-w-xl mx-auto leading-relaxed font-light tracking-wide">
            Discover our enchanting dining venues with authentic Javanese atmosphere
          </p>
        </div>
      </div>

      {/* Main Content with Overlapping Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {culinaryVenues.map((venue, index) => (
            <div
              key={venue.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 bg-white text-[#8B4513] px-4 py-2 rounded-lg font-medium shadow-lg">
                  {venue.capacity}
                </div>
              </div>
              <div className="p-8 relative">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#8B4513]/20"></div>
                <h3 className="text-2xl font-bold text-[#8B4513] mb-3 relative inline-block">
                  {venue.title}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8B4513]/20"></div>
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{venue.description}</p>
                <div className="space-y-4">
                  <h4 className="font-medium text-[#8B4513] flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Facilities
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {venue.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center bg-[#FFF8F3] px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-[#8B4513]/5 transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-[#8B4513] rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Gallery Upload Section */}
      <div className="py-16 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-3 tracking-wider uppercase text-[#8B4513]">Share Your Culinary Moments</h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
            <div className="w-2 h-2 bg-[#8B4513]/80 transform rotate-45"></div>
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
          </div>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Upload and share your favorite moments at our culinary venues
          </p>
        </div>
        <FormUpload />
      </div>

      {/* Rating Section */}
      <div className="py-16 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-3 tracking-wider uppercase text-[#8B4513]">Rate Our Cuisine</h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
            <div className="w-2 h-2 bg-[#8B4513]/80 transform rotate-45"></div>
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
          </div>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Share your dining experience with us
          </p>
        </div>
        <Rating />
      </div>
    </div>
  )
}

export default Culinary
