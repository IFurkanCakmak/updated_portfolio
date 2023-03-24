import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <div className=" bg-black/90 backdrop-blur-lg h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width="200"
                height="100"
                className="cursor-pointer pb-6 -ml-6"
              />
            </Link>
            <div className="flex gap-6 pb-5">
              <p className="text-md lg:text-lg -mt-2">Based in Istanbul , Turkey</p>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-teal-500 font-bold text-2xl pb-4">Education</p>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Math
            </li>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Algorithm
            </li>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Data Science
            </li>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Security
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-teal-500 font-bold text-2xl pb-4">Development</p>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Web
            </li>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Machine Learning
            </li>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Software
            </li>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Hardware
            </li>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Design
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-teal-500 font-bold text-2xl pb-4">Engineering</p>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Analyze
            </li>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Perceptible Information
            </li>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Flexibility
            </li>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Process
            </li>
            <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
              Availability
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center py-12 bg-black/80 backdrop-blur-lg -mt-4">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-600 cursor-pointer hover:scale-110 ease-in-duration-300">
            <HiOutlineChevronDoubleUp className="text-teal-600" size={40} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Footer;

/* TODO add footer links pages */
