import { Fugaz_One} from 'next/font/google';
import React from 'react'
const fugaz = Fugaz_one({ subsets: ["latin"], weight: ['400'] });

export default function Login() {
  return (
    <div className = 'flex flex-col flex-l justify-center items-center gap-4'>
      <h3 className = {'text-4xl' + fugaz.className} > Login In / Register </h3>
    </div>
  )
}
