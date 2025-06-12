import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../../assets/assets'

// Komponen Navbar yang berisi menu navigasi utama
const Navbar = () => {
  // State untuk mengontrol hamburger menu
  const [isOpen, setIsOpen] = useState(false)
  
  // Mendapatkan lokasi halaman saat ini
  const location = useLocation()

  // Daftar menu navigasi
  const menuItems = [
    { path: '/', label: 'Information' },
    { path: '/cultural', label: 'Cultural Tourism' },
    { path: '/culinary', label: 'Culinary' },
    { path: '/rest-area', label: 'Rest Area' },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo dan Nama Sekolah */}
          <div className="flex-shrink-0 flex items-center space-x-2 md:space-x-3">
            <Link to="/" className="flex items-center space-x-2 md:space-x-3">
              <img
                className="h-8 w-auto sm:h-10 md:h-12 transition-all duration-300"
                src={assets.logoJoglo}
                alt="Logo Pendapa Ageng"
              />
              <div className="flex flex-col">
                <span className="text-[#8B4513] font-bold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">PENDAPA AGENG HAND ASTA SIH</span>
              </div>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#8B4513] hover:text-[#A0522D] hover:bg-[#8B4513]/10 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Buka menu utama</span>
              {/* Icon hamburger */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon close */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center">
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[#8B4513] hover:text-[#A0522D] px-2 lg:px-3 py-2 rounded-md text-sm font-medium relative transition-all duration-200
                    ${location.pathname === item.path ? 'font-bold' : ''}`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B4513] rounded-full transform origin-left transition-transform duration-300 scale-x-100" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[#8B4513] hover:text-[#A0522D] block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${location.pathname === item.path ? 'bg-[#8B4513]/10 font-bold' : 'hover:bg-[#8B4513]/5'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar