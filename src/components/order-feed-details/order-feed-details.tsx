import styles from './order-feed-details.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { Navigate } from 'react-router-dom';

import IngredientsList from './ingredients-list/ingredients-list';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../utils/redux-hooks';

const OrderFeedDetails = () => {
  const location = useLocation();
  const locationPathname = location.pathname;

  const orderNumber = locationPathname.split('/').pop();

  const isProfileOrders = locationPathname === `/profile/orders/${orderNumber}`;

  const orders = useAppSelector(state => isProfileOrders ? state.wsReducer.myOrders?.orders : state.wsReducer.allOrders?.orders);
  const allIngerdients = useAppSelector(state => state.allIngredients);

  if (!orderNumber) return <Navigate to="/404" />;

  const orderData = orders?.find((order) => order.number === +orderNumber);

  if (!orderData) return <Navigate to="/404" />;

  console.log(orderData, allIngerdients);
  
  const price = orderData.ingredients.reduce((acc, id) => {
    const ingredient = allIngerdients.find((item) => item._id === id);
    
    if (ingredient) {
      if (ingredient.type === 'bun') {
        return acc + (ingredient.price * 2);
      } else {
        return acc + ingredient.price;
      }
    } else {
      return acc;
    }
  }, 0);

  return (
    <div className={styles.orderWrapper}>
      <div className="mt-10 mb-15">
        <h3 className="mb-2 text text_type_main-medium">{orderData.name}</h3>
        <span className={`text text_type_main-default ${styles.statusDone} ${styles.status}`}>
          {orderData.status === 'done' ? 'Выполнен' : 'Готовится'}
        </span>
      </div>
      <div className="mb-10">
        <h3 className="mb-6 text text_type_main-medium">Состав:</h3>
        <IngredientsList ingredients={orderData.ingredients} />
      </div>
      <div className={`mb-10 ${styles.total_price}`}>
        <FormattedDate
          date={new Date(orderData.createdAt)}
          className="text_type_main-default text_color_inactive"
        />
        <div className={styles.price}>
          <span className="text text_type_digits-default pr-1">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default OrderFeedDetails;