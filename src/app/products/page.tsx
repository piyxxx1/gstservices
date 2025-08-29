import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

interface ProductInfo {
  title: string;
  description: string;
  href: string;
  category: string;
}

const productsData: ProductInfo[] = [
  // ITR Filing Category
  {
    title: "Self ITR Filing",
    description: "ITR filing for every tax situation",
    href: "/products/self-itr-filing",
    category: "ITR Filing"
  },
  {
    title: "Expert Filing",
    description: "ITR filed by India's top Tax Experts",
    href: "/products/expert-filing",
    category: "ITR Filing"
  },
  {
    title: "Taxcloud",
    description: "ITR filing software for Tax Experts",
    href: "/products/taxcloud",
    category: "ITR Filing"
  },
  
  // GST Category
  {
    title: "GST",
    description: "G1-G9 filings made 3x faster",
    href: "/products/gst-software",
    category: "GST"
  },
  {
    title: "GST Registration",
    description: "Quick and easy GST registration process",
    href: "/products/gst-registration",
    category: "GST"
  },
  {
    title: "GST Return Filing",
    description: "Automated GST return filing and compliance",
    href: "/products/gst-return-filing",
    category: "GST"
  },
  
  // Company Formation Category
  {
    title: "Private Limited Company",
    description: "Start your business with private limited registration",
    href: "/products/private-limited-company",
    category: "Company Formation"
  },
  {
    title: "LLP Registration",
    description: "Limited Liability Partnership registration services",
    href: "/products/llp-registration",
    category: "Company Formation"
  },
  {
    title: "Partnership Firm",
    description: "Register your partnership firm easily",
    href: "/products/partnership-firm",
    category: "Company Formation"
  },
  
  // Trademark Category
  {
    title: "Trademark Registration",
    description: "Protect your brand with trademark registration",
    href: "/products/trademark-registration",
    category: "Trademark"
  },
  {
    title: "Trademark Search",
    description: "Comprehensive trademark search and analysis",
    href: "/products/trademark-search",
    category: "Trademark"
  },
  {
    title: "Trademark Renewal",
    description: "Timely trademark renewal services",
    href: "/products/trademark-renewal",
    category: "Trademark"
  },
  
  // Compliance Category
  {
    title: "TDS Filing",
    description: "Tax Deducted at Source filing and compliance",
    href: "/products/tds-filing",
    category: "Compliance"
  },
  {
    title: "ROC Filing",
    description: "Registrar of Companies filing services",
    href: "/products/roc-filing",
    category: "Compliance"
  },
  {
    title: "PF & ESI",
    description: "Employee Provident Fund and ESI compliance",
    href: "/products/pf-esi",
    category: "Compliance"
  },
  
  // Investment Category
  {
    title: "Mutual Funds",
    description: "Invest in mutual funds with expert guidance",
    href: "/products/mutual-funds",
    category: "Investment"
  },
  {
    title: "Tax Saving",
    description: "Tax-saving investment options and planning",
    href: "/products/tax-saving",
    category: "Investment"
  },
  {
    title: "Insurance",
    description: "Life and health insurance solutions",
    href: "/products/insurance",
    category: "Investment"
  }
];

const ProductCard = ({ title, description, href }: ProductInfo) => {
  return (
    <a href={href} className="group block h-full w-full max-w-sm touch-manipulation">
      <div className="flex h-full flex-col rounded-lg bg-card px-4 sm:px-6 py-6 sm:py-8 shadow-[0px_4px_16px_0px_rgba(46,41,78,0.08)] transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent active:bg-blue-100 active:border-blue-300 focus:bg-blue-100 focus:border-blue-300 touch-manipulation">
        <h4 className="font-display text-lg sm:text-xl font-semibold text-text-primary mb-2 group-hover:text-blue-700 group-active:text-blue-800 group-focus:text-blue-800 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-muted-foreground group-hover:text-blue-600 group-active:text-blue-700 group-focus:text-blue-700 transition-colors duration-300">
          {description}
        </p>
        <div className="mt-auto flex items-center pt-3 sm:pt-4 text-sm sm:text-base font-semibold text-primary group-hover:text-blue-600 group-active:text-blue-700 group-focus:text-blue-700 transition-colors duration-300">
          <span>Know more</span>
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};

const CategorySection = ({ category, products }: { category: string; products: ProductInfo[] }) => {
  // Category-specific styling
  const getCategoryStyle = (categoryName: string) => {
    switch (categoryName) {
      case "ITR Filing":
        return {
          gradient: "from-blue-600 to-blue-800",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200"
        };
      case "GST":
        return {
          gradient: "from-green-600 to-green-800",
          bgColor: "bg-green-50",
          borderColor: "border-green-200"
        };
      case "Company Formation":
        return {
          gradient: "from-purple-600 to-purple-800",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-200"
        };
      case "Trademark":
        return {
          gradient: "from-orange-600 to-orange-800",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200"
        };
      case "Compliance":
        return {
          gradient: "from-red-600 to-red-800",
          bgColor: "bg-red-50",
          borderColor: "border-red-200"
        };
      case "Investment":
        return {
          gradient: "from-indigo-600 to-indigo-800",
          bgColor: "bg-indigo-50",
          borderColor: "border-indigo-200"
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

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent animate-slide-up">
          <span className={`bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent`}>
            {category}
          </span>
        </h3>
        <div className={`w-24 h-1 bg-gradient-to-r ${style.gradient} mx-auto rounded-full animate-fade-in-delay`}></div>
      </div>
      
      <div className={`${style.bgColor} rounded-2xl p-8 border-2 ${style.borderColor} shadow-lg`}>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.title} 
              className="flex justify-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ProductsPage() {
  // Group products by category
  const categories = Array.from(new Set(productsData.map(product => product.category)));
  const productsByCategory = categories.map(category => ({
    category,
    products: productsData.filter(product => product.category === category)
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/8 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/6 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
                         <div className="mb-6">
               <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 animate-fade-in">
                 ✨ Trusted by 5000 Users
               </span>
             </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-slide-up">
              Our Products & Services
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              Comprehensive tax and business solutions for individuals and businesses
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in">
              <div className="flex items-center space-x-2 text-blue-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">24/7 Expert Support</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <span className="text-sm">Instant Processing</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Products Grid by Category */}
      <div className="bg-secondary py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            {productsByCategory.map(({ category, products }) => (
              <CategorySection key={category} category={category} products={products} />
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose ClearTax Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interfaces designed for everyone</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Get help from certified tax professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Based</h3>
              <p className="text-gray-600">Access your data securely from anywhere</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
