import React from "react";
import Image from "next/image";
import Reactjs from "/public/stack/reactpng.png";
import Nextjs from "/public/stack/nextjs.png";
import Javascript from "/public/stack/javascript.png";
import nodejs from "/public/stack/nodejs.png";
import Mongodb from "/public/stack/mongodb.png";
import { motion } from "framer-motion";

const Stack = () => {
  return (
    <div id="stack" className="w-full md:h-screen p-2 items-center py-16 backdrop-blur-lg bg-black/90">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 mt-20 gap-8">
        <div className="col-span-2">
          <p className="text-2xl text-teal-400 tracking-widest">About</p>
          <p className="py-2 text-4xl">Who I am</p>
          <p className="py-1 text-gray-400">
            I am developer with engineering principles
          </p>
          <p className="py-2">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="py-2 mb-6">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
        </div>
        <div>
          <div className="w-right">
          <motion.div
          initial={{ rotate: 15 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
            <div className="w-secCircle">
              <Image src={Reactjs} alt="" />
            </div>
            <div className="w-secCircle">
              <Image className="rounded-lg" src={Nextjs} alt="" />
            </div>
            <div className="w-secCircle">
              <Image src={Javascript} alt="" />
            </div>{" "}
            <div className="w-secCircle">
              <Image src={nodejs} alt="" />
            </div>
            <div className="w-secCircle">
              <Image src={Mongodb} alt="" />
            </div>
            </motion.div>
            {/* background Circles */}
            <div className="w-backCircle tealCircle"></div>
            <div className="w-backCircle greenCircle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
