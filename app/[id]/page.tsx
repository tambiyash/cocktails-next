import Image from 'next/image';
import Tag from '@/components/Tag';
import { Cocktail } from '@/types/cocktail';
import { GET_COCKTAIL_DETAIL, GET_INGREDIENT_IMAGE } from '@/utils/constants';
import getAllIngredients from '@/utils/mutation';

const getCocktail = async (id: number): Promise<Cocktail> => {
  const res = await fetch(GET_COCKTAIL_DETAIL(id));
  const data = await res.json();
  return data.drinks[0];
}

const DetailPage = async ({ params }: {params:{id: number}}) => {

  const cocktail = await getCocktail(params.id);
  console.log(cocktail);

  if (!cocktail) return null;

  const ingredients = await getAllIngredients(cocktail);

  return (
    <div className="flex items-center justify-between">
      <Image src={`${cocktail.strDrinkThumb}/preview`} alt={cocktail.strDrink} width={300} height={300} className="rounded-2xl mr-4"/>
      <div className="flex-1 ml-32">
        <h3 className="text-xl font-semibold mb-2">{cocktail.strDrink}</h3>
        <div className="flex flex-col flex-wrap p-4 h-auto">
          {ingredients.map((item: string) => (
            <div key={item} className="flex flex-row flex-nowrap justify-start items-center p-2">
              <Image src={GET_INGREDIENT_IMAGE(item)} width={50} height={50} alt={item} className="rounded-xl mr-2" />
              <Tag name={item} />
            </div>
          ))}
        </div>
        <p>{cocktail.strInstructions}</p>
      </div>
    </div>
  )
}

export default DetailPage