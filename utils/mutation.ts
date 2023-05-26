import { Cocktail } from "@/types/cocktail";

export type Ingredient = {
  name: string,
  measure: string
}

const getAllIngredients = (drink: Cocktail) => {
  const drinkKeys = Object.keys(drink);
  let ingredients: Ingredient[] = [];
  for (const key of drinkKeys) {
    if (key.startsWith("strIngredient") && drink[key]) {
      const ingredientIndex = key[key.length - 1];
      ingredients.push({
        name: drink[key],
        measure: drink[`strMeasure${ingredientIndex}`] || "-"
      });
    }
  }
  return ingredients;
}

export { getAllIngredients };

