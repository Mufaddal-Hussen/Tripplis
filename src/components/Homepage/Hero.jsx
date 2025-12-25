import React from "react";
import heroImg from "../../../public/images/hero/heroSection.jpg";
import USA from "../../../public/images/hero/country.png";
import selectCountry from "../../../public/images/hero/selectCountry.png";
import Image from "next/image";

function Hero() {
  return (
    <div
      className="hero min-h-screen relative"
      style={{ backgroundImage: `url(${heroImg.src})` }}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#39B9AC] to-[#39B9AC00]"></div>

      {/* Hero Content */}
      <div className="hero-content text-neutral-content text-start relative z-10 w-full flex justify-start px-6 sm:px-10 md:px-16 lg:pl-20">
        <div className="text-[#FFFFFF] max-w-md">
          <h1 className=" mb-3 text-4xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Apply for Visa Hustle Free
          </h1>

          <p className="mb-5 text-sm sm:text-base text-white/90">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <div className="divider divider-accent w-40 sm:w-56"></div>

          <h3 className="font-bold text-base sm:text-lg mb-2">
            Countries we are dealing in
          </h3>

          <div className="flex flex-wrap items-center gap-3">
            {/* Country Flags */}
            <ul className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <li key={i}>
                  <Image
                    src={USA}
                    alt="USA"
                    width={35}
                    height={35}
                    className="inline-block"
                  />
                </li>
              ))}
            </ul>

            {/* Select Country Icon */}
            <div>
              <Image
                src={selectCountry}
                alt="Select Country"
                width={100}
                height={100}
                className="inline-block sm:w-[120px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
