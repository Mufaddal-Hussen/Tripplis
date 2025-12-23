import React from "react";
import Image from "next/image";
import Link from "next/link";

import blog1 from "../../../public/images/blogs/blog1.jpg";
import blog2 from "../../../public/images/blogs/blog2.jpg";
import facebook from "../../../public/images/blogs/facebook.png";
import instagram from "../../../public/images/blogs/instagram.png";
import linkedin from "../../../public/images/blogs/linkedin.png";
import x from "../../../public/images/blogs/x.png";
import arrow from '../../../public/images/ourService/arrow.png'


function Blogs() {
  const blogPosts = [
    {
      img: blog1,
      title: "How We Design International Travel",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dolor lorem.",
      link: "#",
    },
    {
      img: blog2,
      title: "How We Design International Travel",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dolor lorem.",
      link: "#",
    },
  ];

  const socials = [
    { name: "Instagram", icon: instagram , url: '#' },
    { name: "Facebook", icon: facebook , url: '#' },
    { name: "X (Twitter)", icon: x , url: '#' },
    { name: "LinkedIn", icon: linkedin , url: '#' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Recent Blogs
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Blog Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {blogPosts.map((blog, i) => (
              <div
                key={i}
                className="card bg-base-100 border border-gray-200 shadow-sm hover:shadow-md transition rounded-2xl overflow-hidden"
              >
                <figure>
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{blog.desc}</p>
                  <Link
                    href={blog.link}
                    className="link text-sm font-semibold text-black flex items-center gap-1 hover:text-teal-600" >
                    Know More{" "}
                    <span className="text-lg ">
                        <Image src={arrow} alt="arrow" width={11} height={11}  />
                    </span>
                  </Link>
                </div>
              </div>
            ))} 
          </div>

          {/* Right side - Social Links */}
          <div className="bg-[#F9FAFB] rounded-2xl p-6 h-fit">
            <h3 className="text-center text-2xl font-bold mb-5">Follow us on...</h3>
            <div className="flex flex-col gap-3 ">
              {socials.map((s, i) => (
                <Link
                key={i}
                href={s.url}
                // target="_blank"
                rel="noopener noreferrer"
                  className=" flex items-center gap-3 bg-white hover:shadow-md hover:shadow-[#39B9AC] p-3 rounded-xl border border-gray-100 shadow-sm cursor-pointer transition" >
                  <Image
                    src={s.icon}
                    alt={s.name}
                    width={35}
                    height={35}
                    className="rounded-md"
                  />
                  <span className="font-medium">{s.name}</span>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
