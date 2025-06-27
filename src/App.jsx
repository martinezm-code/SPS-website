import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import heroImg from './images/hero-road-construction.webp';
import ContactForm from './components/ContactForm';
import About from './About';
import ConcreteServices from './ConcreteServices';
import PaversServices from './PaversServices';
import OtherServices from './OtherServices';
import Asphalt from './Asphalt';
import Dewatering from './Dewatering';
import ServicesPage from './components/ServicesPage';

// Homepage service images
import hardSurfacingImg from './images/Asphalt/asphalt-parking-lot.webp';
import softSurfacingImg from './images/Sod/sod-lawn-installation.webp';
import wellpointImg from './images/Wellpoint/wellpoint-dewatering-pump.webp';
import fullRestorationImg from './images/Concrete/concrete-sidewalk-crew.webp';
import gradingImg from './images/Wellpoint/wellpoint-pipes.webp';
import utilityRepairImg from './images/Concrete/concrete-curb-installation.webp';

// Service data for home page
const services = [
	{
		title: 'Hard Surfacing',
		description:
			'Durable concrete, asphalt, and other hard surfaces for driveways, walkways, and parking lots. We deliver long-lasting, attractive results for all your paving needs.',
		imgSrc: hardSurfacingImg,
		imgAlt: 'Hard Surfacing',
	},
	{
		title: 'Soft Surfacing',
		description:
			'Safe, functional, and visually appealing surfacing for streets, neighborhoods, and highways. We use high-quality materials to ensure safety and curb appeal.',
		imgSrc: softSurfacingImg,
		imgAlt: 'Soft Surfacing',
	},
	{
		title: 'WellPoint Dewatering',
		description:
			'Efficient groundwater management to keep your worksite dry and secure. Our dewatering solutions are tailored to your site’s needs for safe and effective project execution.',
		imgSrc: wellpointImg,
		imgAlt: 'WellPoint Dewatering',
	},
	{
		title: 'Full Restoration',
		description:
			'Complete restoration from assessment to final touches, including storm and water damage. We restore your property to its best condition, efficiently and professionally.',
		imgSrc: fullRestorationImg,
		imgAlt: 'Full Restoration',
	},
	{
		title: 'Grading & Earth Work',
		description:
			'Site preparation, excavation, and leveling for stability and optimal drainage. Our team ensures your project starts with a solid foundation and proper grading for long-term success.',
		imgSrc: gradingImg,
		imgAlt: 'Grading & Earth Work',
	},
	{
		title: 'Utility Repair',
		description:
			'Repair and maintenance of underground utility systems, including water, sewer, and electrical infrastructure. We use advanced techniques to minimize disruption and ensure reliability.',
		imgSrc: utilityRepairImg,
		imgAlt: 'Utility Repair',
	},
];

function App() {
	const Home = () => (
		<div className="min-h-screen bg-white text-black font-sans flex flex-col overflow-x-hidden">
			<Header />

			{/* Hero Section */}
			<section className="relative w-full min-h-[300px] md:h-[600px] flex items-center justify-center bg-black border-b border-gray-100 overflow-hidden">
				<picture>
					<source srcSet="/src/images/hero-road-construction-mobile.webp" type="image/webp" media="(max-width: 767px)" sizes="100vw" />
					<source srcSet={heroImg} type="image/webp" media="(min-width: 768px)" sizes="100vw" />
					<img src={heroImg} alt="SPS Hero" className="absolute inset-0 w-full h-full max-w-full object-cover object-center z-0" loading="eager" fetchpriority="high" decoding="async" width={1920} height={600} style={{ aspectRatio: '16/5', backgroundColor: '#222' }} sizes="100vw" />
				</picture>
				<div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 text-white text-center px-2 sm:px-4">
					<h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Southern Pavement Specialists</h1>
					<p className="text-lg md:text-xl mb-8 max-w-xl text-white/90 drop-shadow">
						Quality work, safe environments, and comprehensive restoration services for all your needs. Locally owned and operated, we deliver expertise in hard/soft surfacing, grading, utility repairs, and more.
					</p>
					<a href="#contact" className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded shadow hover:bg-yellow-500 transition">
						Schedule a Consultation
					</a>
				</div>
			</section>

			{/* About Us Section */}
			<section id="about-us" className="w-full bg-white py-16 px-4 md:px-24 border-b border-gray-100">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-extrabold mb-2 text-yellow-600 relative inline-block after:block after:w-16 after:h-1 after:bg-yellow-400 after:rounded-full after:mx-auto after:mt-2 animate-pulse">About Us</h2>
					<div className="bg-white shadow-lg border border-yellow-200 rounded-xl p-4 sm:p-8 text-left break-words max-w-full">
						<p className="text-lg text-gray-800 leading-relaxed indent-8 mb-6">
							<span className="font-bold text-yellow-700">Southern Pavement Specialists</span> is dedicated to delivering <span className="font-semibold text-black">reliable, high-quality work</span> for every client, every time. Our team brings <span className="font-bold text-yellow-700">decades of experience</span> to every project, ensuring that each job is completed with <span className="font-semibold text-black">precision, safety, and care</span>. We understand the importance of <span className="font-bold text-yellow-700">meeting deadlines</span> and <span className="font-bold text-yellow-700">exceeding expectations</span>, which is why our clients trust us to handle their most important projects.
						</p>
						<p className="text-lg text-gray-800 leading-relaxed indent-8 mb-6">
							From initial consultation to project completion, we communicate clearly and work efficiently, <span className="font-bold text-yellow-700">minimizing disruption</span> <span className="font-bold text-yellow-700">maximizing value</span>. Our skilled professionals use the <span className="font-semibold text-black">best materials</span> and <span className="font-semibold text-black">proven techniques</span> <span className="font-bold text-yellow-700">commitment to excellence</span>.
						</p>
						<p className="text-lg text-gray-800 leading-relaxed indent-8">
							At <span className="font-bold text-yellow-700">Southern Pavement Specialists</span>, we pride ourselves on our reputation for <span className="font-semibold text-black">integrity, reliability, and outstanding workmanship</span>. We’re not just building surfaces—we’re <span className="font-bold text-yellow-700">building relationships</span> and helping our community thrive, one project at a time.
						</p>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="w-full py-16 px-4 bg-gray-100 md:my-16">
				<h2 className="text-4xl font-extrabold text-center mb-10 text-yellow-600 relative inline-block after:block after:w-24 after:h-1 after:bg-yellow-400 after:rounded-full after:mx-auto after:mt-2 animate-pulse">Our Services</h2>
				<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<div key={service.title} className="group bg-white border border-gray-100 rounded-2xl shadow-lg p-0 flex flex-col items-stretch text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
							<img src={service.imgSrc} alt={service.imgAlt} className="w-full h-40 object-cover rounded-t-2xl mb-0" loading="lazy" />
							<div className="flex flex-col flex-1 p-6">
								<h3 className="text-2xl font-bold text-yellow-700 mb-2 group-hover:text-yellow-600 transition-colors duration-300">{service.title}</h3>
								<p className="text-gray-700 text-base mb-4">{service.description}</p>
								<a href={
									service.title === 'Hard Surfacing' ? '/asphalt' :
									service.title === 'Soft Surfacing' ? '#' :
									service.title === 'WellPoint Dewatering' ? '/dewatering' :
									service.title === 'Full Restoration' ? '/concrete' :
									service.title === 'Grading & Earth Work' ? '/other-services' :
									service.title === 'Utility Repair' ? '/other-services' :
									'#'
								} className="inline-block mt-auto px-6 py-2 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition">
									Learn More
								</a>
							</div>
						</div>
					))}
				</div>

				{/* Why Choose Us Banner */}
				<div className="max-w-5xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-center gap-8 py-8 px-4 bg-white rounded-2xl shadow border border-yellow-100">
					<div className="flex-1 text-center md:text-left">
						<h3 className="text-2xl font-bold text-yellow-700 mb-2">Why Choose SPS?</h3>
						<p className="text-gray-700 text-base mb-2">We’re committed to quality, safety, and customer satisfaction on every project.</p>
					</div>
					<ul className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
						<li className="flex items-center gap-2 text-yellow-700 font-semibold"><span className="text-2xl">⏱️</span> On-Time Guarantee</li>
						<li className="flex items-center gap-2 text-yellow-700 font-semibold"><span className="text-2xl">🛡️</span> Licensed & Insured</li>
						<li className="flex items-center gap-2 text-yellow-700 font-semibold"><span className="text-2xl">⭐</span> 5-Star Reviews</li>
						<li className="flex items-center gap-2 text-yellow-700 font-semibold"><span className="text-2xl">💬</span> Free Consultations</li>
					</ul>
				</div>
			</section>

			{/* Testimonial Spotlight (moved to bottom) */}
			<section className="w-full flex flex-col items-center py-12 bg-white md:my-16">
				<div className="max-w-2xl w-full mx-auto flex flex-col items-center gap-4 p-8 rounded-2xl shadow-lg border border-yellow-100 bg-white">
					<img src="/src/images/sps-logo.webp" alt="Client" className="w-16 h-16 rounded-full border-4 border-yellow-300 shadow-md object-cover" loading="lazy" />
					<p className="text-2xl text-gray-800 font-semibold text-center leading-relaxed">“ SPS delivered on time and exceeded our expectations. The crew was professional, and the results are fantastic! ”</p>
					<div className="flex items-center gap-1">
						<span className="text-yellow-400 text-xl">★</span>
						<span className="text-yellow-400 text-xl">★</span>
						<span className="text-yellow-400 text-xl">★</span>
						<span className="text-yellow-400 text-xl">★</span>
						<span className="text-yellow-400 text-xl">★</span>
					</div>
					<span className="text-yellow-700 font-bold">— John D.</span>
				</div>
			</section>

			{/* Contact Section */}
			<ContactForm />

			{/* Sticky CTA Button */}
			<a href="#contact" className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
				Get a Free Quote
			</a>

			{/* Footer */}
			<footer className="w-full text-center py-6 bg-black text-white mt-auto">
				&copy; {new Date().getFullYear()} SPS Restoration. All rights reserved.
			</footer>
		</div>
	);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/other-services" element={<OtherServices />} />
				<Route path="/about" element={<About />} />
				<Route path="/concrete" element={<ConcreteServices />} />
				<Route path="/pavers" element={<PaversServices />} />
				<Route path="/asphalt" element={<Asphalt />} />
				<Route path="/dewatering" element={<Dewatering />} />
				<Route path="/services" element={<ServicesPage />} />
			</Routes>
		</Router>
	);
}

export default App;
