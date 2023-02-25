import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'


const Home = () => {
  return (
    
    <div>
    <Head>
      <title>Izzet Furkan Cakmak - Personal Portfolio</title>
      <link rel="icon" href="/canonical.png" />
    </Head>
    <Navbar/>
    <Main/>  
    </div>
    
    
    
   
  )
}

export default Home