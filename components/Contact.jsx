import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import Link from "next/link";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { useRef } from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef=useRef()
  const handleSubmit= (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_nvgp9cc', 'template_0aenf0i', formRef.current, 'tdb-c_eJv6rtKCqn4')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div id="contact" className="w-full backdrop-blur-md bg-black/80">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-2xl text-teal-400 tracking-widest mt-14">Contact</p>
        <p className="py-2 text-3xl lg:text-4xl">Get in touch with me</p>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* leftside */}
          <div className="col-span-3 lg:col-span-2 w-full shadow-lg shadow-gray-800 rounded-xl p-4 mt-5">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/contact.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <p className="py-6 text-2xl font-semibold">
                  İzzet Furkan <span className="text-teal-200">Çakmak</span>
                </p>
                <p className="text-lg underline underline-offset-8">
                  Computer Engineer
                </p>
                <p className="py-4">
                  I am currently working on these web technologies told above
                  and got particular expertise level on them.Beside that, have
                  basic knowledge some of the the popular backend technologies
                  such as C# and Python. I am available for working with any of
                  them.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaBlog />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* rightside */}
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-800 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                      name="user_name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                      name="user_phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="email"
                      name="user_email"
                    />
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                      name="user_subject"
                    />
                </div>
                <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea className="border-2 rounded-lg p-3 border-gray-300 text-black" rows="10" name="message"></textarea>
                </div>
                <button className="w-full p-4 mt-4 text-gray-100 shadow-lg">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link href="/">
                <div className="rounded-full shadow-lg shadow-gray-600 cursor-pointer hover:scale-110 ease-in-duration-300">
                    <HiOutlineChevronDoubleUp className="text-teal-600" size={40}/>
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;


/* TODO  ADD REACT TOASTIFY AFTER SEND CONTACT MESSAGE*/