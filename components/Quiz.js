'use client'
import { Fugaz_One , Bungee} from 'next/font/google';
import React, { useEffect, useState } from 'react'

import Button from './Button';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });
const bungee = Bungee({ subsets: ['latin'], weight: ['400'] });

export default function Quiz() {
  return (
<div className='flex flex-col items-center text-3xl mt-2'>
  <p className='text-center'>Do you thrive in social settings and enjoy being around many people?</p>
  <div className='grid grid-cols-2 gap-10 w-fit mx-auto mt-1 py-6 px-10 text-1xl'>
    <Button text="Yes" dark />
    <Button text="No" dark />
  </div>
</div>
  )
}

