import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import Scroll from '../../components/Scroll/Scroll'
import Rating from '../../components/Rating/Rating'
import FormData from '../../components/formdata/FormData'

const Cultural = () => {
  // Data wisata budaya
  const culturalAttractions = [
    {
      id: 1,
      title: 'Grand Pendapa',
      subtitle: 'Javanese Architectural Heritage',
      location: 'Main Complex',
      description: 'A majestic Javanese hall featuring traditional Joglo architecture that reflects royal court grandeur. Ancient pillars and intricate carvings adorn every corner, standing as silent witnesses to centuries of history and tradition.',
      features: [
        'Ancient Joglo Architecture',
        'Carved Main Pillars',
        'Sacred Gamelan Set',
        'Meditation Space'
      ],
      image: assets.joglo4,
    },
    {
      id: 2,
      title: 'Arts Center',
      subtitle: 'Cultural Creation Hub',
      location: 'East Complex',
      description: 'A vibrant cultural center preserving Javanese heritage through active learning. Here, traditional dance, gamelan music, and various classical arts are taught to ensure their continuation for future generations.',
      features: ['Traditional Dance Studio', 'Gamelan Practice Hall', 'Batik Gallery', 'Crafts Workshop'],
      image: assets.kerajinan1
    },
    {
      id: 3,
      title: 'Performance Hall',
      subtitle: 'Traditional Arts Stage',
      location: 'Open Area',
      description: 'A harmonious blend of traditional and modern design, this venue hosts various classical performances including wayang kulit shadow puppetry, ketoprak theater, and classical dance performances.',
      features: ['Traditional Stage', 'Comfortable Seating', 'Artistic Lighting', 'Premium Acoustics'],
      image: assets.joglo2
    }
  ]

  return (
    <div className="min-h-screen bg-[#FFF8F3] relative">
      <Scroll />
      {/* Header Section */}
      <div className="bg-[#8B4513] text-white pt-16 md:pt-24 pb-24 md:pb-32 relative overflow-hidden">
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-3 tracking-wider uppercase">Cultural Tourism</h1>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-0.5 bg-white/60"></div>
            <div className="w-2 h-2 bg-white/80 transform rotate-45"></div>
            <div className="w-12 h-0.5 bg-white/60"></div>
          </div>
          <p className="text-sm md:text-base opacity-90 max-w-xl mx-auto leading-relaxed font-light tracking-wide">
            Discover the living heritage of Javanese culture in every corner of our Grand Pendapa
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-20 relative z-10 pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {culturalAttractions.map((attraction) => (
            <div
              key={attraction.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover transform group-hover:scale-125 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold">{attraction.title}</h3>
                </div>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">{attraction.description}</p>
                <div className="space-y-4">
                  <h4 className="font-medium text-[#8B4513] flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Facilities
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {attraction.features.map((feature, index) => (
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

      {/* Form Data Section */}
      <div className="py-16 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-3 tracking-wider uppercase text-[#8B4513]">Register for Cultural Activities</h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
            <div className="w-2 h-2 bg-[#8B4513]/80 transform rotate-45"></div>
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
          </div>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Register for our cultural activities and workshops
          </p>
        </div>
        <FormData />
      </div>

      {/* Rating Section */}
      <div className="py-16 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-3 tracking-wider uppercase text-[#8B4513]">Your Feedback</h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
            <div className="w-2 h-2 bg-[#8B4513]/80 transform rotate-45"></div>
            <div className="w-12 h-0.5 bg-[#8B4513]/60"></div>
          </div>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Share your experience about our cultural attractions
          </p>
        </div>
        <Rating />
      </div>
    </div>
  )
}

export default Cultural
