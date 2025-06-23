import './index.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ServicesGrid, ServiceCard } from './components/ServicesGrid';
import asphaltImg from './images/Asphalt/shutterstock_1941199573.jpg';
import concreteImg from './images/Concrete/shutterstock_1705717126.jpg';
import paversImg from './images/Concrete/shutterstock_2272955959.jpg';

import spsLogo from './images/SPS LOGO _ NEW.jpg';
import Header from './Header';

function HardSurfacingV2() {
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
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 px-4 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/public/vite.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 z-10">Hard Surface restoration</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto z-10">Expert installation and repair of concrete, asphalt, and paver surfaces for commercial and residential projects. Quality, safety, and durability—guaranteed.</p>
      </section>
      {/* Services Grid */}
      <main className="flex-1 w-full max-w-7xl mx-auto py-16 px-2 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-black text-center">Our Hard Surfacing Solutions</h2>
        <ServicesGrid>
          <ServiceCard
            image={concreteImg}
            alt="Concrete"
            title="Concrete"
            items={["Driveways, sidewalks, curbs","ADA-compliant ramps","Decorative & stamped concrete","Repairs & maintenance"]}
          />
          <ServiceCard
            image={asphaltImg}
            alt="Asphalt"
            title="Asphalt"
            items={["Paving & patching","Parking lots & roadways","Surface repairs","Sealcoating"]}
          />
          <ServiceCard
            image={paversImg}
            alt="Pavers"
            title="Pavers"
            items={["Patios & walkways","Custom designs","Repairs & relays","Edging & borders"]}
          />
        </ServicesGrid>
        {/* More About Section */}
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-black text-center">More About Our Hard Surfacing Services</h2>
          <div className="flex flex-col gap-8">
            <div className="bg-white shadow-lg border border-gray-100 rounded-xl p-8 flex flex-col justify-center" style={{ minHeight: '220px' }}>
              <p className="text-lg text-gray-700 leading-relaxed indent-8 mb-4">
                Our hard surfacing solutions are designed to withstand the toughest conditions while maintaining a polished, professional appearance. Whether you need a new concrete driveway, a resurfaced parking lot, or custom paver walkways, we use only the highest quality materials and proven installation techniques. Our team is experienced in both large-scale commercial projects and detailed residential work, ensuring every job is completed to the highest standards.
              </p>
            </div>
            <div className="bg-white shadow-lg border border-gray-100 rounded-xl p-8 flex flex-col justify-center" style={{ minHeight: '220px' }}>
              <p className="text-lg text-gray-700 leading-relaxed indent-8 mb-4">
                We understand that durability and safety are just as important as aesthetics. That’s why we offer a full range of services, from ADA-compliant ramps and decorative finishes to expert repairs and maintenance. Our commitment to excellence means your surfaces will look great and perform reliably for years to come. Trust SPS for all your hard surfacing needs—where quality and customer satisfaction always come first.
              </p>
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-black text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">1. Consultation & Assessment</h3>
              <p className="text-gray-700 text-sm">We evaluate your site and discuss your needs to recommend the best hard surfacing solution.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">2. Preparation & Installation</h3>
              <p className="text-gray-700 text-sm">Our team prepares the area, installs the chosen surface, and ensures all work meets our quality standards.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">3. Finishing & Clean-Up</h3>
              <p className="text-gray-700 text-sm">We complete finishing touches, clean the site, and walk you through the results for your satisfaction.</p>
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

export default HardSurfacingV2;
