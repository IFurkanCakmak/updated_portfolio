import React from "react";
import Head from "next/head";
import Main from "@/components/Main";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Izzet Furkan Cakmak - Personal Portfolio</title>
        <link rel="icon" href="/canonical.png" />
      </Head>
      <Main />
      <About />
      <Stack />
      <Projects />
      <Skills />
      <Contact />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Home;
