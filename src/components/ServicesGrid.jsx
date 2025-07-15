// Reusable ServicesGrid and ServiceCard components for consistent styling
import React from 'react';
import { Link } from 'react-router-dom';

export function ServicesGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-7xl mx-auto px-2 md:px-8">
      {children}
    </div>
  );
}

export function ServiceCard({ image, alt, title, items, moreLink }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 pt-4 pb-8 px-4 flex flex-col items-center text-center min-w-0">
      <div className="w-full aspect-[4/3] mb-6 bg-transparent rounded-xl overflow-hidden flex items-stretch justify-stretch p-0">
        {image ? (
          <picture className="w-full h-full">
            <source
              srcSet={image}
              type="image/webp"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
            />
            <img
              src={image}
              alt={alt}
              className="object-cover w-full h-full block rounded-xl m-0 p-0"
              width={500}
              height={375}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
              loading="lazy"
              decoding="async"
            />
          </picture>
        ) : (
          <span className="text-gray-400">[Image]</span>
        )}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="text-gray-700 text-base space-y-2 mb-4">
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      {moreLink && (
        <Link to={moreLink} className="mt-2 inline-block px-4 py-1.5 bg-yellow-50 text-yellow-700 font-semibold rounded-full shadow-sm border border-yellow-200 text-sm hover:bg-yellow-100 transition">More</Link>
      )}
    </div>
  );
}
