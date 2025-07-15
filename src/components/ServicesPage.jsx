import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import ServiceCard from "./ServiceCard";

import asphaltImg from "../images/Asphalt/asphalt-parking-lot.webp";
import sodImg from "../images/Sod/sod-lawn-installation.webp";
import wellpointImg from "../images/Wellpoint/wellpoint-dewatering-pump.webp";
import concreteImg from "../images/Concrete/concrete-sidewalk-crew.webp";
import gradingImg from "../images/Wellpoint/wellpoint-pipes.webp";
import utilityImg from "../images/Concrete/concrete-curb-installation.webp";

const testimonials = [
  "SPS exceeded our expectations—professional, on time, and the results are fantastic!",
  "The team was knowledgeable and courteous. Highly recommend their services!",
  "Quality workmanship and great communication throughout the project.",
];

const services = [
  {
    title: "Asphalt",
    description:
      "Durable asphalt paving and repair for driveways, walkways, and parking lots.",
    imgSrc: asphaltImg,
    link: "/asphalt",
    features: [
      "Asphalt paving & overlays",
      "Long-lasting, attractive finishes",
      "Driveways, walkways, parking lots",
      "Professional site preparation",
    ],
    testimonial: testimonials[0],
  },
  {
    title: "Concrete",
    description:
      "Expert concrete installation, finishing, and repair for residential and commercial projects.",
    imgSrc: concreteImg,
    link: "/concrete",
    features: [
      "Driveways, sidewalks, curbs",
      "Decorative & stamped concrete",
      "ADA-compliant ramps",
      "Repairs & maintenance",
    ],
    testimonial: testimonials[1],
  },
  {
    title: "Dewatering",
    description:
      "Efficient groundwater management to keep your worksite dry and secure.",
    imgSrc: wellpointImg,
    link: "/dewatering",
    features: [
      "Custom wellpoint systems",
      "Flood prevention",
      "Site-specific solutions",
      "24/7 monitoring",
    ],
    testimonial: testimonials[0],
  },
  {
    title: "Sod",
    description:
      "Safe, functional, and visually appealing sod and soft surfacing for streets, neighborhoods, and highways.",
    imgSrc: sodImg,
    link: "/soft-surfacing",
    features: [
      "Sod installation & grading",
      "Curb appeal & safety",
      "Quality materials",
      "Expert installation",
    ],
    testimonial: testimonials[0],
  },
  {
    title: "Grading & Earth Work",
    description:
      "Site preparation, excavation, and leveling for stability and optimal drainage.",
    imgSrc: gradingImg,
    link: "/other-services",
    features: [
      "Excavation & grading",
      "Drainage solutions",
      "Solid project foundations",
      "Modern equipment",
    ],
    testimonial: testimonials[1],
  },
  {
    title: "Utility Repair",
    description:
      "Repair and maintenance of underground utility systems, including water, sewer, and electrical infrastructure.",
    imgSrc: utilityImg,
    link: "/other-services",
    features: [
      "Water, sewer, electrical repair",
      "Minimal disruption",
      "Advanced techniques",
      "Reliable, lasting results",
    ],
    testimonial: testimonials[2],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
          Our Services
        </h1>
        <section
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Service List"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </section>
      </div>
    </main>
  );
}
