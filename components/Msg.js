'use client'
import { Fugaz_One } from 'next/font/google';
import React, { useEffect, useState } from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Msg() {
  return (
    <div><input className='w-full max-w-[600px] h-[150px] mx-auto px-4 duration-200 hover:border-indigo-600 
    focus:border-indigo-600 border border-solid border-indigo-400 rounded-xl outline-none justify-center ' 
    placeholder='Write a message or dare......' />
</div>
  )
}
