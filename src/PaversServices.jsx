import React from 'react';
import Header from './Header';
import paversImg from './images/Concrete/shutterstock_2272955959.jpg';

function PaversServices() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <section className="max-w-5xl mx-auto pt-12 pb-16 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img src={paversImg} alt="Pavers Services" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-80" />
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Pavers Installation & Repair in Florida</h1>
            <p className="text-lg text-gray-700 mb-4">
              Southern Pavement Specialists is your trusted local expert for paver installation and repair. We deliver beautiful, durable, and low-maintenance paver solutions for driveways, walkways, patios, and commercial spaces. Our team is committed to quality craftsmanship, on-time project completion, and customer satisfaction.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Interlocking concrete and brick pavers</li>
              <li>Custom patterns and borders</li>
              <li>Driveways, patios, walkways, pool decks</li>
              <li>Repairs, relays, and cleaning</li>
              <li>Commercial and residential projects</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Enhance your curb appeal, increase property value, and enjoy long-lasting results with SPS—Florida’s leader in professional paver services.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <h2 className="text-2xl font-bold mb-3 text-yellow-700">Why Choose SPS for Pavers?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Experienced, detail-oriented installation crews</li>
            <li>Premium materials for lasting beauty</li>
            <li>Wide range of colors, shapes, and finishes</li>
            <li>Seamless project management from start to finish</li>
            <li>Competitive pricing and free consultations</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Serving commercial and residential clients across Florida. Fully licensed and insured. Satisfaction guaranteed.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <h2 className="text-2xl font-bold mb-3 text-yellow-700">Our Paver Installation Process</h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-1">
            <li>Site assessment and design consultation</li>
            <li>Excavation and base preparation</li>
            <li>Paver laying and pattern alignment</li>
            <li>Edge restraint and joint sand application</li>
            <li>Final inspection and client walkthrough</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            We use only the highest quality paver materials and proven installation techniques to ensure your project stands the test of time.
          </p>
        </div>
        <div className="text-center mt-8">
          <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow transition-colors text-lg">Request a Free Pavers Estimate</a>
        </div>
      </section>
    </div>
  );
}

export default PaversServices;
