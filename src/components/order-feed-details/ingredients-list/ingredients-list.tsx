import { TIngredientType } from '../../../utils/types';
import Ingredient from './ingredient/ingredient';
import styles from './ingredients-list.module.css';

const IngredientsList = ({ ingredients }: { ingredients: string[] }) => {
  // group ingredients by id
  const groupedIngredients = ingredients.reduce((acc: { [key: string]: number }, id) => {
    acc[id] = acc[id] ? acc[id] + 1 : 1;
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