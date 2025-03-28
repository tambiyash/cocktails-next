"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { CocktailCard } from '@/types/cocktail';
import Tag from './Tag';

const Card = ({ href, title, img, ingredients, description }: CocktailCard) => {
  return (
    <motion.div
      className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href || ""} className="flex flex-col justify-between h-full">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="text-lg font-bold line-clamp-1 overflow-hidden text-ellipsis">{title}</h3>
          {description && (
            <p className="text-gray-600 line-clamp-2 overflow-hidden text-ellipsis">
              {description}
            </p>
          )}
        </div>

        {/* Ingredients Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {ingredients.map((item, idx) => (
            <Tag key={idx} label={item.name} otherClassName="mb-0" />
          ))}
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={img || ""}
            alt={title}
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;