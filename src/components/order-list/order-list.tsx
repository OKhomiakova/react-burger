import styles from './order-list.module.css';
import OrderCard from './order-card/order-card';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { useMatch } from 'react-router-dom';
import { wsConnectionClosed, wsConnectionStart } from '../../services/actions/ws';
import { WS_API_URL } from '../../constants';
import { useEffect } from 'react';

const OrderList = () => {
  const dispatch = useAppDispatch();

  const match = useMatch('/profile/orders');

  const orders = useAppSelector(match ? historyOrdersSelector : ordersSelector);
  const ingredients = useAppSelector(initialIngredients);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (match) {
      dispatch(wsConnectionStart(`${WS_API_URL}?token=${token?.split('Bearer ')[1]}`));
    }

    return () => {
      if (match) {
        dispatch(wsConnectionClosed());
      }
    };
  }, [dispatch, match]);
  
  return (
    <ul className={styles.orderList}>
        {orders.map((order) => (
          <li key={order._id}>
            <OrderCard order={order} ingredients={ingredients} />
          </li>
        ))}
    </ul>
  );
};
export default OrderList;