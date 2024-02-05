import styles from './order-board.module.css';

const OrderBoard = () => {
  return (
    <div className={styles.boardWrapper}>
      <div>
        <h2 className="mb-6 text text_type_main-medium">Готовы:</h2>
        <ul className={`${styles.orderNumbers} ${styles.orderNumbersReady}`}>
            <li>
              <span className="text text_type_digits-default">034533</span>
            </li>
            <li>
              <span className="text text_type_digits-default">034532</span>
            </li>
            <li>
              <span className="text text_type_digits-default">034531</span>
            </li>
            <li>
              <span className="text text_type_digits-default">034530</span>
            </li>
            <li>
              <span className="text text_type_digits-default">034529</span>
            </li>
        </ul>
      </div>
      <div className="ml-9">
        <h2 className="mb-6 text text_type_main-medium">В работе:</h2>
        <ul className={`${styles.orderNumbers}`}>
            <li>
              <span className="text text_type_digits-default">034533</span>
            </li>
            <li>
              <span className="text text_type_digits-default">034532</span>
            </li>
            <li>
              <span className="text text_type_digits-default">034531</span>
            </li>
            <li>
              <span className="text text_type_digits-default">034530</span>
            </li>
            <li>
              <span className="text text_type_digits-default">034529</span>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderBoard;