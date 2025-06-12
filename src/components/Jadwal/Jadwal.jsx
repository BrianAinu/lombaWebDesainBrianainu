import React from 'react'
import Background from '../background/background'

// Component to display operational schedule
const Jadwal = () => {
  // Operational schedule data
  const operationalSchedule = [
    { day: "Saturday", hours: "06.00-22.30" },
    { day: "Sunday", hours: "06.00-22.00" },
    { day: "Monday", hours: "06.00-22.00" },
    { day: "Tuesday", hours: "06.00-22.00" },
    { day: "Wednesday", hours: "06.00-22.00" },
    { day: "Thursday", hours: "06.00-22.00" },
    { day: "Friday", hours: "06.00-22.00" }
  ]

  return (
    <section className="py-16 bg-[#8B4513] relative overflow-hidden">
      {/* Menggunakan komponen Background */}
      <Background />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Judul section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">OPERATIONAL HOURS</h2>
          <p className="text-white/80">
            Here are the operational hours of Pendapa Ageng Hand Asta Sih
          </p>
        </div>

        {/* Tabel jadwal */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
          <div className="p-6">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#8B4513] font-bold text-lg">opening time</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {operationalSchedule.map((item) => (
                <div key={item.day} 
                  className="flex flex-col items-center p-3 border-r border-[#DEB887]/30 last:border-0">
                  <span className="text-[#8B4513] font-semibold mb-1">{item.day}</span>
                  <span className="text-[#8B4513] text-sm bg-[#DEB887]/10 px-3 py-1 rounded-full">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jadwal