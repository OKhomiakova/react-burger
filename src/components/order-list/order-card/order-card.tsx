import styles from './order-card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppSelector } from '../../../utils/redux-hooks';
import { useMemo } from 'react';
import IngredientImageList from '../../ingredient-image-list/ingredient-image-list';

const OrderCard = ({ id }: { id: string }) => {
  const location = useLocation();
  const locationPathname = location.pathname;

  const isProfileOrders = locationPathname === '/profile/orders';

  const orders = useAppSelector(state => isProfileOrders ? state.wsMyOrdersReducer.lastMessage?.orders : state.wsAllOrdersReducer.lastMessage?.orders);
  const order = useMemo(() => orders?.find((order) => order._id === id), [id, orders]);

  const allIngerdients = useAppSelector(state => state.allIngredients);

  if (!order) return null;

  const orderIngredients = order?.ingredients.map((id) => allIngerdients.find((item) => item._id === id) ?? null);

  const price = order.ingredients.reduce((acc, id) => {
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
  
  const statusClassName = order.status === 'done' ? styles.statusDone : styles.status;

  return (
    <Link to={`${locationPathname}/${order.number}`} state={{ background: location }} className={`p-6 ${styles.card}`}>
      <div className={styles.orderNumber}>
        <span className="text text_type_digits-default">{`#${order.number}`}</span>
        <FormattedDate
          date={new Date(order.createdAt)}
          className="text_type_main-default text_color_inactive"
        />
      </div>
      <div>
        <span className="text text_type_main-medium mt-6 mr-b">{order.name}</span>
        {isProfileOrders && (<span className={`text text_type_main-default ${statusClassName}`}>
          {order.status === 'done' ? 'Выполнен' : 'Готовится'}
        </span>)}
      </div>
      <div className={`${styles.ingredients} ml-6`}>
        <IngredientImageList ingredients={orderIngredients}/>
        <div className={styles.price}>
          <span className="text text_type_digits-default">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
};
export default OrderCard;