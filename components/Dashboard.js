'use client'
import { Fugaz_One } from 'next/font/google';
import React, { useEffect, useState } from 'react'

import Button from './Button';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Dashboard() {
  return (<div>
    <h4 className={'text-5xl sm:text-4xl md:text-8xl text-center ' + fugaz.className}>
    Choose your  <span className='textGradient'>Personality</span> type
  </h4>
  <div className='grid grid-cols-3 gap-10 w-fit mx-auto mt-20 py-6 px-10 text-3xl '>
        <Button text="Introvert"dark />
        <Button text="Extrovert"dark />
        <Button text="Pervert"dark />
      </div>
  </div>

  )
}
