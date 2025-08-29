"use client";

import { useState } from 'react';
import Image from 'next/image';

const tabsData = [
  {
    id: 'individuals',
    label: 'Individuals',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605873928_individuals-20.svg?',
    products: [
      {
        icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1603968068_ic_itr-24.svg?',
        title: 'ITR Filing',
        description: 'File tax returns in under 3 minutes',
        image: '/assest/plugin-and-play-assest/1607343696_fileitr.png',
      },
      {
        icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1606217684_clearservices-25.svg?',
        title: 'Luxury Tax Support',
        description: 'Get a personal tax expert for tailored tax strategy',
        image: '/assest/plugin-and-play-assest/1752218967_image217.png',
      },
      {
        icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1606217655_clearinvest-26.svg?',
        title: 'Assisted filing',
        description: 'Get experts for filing taxes and starting up',
        image: '/assest/plugin-and-play-assest/1752218800_frame1814221062.png',
      },

    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605874053_enterprise-21.svg?',
    products: [
      {
        icon: 'https://assets1.cleartax-cdn.com/cleartax/images/1606372771_einvoicing3.png',
        title: 'e-Invoicing',
        description: 'Fast, dependable and affordable solution',
        image: 'https://assets1.cleartax-cdn.com/cleartax/images/1605871021_desktop_fold_plugandplay_enterprise_cleareinvoicing.png',
      },
      {
        icon: 'https://assets1.cleartax-cdn.com/cleartax/images/1603967983_ic_ewayb.svg',
        title: 'E-Waybill',
        description: '10x faster waybill solution for large businesses',
        image: 'https://assets1.cleartax-cdn.com/cleartax/images/1605871104_desktop_fold_plugandplay_enterprise_clearewaybill.png',
      },
      {
        icon: 'https://assets1.cleartax-cdn.com/cleartax/images/1603967824_ic_clear_gst.svg',
        title: 'GST',
        description: 'G1 to G9 filing, 10x faster reconciliations & reports',
        image: 'https://assets1.cleartax-cdn.com/cleartax/images/1605871267_desktop_fold_plugandplay_enterprise_cleargst.png',
      },
      {
        icon: 'https://assets1.cleartax-cdn.com/cleartax/images/1623152598_taxsavings.png',
        title: 'Max ITC',
        description: 'End-to-end solution to maximize ITC for businesses',
        image: 'https://assets1.cleartax-cdn.com/cleartax/images/1623153736_maxitc1.png',
      },
      {
        icon: 'https://assets1.cleartax-cdn.com/cleartax/images/1603967903_ic_clear_protect.svg',
        title: 'Vendor',
        description: 'Verify, onboard and connect with vendors',
        image: 'https://assets1.cleartax-cdn.com/cleartax/images/1623153736_maxitc1.png',
        fullWidth: true,
      },
    ],
  },
  {
    id: 'tax-expert',
    label: 'Tax Expert',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605873968_taxexpert-22.svg?',
    products: [
      {
        icon: 'https://assets1.cleartax-cdn.com/cleartax/images/1603967824_ic_clear_gst.svg',
        title: 'GST',
        description: 'Comprehensive platform for core GST compliance',
        image: 'https://assets1.cleartax-cdn.com/cleartax/images/1605869731_desktop_fold_plugandplay_sme_cleargst.png',
      },
      {
        icon: 'https://assets1.cleartax-cdn.com/cleartax/images/1606218204_cleartds.svg',
        title: 'TDS',
        description: 'Go-to platform for effortless TDS returns',
        image: 'https://assets1.cleartax-cdn.com/cleartax/images/1605870820_desktop_fold_plugandplay_taxexperts_cleartds.png',
      },
      {
        icon: 'https://assets1.cleartax-cdn.com/cleartax/images/1603968183_ic_taxcloud.svg',
        title: 'PalmPrint Cloud',
        description: 'Seamless ITR filing platform for accountants',
        image: 'https://assets1.cleartax-cdn.com/cleartax/images/1605870742_desktop_fold_plugandplay_taxexperts_cleartaxcloud.png',
      },

    ],
  },

];

const PlugAndPlaySection = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const [activeImage, setActiveImage] = useState(tabsData[0].products[0].image);
  const [activeProduct, setActiveProduct] = useState(tabsData[0].products[0].title);

  const currentTab = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const newTabData = tabsData.find(tab => tab.id === tabId);
    if (newTabData && newTabData.products.length > 0) {
      setActiveImage(newTabData.products[0].image);
      setActiveProduct(newTabData.products[0].title);
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-bold font-display text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] leading-tight text-slate-800 mb-4">
            PalmPrint Solutions
        </h2>
          <p className="w-full max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-slate-500 font-normal">
          An exhaustive portfolio of cloud based products you could use from day one for personal and business compliance
        </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 sm:mb-12 border-b-2 border-gray-200 overflow-x-auto">
          <div className="flex justify-center min-w-max gap-4 sm:gap-8">
          {tabsData.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
                className={`flex items-center px-4 sm:px-8 py-3 sm:py-5 text-sm sm:text-base font-normal -mb-px transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-0 active:outline-none active:ring-0
                ${activeTab === tab.id 
                  ? 'border-b-2 border-slate-800 text-slate-800 font-semibold' 
                  : 'border-b-2 border-transparent text-gray-500 hover:text-slate-800'
                }`}
            >
                <Image 
                  src={tab.icon} 
                  alt={tab.label} 
                  width={16} 
                  height={16} 
                  className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" 
                  loading="eager"
                  sizes="(max-width: 640px) 16px, 20px"
                />
              {tab.label}
            </button>
          ))}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[300px] sm:min-h-[400px] lg:min-h-[480px]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            {/* Products List */}
            <div className="w-full lg:w-1/2 lg:pr-8">
              <div className={`grid gap-4 sm:gap-6 ${
                currentTab.products.length === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-1' : 
                currentTab.products.length === 5 ? 'grid-cols-1 sm:grid-cols-2' : 
                'grid-cols-1 sm:grid-cols-2'
              }`}>
                {currentTab.products.map(product => (
                  <div
                    key={product.title}
                    className={`${product.fullWidth ? 'sm:col-span-2' : ''} ${
                      currentTab.products.length === 3 ? 'sm:col-span-1' : ''
                    }`}
                    onMouseEnter={() => {
                        setActiveImage(product.image)
                        setActiveProduct(product.title)
                    }}
                    onClick={() => {
                        setActiveImage(product.image)
                        setActiveProduct(product.title)
                    }}
                  >
                    <div className={`group block p-4 sm:p-5 rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-md cursor-pointer focus:outline-none focus:ring-0 active:outline-none active:ring-0 ${activeProduct === product.title ? 'bg-secondary border-2 border-primary shadow-lg' : 'bg-white border border-gray-100'}`}>
                      <div className="flex items-start sm:items-center">
                        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border border-border-gray bg-white mr-3 sm:mr-4 transition-transform duration-300 ease-in-out group-hover:scale-105 shadow-sm">
                          <Image 
                            src={product.icon} 
                            alt={product.title} 
                            width={24} 
                            height={24} 
                            className="w-6 h-6 sm:w-9 sm:h-9" 
                            loading="lazy"
                            sizes="(max-width: 640px) 48px, 64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <strong className="block font-semibold text-sm sm:text-base lg:text-lg text-text-primary leading-tight mb-1">{product.title}</strong>
                          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">{product.description}</p>
                         </div>
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center order-first lg:order-last">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[450px] flex items-center justify-center">
              <Image 
                key={activeImage}
                src={activeImage} 
                alt={activeProduct} 
                    width={400} 
                    height={250} 
                    className="w-full h-full object-contain transition-all duration-300 ease-in-out"
                    priority={activeTab === tabsData[0].id}
                    loading={activeTab === tabsData[0].id ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlugAndPlaySection;