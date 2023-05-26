export const DEFAULT_SEARCH_COCKTAIL = `https://thecocktaildb.com/api/json/v1/1/search.php?f=m`;
export const SEARCH_COCKTAIL_BY_NAME = (query: string): string => `https://thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
export const GET_COCKTAIL_DETAIL = (id: number): string => `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
export const GET_INGREDIENT_IMAGE = (name: string): string => `https://thecocktaildb.com/images/ingredients/${name}-small.png`