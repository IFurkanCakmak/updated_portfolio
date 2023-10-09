import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ title, backgroundImg, projectUrl, description }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full mt-5 shadow-lg shadow-gray-800 rounded-xl p-4 group hover:bg-gradient-to-r from-teal-400 to-teal-600  ">
      <Image
        className="rounded-xl group-hover:opacity-20"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <p className="text-2xl text-center font-bold text-white tracking-wider">
          {title}
        </p>
        <p className="pb-4 pt-2 text-lg font-semibold text-center text-white">
          {description}
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-600 font-bold text-lg cursor-pointer">
            See Project
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SingleProject;
