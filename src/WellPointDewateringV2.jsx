import './index.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { ServicesGrid, ServiceCard } from './components/ServicesGrid';
import wellPointImg from './images/Wellpoint/wellpoint-dewatering-pump.webp';
import pumpImg from './images/Wellpoint/wellpoint-system-installation.webp';
import backFillingImg from './images/Wellpoint/wellpoint-pipes.webp';

function WellPointDewateringV2() {
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 z-10">WellPoint Dewatering Services</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto z-10">Efficient groundwater management and dewatering solutions for construction and restoration projects. Keep your site dry, safe, and on schedule.</p>
      </section>
      {/* Services Grid */}
      <main className="flex-1 w-full max-w-7xl mx-auto py-16 px-2 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-black text-center">Our WellPoint Dewatering Solutions</h2>
        <ServicesGrid>
          <ServiceCard
            image={wellPointImg}
            alt="WellPoint Systems"
            title="WellPoint Systems"
            items={["Temporary groundwater control","Trenching & excavations","Custom system design"]}
          />
          <ServiceCard
            image={pumpImg}
            alt="Pumping & Monitoring"
            title="Pumping & Monitoring"
            items={["Continuous water removal","Automated monitoring","24/7 support"]}
          />
          <ServiceCard
            image={backFillingImg}
            alt="Site Restoration"
            title="Site Restoration"
            items={["Backfilling & compaction","Surface restoration","Site cleanup"]}
          />
        </ServicesGrid>
        {/* Expanded Service Details Section */}
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">More About Our WellPoint Dewatering Services</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our WellPoint dewatering services are essential for safe, efficient construction and restoration projects in areas with high groundwater. We design and install custom WellPoint systems to control water levels, prevent flooding, and create stable, dry conditions for excavation and building. Our team uses advanced pumps and monitoring technology to ensure continuous, reliable performance throughout your project.
          </p>
          <p className="text-lg text-gray-700">
            From initial site evaluation to final restoration, SPS manages every aspect of the dewatering process. We prioritize safety, environmental responsibility, and minimal disruption to your schedule. Whether you’re working on a small trench or a large commercial site, trust our expertise to keep your project on track and your site protected from groundwater challenges.
          </p>
        </section>
        {/* Process Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-black text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">1. Site Evaluation</h3>
              <p className="text-gray-700 text-sm">We assess groundwater conditions and recommend the best dewatering approach for your project.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">2. System Installation</h3>
              <p className="text-gray-700 text-sm">Our team installs and tests the WellPoint system for optimal performance and safety.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">3. Monitoring & Completion</h3>
              <p className="text-gray-700 text-sm">We monitor water levels, adjust as needed, and restore the site upon project completion.</p>
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

export default WellPointDewateringV2;
