import Image from 'next/image';
import Link from 'next/link';

const ReadyToStart = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center text-center lg:text-left">
          <div>
            <h3 className="text-4xl font-extrabold leading-tight my-3">
              Ready to get started?
            </h3>
            <Link
                              href="#"
              className="inline-block mt-8 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Try for free
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/144fc896-0ad2-4e5f-b1f5-7c4919c72a13-cleartax-in/assets/images/1605855097_desktop_fold_readytogetstarted_rhs-18.png?"
            alt="readysection"
            width={588}
            height={348}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;