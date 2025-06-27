import React from 'react';
import Header from './Header';
import RoadDivider from './components/RoadDivider';
import ContactForm from './components/ContactForm';

function About() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col overflow-x-hidden">
      <Header />
      <section className="w-full bg-white py-16 px-4 md:px-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-yellow-600">About Us</h2>
          <div className="bg-yellow-50 shadow-lg border border-yellow-200 rounded-xl p-4 sm:p-8 text-left break-words max-w-full">
            <p className="text-lg text-gray-800 leading-relaxed indent-8 mb-6">
              <span className="font-bold text-yellow-700">Southern Pavement Specialists</span>{' '}
              is dedicated to delivering{' '}
              <span className="font-semibold text-black">reliable, high-quality work</span>{' '}
              for every client, every time. Our team brings{' '}
              <span className="font-bold text-yellow-700">decades of experience</span>{' '}
              to every project, ensuring that each job is completed with{' '}
              <span className="font-semibold text-black">precision, safety, and care</span>.
              We understand the importance of{' '}
              <span className="font-bold text-yellow-700">meeting deadlines</span>{' '}
              and{' '}
              <span className="font-bold text-yellow-700">exceeding expectations</span>,
              which is why our clients trust us to handle their most important projects.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed indent-8 mb-6">
              From initial consultation to project completion, we communicate clearly and work efficiently,{' '}
              <span className="font-bold text-yellow-700">minimizing disruption</span>{' '}
              and{' '}
              <span className="font-bold text-yellow-700">maximizing value</span>.
              Our skilled professionals use the{' '}
              <span className="font-semibold text-black">best materials</span>{' '}
              and{' '}
              <span className="font-semibold text-black">proven techniques</span>{' '}
              to deliver results that last. Whether it’s a small repair or a large-scale restoration, we approach every task with the same{' '}
              <span className="font-bold text-yellow-700">commitment to excellence</span>.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed indent-8">
              At{' '}
              <span className="font-bold text-yellow-700">Southern Pavement Specialists</span>, we pride ourselves on our reputation for{' '}
              <span className="font-semibold text-black">integrity, reliability, and outstanding workmanship</span>.
              We’re not just building surfaces—we’re{' '}
              <span className="font-bold text-yellow-700">building relationships</span>{' '}
              and helping our community thrive, one project at a time.
            </p>
          </div>
        </div>
        <RoadDivider />
      </section>
      {/* Contact Form Section */}
      <section className="w-full bg-gray-50 py-16 px-4 md:px-24 border-b border-gray-100 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold mb-6 text-yellow-600 text-center">Contact SPS</h2>
        <ContactForm />
        <a href="#contact" className="mt-8 inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-full shadow hover:bg-yellow-500 transition text-lg">Request a Consultation</a>
      </section>
      <footer className="w-full text-center py-6 bg-black text-white mt-auto">
        &copy; {new Date().getFullYear()} SPS Restoration. All rights reserved.
      </footer>
    </div>
  );
}

export default About;
