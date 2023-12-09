import { CurrencyIcon, Button, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import Constructor from './constructor';
import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from './order-details';
import ingredientType from '../../utils/types';
import PropTypes from 'prop-types';
import useModal from '../../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { addBurgerIngredient } from '../../services/actions/burger-constructor-ingredients';
import { createOrder } from '../../services/actions/created-order';
import { useEffect, useMemo, useState } from 'react';

const BurgerConstructor = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.burgerIngredients);

  useEffect(() => {
    const newTotalPrice = ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0);
    setTotalPrice(newTotalPrice);
  }, [ingredients]);

  const bun = ingredients.find((item) => {
    return item._id === '643d69a5c3f7b9001cfa093c';
  });

  const { isModalOpen, openModal, closeModal } = useModal();

  const handleCheckout = () => {
    dispatch(createOrder());
  };

  const memoizedTotalPrice = useMemo(() => totalPrice, [totalPrice]);

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
              {memoizedTotalPrice}
            </p>
            <div className={styles.icon}>
              <CurrencyIcon />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Button htmlType="button" type="primary" size="large" onClick={openModal}>
                Оформить заказ
            </Button>
            {isModalOpen && 
            <Modal onClose={closeModal}>
              <OrderDetails/>
            </Modal>}
          </div>
        </div>
    </section>
  );
}

export default BurgerConstructor;