"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const awardsData = [
  {
    year: "2024",
    title: "Best B2B Campaign",
    organization: "ET Brand Disruption Awards",
  },
  {
    year: "2024",
    title: "Great Indian Employee Engagement team",
    organization: "CHRO",
  },
  {
    year: "2024",
    title: "The Great Manager Award",
    organization: "People Business Consulting",
  },
  {
    year: "2024",
    title: "India Technology Fast 50 Award",
    organization: "Delloite",
  },
  {
    year: "2023",
    title: "Best B2B Campaign",
    organization: "ET Brand Disruption Awards",
  },
  {
    year: "2024",
    title: "Excellence in Innovation 2023",
    organization: "ET Edge",
  },
  {
    year: "2024",
    title: "Most Innovative Fintech Data Solution Provider",
    organization: "CMO",
  },
];

interface AwardCardProps {
  year: string;
  title: string;
  organization: string;
  wreathSrc: string;
  shieldSrc: string;
}

const AwardCard: React.FC<AwardCardProps> = ({ year, title, organization, wreathSrc, shieldSrc }) => (
  <div className="flex flex-col items-center text-center p-6 h-[300px] bg-card rounded-xl border border-border-gray shadow-sm">
    <p className="font-semibold text-text-primary text-base">{year}</p>
    <div className="flex-grow flex items-center justify-center w-full my-2">
      <div className="relative flex items-center justify-center w-[165px] h-[75px]">
        {/* Removed broken wreath image */}
        <div className="w-[165px] h-[75px] bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center">
          <span className="text-2xl">🏆</span>
        </div>
        <p className="absolute font-semibold text-text-primary text-[15px] leading-tight max-w-[130px]">
          {title}
        </p>
      </div>
    </div>
    <div className="mt-auto">
      {/* Removed broken shield image */}
      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
        <span className="text-blue-600 text-xs">★</span>
      </div>
      <p className="text-text-secondary text-sm font-normal">{organization}</p>
    </div>
  </div>
);

export default function AwardsHeadlines() {
  // Removed broken image URLs to prevent 400 errors

  return (
    <section className="bg-background py-20">
      <div className="container max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold text-text-primary">
              Making the Headlines
            </h2>
            <div className="hidden md:flex items-center gap-3">
              <CarouselPrevious className="relative inset-auto w-11 h-11 -translate-y-0 rounded-full bg-light-gray border border-border-gray hover:bg-gray-200 text-gray-700" />
              <CarouselNext className="relative inset-auto w-11 h-11 -translate-y-0 rounded-full bg-light-gray border border-border-gray hover:bg-gray-200 text-gray-700" />
            </div>
          </div>
          
          <CarouselContent className="-ml-4">
            {awardsData.map((award, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <AwardCard
                  year={award.year}
                  title={award.title}
                  organization={award.organization}
                  wreathSrc=""
                  shieldSrc=""
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}