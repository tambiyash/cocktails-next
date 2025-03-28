"use client";
import Link from 'next/link';
import { motion } from 'motion/react';

const Route = ({ url, title }: { url: string, title: string }) => (
  <Link href={url} className="px-2 lg:px-6 py-6 text-md font-bold border-b-2 border-transparent hover:border-white leading-[22px] md:px-3 text-slate-300 hover:text-white">
    {title}
  </Link>
)

const Header = () => {
  return (
    <motion.header
      className="py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center"
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto ">
        <div
          className={`flex max-w-screen-xl py-10 mx-auto items-center justify-between px-8 transition ease-in-out duration-500`}
        >
          <Link
            href="/"
            className="text-5xl font-bold tracking-tighter text-white pr-8"
          >
            Cocktail App
          </Link>
          <nav>
            <ul className="flex items-center justify-start">
              <li key="Home">
                <Route url="/" title="Home" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header