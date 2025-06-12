import React from 'react'
import Hero from '../../components/Hero/Hero'
import Jadwal from '../../components/Jadwal/Jadwal'
import VideoYt from '../../components/VideoYt/VideoYt'
import Kontak from '../../components/Kontak/Kontak'
import Feedback from '../../components/Feedback/Feedback'

// Halaman Beranda yang menampilkan informasi utama sekolah
const Beranda = () => {
  return (
    <div>
      {/* Bagian hero untuk menampilkan banner utama */}
      <Hero />
      
      {/* Bagian jadwal untuk menampilkan informasi pendaftaran */}
      <Jadwal />

      {/* Bagian video YouTube */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">EXPLORE OUR VENUE</h2>
            <p className="text-gray-600">Take a virtual tour of Pendapa Ageng Hand Asta Sih</p>
          </div>
          <div className="max-w-[900px] mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <VideoYt />
            </div>
          </div>
        </div>
      </div>

      {/* Bagian kontak untuk menampilkan informasi kontak panitia */}
      <Kontak />
      
      {/* Bagian feedback untuk menampilkan form saran dan masukan */}
      <Feedback />
    </div>
  )
}

export default Beranda