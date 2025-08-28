import Image from 'next/image';

const brandLogos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/images/57600b18-d5a0-4a75-8236-6206177c7d65-3.png?",
    alt: "Swiggy",
    width: 101,
    height: 28,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/images/fa492bf5-f2e8-4c4f-b6f7-7bbb851befdb-4.png?",
    alt: "Myntra",
    width: 112,
    height: 24,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/images/71dc20fb-7e0b-4b00-9ceb-aa25529f7d06-5.png?",
    alt: "Zomato",
    width: 113,
    height: 26,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/images/34785df4-9e20-4b3f-a637-c2d9b3746a2f-6.png?",
    alt: "Flipkart",
    width: 120,
    height: 34,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/images/3b8d16b4-e258-45a5-9933-b603b594e78f-7.png?",
    alt: "Apollo",
    width: 120,
    height: 35,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/images/2204cf87-0c36-49b0-b2d6-0309d3d14afd-8.png?",
    alt: "Bosch",
    width: 107,
    height: 34,
  },
];

const TrustedBrands = () => {
  return (
    <section className="bg-background pt-12 pb-10">
      <div className="container mx-auto px-6">
        <p className="text-center text-base text-muted-foreground mb-10">
          Trusted by your favorite brands
        </p>
        <div className="flex flex-wrap justify-around items-center gap-y-8 px-0 sm:px-10">
          {brandLogos.map((logo) => (
            <div key={logo.alt} className="px-4">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-200 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;