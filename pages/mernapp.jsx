import React from "react";
import Image from "next/image";
import mernappImg from "../public/projects/mernapp.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Head from "next/head";

const mernapp = () => {
  return (
    <div className="w-full lg:h-screen md:h-screen bg-black/90 backdrop-blur-lg">
      <Head>
        <title>Projects - Content Producer App</title>
        <link rel="icon" href="/canonical.png" />
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mernappImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <p className="py-2 text-2xl lg:text-5xl font-semibold">
            {" "}
            Content Producer App
          </p>
          <p className="text-lg lg:text-2xl">React / MongoDB / CSS</p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl lg:text-2xl text-teal-400 tracking-widest'">
            PROJECT
          </p>
          <p className="py-2 mb-1 text-xl lg:text-4xl">Overview</p>
          <p>
            This app was built for the best practices a MERN app methods using
            Context API for state management and Axios for fetching data from an
            API.
          </p>
          <button className="px-8 py-2 mt-5 shadow-sm mr-6">Live</button>
          <a
            href="https://github.com/IFurkanCakmak/mern-best-practices"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="px-8 py-2 mt-5 shadow-sm">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-800 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center font-semibold">
                <RiRadioButtonFill className="mt-1 pr-1 text-teal-600" />
                React
              </p>
              <p className="py-2 flex items-center font-semibold">
                <RiRadioButtonFill className="mt-1 pr-1 text-teal-600" />
                MongoDB
              </p>
              <p className="py-2 flex items-center font-semibold">
                <RiRadioButtonFill className="mt-1 pr-1 text-teal-600" />
                Axios
              </p>
              <p className="py-2 flex items-center font-semibold">
                <RiRadioButtonFill className="mt-1 pr-1 text-teal-600" />
                ContextAPI
              </p>
              <p className="py-2 flex items-center font-semibold">
                <RiRadioButtonFill className="mt-1 pr-1 text-teal-600" />
                Node.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mernapp;
