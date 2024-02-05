import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient.module.css';

const Ingredient = () => {
  return (
    <div>
          <img src="https://code.s3.yandex.net/react/code/meat-04-mobile.png" alt="Флюоресцентная булка R2-D3" className={styles.image}/>
          <span className={`text text_type_main-default ${styles.title}`}>
            Флюоресцентная булка R2-D3
          </span>
          <div className={`${styles.price} mr-4`}>
            <span className={`text text_type_digits-default ${styles.count}`}>
              3 x 5
            </span>
            <CurrencyIcon type="primary" />
          </div>
    </div>
  );
};

export default Ingredient;