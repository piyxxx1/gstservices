import Image from "next/image";

type FooterLink = {
  text: string;
  href: string;
};

type FooterColumnData = {
  title: string;
  links: FooterLink[];
};

type FooterComplexColumnData = {
  title: string;
  groups: Array<{
    title: string;
    links: FooterLink[];
  }>;
};

const companyLinks: FooterLink[] = [
  { text: "About us", href: "#" },
  { text: "Contact us", href: "#" },
  { text: "Careers", href: "#" },
  { text: "Media & Press", href: "#" },
  { text: "User reviews", href: "#" },
  { text: "Engineering blog", href: "#" },
  { text: "Clear Library", href: "#" },
  { text: "FinTech glossary", href: "#" },
  { text: "ClearTax Chronicles", href: "#" },
  { text: "GST Product Guides", href: "#" },
  { text: "Trust & Safety", href: "#" },
  { text: "Cleartax(Saudi Arabia)", href: "#" },
];

const productsColumn: FooterComplexColumnData["groups"] = [
  {
    title: "Individuals",
    links: [
      { text: "Income Tax e Filing", href: "#" },
      { text: "Tax Planning", href: "#" },
      { text: "ClearInvestment", href: "#" },
      { text: "ClearServices", href: "#" },
      { text: "Mutual Funds & ITR e-filing App", href: "#" },
      { text: "Mutual Funds", href: "#" },
    ],
  },
  {
    title: "Income Tax Filing",
    links: [
      { text: "Income Tax App android", href: "#" },
      { text: "Income Tax", href: "#" },
      { text: "Secion 80 Deductions", href: "#" },
      { text: "Income tax for NRI", href: "#" },
    ],
  },
  {
    title: "ClearGST",
    links: [
      { text: "GST", href: "#" },
      { text: "GST Login", href: "#" },
      { text: "GST software", href: "#" },
      { text: "New GST returns", href: "#" },
      { text: "e-invoicing", href: "#" },
      { text: "Input tax credit", href: "#" },
    ],
  },
  {
    title: "Enterprises",
    links: [
      { text: "ClearGST", href: "#" },
      { text: "ClearE-Waybill", href: "#" },
      { text: "e-Invoicing Software", href: "#" },
      { text: "ClearTDS", href: "#" },
      { text: "eWay Bill Registration", href: "#" },
    ],
  },
  {
    title: "CAs",
    links: [
      { text: "CA partner program", href: "#" },
      { text: "ClearGST", href: "#" },
      { text: "ClearTDS", href: "#" },
      { text: "ClearTaxCloud", href: "#" },
      { text: "ClearPro App", href: "#" },
    ],
  },
  {
    title: "SMEs",
    links: [
      { text: "ClearGST", href: "#" },
      
      { text: "Billing Software", href: "#" },
      { text: "Invoicing Software", href: "#" },
      { text: "Services for Businesses", href: "#" },
      
    ],
  },
  {
    title: "ClearServices",
    links: [
      { text: "Tax filing for professionals", href: "#" },
      { text: "Tax filing for traders", href: "#" },
      { text: "Clear Launchpad", href: "#" },
      { text: "Trademark Registration", href: "#" },
      { text: "Company Registration", href: "#" },
      { text: "TDS returns", href: "#" },
      { text: "MSME Registration", href: "#" },
    ],
  },
  {
    title: "HSN Lookup",
    links: [
      { text: "HSN Code Finder", href: "#" },
      { text: "Cement HSN Code", href: "#" },
      { text: "Transport HSN Code", href: "#" },
      { text: "Plastic HSN Code", href: "#" },
      { text: "Cloth GST Rate", href: "#" },
      { text: "Books GST Rate", href: "#" },
    ],
  },
];

const resourcesColumn: FooterComplexColumnData["groups"] = [
    { title: "GST Resources", links: [
        { text: "GST Registration", href: "#" },
        { text: "GST Returns", href: "#" },
        { text: "GST Procedure", href: "#" },
        { text: "GST News & Announcement", href: "#" },
        { text: "GSTR 9 Annual Returns", href: "#" },
        { text: "GST Payments and Refunds", href: "#" },
        { text: "Invoicing Under GST", href: "#" },
        { text: "GSTR-2B", href: "#" },
        { text: "GSTR-3B", href: "#" },
      ]},
    { title: "ITR Resources", links: [
        { text: "Income Tax Slab", href: "#" },
        { text: "Form 26AS", href: "#" },
        { text: "What is Form 16", href: "#" },
        { text: "Salary Income", href: "#" },
        { text: "How to File TDS Returns", href: "#" },
        { text: "New Income Tax Portal", href: "#" },
        { text: "Incometax.gov.in", href: "#" },
        { text: "Income From Selling Shares", href: "#" },
        { text: "Income Tax Due Dates", href: "#" },
      ]},
      { title: "Mutual Fund Resources", links: [
        { text: "How to Invest in Mutual Funds", href: "#" },
        { text: "Mutual fund Types", href: "#" },
        { text: "ELSS", href: "#" },
        { text: "SIP Mutual Funds", href: "#" },
        { text: "Hedge Funds", href: "#" },
        { text: "Debt Funds", href: "#" },
        { text: "NFO", href: "#" },
        { text: "What is AMFI", href: "#" },
        { text: "What is NAV", href: "#" },
      ]},
      { title: "Business Resources", links: [
        { text: "Memorandum of Understanding ( MoU )", href: "#" },
        { text: "Mudra Yojana", href: "#" },
        { text: "Inflation & Deflation", href: "#" },
        { text: "Loan Agreement", href: "#" },
        { text: "Succession Certificate", href: "#" },
        { text: "Solvency Certificate", href: "#" },
        { text: "Debt Settlement Agreement", href: "#" },
        { text: "Rental Agreement", href: "#" },
        { text: "Letters Of Credit", href: "#" },
      ]
    }
  ];

const toolsColumns = [
  { links: [
      { text: "Income tax calculator", href: "#" },
      { text: "EMI Calculator", href: "#" },
      { text: "Mutual fund calculator", href: "#" },
      { text: "HSN Code Finder", href: "#" },
      { text: "SIP calculator", href: "#" },
      { text: "GST calculator", href: "#" },
    ]
  },
  { links: [
      { text: "PPF Calculator", href: "#" },
      { text: "GST number search", href: "#" },
      { text: "IFSC Code Search", href: "#" },
      { text: "Generate rent receipts", href: "#" },
      { text: "Home Loan EMI Calculator", href: "#" },
      { text: "NPS Calculator", href: "#" },
    ]
  },
  { links: [
      { text: "HRA calculator", href: "#" },
      { text: "RD Calculator", href: "#" },
      { text: "FD Calculator", href: "#" },
      { text: "Gold Rates Today", href: "#" },
      { text: "Currency Converter", href: "#" },
      { text: "Compound Interest Calculator", href: "#" },
    ]
  },
  { links: [
      { text: "Find HSN code", href: "#" },
      { text: "Tax Saving Calculator", href: "#" },
      { text: "Get IT refund status", href: "#" },
      { text: "Salary Calculator", href: "#" },
      { text: "EPF Calculator", href: "#" },
      { text: "GST Number Search by Name", href: "#" },
    ]
  }
];



const socialIcons = [
  { RLink: "https://www.facebook.com/clearfromcleartax", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1602846766_footer_facebook-45.png?", alt: "fb" },
  { RLink: "https://twitter.com/ClearfromCT?s=09", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1602846849_footer_twitter-46.png?", alt: "twitter" },
  { RLink: "https://www.linkedin.com/company/cleartaxindia/", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1602846859_footer_linkedin-47.png?", alt: "linkedin" },
  { RLink: "https://github.com/ClearTax", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1602846934_footer_github-48.png?", alt: "github" },
  { RLink: "https://www.instagram.com/clearfromcleartax/", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1602846688_footer_instagram-49.png?", alt: "instagram" },
  
];

const socialIconsBottom = [ ...socialIcons, { RLink: "https://www.youtube.com/cleartaxindia", src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1631855308_youtube-51.png?", alt: "youtube" }];

const FooterLinkList = ({ links }: { links: FooterLink[] }) => (
  <ul className="space-y-3">
    {links.map((link, index) => (
      <li key={index}>
        <a href={link.href} className="text-[#c1ccda] hover:text-white transition-colors duration-200">
          {link.text}
        </a>
      </li>
    ))}
  </ul>
);

const FooterColumn = ({ title, links }: FooterColumnData) => (
  <div>
    <h3 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">{title}</h3>
    <FooterLinkList links={links} />
  </div>
);

const FooterSection = () => {
    return (
        <footer className="bg-[#162434] text-sm text-[#8B97A8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-12 space-y-8 lg:space-y-0">
                   <div className="w-full lg:w-auto">
                     <Image 
                       src="/assest/LOGO.jpeg" 
                       alt="Company Logo" 
                       width={150} 
                       height={42}
                       className="w-32 sm:w-auto"
                     />
                     <p className="mt-6 mb-3 text-white">Follow us on</p>
                     <div className="flex space-x-3">
                         {socialIcons.map(icon => (
                           <a key={icon.alt} href={icon.RLink} target="_blank" rel="noopener noreferrer">
                             <Image src={icon.src} alt={icon.alt} width={32} height={32} className="w-8 h-8 sm:w-8 sm:h-8"/>
                           </a>
                         ))}
                     </div>
                   </div>
                   <div className="w-full lg:w-auto">
                       <p className="text-white">Have a query?</p>
                       <ul className="mt-3">
                           <li><a href="#" className="text-[#c1ccda] hover:text-white transition-colors duration-200">Support</a></li>
                       </ul>
                   </div>
                </div>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-x-8 lg:gap-y-12">
                     {/* Company Column */}
                     <div className="lg:col-span-2">
                        <FooterColumn title="Company" links={companyLinks} />
                     </div>

                     {/* Products Column */}
                     <div className="lg:col-span-4">
                        <h3 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Products</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            {productsColumn.map((group, index) => (
                                <div key={index} className="space-y-3">
                                    <h4 className="text-white font-semibold text-sm">{group.title}</h4>
                                    <FooterLinkList links={group.links} />
                                </div>
                            ))}
                        </div>
                     </div>
                    
                     {/* Resources Column */}
                     <div className="lg:col-span-3">
                        <h3 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Resources & Guides</h3>
                        <div className="space-y-6">
                            {resourcesColumn.map((group, index) => (
                                <div key={index}>
                                    <h4 className="text-white font-semibold text-sm mb-3">{group.title}</h4>
                                    <FooterLinkList links={group.links} />
                                </div>
                            ))}
                        </div>
                     </div>

                     {/* Tools Column */}
                     <div className="lg:col-span-3">
                        <h3 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Tools</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {toolsColumns.map((col, index) => <FooterLinkList key={index} links={col.links} />)}
                        </div>
                     </div>
                </div>

                <hr className="border-t border-dashed border-gray-700 my-10"/>

                {/* Description Text */}
                <div className="space-y-4 text-xs leading-relaxed">
                     <p>Clear offers taxation & financial solutions to individuals, businesses, organizations & chartered accountants in India. Clear serves 1.5+ Million happy customers, 20000+ CAs & tax experts & 10000+ businesses across India.</p>
                     <p>Efiling Income Tax Returns(ITR) is made easy with Clear platform. Just upload your form 16, claim your deductions and get your acknowledgment number online. You can efile income tax return on your income from salary, house property, capital gains, business & profession and income from other sources. Further you can also file TDS returns, generate Form-16, use our Tax Calculator software, claim HRA, check refund status and generate rent receipts for Income Tax Filing.</p>
                     <p>CAs, experts and businesses can get GST ready with Clear GST software & certification course. Our GST Software helps CAs, tax experts & business to manage returns & invoices in an easy manner. Our Goods & Services Tax course includes tutorial videos, guides and expert assistance to help you in mastering Goods and Services Tax. Clear can also help you in getting your business registered for Goods & Services Tax Law.</p>
                </div>

                {/* Company Info */}
                <div className="text-center mt-10">
                    <p className="text-xs font-semibold tracking-wide">CLEARTAX IS A PRODUCT BY DEFMACRO SOFTWARE PVT. LTD.</p>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 pt-8 border-t border-gray-700 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 text-xs">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 lg:gap-x-6 gap-y-2">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of use</a>
                        <a href="#" className="hover:text-white transition-colors">Terms - ITR</a>
                        <a href="#" className="hover:text-white transition-colors">Terms - Financial Products & GST</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy - ITR</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy - Financial Products & GST</a>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="flex items-center space-x-2">
                             <Image 
                               src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/images/1656664735_image-19.webp?" 
                               alt="ISO 27001" 
                               width={32} 
                               height={32} 
                               className="w-8 h-8"
                             />
                            <div>
                               <p className="font-semibold text-xs">ISO 27001</p>
                               <p className="text-xs">Data Center</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                             <Image 
                               src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/icons/1656664658_image1-50.jpg?" 
                               alt="SSL Certified" 
                               width={32} 
                               height={32} 
                               className="w-8 h-8"
                             />
                            <div>
                               <p className="font-semibold text-xs">SSL Certified Site</p>
                               <p className="text-xs">128-bit encryption</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Bottom Section */}
                <div className="mt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 lg:gap-x-6 gap-y-2 text-xs">
                        <a href="#" className="hover:text-white transition-colors">Legal - Defmacro</a>
                        <a href="#" className="hover:text-white transition-colors">Legal - Xpedize</a>
                    </div>
                    <div className="flex space-x-3">
                         {socialIconsBottom.map(icon => (
                           <a key={icon.alt} href={icon.RLink} target="_blank" rel="noopener noreferrer">
                             <Image src={icon.src} alt={icon.alt} width={24} height={24} className="w-6 h-6"/>
                           </a>
                         ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default FooterSection;