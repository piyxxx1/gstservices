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

const products = [
  { title: "Income Tax e Filing", href: "#", description: "File your income tax returns online" },
  { title: "Tax Planning", href: "#", description: "Plan your taxes efficiently" },
  { title: "ClearGST", href: "#", description: "GST filing and compliance" },
  { title: "ClearTDS", href: "#", description: "TDS filing and management" },
  { title: "ClearInvestment", href: "#", description: "Investment and mutual funds" },
  { title: "ClearServices", href: "#", description: "Professional tax services" },
];

const resources = [
  {
    title: "Case Studies",
    href: "#",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196404_case_studies.png",
    category: "read",
  },
  {
    title: "Opinion Notes",
    href: "#",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683877966_opinion_notes.png",
    category: "read",
  },
  {
    title: "Product Guides",
    href: "#",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196200_product_guides.png",
    category: "read",
  },
  {
    title: "Webinars",
    href: "#",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196239_webinars.png",
    category: "watch",
  },
  {
    title: "Product Guides - Videos",
    href: "#",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196252_product_guidevideos.png",
    category: "watch",
  },
  {
    title: "Events",
    href: "#",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196264_events.png",
    category: "engage",
  },
  {
    title: "FAQs",
    href: "#",
    icon: "https://assets1.cleartax-cdn.com/cleartax/images/1683196276_faqs.png",
    category: "engage",
  },
];

const companyItems = [
    { title: "About us", href: "#", description: "Learn more about our company"},
    { title: "Contact us", href: "#", description: "Get in touch with our team"},
    { title: "Careers", href: "#", description: "Explore job opportunities"},
    { title: "Media & Press", href: "#", description: "Read our latest news"},
    { title: "Trust & Safety", href: "#", description: "Our commitment to your security" },
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
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assest/LOGO.jpeg"
            alt="Company Logo"
            width={200}
            height={58}
            priority
            className="w-32 sm:w-40 lg:w-48"
          />
        </Link>

        {/* Desktop Navigation */}
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
                href="#" 
                className="bg-transparent text-base font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors focus:outline-none focus:ring-0"
              >
                <span>Products</span>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a 
                href="#" 
                className="bg-transparent text-base font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors focus:outline-none focus:ring-0"
              >
                <span>Resources</span>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a 
                href="#" 
                className="bg-transparent text-base font-medium text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors focus:outline-none focus:ring-0"
              >
                <span>Company</span>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Login Button */}
        <Button asChild variant="outline" className="hidden lg:flex h-auto rounded-lg border-primary px-6 py-[9px] text-sm font-semibold text-primary transition-colors hover:bg-primary/5 hover:text-primary">
          <a href="#">Login/Sign-up</a>
        </Button>

        {/* Mobile Right Side */}
        <div className="flex items-center space-x-2 lg:hidden">
          {/* Mobile Login Button */}
          <Button asChild variant="outline" className="h-9 rounded-lg border-primary px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/5 hover:text-primary">
            <a href="#">Login</a>
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
            <SheetContent side="right" className="w-[280px] sm:w-[350px] max-w-[90vw] overflow-y-auto">
              <SheetHeader className="border-b pb-4 flex items-center justify-between">
                <SheetTitle className="text-left text-xl font-bold text-gray-900">Menu</SheetTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-8 w-8 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </Button>
              </SheetHeader>
              <div className="mt-6 space-y-8">
                {/* Home Section */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-base">Home</h3>
                  <div className="space-y-2">
                    <MobileMenuItem title="Home" href="/" description="Back to homepage" />
                  </div>
                </div>

                {/* Products Section */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-base">Products</h3>
                  <div className="space-y-2">
                    {products.map((item) => (
                      <MobileMenuItem key={item.title} {...item} />
                    ))}
                  </div>
                </div>

                {/* Resources Section */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-base">Resources</h3>
                  <div className="space-y-2">
                    {resources.map((item) => (
                      <MobileMenuItem key={item.title} {...item} />
                    ))}
                  </div>
                </div>

                {/* Company Section */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-base">Company</h3>
                  <div className="space-y-2">
                    {companyItems.map((item) => (
                      <MobileMenuItem key={item.title} {...item} />
                    ))}
                  </div>
                </div>

                {/* Mobile Login Button */}
                <div className="pt-6 border-t border-gray-200">
                  <Button asChild variant="outline" className="w-full rounded-lg border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 hover:text-primary">
                    <a href="#">Login/Sign-up</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
                     </Sheet>
        </div>
      </div>
    </nav>
  );
}
