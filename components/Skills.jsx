import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h:screen p-2 backdrop-blur-md bg-black/80">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className='text-2xl text-teal-400 tracking-widest'>Skills</p>
        <p className="py-2 text-4xl">What I can do</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
          <div className="p-6 mt-5 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/javascript.png" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Javascript</p>
              </div>
            </div>
          </div>
           
          <div className="p-6 mt-5 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/javascript.png" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Javascript</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/javascript.png" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Javascript</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/javascript.png" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Javascript</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/javascript.png" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Javascript</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/javascript.png" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Javascript</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/javascript.png" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Javascript</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/javascript.png" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Javascript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
