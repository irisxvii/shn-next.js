'use client'
import { Fugaz_One } from 'next/font/google';
import React, { useEffect, useState } from 'react'
import Button from './Button';


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Dashboard() {
  return (<div>
    <h4 className={'text-5xl sm:text-4xl md:text-8xl text-center ' + fugaz.className}>
    Take our  <span className='textGradient'>Personality</span> test??
  </h4>
  <p className='subtext text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[490px]'>
  Be yourself, try not to think too hard.
      </p>
  <div className='grid grid-cols-2 gap-5 w-fit mx-auto mt-50 py-10 px-15 text-2xl '>
  <a href="/personality" ><Button text="I Already Know My Type"dark/></a>
  <a href="/quiz" ><Button text="Take a Short Quiz"dark/></a>
      </div>
  </div>

  )
}

