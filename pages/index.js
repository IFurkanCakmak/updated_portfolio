import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Stack from '@/components/Stack'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

const Home = () => {
  return (
    
    <div>
    <Head>
      <title>Izzet Furkan Cakmak - Personal Portfolio</title>
      <link rel="icon" href="/canonical.png" />
    </Head>
    <Navbar/>
    <Main/>
    <About/>
    <Stack/>
    <Skills/>
    <Projects/>
    </div>
    
    
    
   
  )
}

export default Home