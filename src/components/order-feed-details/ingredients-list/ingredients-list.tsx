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

  return (
    <div className={`${styles.ingredientsWrapper} mr-6`}>
      <ul className={styles.ingredientList}>
        {Object.entries(groupedIngredients).map(([id, count]) => (
          <li key={id} className={styles.ingredientRow}>
            <Ingredient id={id} count={count} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;