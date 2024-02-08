import styles from './order-feed.module.css';
import OrderStats from './order-stats/order-stats';
import OrderList from '../../components/order-list/order-list';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { RootState } from '../../services/types';
import { useEffect } from 'react';
import { wsConnectionClosed, wsConnectionStart } from '../../services/actions/ws';
import { WS_API_URL } from '../../constants';

const OrderFeedPage = () => {
  const totalOrdersSelector = (state: RootState) => state.wsReducer.allOrders?.total ?? 0;
  const totalTodayOrdersSelector = (state: RootState) => state.wsReducer.allOrders?.totalToday ?? 0;

  const totalOrders = useAppSelector(totalOrdersSelector);
  const totalTodayOrders = useAppSelector(totalTodayOrdersSelector);

  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user.user);
  useEffect(() => {
    if (user) {
      dispatch(wsConnectionStart(WS_API_URL));
    }
    dispatch(wsConnectionStart(`${WS_API_URL}/all`));
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch, user]);

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