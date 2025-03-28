import { Cocktail } from '@/types/cocktail';
import { GET_COCKTAIL_DETAIL } from '@/utils/constants';
import { Ingredient, getAllIngredients } from '@/utils/mutation';
import Details from '@/components/Details';

const getCocktail = async (id: number): Promise<Cocktail> => {
  const res = await fetch(GET_COCKTAIL_DETAIL(id));
  const data = await res.json();
  return data.drinks[0];
};

const DetailPage = async ({ params }: { params: { id: number } }) => {
  const cocktail = await getCocktail(params.id);

  if (!cocktail) return null;

  const ingredients: Ingredient[] = getAllIngredients(cocktail);

  return (
    <Details cocktail={cocktail} ingredients={ingredients} />
  );
};

export default DetailPage;