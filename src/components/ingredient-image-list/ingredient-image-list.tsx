import { TIngredientType } from '../../utils/types';
import styles from './ingredient-image-list.module.css';

const Ingredient = ({ data }: { data: TIngredientType }) => {
  return (
    <div className={styles.ingredient}>
      <img src={data.image} alt={data.name} className={`${styles.image}`}/>
    </div>
  );
};

const IngredientImageList = ({ ingredients }: { ingredients: Array<TIngredientType | null> }) => {
  const uniqueIngredients = ingredients.filter((item, index, arr) => arr.findIndex((t) => t?._id === item?._id) === index);
  const firstFiveIngredients = uniqueIngredients.slice(0, 5);
  const ingredientLeft = Math.max(0, uniqueIngredients.length - 5);
  const firstIngredientAfterFive = uniqueIngredients[5];
  return (
    <div className={styles.row}>
      {ingredientLeft > 0 && (
        <div className={styles.ingredient} key={firstIngredientAfterFive?._id} >
          <img src={firstIngredientAfterFive?.image} alt={firstIngredientAfterFive?.name} className={`${styles.blurredImage}`}/>
          <span className={styles.ingredientLeftText}>
            {`+${ingredientLeft}`}
          </span>
        </div>
      )}
      {firstFiveIngredients.map(ingredient => ingredient && (
        <Ingredient key={ingredient._id} data={ingredient} />
      ))}
    </div>
  );
};

export default IngredientImageList;
