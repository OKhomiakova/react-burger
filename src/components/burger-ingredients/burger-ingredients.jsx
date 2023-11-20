import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import IngredientsTabs from './ingredients-tabs';
import IngredientsList from './ingredient-list';
import data from '../../utils/data';

function BurgerIngredients() {
  return (
    <section className={`${styles.column} pr-10`}>
        <div className={`${styles.heading} text text_type_main-medium pt-10 pb-5`}>
            <h1 className={styles.h1}>Соберите бургер</h1>
        </div>
        <IngredientsTabs />
        <div className={styles.ingredients}>
          <IngredientsList ingredients={data} />
        </div>
    </section>
  );
}

export default BurgerIngredients;