import React, { useState, useEffect, useCallback } from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop } from 'react-dnd';
import { useNavigate } from 'react-router-dom';
import { addBurgerIngredient } from '../../services/actions/burger-constructor-ingredients';
import { createOrder } from '../../services/actions/created-order';
import Constructor from './constructor';
import Modal from '../modal/modal';
import OrderDetails from './order-details';
import useModal from '../../hooks/useModal';
import styles from './burger-constructor.module.css';
import TIngredientType from '../../utils/types';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';

const BurgerConstructor: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const dispatch = useAppDispatch();
  const ingredients = useAppSelector((state) => state.burgerIngredients.notBun);
  const bun = useAppSelector((state) => state.burgerIngredients.bun);
  const user = useAppSelector((state) => state.user.user);

  const navigate = useNavigate();

  useEffect(() => {
    const newTotalPrice = ingredients.reduce((sum: number, ingredient: TIngredientType) => sum + ingredient.price, 0) + 2 * (bun?.price ?? 0);
    setTotalPrice(newTotalPrice);
  }, [ingredients, bun?.price]);

  const { isModalOpen, openModal, closeModal } = useModal();

  const orderId = useAppSelector((state) => state.createdOrder);

  const onClick = useCallback(() => {
    if (user) {
      const allIngredientsIds = ingredients.map((x: TIngredientType) => x._id);
      if (bun) allIngredientsIds.push(bun._id);
      // @ts-ignore
      dispatch(createOrder({ ingredients: allIngredientsIds }));
      openModal();
    } else {
      navigate('/login');
    }
  }, [ingredients, bun, dispatch, openModal, navigate, user]);

  const [, drop] = useDrop({
    accept: 'INGREDIENT',
    drop: (item: any) => {
      dispatch(addBurgerIngredient(item.ingredient));
    },
  });

  return (
    <section className={`${styles.column} pt-25`} ref={drop}>
      {bun && <Constructor data={bun} type='top' className={styles.edge} />}
      <div className={styles.constructorWrapper}>
        {ingredients
          .filter((ingredient: any) => ingredient.type !== 'bun')
          .map((ingredient: any, index: number) => (
            <Constructor key={ingredient.uniqueId} data={ingredient} position={index} type={undefined}/>
          ))}
      </div>
      {bun && <Constructor data={bun} type='bottom' className={styles.edge} />}
      <div className={`${styles.checkout} pt-10`}>
        <div className={`${styles.total} pr-10`}>
          <p className={`text text_type_digits-medium`}>{totalPrice}</p>
          <div className={styles.icon}>
            <CurrencyIcon type='primary'/>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={onClick}
            disabled={ingredients.length === 0 && !bun}
          >
            {isModalOpen && !orderId ? 'Ожидайте...' : 'Оформить заказ'}
          </Button>
          {orderId && isModalOpen && (
            <Modal onClose={closeModal}>
              <OrderDetails />
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

export default BurgerConstructor;