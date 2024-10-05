import localFont from "next/font/local";
import "./globals.css";
import { headers } from "next/headers";

import { Open_Sans, Fugaz_One } from '@next/font/google';

const opensans = Open_Sans({ subsets: ['latin'] });
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SINK",
  description: "Connect and sync",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4 ">
      <h1  className={'text-base sm:text-lg textGradient lg:text-2xl ' + fugaz.className}>
        Sink
      </h1>
      <div className="flex items-center justify-between font-bold">
      Join the Fun! | Connect and sync!
      </div>


    </header>
  )

  
  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={'text-tur duration-200 hover:text-white hover:bg-tur  ' + fugaz.className}>
      Created with hate
      </p>


    </footer>
  )

  
  return (
    <html lang="en">
      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col bg-black text-white  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {header}
        
        {children}
        {footer}
      </body>
    </html>
  );
}
