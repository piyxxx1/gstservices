"use client";

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section 
      className="relative w-full overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-24"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-white/5 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="text-center">
            {/* Refund badge with enhanced styling */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 text-sm shadow-[0_8px_32px_rgba(0,0,0,0.1)] mb-6 border border-white/20 animate-fade-in-up">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <p className="text-gray-700 font-medium">
                <span className="font-bold text-green-600 text-lg">₹5 Cr</span> Refund processed this year
              </p>
            </div>

            {/* Enhanced Headline with gradient text */}
            <h1 className="font-black text-4xl sm:text-5xl leading-tight tracking-tight mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                Get Maximum
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Tax Refund
              </span>
            </h1>

            {/* Hero Image */}
            <div className="mb-0 flex justify-center animate-fade-in-up -mt-8" style={{animationDelay: '0.4s'}}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse"></div>
                
                {/* Bubble Effects */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -top-8 right-8 w-6 h-6 bg-gradient-to-r from-pink-400/40 to-red-400/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/4 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400/50 to-orange-400/50 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-6 w-5 h-5 bg-gradient-to-r from-green-400/30 to-teal-400/30 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute -bottom-4 right-4 w-7 h-7 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                <div className="absolute top-1/2 -left-8 w-3 h-3 bg-gradient-to-r from-cyan-400/60 to-blue-400/60 rounded-full animate-bounce" style={{animationDelay: '1.2s'}}></div>
                
                <Image 
                  src="/assest/smiley-businesswoman.png" 
                  alt="Smiley Businesswoman" 
                  width={500} 
                  height={550} 
                  className="w-full max-w-md h-auto object-contain relative z-10"
                  priority
                />
              </div>
            </div>

            {/* Enhanced Action Cards - Overlapping */}
            <div className="space-y-3 max-w-sm mx-auto relative z-30 animate-fade-in-up -mt-16" style={{animationDelay: '0.6s'}}>
              <Link href="#" className="block group focus:outline-none focus:ring-0">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 p-4 flex items-center cursor-pointer border border-white/20 hover:border-white/40">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1751894073_group1814224095-3.svg?" 
                      alt="Self ITR filing icon" 
                      width={48} 
                      height={48} 
                      className="w-12 h-12 mr-4 relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                                     <div className="flex-1 min-w-0">
                     <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-1">ITR filing</h3>
                     <p className="text-gray-600 text-sm font-medium">100% accuracy guaranteed</p>
                   </div>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-xl text-sm group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 shadow-lg group-hover:shadow-xl flex-shrink-0">
                    File Now
                  </div>
                </div>
              </Link>
              
              <Link href="tel:+918668616885" className="block group focus:outline-none focus:ring-0">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-500 p-4 flex items-center cursor-pointer border border-white/20 hover:border-white/40">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1751960822_group1814224094-4.svg?" 
                      alt="Free consultation icon" 
                      width={48} 
                      height={48} 
                      className="w-12 h-12 mr-4 relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 mb-1">Free Consultation</h3>
                    <p className="text-gray-600 text-sm font-medium">Get expert advice today</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-2 px-4 rounded-xl text-sm group-hover:from-green-600 group-hover:to-teal-600 transition-all duration-300 shadow-lg group-hover:shadow-xl flex-shrink-0">
                    Call Now
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="w-1/2 text-left pl-12 animate-fade-in-left">
            {/* Enhanced Refund badge */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 text-sm shadow-[0_8px_32px_rgba(0,0,0,0.1)] mb-8 border border-white/20">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <p className="text-gray-700 font-medium">
                <span className="font-bold text-green-600 text-xl">₹5.86 Cr</span> Refund processed this year
              </p>
            </div>

            {/* Enhanced Headline */}
            <h1 className="font-black text-6xl xl:text-7xl leading-tight tracking-tight mb-10">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                Get Maximum
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Tax Refund
              </span>
            </h1>

            {/* Enhanced Action Cards */}
            <div className="grid grid-cols-2 gap-6">
              <Link href="#" className="block text-left focus:outline-none focus:ring-0 group">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)] transition-all duration-500 p-6 h-full flex flex-col border border-white/20 hover:border-white/40 hover:scale-105">
                  <div className="relative mb-4 flex justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1751894073_group1814224095-3.svg?" 
                      alt="Self ITR filing icon" 
                      width={48} 
                      height={48} 
                      className="w-16 h-16 relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                                     <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">ITR filing</h3>
                  <p className="text-gray-600 text-base mb-6 text-center">100% accuracy guaranteed</p>
                  <div className="mt-auto pt-4 w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-base shadow-lg group-hover:shadow-xl">
                    File Now
                  </div>
                </div>
              </Link>
              
              <Link href="tel:+918668616885" className="block text-left focus:outline-none focus:ring-0 group">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.15)] transition-all duration-500 p-6 h-full flex flex-col border border-white/20 hover:border-white/40 hover:scale-105">
                  <div className="text-xs text-gray-500 mb-2 font-semibold text-center">24/7 Expert support</div>
                  <div className="relative mb-4 flex justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1751960822_group1814224094-4.svg?" 
                      alt="Free consultation icon" 
                      width={48} 
                      height={48} 
                      className="w-16 h-16 relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-green-600 transition-colors duration-300">Free Consultation</h3>
                  <p className="text-gray-600 text-base mb-6 text-center">Get expert advice today</p>
                  <div className="mt-auto pt-4 w-full text-center bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 rounded-xl hover:from-green-600 hover:to-teal-600 transition-all duration-300 text-base shadow-lg group-hover:shadow-xl">
                    Call Now
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Right Content - Image and Refund Display */}
          <div className="w-1/2 relative ml-16 animate-fade-in-right">
            {/* Enhanced Total Refund Display Box */}
            <div className="absolute top-0 left-0 z-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.15)] p-6 max-w-xs border border-white/20 animate-float-gentle">
              <h3 className="text-base font-bold text-gray-700 mb-3">Total Refund</h3>
              <div className="text-3xl font-black text-purple-600 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">₹37,560</div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Auto applying deductions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-500 text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">LTCG - Exemption ₹125,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Standard Deduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                  <span className="text-gray-500">Current Year Loss Adjustments</span>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Image */}
            <div className="relative z-10 flex justify-end ml-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
                <Image 
                  src="/assest/smiley-businesswoman.png" 
                  alt="Smiley Businesswoman" 
                  width={600} 
                  height={480} 
                  className="w-full max-w-xl xl:max-w-2xl h-auto object-contain relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Trust Indicators Section */}
      <div className="container mx-auto px-4 mt-16 sm:mt-20 lg:mt-28">
        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 lg:gap-x-20 gap-y-8 sm:gap-y-10 text-sm sm:text-base w-full">
          <div className="text-center sm:text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <p className="font-black text-white text-2xl sm:text-3xl lg:text-4xl mb-2">
              <span className="text-yellow-300 animate-pulse">★</span>4.9/5
            </p>
            <p className="text-white/90 font-semibold text-base sm:text-lg">45K+ Reviews</p>
          </div>
          <div className="text-center sm:text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <p className="font-black text-white text-2xl sm:text-3xl lg:text-4xl mb-2">₹1,050 Cr+</p>
            <p className="text-white/90 font-semibold text-base sm:text-lg">Refunds delivered last year</p>
          </div>
          <div className="text-center sm:text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <p className="font-black text-white text-2xl sm:text-3xl lg:text-4xl mb-2">7.5 M+</p>
            <p className="text-white/90 font-semibold text-base sm:text-lg">Users Trust Us</p>
          </div>
        </div>
      </div>


    </section>
  );
}

export default HeroSection;