import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }
  

  const [nav, setNav] =useState(false)
  const handleNav =() =>{
    setNav(!nav)

  }

  return (
    <div className={isScrolled ? "fixed w-full h-20 bg-black shadow-lg shadow-gray-800 z-[100]" : " navbar scrolled"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/logo.png" href="/" alt="logo" width="150" height="75" className="cursor-pointer"/>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-md hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-md hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-md hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-md hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-md hover:border-b">Home</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>

      {/* sidebar */}   
    <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white/10" :''}>
    <div className=
    {nav ? "fixed left-0 top-0 w-[75%] md:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500"
    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
    <div>
      <div className="flex w-full items-center justify-between">
      <Image src="/logo.png" href="/" alt="logo" width="150" height="60" className="cursor-pointer -ml-6"/>
      <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer -mr-6">
        <AiOutlineClose/>
      </div>
      </div>
      <div className="border-b border-gray-700 my-6 -ml-1">
        <p className="w-[85%] py-3">Izzet Furkan Cakmak</p>
      </div>
    </div>
    <div className="py-2 flex flex-col">
      <ul className="mt-1">
        <Link href="/">
          <li className="py-2 text-md my-4">Home</li>
        </Link>
        <Link href="/">
          <li className="py-2 text-md my-4">Home</li>
        </Link>
        <Link href="/">
          <li className="py-2 text-md my-4">Home</li>
        </Link>
        <Link href="/">
          <li className="py-2 text-md my-4">Home</li>
        </Link>
        <Link href="/">
          <li className="py-2 text-md my-4">Home</li>
        </Link>
        <Link href="/">
          <li className="py-2 text-md">Home</li>
        </Link>
      </ul>
      <div className="pt-28 -ml-1">
      <p className="uppercase tracking-widest text-teal-600 font-semibold">CONNECT BY</p>
      <div className="flex items-center justify-between -ml-2 my-4 w-full sm:w-[80%]">
      <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <FaLinkedinIn/>
      </div>
      <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <FaGithub/>
      </div>
      <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <AiOutlineMail/>
      </div>
      <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <BsFillPersonLinesFill/>
      </div>
      
      </div>
      </div>
    </div>
    </div>

    </div>
    </div>
    
  );
};

export default Navbar;
