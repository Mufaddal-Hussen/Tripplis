import React from 'react'
import Image from 'next/image';
import logo from '../../../public/images/trustedBy/tripplisLogo.png'

function TrustedBy() {
   const logos = [
     logo,
     logo,
     logo,
     logo,
     logo,
  ];

  return (
     <section className="py-10 bg-white overflow-hidden">
      
      <h3 className="text-center text-gray-600 text-lg md:text-xl mb-10 font-semibold">Trusted By</h3>

      {/* Scroll Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white via-white/60 to-transparent z-10 pointer-events-none"></div>

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white via-white/60 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Logos.. */}
        <div className="flex w-max animate-infinite-scroll space-x-16">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 opacity-70 hover:opacity-100 transition duration-300">
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy