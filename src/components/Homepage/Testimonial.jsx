import React from "react";
import Image from "next/image";
import customer from "../../../public/images/testimonial/customer1.jpg"; 
import leftDesign from "../../../public/images/testimonial/leftDesign.png"; 
import rightDesign from "../../../public/images/testimonial/rightDesign.png"; 


function Testimonial() {
  const testimonials = [
    {
      name: "Deep G.",
      location: "Gujarat, India",
      image: customer,
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dolor lorem. Aenean blandit est a mattis lobortis.",
      date: "Jul 12, 2025",
    },
    {
      name: "Deep G.",
      location: "Gujarat, India",
      image: customer,
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dolor lorem. Aenean blandit est a mattis lobortis.",
      date: "Jul 12, 2025",
    },
    {
      name: "Deep G.",
      location: "Gujarat, India",
      image: customer,
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dolor lorem. Aenean blandit est a mattis lobortis.",
      date: "Jul 12, 2025",
    },
    {
      name: "Deep G.",
      location: "Gujarat, India",
      image: customer,
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dolor lorem. Aenean blandit est a mattis lobortis.",
      date: "Jul 12, 2025",
    },
  ];

  return (
    <section className="bg-[#E8F8F6] py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">

        {/* Left side */}
        <div className="lg:w-1/3 text-center lg:text-left ">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <br /> Clients Say
          </h2>

        <div className="flex ">

          <div>
            <Image
              src={leftDesign}
              alt="Quote Icon"
              width={50}
              height={50}
              className="mb-4"
            />
          </div>

          <div className="flex flex-col items-center ">
            {/* DaisyUI Rating */}
            <div className="rating rating-md mb-3">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  // name="rating"
                   name={`rating-${i}`}
                  className="mask mask-star-2 bg-yellow-400 "
                  checked={i === 4}
                  readOnly
                />
              ))}
            </div>

            <h3 className="text-3xl font-bold text-gray-900">4.98 Rate</h3>
            <p className="text-gray-500 text-sm">by 1,24,000+ Reviews</p>
          </div>
          
          <div>
            <Image
              src={rightDesign}
              alt="Quote Icon"
              width={50}
              height={50}
              className="mb-4"/>
          </div>
        </div>

      </div>

        {/* Right side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md shadow-[#39B9AC] transition-all   ">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center  gap-3">

              <div className="avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className=""/>
                   </div>
                 </div>

                  
                  <div>         
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.location}</p>
                  </div>
                </div>

          <div className="text-md flex items-center text-[#616161] font-semibold gap-1">
            {t.rating.toFixed(1)}                  

              <div className="rating rating-md ">         
            
                <input
                  name={`rating-${i}`} 
                  type="radio"
                  // name="rating"
                  className="mask mask-star-2 bg-yellow-400 w-4 h-4 flex  "
                  checked
                  readOnly/>
                </div>
             </div>   

              </div>

              <p className="text-gray-600 mb-4 text-sm">{t.text}</p>
              <p className="text-gray-400 text-xs">{t.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
