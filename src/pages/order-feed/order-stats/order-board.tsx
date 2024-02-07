import { RootState } from '../../../services/types';
import { useAppSelector } from '../../../utils/redux-hooks';
import styles from './order-board.module.css';

const OrderBoard = () => {

  const ordersSelector = (state: RootState) => state.orders.order;

  const ordersDone = useAppSelector(ordersSelector)
    ?.filter((item) => item.status === 'done')
    .slice(0, 5);
  
    const ordersPending = useAppSelector(ordersSelector)
    ?.filter((item) => item.status === 'pending')
    .slice(0, 5);
  
    return (
    <div className={styles.boardWrapper}>
      <div>
        <h2 className="mb-6 text text_type_main-medium">Готовы:</h2>
        <ul className={`${styles.orderNumbers} ${styles.orderNumbersReady}`}>
          {ordersDone?.map((order) => (
              <li key={order._id}>
                <span className="text text_type_digits-default">{order.number}</span>
              </li>
            ))}
        </ul>
      </div>
      <div className="ml-9">
        <h2 className="mb-6 text text_type_main-medium">В работе:</h2>
        <ul className={`${styles.orderNumbers}`}>
          {ordersPending?.map((order) => (
              <li key={order._id}>
                <span className="text text_type_digits-default">{order.number}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderBoard;