'use client'
import { Fugaz_One } from 'next/font/google';
import React, { useEffect, useState } from 'react'

import Button from './Button';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Personality() {
  return (<div>
    <h4 className={'text-5xl sm:text-4xl md:text-8xl text-center ' + fugaz.className}>
    Choose your  <span className='textGradient'>Personality</span> type
  </h4>
  <div className='grid grid-cols-4 grid-rows-4 gap-10 w-fit mx-auto mt-10 py-6 px-10 text-3xl '>
        <Button text="INFP"dark />
        <Button text="INFJ"/>
        <Button text="ENFP"dark />
        <Button text="ENFJ" />
        <Button text="INTP" />
        <Button text="INTJ"dark/>
        <Button text="ENTP" />
        <Button text="ENTJ"dark/>
        <Button text="ISFP"dark />
        <Button text="ISFJ" />
        <Button text="ESFP"dark />
        <Button text="ESFJ" />
        <Button text="ISTP" />
        <Button text="ISTJ"dark />
        <Button text="ESTP" />
        <Button text="ESTJ"dark />
      </div>
  </div>

  )
}

