import React from 'react';
import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  subtitle: React.ReactNode;
  description: string;
  link: string;
}

const categories: CategoryCardProps[] = [
  {
    title: "For Individuals",
    subtitle: <>For salaried, self <br />employed professionals.</>,
    description: "File income tax returns in 3 min, invest and grow your wealth, get expert assistance.",
    link: "/services"
  },
  {
    title: "For Tax Experts",
    subtitle: <>For tax experts and<br/>professionals.</>,
    description: "Explore how tax experts save 2-7% in taxes for their clients with our GST, ITR and TDS suite.",
    link: "/services"
  },
  {
    title: "For SMEs",
    subtitle: <>For less than ₹50Cr<br />turnover businesses.</>,
    description: "Explore SME suite including GST, Invoicing and TDS solution along with Clear app.",
    link: "/services"
  },
  {
    title: "For Enterprise",
    subtitle: <>For more than ₹50Cr<br />turnover businesses.</>,
    description: "Explore enterprise-grade stack of GST, e-Invoicing, e-Waybill, Vendor solutions and more.",
    link: "/services"
  }
];

const CategoryCard: React.FC<CategoryCardProps> = ({ title, subtitle, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group h-full">
      <div className="bg-[#F6F8FC] rounded-xl p-6 h-full transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-[0px_10px_15px_rgba(0,0,0,0.1)]">
        <div className="relative">
          <div>
            <h3 className="text-xl font-bold text-text-primary group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-[#515151] group-hover:text-white transition-colors duration-300 h-[42px]">
              {subtitle}
            </p>
            <p className="text-xs font-light mt-1 text-[#515151] transition-all duration-300 ease-in-out h-0 opacity-0 group-hover:h-[54px] group-hover:opacity-100 group-hover:text-white overflow-hidden">
              {description}
            </p>
          </div>
          <div className="absolute bottom-0 right-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1603291424_rightarrow_black-13.svg?"
              width={30}
              height={30}
              alt="black right arrow"
              className="block group-hover:hidden transition-opacity"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1603291649_rightarrow_white-14.svg?"
              width={30}
              height={30}
              alt="white right arrow"
              className="hidden group-hover:block transition-opacity"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

const UserCategories = () => {
  return (
    <section className="container my-12 sm:my-16 lg:my-24">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-7/12 order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-5/12 mb-8 lg:mb-0 order-1 lg:order-2">
          <div className="text-center lg:text-left lg:pl-24">
                         <h2 className="font-bold text-text-primary text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] leading-tight">
               Services<br />for everyone
             </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#515151] mt-3 sm:mt-4 max-w-lg mx-auto lg:mx-0">
              Built for scale, made by experts and secure by design.
              Bringing you maximum tax savings, unmatched speed and
              complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCategories;