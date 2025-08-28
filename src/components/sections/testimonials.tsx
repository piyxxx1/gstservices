"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    id: 1,
    title: "600,000+ businesses trust our SMB offerings",
    quote:
      "Earlier I used to call multiple customers, track my bank account or check messages for payments. Now I can send UPI links in reminders and customers can pay from home. Compliance is easy.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1605861410_shalini_prasad1-38.png?",
    name: "Shalini Prasad",
    role: "Business Owner, Printing Goods",
    linkText: "Explore products for Small Businesses",
    linkHref: "#",
  },
  {
    id: 2,
    title: "Over 1,200 enterprises use our compliance stack",
    quote: "ClearTax has made core GST returns simple and easy for us. Instead of taking 7 to 8 days to do reconciliation, now it’s just a matter of hours. The people there assist us at any given point in time.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1605862455_manivanan_p-39.png?",
    name: "Manivannan P",
    role: "Group Manager, Titan",
    linkText: "Explore our products for Large Enterprises",
    linkHref: "#",
  },
  {
    id: 3,
    title: "Over 5 million tax payers have filed with us",
    quote: "I have been using ClearTax’s DIY e-filing of ITR for last 3 years. I use it for my entire family’s income tax returns. Very effective and least time consuming.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1606110840_mrmanmohan1-40.png?",
    name: "Mr. Manmohan",
    role: "Tax Payer, Kochi, Kerala",
    linkText: "File ITRs yourself or seek expert assistance",
    linkHref: "#",
  },
  {
    id: 4,
    title: "More than 60,000 tax experts use our platform",
    quote: "My executives could learn it so quickly and we implemented literally in a couple of days. I am impressed with time-saving features embedded in the software like advanced reconciliation of 2A data with invoices.",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1602838327_carouselanilchakravarthy-41.png?",
    name: "Mr. Anil Chakravarthy",
    role: "Tax Suite user",
    linkText: "Explore products for tax experts",
    linkHref: "#",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4 sm:gap-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold text-text-primary text-center sm:text-left">
              Trusted by experts and businesses
            </h2>
            <div className="flex items-center space-x-2">
              <CarouselPrevious className="relative translate-y-0 -left-0 -top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-text-primary border-none">
                <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </CarouselPrevious>
              <CarouselNext className="relative translate-y-0 -right-0 -top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-text-primary border-none">
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </CarouselNext>
            </div>
          </div>
          <CarouselContent className="-ml-4 sm:-ml-8">
            {testimonialsData.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 sm:pl-8 md:basis-1/2"
              >
                <Card className="h-full rounded-xl border-2 border-gray-200 shadow-none p-2">
                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <h3 className="text-base sm:text-lg font-semibold text-text-primary leading-7 mb-3 sm:mb-4">
                      {testimonial.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">
                      {testimonial.quote}
                    </p>
                    <div className="mt-6 sm:mt-8">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full mr-3 sm:mr-4 object-cover w-10 h-10 sm:w-12 sm:h-12"
                        />
                        <div>
                          <p className="font-semibold text-xs sm:text-sm text-text-primary leading-relaxed">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-text-secondary leading-relaxed">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <a
                        href={testimonial.linkHref}
                        className="text-xs sm:text-sm font-semibold text-primary flex items-center group leading-relaxed"
                      >
                        {testimonial.linkText}
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}