import React from "react";
import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "About Company | PalmPrint",
  description:
    "Learn about PalmPrint: our mission, values, team and commitment to building simple, secure tax and finance solutions for India.",
  keywords: [
    "About PalmPrint",
    "company",
    "mission",
    "values",
    "tax platform",
    "GST",
    "ITR",
  ],
};

export default function AboutCompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-sm">
                About PalmPrint
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed">
              We are on a mission to simplify taxes and finances for everyone—
              individuals, businesses and experts—through intuitive, secure and
              reliable technology.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-10 bg-white rounded-t-[32px]"></div>
      </section>

      <main className="container mx-auto px-6 -mt-6 sm:-mt-8 pb-16">
        {/* Story */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)] mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            PalmPrint was founded with a simple belief: managing taxes should be
            stress-free. From ITR filing to GST compliance, we build software
            that is easy to use, accurate and backed by experts. Today, we serve
            customers across India with products for individuals, SMEs, tax
            professionals and enterprises.
          </p>
        </section>

        {/* Mission & Values */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Empower every taxpayer and business in India with simple,
              trustworthy tools to stay compliant, save time and optimize taxes.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Our Values</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="rounded-lg border border-gray-200 p-4">Customer Obsession</li>
              <li className="rounded-lg border border-gray-200 p-4">Accuracy & Trust</li>
              <li className="rounded-lg border border-gray-200 p-4">Privacy & Security</li>
              <li className="rounded-lg border border-gray-200 p-4">Simplicity & Speed</li>
            </ul>
          </div>
        </section>

        {/* Stats */}
        <section className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <p className="text-3xl font-extrabold text-blue-700">5000+</p>
            <p className="text-gray-600 mt-1">Happy Customers</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <p className="text-3xl font-extrabold text-blue-700">20+</p>
            <p className="text-gray-600 mt-1">CAs & Tax Experts</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <p className="text-3xl font-extrabold text-blue-700">1000+</p>
            <p className="text-gray-600 mt-1">Businesses Served</p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Work with Us</h3>
          <p className="text-gray-700 mb-4">Have a question or business inquiry? Our team is here to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:palmprintindia@gmail.com" className="rounded-full bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-0">Email Us</a>
            <a href="tel:+918668616885" className="rounded-full bg-white border border-blue-200 text-blue-700 px-6 py-3 font-semibold hover:bg-blue-50 transition-colors focus:outline-none focus:ring-0">Call +91 8668616885</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
