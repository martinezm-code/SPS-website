// Reusable ServicesGrid and ServiceCard components for consistent styling
import React from 'react';

export function ServicesGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
      {children}
    </div>
  );
}

export function ServiceCard({ image, alt, title, items, moreLink }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 pt-4 pb-8 px-4 flex flex-col items-center text-center min-w-0">
      <div className="w-full aspect-square mb-6 bg-gray-100 rounded-xl border border-yellow-400 overflow-hidden flex items-center justify-center">
        {image ? (
          <img src={image} alt={alt} className="object-cover w-full h-full block" />
        ) : (
          <span className="text-gray-400">[Image]</span>
        )}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="text-gray-700 text-base space-y-2 mb-4">
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      {moreLink && (
        <a href={moreLink} className="mt-2 inline-block px-4 py-1.5 bg-yellow-50 text-yellow-700 font-semibold rounded-full shadow-sm border border-yellow-200 text-sm hover:bg-yellow-100 transition">More</a>
      )}
    </div>
  );
}
