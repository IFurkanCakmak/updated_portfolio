import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full lg:h:screen p-2 backdrop-blur-lg bg-black/90"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-2xl text-teal-400 tracking-widest px-8 sm:p-0 md:p-0 lg:p-0 xl:p-0">
          Skills
        </p>
        <p className="sm:py-4 md:py-4 lg:py-4 xl:py-4 py-2 px-8 sm:p-0 md:p-0 lg:p-0 xl:p-0 text-lg lg:text-4xl">
          These are other techs i can manage to contribute at a certain level
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 mt-5 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="mt-8"
                  src="/skills/api.png"
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center mt-6">
                <p>REST API</p>
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
                  alt=""
                />
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
                  alt=""
                />
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
                  className="md:mt-4 lg:mt-4"
                  src="/skills/tailwind.png"
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center lg:mt-2">
                <p>Tailwind</p>
              </div>
            </div>
          </div>
          <div className="p-6 mt-3 bg-black shadow-lg shadow-gray-800 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src="/skills/redux.svg" width={64} height={64} alt="" />
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
                  src="/skills/postman.svg"
                  width={64}
                  height={64}
                  alt=""
                />
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
