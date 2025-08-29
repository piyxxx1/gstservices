"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const awardsData = [
  {
    year: "2024",
    title: "Best B2B Campaign",
    organization: "ET Brand Disruption Awards",
    icon: "🏆",
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
  },
  {
    year: "2024",
    title: "Great Indian Employee Engagement team",
    organization: "CHRO",
    icon: "🏆",
    color: "from-blue-400 to-purple-500",
    bgColor: "from-blue-50 to-purple-50",
  },
  {
    year: "2024",
    title: "The Great Manager Award",
    organization: "People Business Consulting",
    icon: "🏆",
    color: "from-green-400 to-teal-500",
    bgColor: "from-green-50 to-teal-50",
  },
];

interface AwardCardProps {
  year: string;
  title: string;
  organization: string;
  icon: string;
  color: string;
  bgColor: string;
}

const AwardCard: React.FC<AwardCardProps> = ({ 
  year, 
  title, 
  organization, 
  icon, 
  color, 
  bgColor 
}) => (
  <div className="group relative overflow-hidden">
    {/* Background gradient */}
    <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    
    {/* Card content */}
    <div className="relative bg-white rounded-2xl p-8 h-[400px] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
      {/* Year badge */}
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mb-6">
        <span className="text-sm font-bold text-gray-700">{year}</span>
      </div>
      
      {/* Trophy icon */}
      <div className="flex justify-center mb-6">
        <div className={`w-24 h-24 bg-gradient-to-br ${color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
          <span className="text-4xl">{icon}</span>
        </div>
      </div>
      
      {/* Award title */}
      <h3 className="text-xl font-bold text-gray-900 text-center mb-4 leading-tight group-hover:text-gray-800 transition-colors duration-300">
        {title}
      </h3>
      
      {/* Organization */}
      <div className="mt-auto text-center">
        <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-3">
          <span className="text-blue-600 text-sm font-bold">★</span>
        </div>
        <p className="text-gray-600 font-medium text-sm">{organization}</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
    </div>
  </div>
);

export default function AwardsHeadlines() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-green-200 to-teal-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6">
            <span className="text-yellow-600 font-semibold text-sm">🏆 Award Winning Excellence</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Making the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Headlines
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recognized for our innovative solutions and exceptional service delivery across the industry
          </p>
        </div>

        {/* Carousel Section */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <CarouselPrevious className="relative inset-auto w-14 h-14 -translate-y-0 rounded-full bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <div className="text-center">
              <span className="text-sm text-gray-500 font-medium">Previous</span>
              <span className="text-sm text-gray-500 font-medium mx-2">•</span>
              <span className="text-sm text-gray-500 font-medium">Next</span>
            </div>
            <CarouselNext className="relative inset-auto w-14 h-14 -translate-y-0 rounded-full bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </div>
          
          {/* Carousel Content */}
          <CarouselContent className="-ml-6">
            {awardsData.map((award, index) => (
              <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                <AwardCard
                  year={award.year}
                  title={award.title}
                  organization={award.organization}
                  icon={award.icon}
                  color={award.color}
                  bgColor={award.bgColor}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        
      </div>
    </section>
  );
}