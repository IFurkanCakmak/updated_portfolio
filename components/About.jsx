import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 items-center py-16 backdrop-blur-lg bg-black/90"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 mt-40">
        <div className="col-span-2">
          <p className="text-2xl text-teal-400 tracking-widest">About</p>
          <p className="py-2 text-4xl">Who I am</p>
          <p className="py-1 text-gray-400">
            I am developer with engineering principles
          </p>
          <p className="py-2">
            I am about graduate from Duzce University Computer Engineering
            department and now i specialize in building mobile responsive front-end UI
            applications that connect with APIs and other backend technologies.
            I am passionate about learning new technologies and understand there
            is more than one way to accomplish a task. Though I am most
            proficient in building front-end applications using HTML, CSS,
            Javascript, and React and its frameworks such as Next.js, I am a
            really fast learner and can pick up new tech stacks as needed. I
            believe that being a great developer is not using one specific
            language, but choosing the best tool for the job.
          </p>
          <p className="py-2 mb-6">
            Besides, i am not the one who thinks it is a good idea to stuck at
            just one spesific technology to build something. There is million
            way to create a complete application which makes life easier for the
            people and they get ton of updates day by day and that means we can
            talk about a great competition to be the most useful and the best
            way for building something which is why, i am trying to follow each
            technology to achieve the particular level on what i do and what i
            will can.
          </p>
        </div>
        <div className="w-full bg-black h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/about-photo.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
