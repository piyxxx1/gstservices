import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceInfo {
  icon: string;
  alt: string;
  title: string;
  description: string;
  href: string;
}

const servicesData: ServiceInfo[] = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/24752bcd-1c44-4e33-a907-d28c0c63f9d8-24.png?",
    alt: "Self ITR Filing Icon",
    title: "Self ITR Filing",
    description: "ITR filing for every tax situation",
          href: "#",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1689834900_group1814218524-25.png?",
    alt: "Expert Filing Icon",
    title: "Expert Filing",
    description: "ITR filed by India's top Tax Experts",
          href: "#",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1689834930_group1814218517-26.png?",
    alt: "Taxcloud Icon",
    title: "Taxcloud",
    description: "ITR filing software for Tax Experts",
          href: "#",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1c380469-b051-4882-a1dc-d71fe81fed7a-27.png?",
    alt: "GST software Icon",
    title: "GST software",
    description: "G1-G9 filings made 3x faster",
          href: "#",
  },
];

const ServiceCard = ({ icon, alt, title, description, href }: ServiceInfo) => {
  return (
    <a href={href} className="group block h-full w-full max-w-sm">
      <div className="flex h-full flex-col rounded-lg bg-card px-4 sm:px-6 py-6 sm:py-8 shadow-[0px_4px_16px_0px_rgba(46,41,78,0.08)] transition-shadow duration-300 hover:shadow-lg">
        <Image src={icon} alt={alt} width={48} height={48} className="mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12" />
        <h4 className="font-display text-lg sm:text-xl font-semibold text-text-primary mb-2">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-muted-foreground">
          {description}
        </p>
        <div className="mt-auto flex items-center pt-3 sm:pt-4 text-sm sm:text-base font-semibold text-primary">
          <span>Know more</span>
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};

const ServicesOverview = () => {
  return (
    <section className="bg-secondary py-12 sm:py-16 lg:py-20 my-4 sm:my-6 lg:my-8">
      <div className="container mx-auto">
        <div className="mx-auto mb-8 sm:mb-12 max-w-xl px-4 text-center flex flex-col items-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-3 sm:mb-4 text-center">
            India's largest tax and financial services platform
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center">
            Explore our wide range of software solutions
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 sm:pt-8 max-w-6xl mx-auto">
          {servicesData.map((service) => (
            <div key={service.title} className="flex justify-center">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;