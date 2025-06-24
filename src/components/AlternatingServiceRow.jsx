import React from 'react';

/**
 * ServiceTextBlock
 * Renders the text block for a service row, with correct rounded corners and shadow.
 */
function ServiceTextBlock({ title, description, reverse }) {
  return (
    <div
      className={
        'flex-1 flex flex-col justify-center px-4 sm:px-8 py-8 bg-white shadow-xl md:border-gray-200 w-full max-w-full ' +
        (reverse
          ? 'md:pr-0 md:pl-24 md:border-r md:rounded-r-3xl order-2 md:order-1'
          : 'md:pl-12 md:pr-24 md:border-l md:rounded-l-3xl')
      }
    >
      <h2 className="text-3xl font-bold mb-6 text-black break-words">{title}</h2>
      <p className="text-gray-700 text-xl break-words max-w-full">{description}</p>
    </div>
  );
}

/**
 * ServiceImageBlock
 * Renders the image block for a service row, with correct rounded corners.
 */
function ServiceImageBlock({ imgSrc, imgAlt, reverse }) {
  return (
    <div className={'flex-1 flex items-stretch w-full max-w-full ' + (reverse ? 'order-1 md:order-2' : '')}>
      <picture>
        <source srcSet={imgSrc} type="image/webp" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px" />
        <img
          src={imgSrc}
          alt={imgAlt}
          className={
            'w-full h-full max-w-full object-cover object-center rounded-none ' +
            (reverse
              ? 'md:rounded-l-3xl md:rounded-r-none'
              : 'md:rounded-r-3xl md:rounded-l-none')
          }
          style={{ minHeight: '220px', maxHeight: '600px' }}
          width={600}
          height={400}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  );
}

/**
 * AlternatingServiceRow
 * Renders a service row with alternating image/text layout.
 */
function AlternatingServiceRow({ title, description, imgSrc, imgAlt, reverse }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch min-h-[220px] md:min-h-[400px] overflow-x-hidden">
      {reverse ? (
        <>
          <ServiceTextBlock title={title} description={description} reverse={reverse} />
          <ServiceImageBlock imgSrc={imgSrc} imgAlt={imgAlt} reverse={reverse} />
        </>
      ) : (
        <>
          <ServiceImageBlock imgSrc={imgSrc} imgAlt={imgAlt} reverse={reverse} />
          <ServiceTextBlock title={title} description={description} reverse={reverse} />
        </>
      )}
    </div>
  );
}

export default AlternatingServiceRow;
