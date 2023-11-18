import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.modules.css'
import IngredientsTabs from './ingredients-tabs';
import IngredientsList from './ingredient-list';
import data from '../../utils/data';
import PropTypes from 'prop-types';

function BurgerIngredients() {
  return (
    <div className='column-2 pr-10'>
        <div className='heading-wrapper text text_type_main-medium  pt-10 pb-5'>
            <h1 style={{ margin: '0px', padding: '0px'}}>Соберите бургер</h1>
        </div>
        <IngredientsTabs />
        <div className="ingredients">
          <IngredientsList ingredients={data} />
        </div>
    </div>
  );
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number, 
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
}; 