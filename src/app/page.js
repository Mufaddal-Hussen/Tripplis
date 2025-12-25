
import { TopHeader } from "@/components/TopHeader.jsx";
import Header from "@/components/Header.jsx";
import Hero from "@/components/Homepage/Hero";
import Discover from "@/components/Homepage/Discover";
import OurServices from "@/components/Homepage/OurServices";
import TrustedBy from "@/components/Homepage/TrustedBy";
import DealingCountries from "@/components/Homepage/DealingCountries";
import Testimonial from "@/components/Homepage/Testimonial";
import Blogs from "@/components/Homepage/Blogs";


export default function Home() {
  return (
    <>
      <TopHeader/>
      <Header/>
      <Hero/>
      <Discover/>
      <OurServices/>
      <TrustedBy/>
      <DealingCountries/>
      <Testimonial/>
      <Blogs/>
    </>
  );
}