import Image from 'next/image';

const certifications = [
  { src: '/assest/certificate-assest/1620213268_1620036013_security_certificates.webp', alt: 'Security Certifications', width: 400, height: 100 },
];

const securityPillars = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1606110290_encryption-35.svg?",
    title: "Encryption",
    description: "Your data is transmitted across SSL certified pathways. We are SOC 2 compliant.",
    alt: "section_encryption",
    width: 48,
    height: 48,
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1606308817_privacyaware-36.svg?",
    title: "Privacy",
    description: "We do not share your or your clients' data with unaffiliated third parties for their ownpurposes.",
    alt: "privacy_section",
    width: 48,
    height: 48,
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1606110503_home_data_storage-37.svg?",
    title: "Data Storage",
    description: "We use ISO 27001 certified data centres, which are quarterly VAPT tested and externally audited.",
    alt: "data_storage_img",
    width: 48,
    height: 48,
  },
];

const SecurityCommitment = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Committed
              </span>
              <br />
              <span className="text-gray-800">
                to security
              </span>
            </h2>
            <div className="mt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4 tracking-wide">
                Security Certifications
              </h3>
            </div>
          </div>
          <div className="md:w-1/2 flex items-center justify-center sm:justify-start md:justify-end mt-8 md:mt-0">
            <Image 
              src={certifications[0].src} 
              alt={certifications[0].alt} 
              width={certifications[0].width} 
              height={certifications[0].height} 
              className="w-full max-w-lg h-auto object-contain drop-shadow-lg" 
            />
          </div>
        </div>

        <div className="mt-12 max-w-4xl">
          <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
            We value your data as if it were{' '}
            <span className="text-blue-600 font-bold">ours</span>. All our certifications and licenses, including{' '}
            <span className="bg-yellow-100 px-2 py-1 rounded font-bold text-gray-900">GSP</span>, were awarded after{' '}
            <span className="text-purple-600 font-bold">rigorous scrutiny</span> of our systems and multiple{' '}
            <span className="text-green-600 font-bold">VAPT audits</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12 pt-32 pb-16">
          {securityPillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl mb-8 group-hover:shadow-lg transition-all duration-300">
                <Image 
                  src={pillar.icon} 
                  alt={pillar.alt} 
                  width={pillar.width} 
                  height={pillar.height} 
                  className="w-16 h-16" 
                />
              </div>
              <h5 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">{pillar.title}</h5>
              <p className="text-lg text-gray-700 leading-relaxed px-4 md:px-0 font-medium">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCommitment;