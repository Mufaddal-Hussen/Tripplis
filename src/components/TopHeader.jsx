import React from "react";
import Image from "next/image";
import phone from "../../public/images/header/phone.png";
import email from "../../public/images/header/email.png";
import Link from "next/link";

export const TopHeader = () => {
  return (
    <div className="bg-[#E8F8F6] py-2 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          {/* Left side - Contact Info */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 items-center">
            
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Image src={phone} alt="Phone Icon" height={16} width={16} className="opacity-70"/>
              <span className="text-xs sm:text-sm">+91 00000 00000</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Image src={email} alt="Email Icon" height={16} width={16} className="opacity-70"/>
              <span className="text-xs sm:text-sm">info@tripplis.com</span>
            </div>

          </div>

          {/* Right side - Login */}
          <div className="">
            <Link href="#" className="">
             <button className="btn btn-ghost rounded-full">Login as Agent</button>
            </Link>
          </div>

          
        </div>
      </div>
    </div>
  );
};
