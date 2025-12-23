import React from "react";
import Link from "next/link";
import Image from "next/image";

import footerBg from "../../public/images/footer/footerImg2.jpg";
import logo from "../../public/images/footer/tripplisLogo.png";


import facebook from "../../public/images/footer/facebook.png";
import instagram from "../../public/images/footer/instagram.png";
import telegram from "../../public/images/footer/telegram.png";
import whatsapp from "../../public/images/footer/whatsapp.png";

function Footer() {
  return (
    <footer className="relative text-white rounded-t-4xl overflow-hidden">
      {/*  Background Image Section */}
      
      <div className="relative h-112.5 md:h-125 flex flex-col items-center justify-center text-center px-4">
        {/* Background Image */}
        <Image
          src={footerBg}
          alt="Footer Background"
          fill 
          className="object-cover object-center"
          priority
        />

        {/* Gradient Fade.. */}
        <div className="absolute inset-0 bg-linear-to-t from-[#2b9e91]/95 via-[#2b9e91]/60 to-transparent"></div>

        {/* main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold">
            Travel smarter with <span className="text-white">Tripplis.</span>
          </h2>
          <p className="text-white/90 max-w-2xl text-sm md:text-base">
            Join our community of travelers and receive handpicked packages,
            discounts, and inspiration every week.
          </p>
          <Link href="#">
            <button className="btn bg-white text-black rounded-full px-10 py-3 border-none hover:bg-gray-100 transition ">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/*  Footer Links Section */}
      <div className="bg-[#2b9e91] py-12 px-6 md:px-20 
  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm
  text-center md:text-left place-items-center md:place-items-start">
    
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src={logo} alt="Tripplis Logo" width={140} height={60} />
          </div>
          <p className="text-white/80 mb-6 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            dolor lorem.
          </p>

          <div className="flex items-center gap-4 ">
            <Link href="#" target="_blank" >
              <Image
                src={telegram}
                alt="Telegram"
                width={30}
                height={30}
                className="hover:opacity-80 transition"
              />
            </Link>

            <Link href="#" target="_blank">
              <Image
                src={instagram}
                alt="Instagram"
                width={30}
                height={30}
                className="hover:opacity-80 transition"
              />
            </Link>

            <Link href="#" target="_blank">
              <Image
                src={whatsapp}
                alt="WhatsApp"
                width={30}
                height={30}
                className="hover:opacity-80 transition"
              />
            </Link>

            <Link href="#" target="_blank">
              <Image
                src={facebook}
                alt="Facebook"
                width={30}
                height={30}
                className="hover:opacity-80 transition"
              />
            </Link>

          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg text-[#FFFFFF99]">Company</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link href="#" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Countries
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 text-lg text-[#FFFFFF99]">Services</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link href="/services/visa" className="hover:text-white transition">
                VISA
              </Link>
            </li>
            <li>
              <Link href="/services/meals" className="hover:text-white transition">
                Meals
              </Link>
            </li>
            <li>
              <Link href="/services/insurance" className="hover:text-white transition">
                Insurance
              </Link>
            </li>
            <li>
              <Link href="/services/attractions" className="hover:text-white transition">
                Attraction Tickets
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className=" font-semibold mb-4 text-lg text-[#FFFFFF99]">Contact No.</h3>
          <ul className="space-y-2 text-white">
            <li>+91 00000 00000</li>
            <li>
              <Link
                href="mailto:info@tripplis.com"
                className="hover:text-white transition"
              >
                info@tripplis.com
              </Link>
            </li>
            <li>Mumbai , India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2b9e91] border-t border-white/20 py-4 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between text-white/80 text-xs text-center md:text-left">
        <p className="text-white">All rights reserved © 2025</p>
        <div className="flex items-center justify-center gap-6 mt-2 md:mt-0">
          <Link href="#" className="text-white transition">
            Privacy Policy
          </Link>
          <Link href="#" className="text-white transition">
            Terms and Condition
          </Link>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
