import Image from 'next/image';
import { Bot, Play } from 'lucide-react';

const AiTaxFiling = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-display text-foreground leading-tight">
            India's First Agentic AI Tax Filing
          </h2>
          <p className="mt-4 text-lg text-foreground">
            Just chat, file, and get your maximum refund – guaranteed.
          </p>
        </div>

        <div className="mt-12 relative">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/images/1755784846_aivideothumbnail_website1min-2.webp?"
            alt="ClearTax AI chat interface on a smartphone for tax filing."
            width={1152}
            height={556}
            className="rounded-2xl mx-auto shadow-lg"
          />

          <div className="absolute top-1/2 -translate-y-1/2 right-[8%] xl:right-[12%] hidden md:block text-left">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-100/70 shrink-0">
                <Bot className="w-10 h-10 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Introducing</p>
                <p className="text-3xl font-bold text-foreground">cleartax AI</p>
              </div>
            </div>

            <a href="#" className="mt-6 group inline-flex items-center justify-center gap-3 rounded-full bg-gray-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-gray-800">
              See it in action
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <Play className="h-4 w-4 fill-black text-black ml-0.5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTaxFiling;