import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';

const Ingredient = () => {
  return (
    <div className={styles.ingredient}>
        <img src="https://code.s3.yandex.net/react/code/meat-04-mobile.png" alt="Флюоресцентная булка R2-D3" className={`${styles.image} mr-4`}/>
        <span className={`text text_type_main-default ${styles.title}`}>
            Филе Люминесцентного тетраодонтимформа
        </span>
        <div className={`${styles.price} mr-4`}>
            <span className={`text text_type_digits-default ${styles.count} ml-4 pr-1`}>
              3 x 5
            </span>
            <CurrencyIcon type="primary" />
        </div>
    </div>
  );
};

export default Ingredient;