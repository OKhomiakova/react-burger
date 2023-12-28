import IngredientDetails from '../../components/burger-ingredients/ingredient-details';
import styles from './ingredient-details.module.css';   

const IngredientDetailsPage = () => {
    return (
        <section className={styles.wrapper}>
            <IngredientDetails/>
        </section>
    );
}

export default IngredientDetailsPage;
