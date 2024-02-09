import React from 'react';
import styles from './order-details.module.css';
import OrderFeedDetails from '../../components/order-feed-details/order-feed-details';

const OrderDetailsPage: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <OrderFeedDetails />
    </section>
  );
}

export default OrderDetailsPage;