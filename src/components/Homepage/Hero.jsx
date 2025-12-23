import React from 'react'
import heroImg from '../../../public/images/hero/heroSection.jpg'
import USA from '../../../public/images/hero/country.png'
import selectCountry from '../../../public/images/hero/selectCountry.png'
import Image from 'next/image'

function Hero() {
  return (

<div className="hero min-h-screen relative" style={{ backgroundImage: `url(${heroImg.src})` }}>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-linear-to-r from-[#39B9AC] to-[#39B9AC00]"></div>

  {/* Hero Content */}
  <div className="hero-content text-neutral-content text-start relative z-10 w-full flex justify-start pl-20">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Apply for Visa </h1>
      <h1 className="mb-5 text-5xl font-bold">Hustle Free</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <div className="divider divider-accent w-56"></div>
     <h3 className='font-bold'>Countries we are dealing in</h3>

   <div className='flex'>

      <ul className='list my-3 flex flex-row gap-2'>
        <li>
          <Image src={USA} alt='USA' width={35} height={35} className='inline-block mr-2'/>
        </li>

        <li> 
          <Image src={USA} alt='USA' width={35} height={35} className='inline-block mr-2'/>
        </li>

        <li>
           <Image src={USA} alt='USA' width={35} height={35} className='inline-block mr-2'/>
        </li>
        
        <li> 
          <Image src={USA} alt='USA' width={35} height={35} className='inline-block mr-2'/>
        </li>

        <li> 
          <Image src={USA} alt='USA' width={35} height={35} className='inline-block mr-2'/>
        </li>

      </ul>

     <div className=''>
      <Image src={selectCountry} alt='Select Country' width={120} height={120} className='inline-block mr-2 '/>
     </div>
     
   </div>

    </div>
  </div>

</div>


  )
}

export default Hero