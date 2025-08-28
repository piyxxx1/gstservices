import Image from 'next/image';

const services = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605873415_taxreturnfilled-12.svg?",
    title: "ITR Filing Assistance",
    description: "Get Expert assistance in tax filing for Salaried and self-employed individuals, NRIs, Capital gains, and more.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1651557178_group17737-18.svg?",
    title: "TDS on Sale of Property",
    description: "Hassle-free 26QB compliance on sale of property",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1651557311_group17732-19.svg?",
    title: "Legal Services",
    description: "For drafting and review of legal documents such as Sale deed, Vendor agreement, Co-founders agreement etc",
  },
];

const ItrFilingServices = () => {
  return (
    <section className="bg-light-gray py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-[36px] font-bold leading-[1.1] text-text-primary">
          Looking for ITR filing Services?
        </h2>
        <p className="mt-4 text-lg text-text-primary max-w-3xl mx-auto">
          India’s best tax experts at your service for a tailored, accurate and premium tax filing experience.
        </p>

        <div className="mt-16 text-left max-w-2xl mx-auto">
          <p className="text-xl font-semibold text-text-primary text-center mb-10">
            For You
          </p>
          <div className="space-y-10">
            {services.map((service, index) => (
              <div key={index} className="flex items-start">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="mr-6 flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <a
                            href="#"
            className="text-primary font-semibold text-base inline-flex items-center"
          >
            See all services&nbsp;→
          </a>
        </div>
      </div>
    </section>
  );
};

export default ItrFilingServices;