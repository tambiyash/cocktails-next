import { Cocktail } from "@/types/cocktail";

const getAllIngredients = (drink: Cocktail) => {
  const ingredientKeys = Object.keys(drink).filter((key: string) => key.startsWith("strIngredient"));
  const ingredients = ingredientKeys.map((key: string):string => drink[key as keyof Cocktail]).filter((ingred: string) => !!ingred);
  return ingredients;
}

export default getAllIngredients;

