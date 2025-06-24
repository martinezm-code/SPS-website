import React from 'react';
import Header from './Header';
import concreteImg from './images/Concrete/concrete-driveway-finish.webp';

function ConcreteServices() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <section className="max-w-5xl mx-auto pt-12 pb-16 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img src={concreteImg} alt="Concrete Services" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-80" />
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Concrete Services in Florida</h1>
            <p className="text-lg text-gray-700 mb-4">
              Southern Pavement Specialists provides expert concrete installation, repair, and restoration for driveways, sidewalks, curbs, ADA-compliant ramps, and more. Our team uses premium materials and proven techniques to ensure long-lasting, attractive results for both residential and commercial projects.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Driveways, sidewalks, and curbs</li>
              <li>ADA-compliant ramps</li>
              <li>Decorative and stamped concrete</li>
              <li>Concrete repairs and maintenance</li>
              <li>Commercial and residential work</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Enhance your property’s value and safety with SPS—Florida’s trusted concrete specialists.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <h2 className="text-2xl font-bold mb-3 text-yellow-700">Why Choose SPS for Concrete?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Experienced, skilled crews</li>
            <li>High-quality materials and equipment</li>
            <li>On-time project completion</li>
            <li>Customer satisfaction guaranteed</li>
            <li>Locally owned and operated</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Serving commercial and residential clients across Florida. Fully licensed and insured. Satisfaction guaranteed.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <h2 className="text-2xl font-bold mb-3 text-yellow-700">Our Concrete Process</h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-1">
            <li>Site assessment and preparation</li>
            <li>Formwork and reinforcement</li>
            <li>Concrete pouring and finishing</li>
            <li>Curing and quality inspection</li>
            <li>Final walkthrough and client approval</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            We use only the highest quality concrete and proven installation techniques to ensure your project stands the test of time.
          </p>
        </div>
        <div className="text-center mt-8">
          <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow transition-colors text-lg">Request a Free Concrete Estimate</a>
        </div>
      </section>
    </div>
  );
}

export default ConcreteServices;
