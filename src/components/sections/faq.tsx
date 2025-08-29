"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Who should file an ITR?",
    answer: "An individual whose annual income is more than the basic exemption limit of Rs 2.5 lakh should file an ITR. The basic exemption limit for senior citizens (60 years onwards and less than 80 years) is Rs 3 lakh, and for super senior citizens is Rs 5 lakh.",
  },
  {
    question: "How can I claim deductions for tax saving?",
    answer: "You should file an income tax return to claim tax deductions for tax savings such as ELSS, PPF, NSC investments and for payments such as housing loan repayments, insurance premium and donations.",
  },
  {
    question:
      "I receive my salary income after deduction of TDS. Am I required to file an income tax return?",
    answer: "You are required to file an income tax return once your annual income exceeds Rs 2.5 lakh. A deduction of TDS does not replace the requirement to file ITR. While e-filing your ITR, you should furnish the details of your annual income, claim deductions and credit for TDS deducted by your employer.",
  },
  {
    question: "How do I check TDS details from my form 26AS?",
    answer: "You can check your Form 26AS from your e-filing login. Palm Print's e-filing software auto-populates the TDS details from your Form 26AS in your income tax return.",
  },
  {
    question: "How can I claim an income tax refund?",
    answer: "You can claim an income tax refund by e-filing your income tax return. An e-filing enables you to claim credit for excess TDS paid and a tax refund.",
  },
  {
    question: "Is my data filed with Palm Print secure?",
    answer: "Palm Print uses a 128 bit SSL encryption for transmission of data and enables complete data privacy. Also, Palm Print does not share its data with unaffiliated third parties.",
  },
  {
    question: "What are the GST services offered by Palm Print?",
    answer: "Palm Print provides Palm Print GST filing software for accurate GST filing, reconciliation and claiming ITC. Palm Print GST facilitates the generation of e-invoices and e-way bill.",
  },
  {
    question: "How to e-verify my ITR?",
    answer: "You can e-verify your ITR within 120 days from the date of filing. You can e-verify using your net banking account or Aadhaar based OTP. A failure to e-verify your ITR can invalidate your ITR filing.",
  },
  {
    question: "How to choose a suitable mutual fund for SIP?",
    answer: "You should not select a mutual fund for SIP only by considering the past performance of the fund and fund manager. To choose a suitable mutual fund, you also need to check if the fund's investment objective is in line with your goals. You can also use our SIP calculator to estimate the return on your mutual fund investments.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-secondary py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center font-bold text-foreground mb-8 sm:mb-12 text-2xl sm:text-3xl lg:text-4xl leading-tight">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-4xl mx-auto"
        >
          {faqData.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-base sm:text-lg font-semibold text-left text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-1">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}