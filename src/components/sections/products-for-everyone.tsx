import React from 'react';
import Image from 'next/image';

const benefitsData = [
  {
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605873617_taxsaving-15.svg?',
    title: <>Maximum tax<br />savings</>,
    description: 'Busineses save upto 2-7% of their net GST with us every month. Individuals can save upto ₹86,500 by filing their tax returns through us.',
  },
  {
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605873731_unparalleled-16.svg?',
    title: <>Unparalleled<br />speed</>,
    description: 'Experience 3x faster GST filings, 5x faster invoice reconciliation and 10x faster e-waybill generation. Individuals file their tax returns in under 3 min.',
  },
  {
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605873842_fullcompliance-17.svg?',
    title: <>Accurate<br />Compliance</>,
    description: 'Our products are designed and tested by in-house tax experts, ensuring every new clause, form or feature is updated and sent to you over the cloud.',
  },
];

const ProductsForEveryone = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 leading-[1.1]">
            Products for everyone
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-[1.5]">
            Built for scale, made by experts and secure by design. Bringing you maximum tax savings, unmatched speed and complete peace of mind.
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-8 lg:gap-x-20">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={benefit.iconSrc} alt="" width={64} height={64} />
              <h3 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
                {benefit.title}
              </h3>
              <p className="mt-4 text-base text-gray-600 leading-7">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsForEveryone;