import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi2';

function ServiceTextBlock({ title, description, reverse, link }) {
  return (
    <div
      className={
        'flex-1 flex flex-col justify-center px-4 sm:px-8 py-10 bg-white/90 shadow-xl md:border-gray-200 w-full max-w-full rounded-3xl ' +
        (reverse
          ? 'md:pr-0 md:pl-24 md:border-r order-2 md:order-1'
          : 'md:pl-12 md:pr-24 md:border-l order-1')
      }
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xl font-bold shadow">
          <HiArrowNarrowRight />
        </span>
        <h2 className="text-3xl font-bold text-black break-words">{title}</h2>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-full">{description}</p>
      {link && (
        <Link
          to={link}
          className="inline-block px-6 py-2 bg-yellow-400 text-black font-semibold rounded shadow hover:bg-yellow-500 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Learn More
        </Link>
      )}
    </div>
  );
}

function ServiceImageBlock({ imgSrc, imgAlt, reverse }) {
  return (
    <div className={'flex-1 flex items-stretch w-full max-w-full ' + (reverse ? 'order-1 md:order-2' : '')}>
      <picture>
        <source srcSet={imgSrc} type="image/webp" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px" />
        <img
          src={imgSrc}
          alt={imgAlt}
          className={
            'w-full h-full max-w-full object-cover object-center rounded-3xl shadow-lg ' +
            (reverse ? 'md:rounded-l-3xl md:rounded-r-none' : 'md:rounded-r-3xl md:rounded-l-none')
          }
          style={{ minHeight: '220px', maxHeight: '500px' }}
          width={600}
          height={400}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  );
}

function AlternatingServiceRow({ title, description, imgSrc, imgAlt, reverse, link }) {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch min-h-[220px] md:min-h-[400px] overflow-x-hidden bg-gradient-to-br from-yellow-50 via-white to-gray-100 rounded-3xl my-8 shadow-md">
      {reverse ? (
        <>
          <ServiceTextBlock title={title} description={description} reverse={reverse} link={link} />
          <ServiceImageBlock imgSrc={imgSrc} imgAlt={imgAlt} reverse={reverse} />
        </>
      ) : (
        <>
          <ServiceImageBlock imgSrc={imgSrc} imgAlt={imgAlt} reverse={reverse} />
          <ServiceTextBlock title={title} description={description} reverse={reverse} link={link} />
        </>
      )}
    </section>
  );
}

export default React.memo(AlternatingServiceRow);
