import './index.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { ServicesGrid, ServiceCard } from './components/ServicesGrid';
import millingImg from './images/Asphalt/shutterstock_2256489041.jpg';
import resurfacingImg from './images/Asphalt/shutterstock_1113930644.jpg';
import StrippingMarkingImg from './images/shutterstock_1675715131.jpg';

function SoftSurfacingV2() {
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 z-10">Soft Surface Restoration</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto z-10">Professional installation and repair of soft surfacing for streets, neighborhoods, and highways. Safety, quality, and reliability—guaranteed.</p>
      </section>
      {/* Services Grid */}
      <main className="flex-1 w-full max-w-7xl mx-auto py-16 px-2 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-black text-center">Our Soft Surfacing Solutions</h2>
        <ServicesGrid>
          <ServiceCard
            image={millingImg}
            alt="Asphalt Milling"
            title="Asphalt Milling"
            items={["Surface removal & recycling","Preparation for overlays","Efficient, eco-friendly process"]}
          />
          <ServiceCard
            image={resurfacingImg}
            alt="Resurfacing"
            title="Resurfacing"
            items={["Neighborhood streets","Parking lots","Long-lasting, smooth finish"]}
          />
          <ServiceCard
            image={StrippingMarkingImg}
            alt="Striping & Marking"
            title="Striping & Marking"
            items={["Parking lot striping","Roadway markings","ADA compliance"]}
          />
        </ServicesGrid>
        {/* Expanded Service Details Section */}
        <section className="mb-12 max-w-4xl mx-auto relative">
          {/* Decorative Icon */}
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 border-2 border-yellow-400 shadow text-yellow-600 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M16 11V7a4 4 0 10-8 0v4M5 17h14" />
              </svg>
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-black text-center">More About Our Soft Surfacing Services</h2>
          {/* Divider */}
          <div className="w-full flex justify-center mb-6">
            <div className="w-2/3 h-1 bg-yellow-400 rounded-none" />
          </div>
          {/* Card Layout */}
          <div className="flex flex-col md:flex-row gap-8 md:-mx-20">
            <div className="flex-1 bg-yellow-50 shadow-lg border border-yellow-200 rounded-xl p-8 flex flex-col justify-center md:mx-0">
              <p className="text-lg text-gray-800 leading-relaxed indent-8 mb-4">
                <span className="font-bold text-yellow-700">Safety, appearance, and longevity</span> are at the heart of our soft surfacing services. We specialize in <span className="font-semibold text-black">asphalt milling, resurfacing, and precise striping and marking</span>, ensuring every project meets the highest standards for quality and compliance. Whether you need to refresh a parking lot or restore a residential roadway, our team delivers <span className="font-bold text-yellow-700">smooth, durable results</span> that stand up to daily use.
              </p>
            </div>
            <div className="flex-1 bg-yellow-50 shadow-lg border border-yellow-200 rounded-xl p-8 flex flex-col justify-center md:mx-0">
              <p className="text-lg text-gray-800 leading-relaxed indent-8 mb-4">
                We use <span className="font-bold text-yellow-700">advanced equipment</span> and proven techniques to minimize disruption and maximize value for our clients. From <span className="font-semibold text-black">eco-friendly milling and recycling</span> to <span className="font-semibold text-black">ADA-compliant markings</span>, SPS is committed to providing solutions that are both functional and visually appealing. <span className="font-bold text-yellow-700">Trust us to keep your surfaces safe, attractive, and ready for whatever comes next.</span>
              </p>
            </div>
          </div>
          {/* Callout Box */}
          <div className="mt-8 bg-white border-l-4 border-yellow-400 shadow p-6 rounded-xl flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-500 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m9 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-md text-gray-700 mb-1"><span className="font-bold text-black">Did you know?</span> Proper soft surfacing can reduce long-term maintenance costs and improve safety for everyone using your property.</p>
              <p className="text-sm text-gray-500">"SPS made our neighborhood streets look brand new and the process was quick and professional!" <span className="italic">- Satisfied Client</span></p>
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-black text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">1. Assessment & Planning</h3>
              <p className="text-gray-700 text-sm">We assess your site and develop a plan for optimal surfacing and safety.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">2. Surface Preparation</h3>
              <p className="text-gray-700 text-sm">Our team prepares the area, ensuring a stable base and proper drainage.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">3. Installation & Marking</h3>
              <p className="text-gray-700 text-sm">We install the new surface and complete all required striping and markings.</p>
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

export default SoftSurfacingV2;
