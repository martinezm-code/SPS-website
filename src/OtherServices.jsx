import './index.css';
import { Link } from 'react-router-dom';
import Header from './Header';

function OtherServices() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <Header />
      <section className="relative bg-black text-white py-16 px-4 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/public/vite.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 z-10">Other Services</h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto z-10">Southern Pavement Specialists offers a wide range of site restoration, landscaping, access, utility prep, asphalt, concrete, and hardscaping services for commercial and residential projects.</p>
      </section>
      <main className="flex-1 w-full max-w-4xl mx-auto py-12 px-4 space-y-16">
        <h2 className="text-3xl font-bold mb-8 text-yellow-700 text-center">Our Full Service List</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 mb-12">
          {/* Asphalt & Concrete */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center w-fit min-w-[220px] max-w-full">
            <h3 className="text-xl font-semibold mb-3 text-yellow-700 text-center whitespace-nowrap">Asphalt & Concrete</h3>
            <ul className="list-disc pl-6 text-lg text-gray-800 space-y-1 text-left">
              <li>Asphalt Hot Patch</li>
              <li>Asphalt Milling & Paving</li>
              <li>Sealcoating</li>
              <li>Crack Sealing</li>
              <li>Line Striping & Pavement Markings</li>
              <li>Parking Lot Installation/Repair</li>
              <li>Driveway Restoration</li>
              <li>Asphalt Overlay</li>
              <li>Concrete Slabs</li>
              <li>Curb & Gutter Installation</li>
              <li>Sidewalk Installation/Repair</li>
              <li>Concrete Stamping & Decorative Work</li>
              <li>Concrete Demolition & Removal</li>
              <li>ADA Ramp Construction</li>
            </ul>
          </div>
          {/* Access, Utility & Hardscape */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center w-fit min-w-[220px] max-w-full">
            <h3 className="text-xl font-semibold mb-3 text-yellow-700 text-center whitespace-nowrap">Access, Utility & Hardscape</h3>
            <ul className="list-disc pl-6 text-lg text-gray-800 space-y-1 text-left">
              <li>Access Road Construction</li>
              <li>Temporary Roadways & Pads</li>
              <li>Site Clearing and Grubbing</li>
              <li>Excavation & Earthwork</li>
              <li>Utility Trench Backfilling and Restoration</li>
              <li>Brick Pavers</li>
              <li>Retaining Walls</li>
              <li>Stone Walkways</li>
              <li>Concrete Pavers</li>
              <li>Gravel Pathways</li>
            </ul>
          </div>
          {/* Site & Landscape */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center w-fit min-w-[220px] max-w-full">
            <h3 className="text-xl font-semibold mb-3 text-yellow-700 text-center whitespace-nowrap">Site & Landscape</h3>
            <ul className="list-disc pl-6 text-lg text-gray-800 space-y-1 text-left">
              <li>Sod Installation</li>
              <li>Mulch Installation</li>
              <li>Hydro Seeding</li>
              <li>Erosion Control</li>
              <li>Topsoil Spreading</li>
              <li>Grading and Drainage Correction</li>
              <li>Tree and Shrub Planting</li>
            </ul>
          </div>
        </div>

        {/* Service Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-700">Service Highlights</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Sod Installation</h3>
              <p className="text-gray-700">Our sod installation service transforms bare ground into lush, green lawns almost instantly. We handle site preparation, delivery, and expert installation for a seamless finish. Fresh sod improves curb appeal and provides immediate erosion control. Our team ensures proper watering and care instructions for long-term success. Enjoy a beautiful, healthy lawn with minimal downtime.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Asphalt Milling & Paving</h3>
              <p className="text-gray-700">We offer professional asphalt milling and paving for roads, parking lots, and driveways. Our process removes old surfaces and installs new, durable asphalt for a smooth, long-lasting result. We use quality materials and precise equipment to ensure safety and performance. Whether you need repairs or a full replacement, our team delivers efficient, reliable service. Trust us to keep your surfaces looking and functioning their best.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Concrete Stamping & Decorative Work</h3>
              <p className="text-gray-700">Enhance your property with custom concrete stamping and decorative finishes. We create unique patterns and textures that mimic stone, brick, or tile for patios, walkways, and more. Our decorative concrete is both beautiful and durable, adding value and style to any space. Choose from a variety of colors and designs to match your vision. Let us help you make a lasting impression with creative concrete solutions.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full text-center py-6 bg-black text-white mt-auto">
        &copy; {new Date().getFullYear()} SPS Restoration. All rights reserved.
      </footer>
    </div>
  );
}

export default OtherServices;
