import { Fugaz_One , Bungee} from 'next/font/google';
import React from 'react'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });
const bungee = Bungee({ subsets: ['latin'], weight: ['400'] });

export default function Button(props) {
    const { text, dark, full, clickHandler } = props
  return (
    <div>
        <button onClick={clickHandler} className={'rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-tur ' + (dark ? ' text-white bg-tur ' : ' text-tur ') + (full ? ' grid place-items-center w-full ' : ' ')}>
            <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + bungee.className}>{text}</p>
        </button>

    </div>
  )
}