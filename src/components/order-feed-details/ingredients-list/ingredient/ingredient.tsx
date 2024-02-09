import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';
import { TIngredientType } from '../../../../utils/types';
import { useAppSelector } from '../../../../utils/redux-hooks';

const Ingredient = ({ id, count }: { id: string, count: number }) => {
  const allIngerdients = useAppSelector(state => state.allIngredients);
  const ingredient = allIngerdients.find((item: TIngredientType) => item._id === id);

  return (
    <div className={styles.ingredient}>
        <img src={ingredient?.image} alt={ingredient?.name} className={`${styles.image} mr-4`}/>
        <span className={`text text_type_main-default ${styles.title}`}>
            {ingredient?.name}
        </span>
        <div className={`${styles.price} mr-4`}>
            <span className={`text text_type_digits-default ${styles.count} ml-4 pr-1`}>
              {`${count} x ${ingredient?.price}`}
            </span>
            <CurrencyIcon type="primary" />
        </div>
    </div>
  );
};

export default Ingredient;