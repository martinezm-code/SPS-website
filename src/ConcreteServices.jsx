import Header from './Header';
import { ServicesGrid, ServiceCard } from './components/ServicesGrid';
import concreteImg from './images/Concrete/concrete-driveway-finish.webp';
import concreteCurbImg from './images/Concrete/concrete-curb-installation.webp';
import concretePaverImg from './images/Concrete/concrete-paver-walkway.webp';

export default function ConcreteServices() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <Header />
      <section className="relative bg-gradient-to-b from-yellow-50 via-white to-gray-50 text-black py-20 px-4 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/public/vite.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
        <div className="w-24 h-2 bg-yellow-400 rounded-full mx-auto mb-6" />
        <h1 className="text-5xl font-extrabold mb-4 z-10 tracking-tight">Concrete Services</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto z-10 font-light mb-6">Expert concrete installation, finishing, and repair for driveways, sidewalks, curbs, and more. Quality, safety, and durability—guaranteed.</p>
        <a href="#contact" className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition z-10">Get In Touch</a>
      </section>
      <main className="flex-1 w-full max-w-7xl mx-auto py-20 px-2 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-black text-center tracking-tight">Our Concrete Expertise</h2>
        <ServicesGrid>
          <ServiceCard
            image={concreteImg}
            alt="Concrete Driveways"
            title="Concrete Driveways"
            items={["Driveways & sidewalks","ADA-compliant ramps","Decorative & stamped concrete","Repairs & maintenance"]}
          />
          <ServiceCard
            image={concreteCurbImg}
            alt="Concrete Curbs"
            title="Concrete Curbs"
            items={["Curb installation","Site grading","Custom designs","Long-lasting results"]}
          />
          <ServiceCard
            image={concretePaverImg}
            alt="Concrete Pavers"
            title="Concrete Pavers"
            items={["Patios & walkways","Custom patterns","Repairs & relays","Edging & borders"]}
          />
        </ServicesGrid>
        <section className="mb-16 w-full bg-gradient-to-b from-yellow-50 via-white to-gray-50 py-16 flex justify-center">
          <div className="max-w-4xl w-full mx-auto text-center bg-white rounded-xl shadow border border-yellow-100 p-8">
            <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-black">Why Choose Our Concrete Services?</h2>
            <div className="w-full flex justify-center mb-6">
              <div className="w-2/3 h-1 bg-yellow-400 rounded-none" />
            </div>
            <p className="text-lg text-gray-700 mb-6">
              We provide durable, attractive concrete solutions for residential and commercial projects. Our experienced team ensures every installation meets the highest standards for quality and safety, from driveways to decorative patios.
            </p>
          </div>
        </section>
        <section className="mb-16 w-full bg-gradient-to-b from-yellow-50 via-white to-gray-50 py-16 flex justify-center">
          <div className="max-w-4xl w-full mx-auto bg-white rounded-xl shadow border border-yellow-100 p-8 text-left">
            <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-black text-center">More About Our Concrete Services</h2>
            <p className="text-lg text-gray-700 mb-6">
              Southern Pavement Specialists delivers comprehensive concrete solutions for both residential and commercial clients. Our services include driveways, sidewalks, curbs, ADA-compliant ramps, decorative and stamped concrete, and more. We use high-strength concrete mixes and proven installation techniques to ensure every surface is both beautiful and built to last. Our skilled crews pay close attention to site preparation, formwork, and finishing, resulting in crisp edges, smooth finishes, and long-term durability. We understand that concrete is an investment in your property’s value and safety, so we approach every project with professionalism, clear communication, and a focus on your satisfaction. From concept to completion, we’re your trusted partner for quality concrete work in Florida.
            </p>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-black text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0">
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">1. Consultation & Assessment</h3>
              <p className="text-gray-700 text-sm">We evaluate your site and discuss your needs to recommend the best concrete solution.</p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold mb-2 text-yellow-700">2. Preparation & Installation</h3>
              <p className="text-gray-700 text-sm">Our team prepares the area, pours and finishes the concrete, and ensures all work meets our quality standards.</p>
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
