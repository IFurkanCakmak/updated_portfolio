  import React from 'react';
  import { AiOutlineMail } from 'react-icons/ai';
  import { FaBlog, FaGithub, FaLinkedinIn } from 'react-icons/fa';

  const Main = () => {
    return (
      <div id='main' className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600 mt-40">
              EAT <span className="text-teal-400">BUILD</span> SLEEP
            </p>
            <h1 className='py-4 sm:text-md text-white font-semibold'>
              Welcome to platform that I introduce myself and share my knowledge
            </h1>
            <h2 className='py-2 text-white text-xl font-semibold'>
              Izzet Furkan <span className="text-teal-200">Cakmak</span>
            </h2>
            <div className='flex items-center justify-between max-w-[250px] m-auto py-4 lg:max-w-[300px] mb-40'> 
            <div className='rounded-full bg-black shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaLinkedinIn/>
            </div>
            <div className='rounded-full bg-black shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail/>
            </div>
            <div className='rounded-full bg-black shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaGithub/>
            </div>
            <div className='rounded-full bg-black shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaBlog/>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Main;
