'use client'
import { Fugaz_One, Bungee } from 'next/font/google';
import React, { useEffect, useState } from 'react'

import Button from './Button';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });
const bungee = Bungee({ subsets: ['latin'], weight: ['400'] });

// export default function Quiz() {
//   return (
// <div className='flex flex-col items-center '>
//   <p className='text-center text-2xl mt-5 '>Imagine you're at a party. Do you naturally gravitate towards the crowd, or are you more likely to enjoy a one-on-one conversation in a quieter corner?</p>
//   <div className='grid grid-cols-2 gap-10 w-fit mx-auto mt-1 py-6 px-10 text-1xl'>
//     <Button text="I’m in the crowd!"  />
//     <Button text="Find me in the corner"  />
//   </div>
//   <p className='text-center text-2xl mt-5 '>Your weekend is wide open! Are you meticulously planning it down to the last detail, or are you more of a 'go with the flow' type?</p>
//   <div className='grid grid-cols-2 gap-2 mx-auto w-fit mt-1 py-6 px-10 text-1xl'>
//     <Button text="Planning every detail!"  />
//     <Button text="Let’s see where the weekend takes me"  />
//   </div>
//   <p className='text-center text-2xl mt-5 '>You’re given the chance to go on an unexpected adventure. Are you packing your bags without hesitation or thinking through the pros and cons first?</p>
//   <div className='grid grid-cols-2 gap-10 w-fit mx-auto mt-1 py-6 px-10 text-1xl'>
//     <Button text="Adventure awaits! I’m in!"  />
//     <Button text="I’d rather think it through first"  />
//   </div>
//   <p className='text-center text-2xl mt-5 '>When making decisions, do you find yourself leaning on your gut feelings and empathy for others, or do you rely on logic and practical solutions?</p>
//   <div className='grid grid-cols-2 gap-10 w-fit mx-auto mt-1 py-6 px-10 text-1xl'>
//     <Button text="I trust my feelings!"  />
//     <Button text="I need the facts"  />
//   </div>
//   <p className='text-center text-2xl mt-5 '>Are you someone who gets excited about solving tricky problems and analyzing complex ideas, or do you prefer hands-on, practical tasks?</p>
//   <div className='grid grid-cols-2 gap-10 w-fit mx-auto mt-1 py-6 px-10 text-1xl'>
//     <Button text="Give me those complex problems!"  />
//     <Button text="I’d rather keep it hands-on" />
//   </div>



// </div>
//   )
// }

const Quiz = () => {
  const [answers, setAnswers] = useState();

  const questions = [
    {
      question: "Imagine you're at a party. Do you naturally gravitate towards the crowd, or are you more likely to enjoy a one-on-one conversation in a quieter corner?",
      options: [
        {
          opt: "I’m in the crowd!",
          personalities: ["", "ABCD", "LMNO"]
        },
        {
          opt: "Find me in the corner",
          personalities: ["KLOP", "UIOP", "QWER"]
        }
      ]
    },
    {
      question: "Your weekend is wide open! Are you meticulously planning it down to the last detail, or are you more of a 'go with the flow' type?",
      options: [
        {
          opt: "Planning every detail!",
          personalities: ["INFP", "ABCD", "LMNO"]
        },
        {
          opt: "Let’s see where the weekend takes me",
          personalities: ["KLOP", "UIOP", "QWER"]
        }
      ]
    },
    {
      question: "You’re given the chance to go on an unexpected adventure. Are you packing your bags without hesitation or thinking through the pros and cons first?",
      options: [
        {
          opt: "OpytionAdventure awaits! I’m in!1",
          personalities: ["INFP", "ABCD", "LMNO"]
        },
        {
          opt: "I’d rather think it through first",
          personalities: ["KLOP", "UIOP", "QWER"]
        }
      ]
    },
    {
      question: "When making decisions, do you find yourself leaning on your gut feelings and empathy for others, or do you rely on logic and practical solutions?",
      options: [
        {
          opt: "I trust my feelings!",
          personalities: ["INFP", "ABCD", "LMNO"]
        },
        {
          opt: "I need the facts",
          personalities: ["KLOP", "UIOP", "QWER"]
        }
      ]
    },
    {
      question: "Are you someone who gets excited about solving tricky problems and analyzing complex ideas, or do you prefer hands-on, practical tasks?",
      options: [
        {
          opt: "Give me those complex problems!",
          personalities: ["INFP", "ABCD", "LMNO"]
        },
        {
          opt: "I’d rather keep it hands-on",
          personalities: ["KLOP", "UIOP", "QWER"]
        }
      ]
    }
  ]

  return <div classname='p-4 flex gap-4'>
    {
      questions.map((item) => {
        return <div>
          {item.question}
          {
            item.options.map((opt)=><div>{opt.opt}</div>)
          }
        </div>
      })
    }

  </div>

}

export default Quiz

