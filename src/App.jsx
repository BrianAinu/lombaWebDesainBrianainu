import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Beranda from './pages/Beranda/Beranda';
import Cultural from './pages/Cultural/Cultural';
import Culinary from './pages/Culinary/Culinary';
import RestArea from './pages/RestArea/RestArea';

// Komponen utama aplikasi PPDB SDS Kupu-Kupu
const App = () => {
    return (
        // Menggunakan flex column untuk memastikan footer selalu di bawah
        <div className="min-h-screen flex flex-col">
            {/* Navbar tetap di atas halaman */}
            <Navbar />

            {/* Konten utama dengan padding atas agar tidak tertutup navbar */}
            <main className="flex-grow pt-20">
                <Routes>
                    {/* Rute untuk halaman Beranda */}
                    <Route path="/" element={<Beranda />} />
                    {/* Rute untuk Wisata Budaya */}
                    <Route path="/cultural" element={<Cultural />} />
                    {/* Rute untuk Kuliner */}
                    <Route path="/culinary" element={<Culinary />} />
                    {/* Rute untuk Rest Area */}
                    <Route path="/rest-area" element={<RestArea />} />
                </Routes>
            </main>

            {/* Footer selalu di bawah konten */}
            <Footer />
        </div>
    );
};

export default App;
