import Image from 'next/image';
import Tag from '@/components/Tag';
import { Cocktail } from '@/types/cocktail';
import { GET_COCKTAIL_DETAIL, GET_INGREDIENT_IMAGE } from '@/utils/constants';
import { Ingredient, getAllIngredients } from '@/utils/mutation';

const getCocktail = async (id: number): Promise<Cocktail> => {
  const res = await fetch(GET_COCKTAIL_DETAIL(id));
  const data = await res.json();
  return data.drinks[0];
}

const DetailPage = async ({ params }: {params:{id: number}}) => {
  const cocktail = await getCocktail(params.id);

  if (!cocktail) return null;

  const ingredients: Ingredient[] = getAllIngredients(cocktail);

  return (
    <div className="flex flex-col items-center justify-between border-dashed border-2 border-indigo-600 p-4 rounded-lg">
      <h3 className="text-2xl font-bold mb-2">{cocktail.strDrink}</h3>
      <div className="flex flex-row items-center justify-between">
        <Image src={`${cocktail.strDrinkThumb}/preview`} alt={cocktail.strDrink} width={300} height={300} className="rounded-2xl mr-4"/>
        <div className="flex-1 ml-16">
          <div className="flex flex-col flex-wrap justify-between items-center p-4 h-auto">
            {ingredients.map((item: Ingredient) => (
              <div key={item.name} className="p-2 grid grid-cols-3 w-full justify-between items-center">
                <Image src={GET_INGREDIENT_IMAGE(item.name)} width={50} height={50} alt={item.name} className="rounded-xl mr-2" />
                <Tag name={item.name} className="mb-0"/>
                <p className="ml-6">{item.measure || "-"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-sm font-semibold mx-24 my-4">{cocktail.strInstructions}</div>
    </div>
  )
}

export default DetailPage