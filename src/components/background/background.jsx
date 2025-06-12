import React from 'react'
import { assets } from '../../assets/assets'

// Komponen untuk menampilkan latar belakang dengan elemen dekoratif
const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Elemen dekoratif bagian kiri */}
      <div className="absolute w-48 animate-float-slow" 
        style={{top: '5%', left: '-5%', animationDelay: '0s'}}>
        <img src={assets.element1Remove} alt="" className="w-full h-auto" />
      </div>
      
      {/* Elemen dekoratif bagian kanan */}
      <div className="absolute w-40 animate-float-slow" 
        style={{top: '60%', right: '-5%', animationDelay: '3s'}}>
        <img src={assets.element1Remove} alt="" className="w-full h-auto" />
      </div>
    </div>
  )
}

export default Background