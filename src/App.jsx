import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HardSurfacingV2 from './HardSurfacingV2';
import SoftSurfacingV2 from './SoftSurfacingV2';
import WellPointDewateringV2 from './WellPointDewateringV2';
import UtilityRepairV2 from './UtilityRepairV2';
import Header from './Header';
import heroImg from './images/shutterstock_1244171479.jpg';
import AlternatingServiceRow from './components/AlternatingServiceRow';
import RoadDivider from './components/RoadDivider';
import ContactForm from './components/ContactForm';

// Import all homepage service images
import hardSurfacingImg from './images/Asphalt/shutterstock_1941199573.jpg';
import softSurfacingImg from './images/Sod/shutterstock_2147130193.jpg';
import wellpointImg from './images/Wellpoint/shutterstock_2134606583.jpg';
import fullRestorationImg from './images/Concrete/shutterstock_1705717126.jpg';
import gradingImg from './images/Wellpoint/shutterstock_1492191365.jpg';
import utilityRepairImg from './images/Concrete/shutterstock_1588624192.jpg';

// Service data for home page
const services = [
	{
		title: 'Hard Surfacing',
		description:
			'Durable concrete, asphalt, and other hard surfaces for driveways, walkways, and parking lots. We deliver long-lasting, attractive results for all your paving needs.',
		imgSrc: hardSurfacingImg,
		imgAlt: 'Hard Surfacing',
		reverse: false,
	},
	{
		title: 'Soft Surfacing',
		description:
			'Safe, functional, and visually appealing surfacing for streets, neighborhoods, and highways. We use high-quality materials to ensure safety and curb appeal.',
		imgSrc: softSurfacingImg,
		imgAlt: 'Soft Surfacing',
		reverse: true,
	},
	{
		title: 'WellPoint Dewatering',
		description:
			'Efficient groundwater management to keep your worksite dry and secure. Our dewatering solutions are tailored to your site’s needs for safe and effective project execution.',
		imgSrc: wellpointImg,
		imgAlt: 'WellPoint Dewatering',
		reverse: false,
	},
	{
		title: 'Full Restoration',
		description:
			'Complete restoration from assessment to final touches, including storm and water damage. We restore your property to its best condition, efficiently and professionally.',
		imgSrc: fullRestorationImg,
		imgAlt: 'Full Restoration',
		reverse: true,
	},
	{
		title: 'Grading & Earth Work',
		description:
			'Site preparation, excavation, and leveling for stability and optimal drainage. Our team ensures your project starts with a solid foundation and proper grading for long-term success.',
		imgSrc: gradingImg,
		imgAlt: 'Grading & Earth Work',
		reverse: false,
	},
	{
		title: 'Utility Repair',
		description:
			'Repair and maintenance of underground utility systems, including water, sewer, and electrical infrastructure. We use advanced techniques to minimize disruption and ensure reliability.',
		imgSrc: utilityRepairImg,
		imgAlt: 'Utility Repair',
		reverse: true,
	},
];

function App() {
	// Main Home Page Content
	const Home = () => (
		<div className="min-h-screen bg-white text-black font-sans flex flex-col overflow-x-hidden">
			<Header />

			{/* Hero Section */}
			<section className="relative w-full min-h-[300px] md:h-[600px] flex items-center justify-center bg-black border-b border-gray-100 overflow-hidden">
				<img
					src={heroImg}
					alt="SPS Hero"
					className="absolute inset-0 w-full h-full max-w-full object-cover object-center z-0"
				/>
				<div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 text-white text-center px-2 sm:px-4">
					<h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
						Southern Pavement Specialists
					</h1>
					<p className="text-lg md:text-xl mb-8 max-w-xl text-white/90 drop-shadow">
						Quality work, safe environments, and comprehensive restoration
						services for all your needs. Locally owned and operated, we deliver
						expertise in hard/soft surfacing, grading, utility repairs, and more.
					</p>
					<a
						href="#contact"
						className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded shadow hover:bg-yellow-500 transition"
					>
						Schedule a Consultation
					</a>
				</div>
			</section>

			{/* About Us Section */}
			<section
				id="about-us"
				className="w-full bg-white py-16 px-4 md:px-24 border-b border-gray-100"
			>
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-extrabold mb-6 text-yellow-600">
						About Us
					</h2>
					<div className="bg-yellow-50 shadow-lg border border-yellow-200 rounded-xl p-4 sm:p-8 text-left break-words max-w-full">
						<p className="text-lg text-gray-800 leading-relaxed indent-8 mb-6">
							<span className="font-bold text-yellow-700">
								Southern Pavement Specialists
							</span>{' '}
							is dedicated to delivering{' '}
							<span className="font-semibold text-black">
								reliable, high-quality work
							</span>{' '}
							for every client, every time. Our team brings{' '}
							<span className="font-bold text-yellow-700">
								decades of experience
							</span>{' '}
							to every project, ensuring that each job is completed with{' '}
							<span className="font-semibold text-black">
								precision, safety, and care
							</span>
							. We understand the importance of{' '}
							<span className="font-bold text-yellow-700">
								meeting deadlines
							</span>{' '}
							and{' '}
							<span className="font-bold text-yellow-700">
								exceeding expectations
							</span>
							, which is why our clients trust us to handle their most
							important projects.
						</p>
						<p className="text-lg text-gray-800 leading-relaxed indent-8 mb-6">
							From initial consultation to project completion, we communicate
							clearly and work efficiently,{' '}
							<span className="font-bold text-yellow-700">
								minimizing disruption
							</span>{' '}
							and{' '}
							<span className="font-bold text-yellow-700">
								maximizing value
							</span>
							. Our skilled professionals use the{' '}
							<span className="font-semibold text-black">best materials</span>{' '}
							and{' '}
							<span className="font-semibold text-black">proven techniques</span>{' '}

							<span className="font-bold text-yellow-700">
								commitment to excellence
							</span>
							.
						</p>
						<p className="text-lg text-gray-800 leading-relaxed indent-8">
							At{' '}
							<span className="font-bold text-yellow-700">
								Southern Pavement Specialists
							</span>
							, we pride ourselves on our reputation for{' '}
							<span className="font-semibold text-black">
								integrity, reliability, and outstanding workmanship
							</span>
							. We’re not just building surfaces—we’re{' '}
							<span className="font-bold text-yellow-700">
								building relationships
							</span>{' '}
							and helping our community thrive, one project at a time.
						</p>
					</div>
				</div>
				{/* Road Border */}
				<RoadDivider />
			</section>

			{/* Services Section */}
			<section id="services" className="w-full py-16 flex flex-col gap-16">
				{services.map((service, idx) => (
					<AlternatingServiceRow
						key={service.title}
						title={service.title}
						description={service.description}
						imgSrc={service.imgSrc}
						imgAlt={service.imgAlt}
						reverse={idx % 2 !== 0}
					/>
				))}
			</section>

			{/* Thin Yellow Dotted Border */}
			<RoadDivider />

			{/* Contact Section */}
			<ContactForm />

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
				<Route path="/hard-surfacing" element={<HardSurfacingV2 />} />
				<Route path="/soft-surfacing" element={<SoftSurfacingV2 />} />
				<Route path="/wellpoint-dewatering" element={<WellPointDewateringV2 />} />
				<Route path="/utility-repair" element={<UtilityRepairV2 />} />
			</Routes>
		</Router>
	);
}

export default App;
