import Card from "@/components/Card";
import Cards from "@/components/Cards";
import SearchInput from "@/components/SearchInput";
import { Cocktail } from "@/types/cocktail";
import { DEFAULT_SEARCH_COCKTAIL, SEARCH_COCKTAIL_BY_NAME } from "@/utils/constants";
import getAllIngredients from "@/utils/mutation";
import debounce from "@/utils/search";

type ISearchParams = {
  search: string
};

export const fetchCocktails = async () => {
  const res = await fetch(DEFAULT_SEARCH_COCKTAIL);
  const data = await res.json();
  return data.drinks;
}

export const searchCocktails = async (query: string) => {
  const res = await fetch(SEARCH_COCKTAIL_BY_NAME(query));
  const data = await res.json();
  return data.drinks;
}

const Home = async ({ searchParams } : {searchParams: ISearchParams}) => {
  let cocktails;

  if (searchParams?.search) {
    const debouncedSearch = debounce(searchCocktails, 500, true);
    cocktails = await debouncedSearch(searchParams?.search);
  } else {
    cocktails = await fetchCocktails();
  }

  return (
    <div className="mt-16">
      <SearchInput />
      <Cards>
        {cocktails.map((drink: Cocktail) => {
          const ingredients: string[] = getAllIngredients(drink);
          return (
            <Card href={`/${drink.idDrink}`} key={drink.idDrink} img={`${drink.strDrinkThumb}/preview`} title={drink.strDrink} description={drink.strInstructions} ingredients={ingredients} />
        )})}
      </Cards>
    </div>
    
  );
}

export default Home;
