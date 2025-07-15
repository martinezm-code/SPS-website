import React from "react";
import { Link } from "react-router-dom";

const placeholderImg =
  "https://via.placeholder.com/400x250.png?text=Service+Image";

const ServiceCard = React.memo(function ServiceCard({ title, description, imgSrc, link, features, testimonial }) {
  return (
    <article className="flex flex-col bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-200 focus-within:ring-2 focus-within:ring-yellow-400">
      <img
        src={imgSrc || placeholderImg}
        alt={title}
        className="w-full h-48 object-cover object-center bg-gray-100"
        loading="lazy"
        onError={e => (e.target.src = placeholderImg)}
      />
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
        <ul className="list-disc list-inside text-sm text-gray-800 mb-4 space-y-1">
          {features && features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <Link
          to={link}
          className="inline-block mt-auto px-5 py-2 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          aria-label={`Learn more about ${title}`}
        >
          Learn More
        </Link>
        {testimonial && (
          <blockquote className="mt-4 text-xs italic text-gray-500 border-l-4 border-yellow-300 pl-3">
            “{testimonial}”
          </blockquote>
        )}
      </div>
    </article>
  );
});

export default ServiceCard;
