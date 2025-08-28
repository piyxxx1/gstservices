import Image from "next/image";

interface StatCardProps {
  value: string;
  valueColor: string;
  plusSignColor: string;
  description: string;
  iconSrc: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, valueColor, plusSignColor, description, iconSrc, className }) => {
  return (
    <div className={`relative bg-white p-6 rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] overflow-hidden ${className}`}>
      <h5 className="text-[32px] font-bold leading-none">
        <span className={valueColor}>{value}</span>
        <span className={plusSignColor}>+</span>
      </h5>
      <p className="mt-1 text-[15px] text-text-secondary font-normal tracking-tight">
        {description}
      </p>
      <Image
        src={iconSrc}
        alt={description}
        width={64}
        height={64}
        className="absolute -bottom-1 -right-1 h-16 w-auto"
      />
    </div>
  );
};

const NumbersStats = () => {
  const statsData: StatCardProps[] = [
    {
      value: "250M",
      valueColor: "text-primary",
      plusSignColor: "text-success-green",
      description: "invoices uploaded",
      iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605873305_invoiceuploaded-8.svg?",
    },
    {
      value: "6M",
      valueColor: "text-success-green",
      plusSignColor: "text-primary",
      description: "Businesses visible",
      iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605873294_businessvisible-9.svg?",
    },
    {
      value: "$300B",
      valueColor: "text-success-green",
      plusSignColor: "text-pink-accent",
      description: "trade value filled",
      iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605873451_tradevaluefilled-10.svg?",
    },
    {
      value: "35,000",
      valueColor: "text-primary",
      plusSignColor: "text-pink-accent",
      description: "retail investors",
      iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605873368_retailinvestor-11.svg?",
    },
    {
      value: "6M",
      valueColor: "text-orange-accent",
      plusSignColor: "text-pink-accent",
      description: "tax returns filed",
      iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/svgs/1605873415_taxreturnfilled-12.svg?",
    },
  ];

  return (
    <section className="bg-light-gray py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[40px] font-extrabold text-text-primary leading-tight">
              Numbers <br />
              don’t lie!
            </h2>
            <p className="mt-4 text-base text-text-primary leading-[1.6] max-w-md">
              Products that perform seamlessly during any kind of surge, so you don’t have to worry about uptime and reliability. Ingest and process any amount of data any time of the month, smoothly.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-6 w-full md:w-1/2">
              <StatCard {...statsData[0]} />
              <StatCard {...statsData[1]} />
              <StatCard {...statsData[2]} />
            </div>
            <div className="flex flex-col gap-6 w-full md:w-1/2 md:mt-20">
              <StatCard {...statsData[3]} />
              <StatCard {...statsData[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersStats;