import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
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
              width="150"
              height="75"
              className="cursor-pointer pb-6"
            />
          </Link>
          <div className="flex gap-6 pb-5">
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-800" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
          </div>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-teal-500 font-bold text-2xl pb-4">Product</p>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Stocks
          </li>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Futures & Options
          </li>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Mutual Funds
          </li>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Fixed deposits
          </li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-teal-500 font-bold text-2xl pb-4">Company</p>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            About
          </li>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Products
          </li>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Pricing
          </li>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Careers
          </li>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Press & Media
          </li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className="text-teal-500 font-bold text-2xl pb-4">Support</p>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Contact
          </li>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Support Portals
          </li>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            List Of Charges
          </li>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Downloads & Resources
          </li>
          <li className="text-gray-200 text-md pb-2 font-semibold hover:text-teal-600 cursor-pointer">
            Videos
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
