"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link'

const Route = ({ url, title }: { url: string, title: string }) => (
  <Link href={url} className="px-2 lg:px-6 py-6 text-md font-bold border-b-2 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-slate-600 hover:text-indigo-500">
    {title}
  </Link>
)

const Header = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <header
      className={`w-full backdrop-filter backdrop-blur-lg fixed z-10 transition ease-in-out duration-500 ${
        animateHeader && "shadow-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto ">
        <div
          className={`flex max-w-screen-xl py-10 ${
            animateHeader && "py-5"
          } mx-auto items-center justify-between px-8 transition ease-in-out duration-500`}
        >
          <Link
            href="/"
            className="text-5xl font-bold tracking-tighter text-indigo-600 pr-8"
          >
            Cocktail App
          </Link>
          <nav>
            <ul className="flex items-center justify-start">
              <li key="Home">
                <Route url="/" title="Home" />
              </li>
              {/* <li key="Contact">
                <Route url="/contact" title="Contact" />
              </li>
              <li key="About">
                <Route url="/about" title="About us" />
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header