import styles from './burger-ingredients.module.css';
import { useSelector } from 'react-redux';

const IngredientDetails = () => {

    const ingredient = useSelector((state) => state.selectedIngredient);

    if (!ingredient) {
        return (
            <div className={styles.ingredientDetails}>
                <p>Loading...</p>
            </div>
        );
    }

    return(
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
    )};

export default IngredientDetails;