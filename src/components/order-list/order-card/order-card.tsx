import styles from './order-card.module.css';
import { Link } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const OrderCard = () => {
  return (
    <Link to={''} className={`p-6 ${styles.card}`}>
      <div className={styles.orderNumber}>
        <span className="text text_type_digits-default">#034533</span>
        <span className="text text_type_main-small text_color_inactive">Вчера, 13:50</span>
      </div>
      <div>
        <span className="text text_type_main-medium mt-6 mr-b">Death Star Starship Main бургер</span>
        <span className={`text text_type_main-default ${styles.status}`}>
            Выполнен
        </span>
      </div>
      <div className={`${styles.ingredients} ml-6`}>
        {/* <ImageList /> */}
        <div className={styles.price}>
          <span className="text text_type_digits-default">480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
};
export default OrderCard;