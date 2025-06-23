import './index.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function UtilityRepairV2() {
  const [showDropdown, setShowDropdown] = useState(false);
  const closeTimeout = useRef();

  const handleDropdownEnter = () => {
    clearTimeout(closeTimeout.current);
    setShowDropdown(true);
  };
  const handleDropdownLeave = () => {
    closeTimeout.current = setTimeout(() => setShowDropdown(false), 150);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 px-4 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/public/vite.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 z-10">Utility Repair Services</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto z-10">Expert repair and maintenance of underground utilities—water, sewer, and electrical. Reliable, safe, and efficient solutions for your infrastructure needs.</p>
      </section>
      {/* Services Grid */}
      <main className="flex-1 w-full max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8 text-black text-center">Our Utility Repair Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Water Line Repair */}
          <div className="bg-white rounded-lg shadow border border-gray-200 p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-yellow-100 rounded-full border border-yellow-400">
              <span className="text-3xl text-yellow-600">🚰</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Water Line Repair</h3>
            <ul className="text-gray-700 text-sm space-y-1 mb-2">
              <li>Leak detection & repair</li>
              <li>Pipe replacement</li>
              <li>Pressure testing</li>
            </ul>
          </div>
          {/* Sewer Repair */}
          <div className="bg-white rounded-lg shadow border border-gray-200 p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-yellow-100 rounded-full border border-yellow-400">
              <span className="text-3xl text-yellow-600">🛁</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Sewer Repair</h3>
            <ul className="text-gray-700 text-sm space-y-1 mb-2">
              <li>Clog removal</li>
              <li>Pipe relining</li>
              <li>Manhole rehabilitation</li>
            </ul>
          </div>
          {/* Electrical/Other */}
          <div className="bg-white rounded-lg shadow border border-gray-200 p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-yellow-100 rounded-full border border-yellow-400">
              <span className="text-3xl text-yellow-600">💡</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Electrical & Other Utilities</h3>
            <ul className="text-gray-700 text-sm space-y-1 mb-2">
              <li>Conduit repair</li>
              <li>Underground cable work</li>
              <li>Stormwater systems</li>
            </ul>
          </div>
        </div>
        {/* Process Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-black text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">1. Assessment & Diagnosis</h3>
              <p className="text-gray-700 text-sm">We inspect and diagnose utility issues using advanced technology and expertise.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">2. Repair & Replacement</h3>
              <p className="text-gray-700 text-sm">Our team repairs or replaces damaged utilities with minimal disruption to your property.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">3. Testing & Restoration</h3>
              <p className="text-gray-700 text-sm">We test all repairs for safety and restore the site to its original condition.</p>
            </div>
          </div>
        </section>
        {/* Why Choose SPS */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-black text-center">Why Choose SPS?</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2 max-w-xl mx-auto">
            <li>Experienced, skilled team</li>
            <li>High-quality materials and equipment</li>
            <li>On-time project completion</li>
            <li>Customer satisfaction guaranteed</li>
            <li>Locally owned and operated</li>
          </ul>
        </section>
        <div className="flex justify-center mt-8">
          <a href="#contact" className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded shadow hover:bg-yellow-500 transition">Request a Quote</a>
        </div>
      </main>
      <footer className="w-full text-center py-6 bg-black text-white mt-auto">
        &copy; {new Date().getFullYear()} SPS Restoration. All rights reserved.
      </footer>
    </div>
  );
}

export default UtilityRepairV2;
