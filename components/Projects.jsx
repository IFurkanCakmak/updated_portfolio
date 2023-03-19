import React from "react";
import estateImg from "../public/projects/realestate.jpg";
import mernappImg from "../public/projects/mernapp.jpg"
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-12 backdrop-blur-lg bg-black/90">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-2xl text-teal-400 tracking-widest'">Projects</p>
        <p className="py-2 text-3xl lg:text-4xl">What I have built to learn</p>
        <div className="grid md:grid-cols-2 gap-8">
         <SingleProject 
         title='Real Estate Searcher'
         backgroundImg={estateImg}
         projectUrl='/estate'
         description='Next JS'
         />
         <SingleProject 
         title='Content Producer App'
         backgroundImg={mernappImg}
         projectUrl='/mernapp'
         description='React'
         />
        </div>
        </div>
      </div>
    
  );
};

export default Projects;
