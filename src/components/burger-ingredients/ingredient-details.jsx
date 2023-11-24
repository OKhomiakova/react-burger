import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css';
import ingredientType from '../../utils/types';

const IngredientDetails = ({ingredient}) => (
    <div className={`${styles.ingredientDetails} mr-25 ml-25`}>
        <img src={ingredient.image_large} className={`mb-4`} alt={ingredient.name}/>
        <p className={`${styles.ingredientDetailsName} text text_type_main-medium`}>{ingredient.name}</p>
        <div className={`${styles.nutrients} mt-8 mb-15`}>
            <div className={`${styles.nutrient} text text_type_main-default text_color_inactive`}>
                <p>Калории,ккал</p>
                <p>{ingredient.calories}</p>
            </div>
            <div className={`${styles.nutrient} text text_type_main-default text_color_inactive`}>
                <p>Белки, г</p>
                <p>{ingredient.proteins}</p>
            </div>
            <div className={`${styles.nutrient} text text_type_main-default text_color_inactive`}>
                <p>Жиры, г</p>
                <p>{ingredient.fat}</p>
            </div>
            <div className={`${styles.nutrient} text text_type_main-default text_color_inactive`}>
                <p>Углеводы, г</p>
                <p>{ingredient.carbohydrates}</p>
            </div>
        </div>
    </div>
);

export default IngredientDetails;

IngredientDetails.propTypes = {
    ingredient: ingredientType,
}; 