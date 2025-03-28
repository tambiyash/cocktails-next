"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cocktail } from '@/types/cocktail';
import { Ingredient } from '@/utils/mutation';
import { GET_INGREDIENT_IMAGE } from '@/utils/constants';
import Tag from './Tag';

const Details = ({ cocktail, ingredients }: { cocktail: Cocktail; ingredients: Ingredient[] }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cocktail Name */}
      <motion.h3
        className="text-3xl font-bold text-indigo-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {cocktail.strDrink}
      </motion.h3>

      {/* Cocktail Image */}
      <motion.div
        className="mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Image
          src={`${cocktail.strDrinkThumb}/preview`}
          alt={cocktail.strDrink}
          width={300}
          height={300}
          className="rounded-2xl shadow-md"
        />
      </motion.div>

      {/* Ingredients and Instructions Section */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {/* Ingredients Section */}
        <div>
          <h4 className="text-xl font-semibold text-gray-700 mb-4">Ingredients</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ingredients.map((item: Ingredient) => (
              <motion.div
                key={item.name}
                className="flex items-center p-2 border border-gray-200 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={GET_INGREDIENT_IMAGE(item.name)}
                  width={50}
                  height={50}
                  alt={item.name}
                  className="rounded-xl mr-4"
                />
                <div className="flex-1">
                  <Tag label={item.name} otherClassName="mb-0" />
                  {item.measure !== '-' && <p className="text-sm text-gray-600">{item.measure}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Instructions Section */}
        <div>
          <h4 className="text-xl font-semibold text-gray-700 mb-4">Instructions</h4>
          <p className="text-gray-600">{cocktail.strInstructions}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Details;