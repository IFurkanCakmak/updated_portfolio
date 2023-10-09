import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaBlog, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="main"
      className="w-full h-screen text-center bg-gradient-to-r from-black to-teal-900"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 mt-40">
            EAT <span className="text-teal-400">BUILD</span> SLEEP
          </p>
          <h1 className="py-4 sm:text-md text-white font-semibold">
            Welcome to platform that I introduce myself and share my knowledge
          </h1>
          <h2 className="py-2 text-white text-xl font-semibold">
            Izzet Furkan <span className="text-teal-200">Cakmak</span>
          </h2>
          <div className="flex items-center justify-between max-w-[250px] m-auto py-4 lg:max-w-[300px] mb-40">
            <a
              href="https://www.linkedin.com/in/izzet-furkan-%C3%A7akmak-294037200/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="rounded-full bg-black shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="mailto:furkan.cakmak@yandex.com">
              <div className="rounded-full bg-black shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://github.com/IFurkanCakmak"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="rounded-full bg-black shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            <a
              href="https://izzetfurkancakmak.xyz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="rounded-full bg-black shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaBlog />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* bg-back bg-no-repeat bg-cover bg-center bg-fixed => old bg in global.css for video background */

export default Main;
