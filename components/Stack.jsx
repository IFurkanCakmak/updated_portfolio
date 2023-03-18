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
    <div
      id="stack"
      className="w-full md:h-screen p-2 items-center py-16 backdrop-blur-lg bg-black/90"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 mt-20 gap-8">
        <div className="col-span-2">
          <p className="text-2xl text-teal-400 tracking-widest">Techstack</p>
          <p className="py-2 text-4xl">What I do</p>
          <p className="py-1 text-gray-400">Favourite workspace</p>
          <p className="py-2">
            Throughout my bachelor education, i have learnt so many technologies
            and worked in varius fields such as backend, fronted and web
            development, designing, data structures, algorithms, network
            security, computer networks and the other software and hardware
            technologies. About all of these i can say i have basic knowledge on
            each one of them but of course in some i have gone further and got
            myself in more complicated situations. Here they are.
          </p>
          <p className="py-2 mb-6">
            I improve myself on building and development of fullstack web
            applications by using Next, React, Node and Javascript. Working best
            practices which are very important topics and methods like fetch
            data from an API, creating an API, CRUD operations, state
            management, database connection, Git, hooks, SSR and etc. This is my
            favourite techstack when building a fullstack web application.
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
