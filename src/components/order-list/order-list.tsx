import { useLocation } from 'react-router-dom';

import styles from './order-list.module.css';
import OrderCard from './order-card/order-card';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { useEffect } from 'react';
import { setAllIngredients } from '../../services/actions/all-ingredients';

const OrderList = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const isProfileOrders = location.pathname === '/profile/orders';

  const orders = useAppSelector(state => isProfileOrders ? state.wsMyOrdersReducer.lastMessage?.orders : state.wsAllOrdersReducer.lastMessage?.orders);
  const ingredients = useAppSelector(state => state.allIngredients);

  useEffect(() => {
    if (!ingredients.length) {
      dispatch(setAllIngredients());
    }
  }, [ingredients, dispatch]);

  return (
    <ul className={styles.orderList}>
      {orders?.map(order => (
        <OrderCard key={order._id} id={order._id} />
      ))}
    </ul>
  );
};
export default OrderList;