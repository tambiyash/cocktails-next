export const DEFAULT_SEARCH_COCKTAIL = `https://thecocktaildb.com/api/json/v1/1/search.php?f=m`;
export const SEARCH_COCKTAIL_BY_NAME = (query: string): string => `https://thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;