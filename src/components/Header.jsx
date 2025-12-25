import React from 'react'
import Link from 'next/link'
import Image from 'next/image' 
import tripplisLogo from '../../public/images/header/tripplisLogo.png'
import arrow from '../../public/images/header/arrow.png'

function Header() {
  return (
    <div className="drawer">
      <input id="mobile-menu" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content">
        {/* Navbar */}
        <div className="bg-base-100 px-4 sm:px-6 py-4">
          <div className="container mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between">
              {/* Logo */}
              <div>
                <Link href="/">
                  <Image src={tripplisLogo} alt="Tripplis Logo" width={120} height={40} />
                </Link>
              </div>

              {/* Navigation Menu */}
              <div>
                <ul className="menu menu-horizontal px-1 gap-2">
                  <li>
                    <Link href='#' className=' hover:text-[#00BFA6] active:bg-transparent'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-[#00BFA6] active:bg-transparent' >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-[#00BFA6] active:bg-transparent'>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-[#00BFA6] active:bg-transparent'>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href='#' className='hover:text-[#00BFA6] active:bg-transparent'>
                      Countries
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Book Now Button */}
              <div>
                <button className="btn bg-[#F7F6F9] border rounded-full hover:bg-gray-100 px-3 py-5 flex items-center gap-2 normal-case">
                  <span className="text-base font-medium text-black">Book Now</span>
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                    <Image src={arrow} alt="Arrow Right" width={10} height={10} />
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex lg:hidden items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <Image src={tripplisLogo} alt="Tripplis Logo" width={100} height={33} />
              </Link>

              {/* Mobile Menu Button */}
              <label htmlFor="mobile-menu" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className="drawer-side z-50">
        <label htmlFor="mobile-menu" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
          {/* Close button */}
          <li className="mb-4">
            <label htmlFor="mobile-menu" className="btn btn-ghost btn-circle ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
          </li>
          
          {/* Mobile Menu Items */}
          <li>
            <Link href='#' className= ' hover:text-[#00BFA6] active:bg-transparent text-lg py-3'>
              Home
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:text-[#00BFA6] active:bg-transparent  text-lg py-3'>
              About us
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:text-[#00BFA6] active:bg-transparent  text-lg py-3'>
              Services
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:text-[#00BFA6] active:bg-transparent  text-lg py-3'>
              Blog
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:text-[#00BFA6] active:bg-transparent  text-lg py-3'>
              Countries
            </Link>
          </li>
          
          {/* Mobile Book Now Button */}
          <li className="mt-4">
            <button className="btn bg-[#F7F6F9] border rounded-full hover:bg-gray-100 w-full justify-between normal-case">
              <span className="text-base font-medium text-black">Book Now</span>
              <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                <Image src={arrow} alt="Arrow Right" width={10} height={10} />
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header