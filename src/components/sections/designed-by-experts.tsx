import React from 'react';

const DesignedByExperts = () => {
  return (
    <section className="bg-background py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-text-primary mb-12">
            Designed by experts
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
            <div className="flex-shrink-0">
              <video
                className="w-20 h-20 object-contain"
                autoPlay
                loop
                muted
                playsInline
                aria-label="Animated bot mascot icon"
              >
                <source
                  src="https://assets1.cleartax-cdn.com/cleartax/images/1607343632_experts.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-center md:text-left">
              <p className="text-base md:text-lg text-text-primary leading-relaxed">
                With our solutions, you don’t have to worry about complying with the latest regulations. 60+ in-house tax experts, co-build and test every product feature. Over 60,000 tax experts give us constant feedback which helps us stay on top of every new tax clause.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignedByExperts;