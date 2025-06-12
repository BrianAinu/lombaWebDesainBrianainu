import React from 'react'
import { assets } from '../../assets/assets'

// Component to display contact information
const Kontak = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Dekorasi latar belakang */}
      <div className="absolute w-48 animate-float-slow" 
        style={{top: '-5%', left: '-8%', animationDelay: '0s'}}>
        <img src={assets.element2} alt="" className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity duration-300" />
      </div>
      
      <div className="absolute w-48 animate-float-medium" 
        style={{bottom: '-5%', right: '-8%', animationDelay: '2s'}}>
        <img src={assets.element2} alt="" className="w-full h-auto opacity-60 hover:opacity-80 transition-opacity duration-300" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Judul section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-4">CONTACT US</h2>
          <p className="text-[#8B4513]/80">
            For more information about tourist visits and place reservations at Pendapa Ageng Hand Asta Sih, 
            please contact us through:
          </p>
        </div>

        {/* Informasi kontak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative">
          {/* Kolom kiri - Informasi kontak */}
          <div className="space-y-6">
            {/* Alamat */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-[#8B4513] rounded-full shadow-lg">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#8B4513] mb-1">Address:</h3>
                <p className="text-[#8B4513]/80">
                  W3R4+6R4, Togogan I
                  <br />
                  Togogan, Kec. Srengat
                  <br />
                  Kabupaten Blitar, Jawa Timur 66152
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-[#8B4513] rounded-full shadow-lg">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#8B4513] mb-1">Email:</h3>
                <a href="mailto:brianainu@akb.ac.id" className="text-[#8B4513] hover:text-[#DEB887] transition-colors">
                  brianainu@akb.ac.id
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-[#8B4513] rounded-full shadow-lg">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#8B4513] mb-1">WhatsApp:</h3>
                <a href="#" className="text-[#8B4513] hover:text-[#DEB887] transition-colors">
                  -
                </a>
              </div>
            </div>
          </div>

          {/* Kolom kanan - Peta lokasi */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.403186387628!2d112.05497587476903!3d-8.060291591967331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ef9304aaf0b7%3A0x7dd7cc4650517f4d!2sPendapa%20Ageng%20Hand%20Asta%20Sih!5e0!3m2!1sid!2sid!4v1748050655498!5m2!1sid!2sid"
              className="w-full h-[450px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kontak