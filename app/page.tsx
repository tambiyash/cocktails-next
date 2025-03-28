import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Cards from "@/components/Cards";
import Container from "@/components/Container";
import SearchInput from "@/components/SearchInput";
import { Cocktail } from "@/types/cocktail";
import { DEFAULT_SEARCH_COCKTAIL, SEARCH_COCKTAIL_BY_NAME } from "@/utils/constants";
import { Ingredient, getAllIngredients } from "@/utils/mutation";
import debounce from "@/utils/search";

type ISearchParams = {
  search: string;
};

const fetchCocktails = async () => {
  const res = await fetch(DEFAULT_SEARCH_COCKTAIL);
  const data = await res.json();
  return data.drinks;
};

const searchCocktails = async (query: string) => {
  const res = await fetch(SEARCH_COCKTAIL_BY_NAME(query));
  const data = await res.json();
  return data.drinks;
};

const Home = async ({ searchParams }: { searchParams: ISearchParams }) => {
  let cocktails;

  if (searchParams?.search) {
    const debouncedSearch = debounce(searchCocktails, 500, true);
    cocktails = await debouncedSearch(searchParams?.search);
  } else {
    cocktails = await fetchCocktails();
  }

  return (
    <Container>
      <SearchInput />
      {!cocktails && (
        <div className="mt-16 w-full flex flex-col justify-center items-center">
          <h1 className="text-2xl text-gray-500">Sorry, No cocktails found.</h1>
          <h3 className="mt-4">Try searching for some other one.</h3>
        </div>
      )}
      <Cards>
        {cocktails?.map((drink: Cocktail) => {
          const ingredients: Ingredient[] = getAllIngredients(drink);
          return (
            <Card
              href={`/${drink.idDrink}`}
              key={drink.idDrink}
              img={`${drink.strDrinkThumb}/preview`}
              title={drink.strDrink}
              description={drink.strInstructions}
              ingredients={ingredients}
            />
          );
        })}
      </Cards>
    </Container>
  );
};

export default Home;
