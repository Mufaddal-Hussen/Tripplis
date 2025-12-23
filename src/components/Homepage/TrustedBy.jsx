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
    <section className="h-max py-10 bg-white overflow-hidden">
      <h3 className="text-center text-gray-600 text-lg mb-10">Trusted By</h3>

      <div className="relative w-full">
        <div className="flex items-center space-x-16 animate-scroll">
         
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Company logo ${index + 1}`}
              className="h-15 opacity-60 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustedBy