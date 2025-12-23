import React from "react";
import Image from "next/image";
import UAE from "../../../public/images/dealingCountries/UAE.png";
import malaysia from "../../../public/images/dealingCountries/malaysia.png";
import singapore from "../../../public/images/dealingCountries/singapore.png";
import logo from "../../../public/images/dealingCountries/logo.png";


function DealingCountries() {
  const countries = [
    { name: "UAE", flag: logo },
    { name: "Malaysia", flag: logo },
    { name: "UAE", flag: logo},
    { name: "Singapore", flag: logo },
    { name: "Malaysia", flag: logo },
  ];

  const stats = [
    { value: "98%", label: "Satisfaction Rate" },
    { value: "1500+", label: "Satisfied Client Reviews" },
    { value: "15+", label: "Years of our Expertise" },
    { value: "800+", label: "Guided Tours Annually" },
  ];

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 px-6 lg:px-20 py-16"  >
      
      {/* Left Side - Countries */}
      <div className="bg-[#39B9AC] text-white rounded-2xl p-8 max-w-fit lg:w-1/2 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Countries <span className="block"> we are dealing in</span>
        </h2>

        <div className=" grid grid-cols-2 sm:grid-cols-3 gap-4 ">
          {countries.map((country, i) => (
            <div
              key={i}
              className="flex items-center bg-white text-black rounded-full px-3 py-2 shadow-sm hover:shadow-md transition">
              <Image
                src={country.flag}
                alt={country.name}
                width={30}
                height={30}
                className="rounded-full mr-2"/>
              <span className="font-medium text-sm">{country.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Stats */}
      <div className="grid grid-cols-2  w-full lg:w-1/2 ">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`bg-white border  border-[#E0E6EE] p-9 text-start hover:shadow-2xl shadow-[#39B9AC]  transition-all duration-300 cursor-pointer
            ${i === 0 ? "rounded-tl-3xl" : ""}
            ${i === 1 ? "rounded-tr-3xl" : ""}
            ${i === 2 ? "rounded-bl-3xl" : ""}
            ${i === 3 ? "rounded-br-3xl" : ""}`}>
            <h3 className="text-4xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default DealingCountries;
