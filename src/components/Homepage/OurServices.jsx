import React from 'react'

import Image from 'next/image'
import visaImg from '../../../public/images/ourService/visa.jpg'
import preBooking from '../../../public/images/ourService/preBooking.jpg'
import flight from '../../../public/images/ourService/flight.png'
import arrow from '../../../public/images/ourService/arrow.png'
import Link from 'next/link'

function OurServices() {
  return (
    <section className='h-fit bg-[#E8F8F6] '>
         <div className='py-12'>
            <h1 className="text-4xl font-bold text-center ">Our Services</h1>
         </div>

         <div className="container mx-auto px-6 py-12 space-y-6">
  {/* Service Card 1 */}
  <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-xl p-6 shadow-sm">
    {/* Left Content */}
    <div className="flex-1 md:pr-8 text-left">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
          <span className="text-xl">
            <Image src={flight} alt="Visa Icon" width={24} height={24} />
          </span>
        </div>
      </div>

    <h2 className="text-xl font-semibold text-gray-900">Visa Application</h2>
      <p className="text-gray-600 my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, purus vel sollicitudin tempor,
        ligula nulla tincidunt felis, sagittis venenatis eros orci condimentum arcu.
      </p>

      <Link href="#" className="link text-md font-semibold text-gray-900 hover:text-teal-600 inline-flex items-center">
        Know More
        <Image src={arrow} alt="Arrow Icon" width={11} height={11} className="ml-2"/>
      </Link>
    </div>

    {/* Right Image */} 
    <div className="mt-6 md:mt-0">
      <Image src={visaImg} alt="Visa Application" width={350} height={300} className="rounded-lg object-cover" />
    </div>
  </div>                                                                                                                                            

  {/* Service Card 2 */}
  <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-xl p-6 shadow-sm">
    {/* Left Content */}
    <div className="flex-1 md:pr-8 text-left">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
          <span className="text-xl">
            <Image src={flight} alt="Meals Pre-Booking Icon" width={24} height={24} />
          </span>
        </div>
      </div>

        <h2 className="text-xl font-semibold text-gray-900">Meals Pre-Booking</h2>
      <p className="text-gray-600 my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, purus vel sollicitudin tempor,
        ligula nulla tincidunt felis, sagittis venenatis eros orci condimentum arcu.
      </p>

      <Link href="#" className="link text-md font-semibold text-gray-900 hover:text-teal-600 inline-flex items-center">
        Know More
        <Image src={arrow} alt="Arrow Icon" width={11} height={11} className="ml-2"/>
      </Link>
    </div>

    {/* Right Image */}
    <div className="mt-6 md:mt-0">
      <Image src={preBooking} alt="Meals Pre-Booking" className="w-[300px] md:w-[350px] rounded-lg object-cover" />
    </div>
  </div>
</div>

    </section>
  )
}

export default OurServices