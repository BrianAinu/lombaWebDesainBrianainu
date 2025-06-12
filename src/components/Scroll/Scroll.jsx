import React from 'react'

const Scroll = () => {
  return (
    <div className="hidden md:flex fixed right-8 bottom-8 z-50 cursor-pointer group">
      <div className="flex items-center gap-2 bg-[#8B4513] px-4 py-2 rounded-full shadow-lg transition-all duration-300 group-hover:bg-[#A0522D]">
        <span className="text-sm font-medium tracking-wider text-white">SCROLL</span>
        <div className="relative w-5 h-5">
          <div className="absolute inset-0 animate-scroll-down">
            <svg
              className="w-5 h-5 transform rotate-90 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scroll
