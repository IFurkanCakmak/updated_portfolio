import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h:screen p-2 backdrop-blur-lg bg-black/90">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className='text-2xl text-teal-400 tracking-widest'>Skills</p>
        <p className="py-4 text-md lg:text-4xl">These are other techs i can manage to contribute at a certain level</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
          <div className="p-6 mt-5 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                className="mt-8" 
                src="/skills/sanity.svg" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center mt-6">
                <p>Sanity.io</p>
              </div>
            </div>
          </div>
           
          <div className="p-6 mt-5 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/skills/graphql.svg" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Graphql</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                className="mt-4" 
                src="/skills/scss.svg" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center mt-5">
                <p>SASS/SCSS</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/skills/thirdweb.webp" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Thirdweb</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                className="rounded-full shadow-md shadow-gray-600" 
                src="/skills/vercel.webp" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Vercel</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/skills/redux.svg" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Redux</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/skills/styledcomponents.png" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Styled components</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image 
                src="/skills/postman.svg" 
                width={64} 
                height={64} 
                alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p>Postman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
