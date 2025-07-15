import React from 'react';
import Header from './Header';
import { ServicesGrid, ServiceCard } from './components/ServicesGrid';
import wellPointImg from './images/Wellpoint/wellpoint-dewatering-pump.webp';
import pumpImg from './images/Wellpoint/wellpoint-system-installation.webp';
import floodControlImg from './images/Wellpoint/flood-control.jpg';

export default function Dewatering() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <Header />
      <section className="relative bg-gradient-to-b from-yellow-50 via-white to-gray-50 text-black py-20 px-4 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/public/vite.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="w-24 h-2 bg-yellow-400 rounded-full mx-auto mb-6" />
        <h1 className="text-5xl font-extrabold mb-4 z-10 tracking-tight">Dewatering Services</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto z-10 font-light mb-6">Efficient groundwater management and dewatering solutions for construction and restoration projects. Keep your site dry, safe, and on schedule.</p>
        <a href="#contact" className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition z-10">Get In Touch</a>
      </section>
      <main className="flex-1 w-full max-w-7xl mx-auto py-20 px-2 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-black text-center tracking-tight">Our Dewatering Expertise</h2>
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
            image={floodControlImg}
            alt="Construction Dewatering"
            title="Construction Dewatering"
            items={["Water diversion & pumping","Emergency response","Site drainage solutions"]}
          />
        </ServicesGrid>
        <section className="mb-16 w-full bg-gradient-to-b from-yellow-50 via-white to-gray-50 py-16 flex justify-center">
          <div className="max-w-4xl w-full mx-auto text-center bg-white rounded-xl shadow border border-yellow-100 p-8">
            <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-black">Why Choose Our Dewatering Services?</h2>
            <div className="w-full flex justify-center mb-6">
              <div className="w-2/3 h-1 bg-yellow-400 rounded-none" />
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Our dewatering services are essential for safe, efficient construction and restoration projects in areas with high groundwater. We design and install custom systems to control water levels, prevent flooding, and create stable, dry conditions for excavation and building. Our team uses advanced pumps and monitoring technology to ensure continuous, reliable performance throughout your project.
            </p>
          </div>
        </section>
        <section className="mb-16 w-full bg-gradient-to-b from-yellow-50 via-white to-gray-50 py-16 flex justify-center">
          <div className="max-w-4xl w-full mx-auto bg-white rounded-xl shadow border border-yellow-100 p-8 text-left">
            <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-black text-center">More About Our Dewatering Services</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our dewatering services are essential for safe, efficient construction and restoration projects in areas with high groundwater. We design and install custom systems to control water levels, prevent flooding, and create stable, dry conditions for excavation and building. Our team uses advanced pumps and monitoring technology to ensure continuous, reliable performance throughout your project. We handle everything from site evaluation and system design to compliance with environmental regulations and final site restoration. With Southern Pavement Specialists, you get a partner who understands the critical role of groundwater management in project success—and who delivers solutions that keep your site dry, safe, and on schedule.
            </p>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-black text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">1. Consultation & Site Evaluation</h3>
              <p className="text-gray-700 text-sm">We assess your site and groundwater conditions to design the best dewatering solution.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">2. System Design & Installation</h3>
              <p className="text-gray-700 text-sm">Our team installs the dewatering system and monitors performance throughout the project.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">3. Completion & Site Restoration</h3>
              <p className="text-gray-700 text-sm">We remove the system, restore the site, and ensure your project is ready for the next phase.</p>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center mt-12">
          <h3 className="text-xl font-semibold mb-2">Let's Talk About Your Project</h3>
          <a href="#contact" className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition">Contact Us</a>
        </div>
      </main>
    </div>
  );
}
