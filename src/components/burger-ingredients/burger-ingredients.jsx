import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import IngredientsTabs from './ingredients-tabs';
import IngredientsList from './ingredient-list';
import ingredientType from '../../utils/types';
import PropTypes from 'prop-types';

const BurgerIngredients = ({ ingredients }) => (
  <section className={`${styles.column} pr-10`}>
    <div className={`${styles.heading} text text_type_main-medium pt-10 pb-5`}>
      <h1 className={styles.h1}>Соберите бургер</h1>
    </div>
    <IngredientsTabs />
    <div className={styles.ingredients}>
      <IngredientsList ingredients={ingredients} />
    </div>
  </section>
);

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
}; 