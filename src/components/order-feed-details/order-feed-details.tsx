import styles from './order-feed-details.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsList from './ingredients-list/ingredients-list';

const OrderFeedDetails = () => {
  return (
    <div className={styles.orderWrapper}>
      <div className="mt-10 mb-15">
        <h3 className="mb-2 text text_type_main-medium">Black Hole Singularity острый бургер</h3>
        <span>
            Выполнен
        </span>
      </div>
      <div className="mb-10">
        <h3 className="mb-6 text text_type_main-medium">Состав:</h3>
        <IngredientsList />
      </div>
      <div className={`mb-10 ${styles.total_price}`}>
        <span className="text text_type_main-default text_color_inactive">Вчера, 13:50</span>
        <div className={styles.price}>
          <span className="text text_type_digits-default pr-1">1500</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default OrderFeedDetails;