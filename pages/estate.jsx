import React from 'react'
import Image from 'next/image'
import estateImg from "../public/projects/realestate.PNG";
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const estate = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={estateImg}
        alt='/'
      />
    </div>
    </div>
 
      

    
    
  )
}


export default estate