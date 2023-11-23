import { CurrencyIcon, Button, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import Constructor from './constructor';
import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import { useState } from 'react';
import OrderDetails from './order-details';

const BurgerConstructor = ({ ingredients }) => {
  const bun = ingredients.find((item) => {
    return item._id === '643d69a5c3f7b9001cfa093c';
  });

  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <section className={`${styles.column} pt-25`}>
        <Constructor data={bun} type='top' className={styles.edge}/>
        <div className={styles.constructor}>
          {ingredients
            .filter((ingredient) => ingredient.type !== 'bun')
            .map((ingredient) => (
                <Constructor key={ingredient._id} data={ingredient} />
          ))}
        </div>
        <Constructor data={bun} type='bottom' className={styles.edge}/>
        <div className={`${styles.checkout} pt-10`}>
          <div className={`${styles.total} pr-10`}>
            <p className={`text text_type_digits-medium`}>
              610
            </p>
            <div className={styles.icon}>
              <CurrencyIcon />
            </div>
          </div>
          <div style={{overflow: 'hidden'}}>
            <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>
                Оформить заказ
            </Button>
            {visible && 
            <Modal onClose={handleCloseModal}>
              <OrderDetails/>
            </Modal>}
          </div>
        </div>
    </section>
  );
}

export default BurgerConstructor;