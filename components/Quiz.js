'use client'
import { Fugaz_One , Bungee} from 'next/font/google';
import React, { useEffect, useState } from 'react'

import Button from './Button';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });
const bungee = Bungee({ subsets: ['latin'], weight: ['400'] });

export default function Quiz() {
  return (
<div className='flex flex-col items-center max-w-[900px] '>
  <p className='text-center text-2xl mt-5 '>Imagine you're at a party. Do you naturally gravitate towards the crowd, or are you more likely to enjoy a one-on-one conversation in a quieter corner?</p>
  <div className='grid grid-cols-2 gap-10 w-fit mx-auto mt-1 py-6 px-10 text-1xl'>
    <Button text="I’m in the crowd!"  />
    <Button text="Find me in the corner"  />
  </div>
  <p className='text-center text-2xl mt-5 '>Your weekend is wide open! Are you meticulously planning it down to the last detail, or are you more of a 'go with the flow' type?</p>
  <div className='grid grid-cols-2 gap-2 mx-auto w-fit mt-1 py-6 px-10 text-1xl'>
    <Button text="Planning every detail!"  />
    <Button text="Let’s see where the weekend takes me"  />
  </div>
  <p className='text-center text-2xl mt-5 '>You’re given the chance to go on an unexpected adventure. Are you packing your bags without hesitation or thinking through the pros and cons first?</p>
  <div className='grid grid-cols-2 gap-10 w-fit mx-auto mt-1 py-6 px-10 text-1xl'>
    <Button text="Adventure awaits! I’m in!"  />
    <Button text="I’d rather think it through first"  />
  </div>
  <p className='text-center text-2xl mt-5 '>When making decisions, do you find yourself leaning on your gut feelings and empathy for others, or do you rely on logic and practical solutions?</p>
  <div className='grid grid-cols-2 gap-10 w-fit mx-auto mt-1 py-6 px-10 text-1xl'>
    <Button text="I trust my feelings!"  />
    <Button text="I need the facts"  />
  </div>
  <p className='text-center text-2xl mt-5 '>Are you someone who gets excited about solving tricky problems and analyzing complex ideas, or do you prefer hands-on, practical tasks?</p>
  <div className='grid grid-cols-2 gap-10 w-fit mx-auto mt-1 py-6 px-10 text-1xl'>
    <Button text="Give me those complex problems!"  />
    <Button text="I’d rather keep it hands-on" />
  </div>
 

 
</div>
  )
}

