"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

interface ServiceInfo {
  title: string;
  description: string;
  href: string;
  category: string;
}

const servicesData: ServiceInfo[] = [
  // Certificates Registration Category
  {
    title: "Trade License",
    description: "Obtain trade license for your business operations",
    href: "/services/trade-license",
    category: "Certificates Registration"
  },
  {
    title: "Shop & Establishment",
    description: "Register your shop and establishment legally",
    href: "/services/shop-establishment",
    category: "Certificates Registration"
  },
  {
    title: "Food License",
    description: "FSSAI food license for food businesses",
    href: "/services/food-license",
    category: "Certificates Registration"
  },
  {
    title: "GST Registration",
    description: "Quick and easy GST registration process",
    href: "/services/gst-registration",
    category: "Certificates Registration"
  },
  
  // Companies Registration Category
  {
    title: "Private Limited Company",
    description: "Start your business with private limited registration",
    href: "/services/private-limited-company",
    category: "Companies Registration"
  },
  {
    title: "LLP Registration",
    description: "Limited Liability Partnership registration services",
    href: "/services/llp-registration",
    category: "Companies Registration"
  },
  {
    title: "Partnership Firm",
    description: "Register your partnership firm easily",
    href: "/services/partnership-firm",
    category: "Companies Registration"
  },
  {
    title: "One Person Company",
    description: "Single person company registration",
    href: "/services/one-person-company",
    category: "Companies Registration"
  },
  
  // NGO Registration Category
  {
    title: "Trust Registration",
    description: "Register your charitable trust",
    href: "/services/trust-registration",
    category: "NGO Registration"
  },
  {
    title: "Society Registration",
    description: "Society registration for non-profit organizations",
    href: "/services/society-registration",
    category: "NGO Registration"
  },
  {
    title: "Section 8 Company",
    description: "Non-profit company registration under Section 8",
    href: "/services/section8-company",
    category: "NGO Registration"
  },
  
  // Other Certificates Category
  {
    title: "Trademark Registration",
    description: "Protect your brand with trademark registration",
    href: "/services/trademark-registration",
    category: "Other Certificates"
  },
  {
    title: "ISO Certification",
    description: "ISO quality management system certification",
    href: "/services/iso-certification",
    category: "Other Certificates"
  },
  {
    title: "MSME Registration",
    description: "Micro, Small and Medium Enterprises registration",
    href: "/services/msme-registration",
    category: "Other Certificates"
  },
  {
    title: "Import Export Code",
    description: "IEC code for import export business",
    href: "/services/import-export-code",
    category: "Other Certificates"
  },
  
  
];

const ServiceCard = ({ title, description, href }: ServiceInfo) => {
  return (
    <a href={href} className="group block h-full w-full touch-manipulation">
      <div className="flex h-full flex-col rounded-xl bg-white px-6 py-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 border border-gray-100 hover:border-blue-200 active:bg-blue-100 active:border-blue-300 focus:bg-blue-100 focus:border-blue-300">
        <h4 className="font-display text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 group-active:text-blue-800 group-focus:text-blue-800 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-sm text-gray-600 group-hover:text-blue-600 group-active:text-blue-700 group-focus:text-blue-700 transition-colors duration-300 flex-grow">
          {description}
        </p>
        <div className="mt-4 flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 group-active:text-blue-800 group-focus:text-blue-800 transition-colors duration-300">
          <span>Learn more</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};

const CategorySection = ({ category, services, isActive }: { category: string; services: ServiceInfo[]; isActive: boolean }) => {
  // Category-specific styling
  const getCategoryStyle = (categoryName: string) => {
    switch (categoryName) {
      case "Certificates Registration":
        return {
          gradient: "from-blue-600 to-blue-800",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
        };
      case "Companies Registration":
        return {
          gradient: "from-green-600 to-green-800",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
        };
      case "NGO Registration":
        return {
          gradient: "from-purple-600 to-purple-800",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-200",
        };
      case "Other Certificates":
        return {
          gradient: "from-orange-600 to-orange-800",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200",
        };
      
             default:
         return {
           gradient: "from-gray-600 to-gray-800",
           bgColor: "bg-gray-50",
           borderColor: "border-gray-200"
         };
    }
  };

  const style = getCategoryStyle(category);

  if (!isActive) return null;

  return (
    <div className="mb-16">
             <div className="text-center mb-10">
         <h3 className="text-3xl md:text-4xl font-bold mb-4">
           <span className={`bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent`}>
             {category}
           </span>
         </h3>
         <div className={`w-32 h-1 bg-gradient-to-r ${style.gradient} mx-auto rounded-full`}></div>
       </div>
      
      <div className={`${style.bgColor} rounded-2xl p-8 border-2 ${style.borderColor} shadow-lg`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="flex justify-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = React.useState("Certificates Registration");
  
  // Group services by category
  const categories = Array.from(new Set(servicesData.map(service => service.category)));
  const servicesByCategory = categories.map(category => ({
    category,
    services: servicesData.filter(service => service.category === category)
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Category Navigation */}
      <div className="pt-8 pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Grid by Category */}
      <div className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {servicesByCategory.map(({ category, services }) => (
              <CategorySection 
                key={category} 
                category={category} 
                services={services} 
                isActive={activeCategory === category}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional, reliable, and efficient services to help your business grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Success Rate</h3>
              <p className="text-gray-600">Guaranteed successful registrations and approvals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-gray-600">Quick turnaround time for all services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round the clock customer support</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
