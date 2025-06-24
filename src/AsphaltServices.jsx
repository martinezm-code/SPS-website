import React from 'react';
import Header from './Header';
import asphaltImg from './images/Asphalt/shutterstock_1941199573.jpg';

function AsphaltServices() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <section className="max-w-5xl mx-auto pt-12 pb-16 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img src={asphaltImg} alt="Asphalt Services" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-80" />
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Asphalt Paving & Repair in Florida</h1>
            <p className="text-lg text-gray-700 mb-4">
              Southern Pavement Specialists offers professional asphalt paving, patching, and repair for parking lots, roadways, and driveways. Our team uses high-quality materials and advanced equipment to deliver smooth, durable, and long-lasting asphalt surfaces for both commercial and residential clients.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>New asphalt paving & resurfacing</li>
              <li>Patching & pothole repair</li>
              <li>Parking lots, driveways, and roadways</li>
              <li>Sealcoating & crack filling</li>
              <li>Commercial and residential projects</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Improve safety, curb appeal, and value with SPS—Florida’s trusted asphalt experts.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <h2 className="text-2xl font-bold mb-3 text-yellow-700">Why Choose SPS for Asphalt?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Experienced, skilled paving crews</li>
            <li>Premium materials and equipment</li>
            <li>On-time project completion</li>
            <li>Customer satisfaction guaranteed</li>
            <li>Locally owned and operated</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Serving commercial and residential clients across Florida. Fully licensed and insured. Satisfaction guaranteed.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <h2 className="text-2xl font-bold mb-3 text-yellow-700">Our Asphalt Process</h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-1">
            <li>Site assessment and preparation</li>
            <li>Grading and base installation</li>
            <li>Asphalt paving and compaction</li>
            <li>Finishing, striping, and clean-up</li>
            <li>Final inspection and client approval</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            We use only the highest quality asphalt and proven paving techniques to ensure your project stands the test of time.
          </p>
        </div>
        <div className="text-center mt-8">
          <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow transition-colors text-lg">Request a Free Asphalt Estimate</a>
        </div>
      </section>
    </div>
  );
}

export default AsphaltServices;
