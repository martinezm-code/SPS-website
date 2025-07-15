import React from 'react';
import Header from './Header';
import { ServicesGrid, ServiceCard } from './components/ServicesGrid';
import asphaltImg from './images/Asphalt/asphalt-parking-lot.webp';
import asphaltFreshImg from './images/Asphalt/asphalt-freshly-paved.webp';
import asphaltRollerImg from './images/Asphalt/asphalt-road-roller.webp';

export default function Asphalt() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <Header />
      <section className="relative bg-gradient-to-b from-yellow-50 via-white to-gray-50 text-black py-20 px-4 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/public/vite.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="w-24 h-2 bg-yellow-400 rounded-full mx-auto mb-6" />
        <h1 className="text-5xl font-extrabold mb-4 z-10 tracking-tight">Asphalt Services</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto z-10 font-light mb-6">Professional asphalt paving, patching, and repair for roads, parking lots, and more. Quality, safety, and durability—guaranteed.</p>
        <a href="#contact" className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition z-10">Get In Touch</a>
      </section>
      <main className="flex-1 w-full max-w-7xl mx-auto py-20 px-2 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-black text-center tracking-tight">Our Asphalt Expertise</h2>
        <ServicesGrid>
          <ServiceCard
            image={asphaltImg}
            alt="Asphalt Paving"
            title="Asphalt Paving"
            items={["New paving & overlays","Parking lots & roadways","Surface repairs","Sealcoating"]}
          />
          <ServiceCard
            image={asphaltFreshImg}
            alt="Asphalt Repairs"
            title="Asphalt Repairs"
            items={["Pothole patching","Crack filling","Surface restoration","Preventative maintenance"]}
          />
          <ServiceCard
            image={asphaltRollerImg}
            alt="Asphalt Compaction"
            title="Asphalt Compaction"
            items={["Proper compaction techniques","Smooth, durable finish","Modern equipment"]}
          />
        </ServicesGrid>
        <section className="mb-16 w-full bg-gradient-to-b from-yellow-50 via-white to-gray-50 py-16 flex justify-center">
          <div className="max-w-4xl w-full mx-auto text-center bg-white rounded-xl shadow border border-yellow-100 p-8">
            <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-black">Why Choose Our Asphalt Services?</h2>
            <div className="w-full flex justify-center mb-6">
              <div className="w-2/3 h-1 bg-yellow-400 rounded-none" />
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Our team delivers long-lasting, attractive asphalt surfaces for all types of projects. We use high-quality materials and modern equipment to ensure a smooth, durable finish. From new installations to repairs and maintenance, we handle every aspect of your asphalt needs with professionalism and care.
            </p>
          </div>
        </section>
        <section className="mb-16 w-full bg-gradient-to-b from-yellow-50 via-white to-gray-50 py-16 flex justify-center">
          <div className="max-w-4xl w-full mx-auto bg-white rounded-xl shadow border border-yellow-100 p-8 text-left">
            <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-black text-center">More About Our Asphalt Services</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Southern Pavement Specialists, our asphalt services are built on decades of expertise and a commitment to lasting quality. We handle every aspect of asphalt paving, from new construction and overlays to precision repairs and preventative maintenance. Our team uses only premium-grade asphalt and the latest equipment to ensure a smooth, durable surface that stands up to heavy traffic and harsh weather. We take pride in our attention to detail—every project is carefully graded, compacted, and finished for optimal performance and curb appeal. Whether you need a new parking lot, a resurfaced roadway, or expert patching, we deliver results that enhance safety, value, and the long-term integrity of your property. Trust us for honest communication, on-time completion, and a finished product that exceeds expectations.
            </p>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-black text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">1. Consultation & Assessment</h3>
              <p className="text-gray-700 text-sm">We evaluate your site and discuss your needs to recommend the best asphalt solution.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">2. Preparation & Installation</h3>
              <p className="text-gray-700 text-sm">Our team prepares the area, installs the asphalt, and ensures all work meets our quality standards.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">3. Finishing & Clean-Up</h3>
              <p className="text-gray-700 text-sm">We complete finishing touches, clean the site, and walk you through the results for your satisfaction.</p>
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
