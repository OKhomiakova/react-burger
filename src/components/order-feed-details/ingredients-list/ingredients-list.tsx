import { useAppSelector } from '../../../utils/redux-hooks';
import Ingredient from './ingredient/ingredient';
import styles from './ingredients-list.module.css';

const IngredientsList = ({ ingredients }: { ingredients: string[] }) => {

  const allIngerdients = useAppSelector(state => state.allIngredients);

  const groupedIngredients = ingredients.reduce((acc: { [key: string]: number }, id) => {
    const ingredient = allIngerdients.find((item) => item._id === id);
    if (ingredient) {
      // Check if the ingredient is a bun
      if (ingredient.type === 'bun') {
        // Increase the count for bun ingredients by 2
        acc[id] = acc[id] ? acc[id] + 2 : 2;
      } else {
        acc[id] = acc[id] ? acc[id] + 1 : 1;
      }
    }
    return acc;
  }, {});

  const sortFunc = (a: [string, number], b: [string, number]) => {
    const aIngredient = allIngerdients.find((item) => item._id === a[0]);
    const bIngredient = allIngerdients.find((item) => item._id === b[0]);
    // bun should always be first
    if (aIngredient && bIngredient) {
      if (aIngredient.type === 'bun' && bIngredient.type !== 'bun') return -1;
      if (aIngredient.type !== 'bun' && bIngredient.type === 'bun') return 1;
      return a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0;
    } else {
      return 0;
    }
  };

  return (
    <div className={`${styles.ingredientsWrapper} mr-6`}>
      <ul className={styles.ingredientList}>
        {Object.entries(groupedIngredients).sort(sortFunc).map(([id, count]) => (
          <li key={id} className={styles.ingredientRow}>
            <Ingredient id={id} count={count} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;