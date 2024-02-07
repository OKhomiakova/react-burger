import styles from './order-feed.module.css';
import OrderStats from './order-stats/order-stats';
import OrderList from '../../components/order-list/order-list';

const OrderFeedPage = () => {
  return (
    <main className={`pl-5 pr-5 ${styles.main}`}>
      <h1 className="text text_type_main-large pt-10 pb-5">Лента заказов</h1>
      <div className={styles.content}>
        <section className={styles.order_container}>
          <OrderList />
        </section>
        <section className={styles.stats_container}>
          <OrderStats />
        </section>
      </div>
    </main>
  );
};

export default OrderFeedPage;