import Ingredient from './ingredient/ingredient';
import styles from './ingredients-list.module.css';

const IngredientsList = () => {
  return (
    <div className={`${styles.ingredientsWrapper}`}>
      <ul className={styles.ingredientList}>
          <li className={styles.ingredientRow}>
            <Ingredient/>
          </li>
      </ul>
    </div>
  );
};

export default IngredientsList;