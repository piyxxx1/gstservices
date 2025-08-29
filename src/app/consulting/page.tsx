"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Users, Briefcase, BarChart3, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";

interface ConsultingService {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  bgColor: string;
}

const consultingServices: ConsultingService[] = [
  {
    title: "Business Consulting",
    description: "Strategic business solutions to drive growth, optimize operations, and enhance profitability for organizations of all sizes.",
    features: [
      "Business Strategy Development",
      "Market Analysis & Research",
      "Operational Efficiency Optimization",
      "Financial Planning & Analysis",
      "Risk Management Strategies",
      "Digital Transformation Consulting"
    ],
    icon: <Briefcase className="w-8 h-8" />,
    gradient: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50"
  },
  {
    title: "Project Consulting",
    description: "Expert project management and consulting services to ensure successful delivery of complex projects on time and within budget.",
    features: [
      "Project Planning & Strategy",
      "Risk Assessment & Mitigation",
      "Resource Allocation & Management",
      "Timeline & Budget Control",
      "Stakeholder Communication",
      "Quality Assurance & Testing"
    ],
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: "from-green-600 to-green-800",
    bgColor: "bg-green-50"
  },
  {
    title: "HRMS Consulting",
    description: "Comprehensive Human Resource Management System consulting to streamline HR processes and improve employee experience.",
    features: [
      "HR Process Optimization",
      "System Implementation & Integration",
      "Employee Lifecycle Management",
      "Performance Management Systems",
      "Training & Development Programs",
      "Compliance & Policy Management"
    ],
    icon: <Users className="w-8 h-8" />,
    gradient: "from-purple-600 to-purple-800",
    bgColor: "bg-purple-50"
  },
  {
    title: "Mentorship",
    description: "Personalized mentorship programs to guide individuals and teams towards professional excellence and career advancement.",
    features: [
      "One-on-One Mentoring Sessions",
      "Career Development Planning",
      "Leadership Skills Development",
      "Industry Knowledge Sharing",
      "Network Building Support",
      "Goal Setting & Achievement"
    ],
    icon: <Lightbulb className="w-8 h-8" />,
    gradient: "from-orange-600 to-orange-800",
    bgColor: "bg-orange-50"
  }
];

const ConsultingServiceCard = ({ service }: { service: ConsultingService }) => {
  return (
    <div className={`${service.bgColor} rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300`}>
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-white mr-4`}>
          {service.icon}
        </div>
        <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
          {service.title}
        </h3>
      </div>
      
      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
        {service.description}
      </p>
      
      <div className="space-y-3 mb-6">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
             <a 
         href="tel:+919876543210" 
         className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group cursor-pointer`}
       >
         Get Started
         <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
       </a>
    </div>
  );
};

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        
                 <div className="relative z-10 container mx-auto px-6 py-16 lg:py-20">
           <div className="max-w-4xl mx-auto text-center">
             {/* Badge */}
             <div className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium text-white/90 mb-6">
               <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
               Trusted by 1000+ Businesses
             </div>
             
             {/* Main Heading */}
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
               <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                 Expert
               </span>
               <br />
               <span className="bg-gradient-to-r from-blue-100 via-white to-purple-100 bg-clip-text text-transparent">
                 Consulting
               </span>
               <br />
               <span className="bg-gradient-to-r from-purple-100 via-blue-100 to-white bg-clip-text text-transparent">
                 Services
               </span>
             </h1>
             
             {/* Subtitle */}
             <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
               Transform your business with{' '}
               <span className="font-semibold text-white">strategic consulting</span>,{' '}
               <span className="font-semibold text-white">expert project management</span>,{' '}
               <span className="font-semibold text-white">HRMS optimization</span>, and{' '}
               <span className="font-semibold text-white">personalized mentorship programs</span>.
             </p>
             
                           {/* Enhanced CTA Button */}
              <div className="flex justify-center mb-12">
                <a 
                  href="tel:+919876543210" 
                  className="group relative px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-base hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md cursor-pointer"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="mr-2">📅</span>
                    Schedule Consultation
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
             
             {/* Stats Row */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
               <div className="text-center">
                 <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                 <div className="text-blue-200 text-xs font-medium">Projects Delivered</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl md:text-3xl font-bold text-white mb-1">15+</div>
                 <div className="text-blue-200 text-xs font-medium">Years Experience</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl md:text-3xl font-bold text-white mb-1">98%</div>
                 <div className="text-blue-200 text-xs font-medium">Client Satisfaction</div>
               </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {consultingServices.map((service, index) => (
              <div key={service.title}>
                <ConsultingServiceCard service={service} />
              </div>
            ))}
          </div>
          
          {/* Why Choose Us Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Consulting Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              We bring years of industry experience, proven methodologies, and a commitment to delivering measurable results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">Successfully delivered 500+ consulting projects across various industries</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified consultants with 15+ years of industry experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round the clock support and guidance throughout your journey</p>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
