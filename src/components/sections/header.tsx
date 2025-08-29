"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const services = [
  { title: "Income Tax e Filing", href: "/services", description: "File your income tax returns online" },
  { title: "Tax Planning", href: "/services", description: "Plan your taxes efficiently" },
  { title: "ClearGST", href: "/services", description: "GST filing and compliance" },
  { title: "ClearTDS", href: "/services", description: "TDS filing and management" },
  { title: "ClearInvestment", href: "/services", description: "Investment and mutual funds" },
  { title: "ClearServices", href: "/services", description: "Professional tax services" },
];

const resources = [
  {
    title: "Case Studies",
    href: "/consulting",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196404_case_studies.png",
    category: "read",
  },
  {
    title: "Opinion Notes",
    href: "/consulting",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683877966_opinion_notes.png",
    category: "read",
  },
  {
    title: "Product Guides",
    href: "/consulting",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196200_product_guides.png",
    category: "read",
  },
  {
    title: "Webinars",
    href: "/consulting",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196239_webinars.png",
    category: "watch",
  },
  {
    title: "Product Guides - Videos",
    href: "/consulting",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196252_product_guidevideos.png",
    category: "watch",
  },
  {
    title: "Events",
    href: "/consulting",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196264_events.png",
    category: "engage",
  },
  {
    title: "FAQs",
    href: "/consulting",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196276_faqs.png",
    category: "engage",
  },
];

const companyItems = [
    { title: "About us", href: "/about-company", description: "Learn more about our company"},
    { title: "Contact us", href: "/contact", description: "Get in touch with our team"},
    { title: "Careers", href: "/careers", description: "Explore job opportunities"},
    { title: "Media & Press", href: "/media", description: "Read our latest news"},
    { title: "Trust & Safety", href: "/trust", description: "Our commitment to your security" },
]


const DropdownItem = ({ icon, title, href, description }: { icon: string; title: string; href: string; description?: string }) => (
  <a href={href} data-label={title} className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
    <img src={icon} alt={title} width="42" height="42" className="w-[42px] h-[42px] flex-shrink-0 mt-1" />
    <div>
      <p className="font-semibold text-sm text-gray-800">{title}</p>
      {description && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>}
    </div>
  </a>
);

const MobileMenuItem = ({ title, href, description }: { title: string; href: string; description?: string }) => (
  <a 
    href={href} 
    className="block p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
    onClick={() => {
      // Close mobile menu when item is clicked
      if (typeof window !== 'undefined') {
        const event = new CustomEvent('closeMobileMenu');
        window.dispatchEvent(event);
      }
    }}
  >
    <div className="text-sm font-medium text-gray-800">{title}</div>
    {description && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>}
  </a>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Close mobile menu when item is clicked
  React.useEffect(() => {
    const handleCloseMenu = () => {
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('closeMobileMenu', handleCloseMenu);
    return () => window.removeEventListener('closeMobileMenu', handleCloseMenu);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-0 sm:px-0">
        <Link href="/" className="flex-shrink-0 pl-4 sm:pl-6">
          <Image
            src="/assest/LOGO.jpeg"
            alt="Company Logo"
            width={200}
            height={58}
            priority
            className="w-32 sm:w-40 lg:w-48"
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <NavigationMenu className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <a 
                href="/" 
                className="bg-transparent text-base font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors focus:outline-none focus:ring-0"
              >
                <span>Home</span>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="/services" 
                className="bg-transparent text-base font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors focus:outline-none focus:ring-0"
              >
                <span>Services</span>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a 
                href="/consulting" 
                className="bg-transparent text-base font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors focus:outline-none focus:ring-0"
              >
                <span>Consulting</span>
              </a>
            </NavigationMenuItem>

                        <NavigationMenuItem>
                <a 
                  href="/about-company" 
                  className="bg-transparent text-base font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors focus:outline-none focus:ring-0"
                >
                  <span>About Company</span>
                </a>
              </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Call Button */}
        <Button asChild variant="outline" className="hidden lg:flex h-auto rounded-lg border-primary px-6 py-[9px] text-sm font-semibold text-primary transition-colors hover:bg-primary/5 hover:text-primary mr-4 sm:mr-6">
          <a href="tel:+918668616885">📞 +91 8668616885</a>
        </Button>

        {/* Mobile Right Side */}
        <div className="flex items-center space-x-2 lg:hidden">
          {/* Mobile Call Button */}
          <Button asChild variant="outline" className="h-9 rounded-lg border-primary px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/5 hover:text-primary">
            <a href="tel:+918668616885">📞 Call</a>
          </Button>
          
          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 hover:bg-gray-100 active:bg-gray-200"
                aria-label="Open mobile menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] max-w-[90vw] overflow-y-auto bg-gradient-to-b from-white to-gray-50">
              <SheetHeader className="border-b border-gray-200 pb-8 bg-gradient-to-r from-blue-600 to-blue-700 -mx-6 -mt-6 px-6 pt-8 rounded-b-3xl shadow-lg">
                <SheetTitle className="text-left text-2xl font-bold text-white flex items-center">
                  <span className="mr-2">✨</span>
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-6 px-2">
                {/* Navigation Links - Enhanced */}
                <div className="space-y-3">
                  <a 
                    href="/" 
                    className="group flex items-center w-full text-left px-6 py-4 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-md border border-transparent hover:border-blue-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-3 text-lg">🏠</span>
                    <span>Home</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </a>
                  <a 
                    href="/services" 
                    className="group flex items-center w-full text-left px-6 py-4 text-base font-semibold text-gray-700 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-md border border-transparent hover:border-green-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-3 text-lg">🔧</span>
                    <span>Services</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </a>
                  <a 
                    href="/consulting" 
                    className="group flex items-center w-full text-left px-6 py-4 text-base font-semibold text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-md border border-transparent hover:border-purple-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-3 text-lg">💼</span>
                    <span>Consulting</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </a>
                  <a 
                    href="/about-company" 
                    className="group flex items-center w-full text-left px-6 py-4 text-base font-semibold text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-md border border-transparent hover:border-orange-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-3 text-lg">🏢</span>
                    <span>About Company</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </a>
                </div>

                {/* Enhanced Mobile Call Button */}
                <div className="pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-1 shadow-lg">
                    <Button asChild className="w-full rounded-xl bg-white text-blue-600 px-6 py-4 text-base font-bold transition-all duration-300 hover:bg-blue-50 hover:shadow-xl transform hover:scale-105">
                      <a href="tel:+918668616885">📞 Call +91 8668616885</a>
                    </Button>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="text-center pt-4">
                  <p className="text-xs text-gray-500">Need help? Contact support</p>
                  <div className="flex justify-center space-x-4 mt-3">
                    <a 
                      href="mailto:palmprintindia@gmail.com" 
                      className="text-sm font-semibold text-gray-900 hover:text-blue-700 transition-colors duration-300 flex items-center tracking-wide"
                    >
                      <span className="mr-2 text-base">📧</span>
                      palmprintindia@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
                     </Sheet>
        </div>
      </div>
    </nav>
  );
}
