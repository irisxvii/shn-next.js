import { Fugaz_One} from 'next/font/google';
import React from 'react'
import Button from './Button';
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Login() {
  return (
    <div className = 'flex flex-col flex-l justify-center items-center gap-4'>
      <h3 className = {'text-4xl sm:text-5xl ' + fugaz.className} > Log In / Register </h3>
      <p>You&#39;re one step away!</p>
      <input className=' w-full max-w-[400px] mx-auto px-3 duration-200 hover: border-tur focus:border-tur py-2 sm:py-3 border border-solid border-tur rounded-full outline-none text-black' placeholder='Name'/>
      <input className='w-full max-w-[400px] mx-auto px-3 duration-200 hover: border-tur focus:border-tur py-2 sm:py-3 border border-solid border-tur rounded-full outline-none text-black' placeholder='Password'/>
      
      <Button text="Submit" full/>
      <div>
        <p className='text-center'>Don&#39;t have an account? <span className='text-tur'>Sign up</span></p>
      </div>
    </div>
  )
}