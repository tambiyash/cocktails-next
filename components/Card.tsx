"use client";
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';
import { CocktailCard } from '@/types/cocktail';
import Tag from './Tag';

const Card = ({ href, title, img, ingredients, description }: CocktailCard) => {
  const [hover, setHover] = useState(false);
  return (
    <Link href={href || ""} className="px-4 py-6 flex flex-col justify-center sm:py-12" onMouseOver={(e) => setHover(true)} onMouseOut={(e) => setHover(false)}>
      <div className="relative py-3 sm:max-w-xl">
        <div className="flex flex-col items-center justify-center py-2">
          <div className={`absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform duration-300 ease-in-out rounded-3xl ${hover && "rotate-0" || "rotate-6"}`}></div>
          <div className="min-w-full relative px-4 py-10 flex flex-col flex-nowrap items-center bg-white shadow-lg sm:rounded-3xl">
            <h1 className="text-3xl font-bold">
              {title}
            </h1>
            <div className="flex flex-row flex-wrap p-4 h-auto">
              {ingredients.map(item => <Tag key={item.name} name={item.name} className="mb-2"/>)}
            </div>
            {description && <h2 className="pt-2 mb-4 text font-semibold line-clamp-2">
              {description}
            </h2>}
            <Image src={img || ""} alt={title} width={150} height={150} className="rounded-full"/>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card;