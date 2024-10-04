import { Open_Sans, Fugaz_One } from '@next/font/google';
import React from 'react'
import Button from './Button';
import Calendar from './Calendar';
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function Hero() {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-006 sm:gap-8'>
      <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center lg:text-7xl ' + fugaz.className}>
        <span className='textGradient'>Sink </span>connects you with people through instant <span className='textGradient'> messaging   </span>
      </h1>
      <p className='subtext text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[490px]'>
      Choose your vibe, send a message to a random someone.
      </p>
      <div className='grid grid-cols-2 gap-4 w-fit mx-auto'>
        <Button text="Sign up"/>
        <Button text="Log in"dark/>
      </div>
      <Calendar />

    </div>
  )
}
 
