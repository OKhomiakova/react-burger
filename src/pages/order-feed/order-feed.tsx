import styles from './order-feed.module.css';
import OrderStats from './order-stats/order-stats';
import OrderList from '../../components/order-list/order-list';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { useEffect } from 'react';
import { WS_API_URL } from '../../constants';
import { wsConnectionCloseAllOrders, wsConnectionStartAllOrders } from '../../services/actions/ws-all-orders';

const OrderFeedPage = () => {
  
  const totalOrders = useAppSelector((state) => state.wsAllOrdersReducer.lastMessage?.total ?? 0);
  const totalTodayOrders = useAppSelector((state) => state.wsAllOrdersReducer.lastMessage?.totalToday ?? 0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsConnectionStartAllOrders(`${WS_API_URL}/all`));
    return () => {
      dispatch(wsConnectionCloseAllOrders());
    };
  }, [dispatch]);

  return (
    <main className={`pl-5 pr-5 ${styles.main}`}>
      <h1 className="text text_type_main-large pt-10 pb-5">Лента заказов</h1>
      <div className={styles.content}>
        <section className={styles.order_container}>
          <OrderList />
        </section>
        <section className={styles.stats_container}>
          <OrderStats totalOrders={totalOrders} totalTodayOrders={totalTodayOrders}/>
        </section>
      </div>
    </main>
  );
};

export default OrderFeedPage;