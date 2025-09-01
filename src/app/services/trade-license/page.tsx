"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileText, Upload, CreditCard, Check, AlertCircle, Download } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RequiredDocument {
  id: string;
  name: string;
  description: string;
  mandatory: boolean;
}

const requiredDocuments: RequiredDocument[] = [
  {
    id: "1",
    name: "Application Form",
    description: "Duly filled trade license application form",
    mandatory: true,
  },
  {
    id: "2", 
    name: "Proof of Identity",
    description: "Aadhar Card, PAN Card, or Passport",
    mandatory: true,
  },
  {
    id: "3",
    name: "Proof of Address",
    description: "Rental Agreement, Property Documents, or Utility Bills",
    mandatory: true,
  },
  {
    id: "4",
    name: "NOC from Property Owner",
    description: "No Objection Certificate from property owner (if rented)",
    mandatory: true,
  },
  {
    id: "5",
    name: "Partnership Deed",
    description: "Partnership deed (for partnership firms)",
    mandatory: false,
  },
  {
    id: "6",
    name: "MOA & AOA",
    description: "Memorandum and Articles of Association (for companies)",
    mandatory: false,
  },
  {
    id: "7",
    name: "Fire Safety Certificate",
    description: "Fire safety clearance certificate",
    mandatory: true,
  },
  {
    id: "8",
    name: "Pollution Clearance",
    description: "Pollution control board clearance (if applicable)",
    mandatory: false,
  },
];



export default function TradeLicensePage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [showPayment, setShowPayment] = useState(false);

  const handleMultipleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const canSubmit = uploadedFiles.length > 0;

  const handleSubmit = () => {
    if (canSubmit) {
      setShowPayment(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trade License Registration
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Obtain trade license for your business operations quickly and efficiently
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>100% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Fast Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Overview Section */}
          <div className="mb-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl">
                <CardTitle className="text-2xl text-gray-900">What is a Trade License?</CardTitle>
                <CardDescription className="text-gray-600">
                  A trade license is a legal document that permits a person or entity to carry out a particular business or trade in a specific area.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-gray-900">Key Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Legal authorization to operate business</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Credibility with customers and vendors</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Easy access to business loans</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>Tax benefits and exemptions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-gray-900">Processing Time</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 mb-2">
                        <strong>Standard Processing:</strong> 15-30 working days
                      </p>
                      <p className="text-sm text-blue-800">
                        <strong>Express Processing:</strong> 7-15 working days (additional charges apply)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Required Documents Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Required Documents</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Please prepare and upload the following documents for your trade license application.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Required Documents List */}
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-red-600" />
                      Required Documents
                    </CardTitle>
                    <CardDescription>
                      These documents are mandatory for your application
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {requiredDocuments.filter(doc => doc.mandatory).map((document, index) => (
                        <li key={document.id} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="font-semibold text-gray-900">{document.name}</h4>
                            <p className="text-sm text-gray-600">{document.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Optional Documents List */}
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      Optional Documents
                    </CardTitle>
                    <CardDescription>
                      These documents may be required based on business type
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {requiredDocuments.filter(doc => !doc.mandatory).map((document, index) => (
                        <li key={document.id} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="font-semibold text-gray-900">{document.name}</h4>
                            <p className="text-sm text-gray-600">{document.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Upload Section */}
            <div className="mt-8">
              <Card className="border-2 border-dashed border-blue-300 bg-blue-50">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Upload className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Your Documents</h3>
                    <p className="text-gray-600 mb-6">
                      Select multiple files to upload all your documents at once
                    </p>
                    
                    <div className="mb-6">
                      <label htmlFor="multiple-files" className="cursor-pointer">
                        <Button size="lg" className="px-8 py-3" asChild>
                          <span>
                            <Upload className="h-5 w-5 mr-2" />
                            Choose Files
                          </span>
                        </Button>
                      </label>
                      <input
                        id="multiple-files"
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        onChange={handleMultipleFileUpload}
                        className="hidden"
                      />
                    </div>

                    <p className="text-sm text-gray-500">
                      Supported formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB per file)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Uploaded Files Display */}
            {uploadedFiles.length > 0 && (
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      Uploaded Files ({uploadedFiles.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium text-gray-900">{file.name}</p>
                              <p className="text-sm text-gray-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Submit Section */}
          <div className="mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Submit?</h3>
                  
                  {!canSubmit && (
                    <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-center gap-2 text-amber-800">
                        <AlertCircle className="h-5 w-5" />
                        <span className="font-medium">
                          Please upload your documents before submitting
                        </span>
                      </div>
                    </div>
                  )}

                  <Button 
                    size="lg" 
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="px-8 py-3 text-lg"
                  >
                    Submit Application
                  </Button>
                  
                  <p className="text-sm text-gray-600 mt-4">
                    By submitting, you agree to our terms and conditions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Section */}
          {showPayment && (
            <div className="mb-12">
              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 rounded-t-xl">
                  <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                    <CreditCard className="h-6 w-6" />
                    Payment & Processing
                  </CardTitle>
                  <CardDescription className="text-green-700">
                    Complete your payment to process your trade license application
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Pricing */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Service Charges</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Government Fee</span>
                          <span className="font-semibold">₹2,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span>Service Charge</span>
                          <span className="font-semibold">₹1,500</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded border-t-2 border-blue-600">
                          <span className="font-bold text-lg">Total Amount</span>
                          <span className="font-bold text-lg text-blue-600">₹3,500</span>
                        </div>
                      </div>
                    </div>

                    {/* QR Code Payment */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Pay via QR Code</h3>
                      <div className="text-center">
                        <div className="inline-block p-4 bg-white border-2 border-gray-300 rounded-lg mb-4">
                          {/* QR Code placeholder */}
                          <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-500">Scan to Pay</p>
                              <p className="text-lg font-bold text-gray-700">₹3,500</p>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-4">
                          Scan this QR code with any UPI app to make payment
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                          <Badge variant="outline">Google Pay</Badge>
                          <Badge variant="outline">PhonePe</Badge>
                          <Badge variant="outline">Paytm</Badge>
                          <Badge variant="outline">BHIM UPI</Badge>
                        </div>

                        <Button variant="outline" className="w-full">
                          Payment Confirmation
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Payment Instructions */}
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Payment Instructions:</h4>
                    <ol className="text-sm text-blue-700 space-y-1">
                      <li>1. Scan the QR code using any UPI app</li>
                      <li>2. Enter the amount ₹3,500</li>
                      <li>3. Complete the payment</li>
                      <li>4. Click on "Payment Confirmation" button above</li>
                      <li>5. Our team will verify and start processing your application</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
