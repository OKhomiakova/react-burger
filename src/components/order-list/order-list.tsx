import { useLocation } from 'react-router-dom';

import styles from './order-list.module.css';
import OrderCard from './order-card/order-card';
import { useAppSelector } from '../../utils/redux-hooks';

const OrderList = () => {
  const location = useLocation();

  const isProfileOrders = location.pathname === '/profile/orders';

  const orders = useAppSelector(state => isProfileOrders ? state.wsMyOrdersReducer.lastMessage?.orders : state.wsAllOrdersReducer.lastMessage?.orders);

  return (
    <ul className={styles.orderList}>
      {orders?.map(order => (
        <OrderCard key={order._id} id={order._id} />
      ))}
    </ul>
  );
};
export default OrderList;