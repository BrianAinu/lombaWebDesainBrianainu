import React from 'react'
import { Link } from 'react-router-dom'
import Scroll from '../../components/Scroll/Scroll'
import Rating from '../../components/Rating/Rating'
import FormArea from '../../components/formarea/FormArea'
import { assets } from '../../assets/assets'

const RestArea = () => {
  // Rest area facilities data
  const facilities = [
    {
      id: 1,
      title: 'Traditional Rest Pavilion',
      description: 'Experience tranquility in our Javanese-style rest pavilion, where traditional architecture meets modern comfort. A perfect blend of cultural aesthetics and relaxation.',
      image: assets.rest1,
      features: [
        'Traditional Seating',
        'Natural Ventilation',
        'Garden View',
        'Meditation Space'
      ]
    },
    {
      id: 2,
      title: 'Garden Lounge',
      description: 'Immerse yourself in the serenity of our garden lounge area, surrounded by lush greenery and traditional landscaping. An ideal spot for refreshment and relaxation.',
      image: assets.rest2,
      features: [
        'Comfortable Seating',
        'Refreshment Area',
        'Scenic Views',
        'Peaceful Atmosphere'
      ]
    },
    {
      id: 3,
      title: 'Meditation Corner',
      description: 'Find inner peace in our dedicated meditation corner, designed with traditional Javanese elements. A quiet sanctuary for spiritual reflection and mindful relaxation.',
      image: assets.rest3,
      features: [
        'Quiet Environment',
        'Zen Garden',
        'Relaxation Mats',
        'Natural Lighting'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#FFF8F3] relative">
      <Scroll />
      {/* Header Section with Modern Pattern */}
      <div className="bg-[#8B4513] text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-white/30 rounded-tl-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-white/30 rounded-tr-3xl"></div>
        </div>
        {/* Animated Decorative Elements */}
        <div className="absolute w-48 animate-float-slow" 
          style={{top: '-5%', left: '-8%', animationDelay: '0s'}}>
          <img src={assets.element1Remove} alt="" className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity duration-300" />
        </div>
        <div className="absolute w-48 animate-float-medium" 
          style={{top: '-5%', right: '-8%', animationDelay: '2s', transform: 'scaleX(-1)'}}>
          <img src={assets.element1Remove} alt="" className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity duration-300" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-medium mb-3 tracking-wider uppercase">Rest & Relaxation</h1>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-0.5 bg-white/60"></div>
            <div className="w-2 h-2 bg-white/80 transform rotate-45"></div>
            <div className="w-12 h-0.5 bg-white/60"></div>
          </div>
          <p className="text-sm md:text-base opacity-90 max-w-xl mx-auto leading-relaxed font-light tracking-wide">
            Discover peaceful retreats within our traditional Javanese rest areas
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform group-hover:scale-125 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{facility.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                <div className="space-y-4">
                  <h4 className="font-medium text-[#8B4513] flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Facilities
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {facility.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center bg-[#FFF8F3] px-4 py-3 rounded-xl text-gray-700 hover:bg-[#8B4513]/5 transition-all duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-[#8B4513] rounded-full mr-3"></span>
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

      {/* Reservation Section */}
      <div className="py-16 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-3 tracking-wider uppercase text-[#8B4513]">Make a Reservation</h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
            <div className="w-2 h-2 bg-[#8B4513]/80 transform rotate-45"></div>
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
          </div>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Book your preferred rest area and customize your experience
          </p>
        </div>
        <FormArea />
      </div>

      {/* Rating Section */}
      <div className="py-16 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-3 tracking-wider uppercase text-[#8B4513]">Rate Your Stay</h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
            <div className="w-2 h-2 bg-[#8B4513]/80 transform rotate-45"></div>
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
          </div>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Share your experience about our rest facilities
          </p>
        </div>
        <Rating />
      </div>
    </div>
  )
}

export default RestArea
