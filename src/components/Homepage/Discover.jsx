import React from 'react'
import beforeJoinImg from '../../../public/images/discover/beforeJoining.png'
import afterJoining from '../../../public/images/discover/afterJoining.png'
import Image from 'next/image'


function Discover() {
  return (
    <section className='h-screen flex items-center'>
        <div className="flex flex-col md:flex-row items-center justify-between container mx-auto py-12 px-4 sm:px-6 lg:px-8 gap-8">

           <div>
            <Image src={beforeJoinImg} alt="Discover Image" width={450} height={400} className="w-full max-w-sm md:max-w-md object-contain"/>
           </div>
         
       <div className='text-center'>
         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
             Discover the <span className="hidden md:block"  /> world with us.
         </h2>
         
           <p className="text-gray-600 max-w-2xl mb-4">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dolor lorem. 
             Aenean blandit est a mattis lobortis. Vivamus mauris elit, facilisis et nisi nec, 
             ultricies facilisis massa. Aliquam sed.
           </p>
         
           <p className="text-gray-600 max-w-2xl mb-8 ">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dolor lorem. 
             Aenean blandit est a mattis lobortis. Vivamus mauris elit.
           </p>
         
           {/* bottom button */}
           <button className="btn bg-white border border-gray-300 text-gray-800 rounded-full px-6 py-3 hover:bg-gray-100">
             Read More about us
           </button>
        </div>

           <div>
            <Image src={afterJoining} alt="Discover Image" width={450} height={400} className="w-full max-w-sm md:max-w-md object-contain"/>
           </div>

         </div> 
    </section>
  )
}

export default Discover