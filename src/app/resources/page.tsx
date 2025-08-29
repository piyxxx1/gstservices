import React from "react";
import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Resources & Tools | PalmPrint Tax Guides, Calculators, FAQs",
  description:
    "Explore PalmPrint resources: ITR guides, GST updates, tax calculators (Income Tax, HRA, Capital Gains, TDS), webinars, help center, tax calendar, case studies, glossary, and newsletter.",
  keywords: [
    "tax resources",
    "ITR guide",
    "GST updates",
    "income tax calculator",
    "HRA calculator",
    "capital gains calculator",
    "TDS calculator",
    "advance tax",
    "tax calendar",
    "tax ebooks",
    "tax planning",
    "finance tips",
    "PalmPrint",
  ],
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-sm">
                Tax Resources, Guides & Tools
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed">
              Master taxes with step-by-step guides, pro calculators, FAQs, webinars, and downloadable e-books curated by experts.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-10 bg-white rounded-t-[32px]"></div>
      </section>

      <main className="container mx-auto px-6 -mt-6 sm:-mt-8 pb-16">
        {/* Grid wrapper */}
        <div className="grid grid-cols-1 gap-8">
          {/* 1. Blog / Articles */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 pt-7 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">1. Blog / Articles</h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">Actionable insights on income tax, GST, and financial planning.</p>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
              <li className="rounded-lg border border-gray-200 p-5 hover:border-blue-300 transition-colors min-h-[84px] flex items-start">Tax-saving tips & tricks</li>
              <li className="rounded-lg border border-gray-200 p-5 hover:border-blue-300 transition-colors min-h-[84px] flex items-start">Income Tax Return (ITR) guides</li>
              <li className="rounded-lg border border-gray-200 p-5 hover:border-blue-300 transition-colors min-h-[84px] flex items-start">Latest changes in tax laws & deadlines</li>
              <li className="rounded-lg border border-gray-200 p-5 hover:border-blue-300 transition-colors min-h-[84px] flex items-start">GST filing updates & compliance rules</li>
              <li className="rounded-lg border border-gray-200 p-5 hover:border-blue-300 transition-colors min-h-[84px] flex items-start">Finance planning tips (investments, deductions, exemptions)</li>
            </ul>
          </section>

          {/* 2. Guides & E-books */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">2. Guides & E-books</h2>
            <p className="text-gray-600 mb-5">Download premium step-by-step guides and checklists.</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="rounded-lg border border-gray-200 p-4 hover:border-purple-300 transition-colors">Step-by-step ITR Filing Guide</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-purple-300 transition-colors">“How to Save Taxes Legally” (PDF/E-book)</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-purple-300 transition-colors">Beginners’ guide to GST</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-purple-300 transition-colors">Corporate tax planning resources</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-purple-300 transition-colors">Downloadable PDFs (lead magnets) in exchange for email sign-ups</li>
            </ul>
          </section>

          {/* 3. Tools & Calculators */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">3. Tools & Calculators</h2>
            <p className="text-gray-600 mb-5">Accurate, fast and free calculators for your tax planning.</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="rounded-lg border border-gray-200 p-4 hover:border-green-300 transition-colors">Income Tax Calculator</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-green-300 transition-colors">HRA (House Rent Allowance) Calculator</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-green-300 transition-colors">Capital Gains Tax Calculator</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-green-300 transition-colors">Advance Tax Estimator</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-green-300 transition-colors">TDS Calculator</li>
            </ul>
          </section>

          {/* 4. FAQs / Help Center */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">4. FAQs / Help Center</h2>
            <p className="text-gray-600 mb-5">Get quick answers and self-serve guides.</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors">Common tax filing doubts answered</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors">How to use your service (Self-filing vs Expert Filing vs TaxCloud)</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors">Step-by-step help articles with screenshots</li>
            </ul>
          </section>

          {/* 5. Video Tutorials / Webinars */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">5. Video Tutorials / Webinars</h2>
            <p className="text-gray-600 mb-5">Learn visually with expert-led videos and sessions.</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="rounded-lg border border-gray-200 p-4 hover:border-red-300 transition-colors">“How to file ITR online” video guide</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-red-300 transition-colors">Live/recorded webinars on tax planning</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-red-300 transition-colors">Short reels explaining exemptions/deductions</li>
            </ul>
          </section>

          {/* 6. Tax Calendar */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">6. Tax Calendar</h2>
            <p className="text-gray-600 mb-5">Never miss an important due date again.</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="rounded-lg border border-gray-200 p-4 hover:border-indigo-300 transition-colors">Important deadlines for tax filing</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-indigo-300 transition-colors">GST due dates</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-indigo-300 transition-colors">TDS deposit deadlines</li>
            </ul>
          </section>

          {/* 7. Case Studies & Success Stories */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">7. Case Studies & Success Stories</h2>
            <p className="text-gray-600 mb-5">Real outcomes from individuals and businesses.</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="rounded-lg border border-gray-200 p-4 hover:border-amber-300 transition-colors">How you helped businesses save taxes</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-amber-300 transition-colors">Testimonials from individuals/firms</li>
              <li className="rounded-lg border border-gray-200 p-4 hover:border-amber-300 transition-colors">Real examples of refunds claimed</li>
            </ul>
          </section>

          {/* 8. Glossary of Tax Terms */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">8. Glossary of Tax Terms</h2>
            <p className="text-gray-700">Simple explanations of terms like TDS, GST, Section 80C, Section 80D, LTCG, STCG, HRA, Form 16, AIS, 26AS, new vs old tax regime, depreciation, input tax credit (ITC).</p>
          </section>

          {/* 9. Newsletter / Updates */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">9. Newsletter / Updates</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-800">
              <li className="rounded-lg border border-gray-200 p-4">Free subscription for tax updates</li>
              <li className="rounded-lg border border-gray-200 p-4">Email campaigns with latest tax changes</li>
            </ul>
          </section>
        </div>

        {/* SEO helper text (visible, helpful, keyword-rich) */}
        <section className="mt-12 text-sm text-gray-600 leading-6">
          <h3 className="text-base font-semibold text-gray-900">PalmPrint Tax Resources for India</h3>
          <p className="mt-2">
            Explore expert-written guides on income tax return (ITR) filing, GST compliance, TDS, advance tax, capital gains tax, HRA exemption, deductions under Section 80C/80D, new vs old tax regime, and financial planning. Use our free tax calculators to estimate taxes instantly and follow our tax calendar for due dates. Stay updated with latest CBDT and GST notifications, e-invoicing rules, and compliance changes.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
