import React, { useState, Fragment, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaBlog, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import { Menu, Transition } from '@headlessui/react';




const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  

  const [nav, setNav] = useState(false);
  const handleNav =() =>{
    setNav(!nav)

  };

 

  return (
    <div className={isScrolled ? "navbar scrolled" : "fixed w-full h-20 bg-transparent z-[100]"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
        <Image src="/logo.png"  alt="logo" width="150" height="75" className="cursor-pointer"/>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-md font-semibold hover:border-b hover:text-teal-200">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-md font-semibold hover:border-b hover:text-teal-200">About</li>
            </Link>
            <Link href="/#stack">
              <li className="ml-10 text-md font-semibold hover:border-b hover:text-teal-200">Stack</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-md font-semibold hover:border-b hover:text-teal-200">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-md font-semibold hover:border-b hover:text-teal-200">
              <Menu as='div' className='relative inline-block text-left'>
              <Menu.Button className="normal-case shadow-none hover:text-teal-200">
              Resources             
                </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Articles
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Repositories
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-md font-semibold hover:border-b hover:text-teal-200">Contact</li>
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
    {nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500"
    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
    <div>
      <div className="flex w-full items-center justify-between">
      <Image src="/logo.png" href="/" alt="logo" width="150" height="60" className="cursor-pointer -ml-6"/>
      <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer -mr-6">
        <AiOutlineClose/>
      </div>
      </div>
      <div className="border-b border-gray-700 my-6 -ml-2">
        <p className="w-[95%] py-3 ml-1">Izzet Furkan Cakmak</p>
      </div>
    </div>
    <div className="py-2 flex flex-col">
      <ul className="-mt-4">
        <Link href="/">
          <li onClick={() => setNav(false)} className="py-2 text-md my-4">Home</li>
        </Link>
        <Link href="/#about">
          <li onClick={() => setNav(false)} className="py-2 text-md my-4">About</li>
        </Link>
        <Link href="/#stack">
          <li onClick={() => setNav(false)} className="py-2 text-md my-4">Stack</li>
        </Link>
        <Link href="/#projects">
          <li onClick={() => setNav(false)} className="py-2 text-md my-4">Projects</li>
        </Link>
        <Link href="/">
          <li className="py-2 text-md my-4">
          <Menu as='div' className='relative inline-block text-left'>
              <Menu.Button className="normal-case shadow-none hover:text-teal-200">
              Resources             
                </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Articles
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Repositories
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu></li>
        </Link>
        <Link href="/#contact">
          <li onClick={() => setNav(false)} className="py-2 text-md">Contact</li>
        </Link>
      </ul>
      <div className="pt-10 -ml-1">
      <p className="uppercase tracking-widest text-teal-600 font-semibold -mt-1">CONNECT BY</p>
      <div className="flex items-center justify-between -ml-2 my-4 w-full sm:w-[80%]">
      <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <FaLinkedinIn/>
      </div>
      <a
                  href='https://github.com/IFurkanCakmak'
                  target='_blank'
                  rel='noreferrer'
                >
      <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <FaGithub/>
      </div>
      </a>
      <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <AiOutlineMail/>
      </div>
      <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <FaBlog/>
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
