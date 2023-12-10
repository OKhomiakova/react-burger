import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Constructor from './constructor';
import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from './order-details';
import useModal from '../../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { addBurgerIngredient } from '../../services/actions/burger-constructor-ingredients';
import { createOrder } from '../../services/actions/created-order';
import { useEffect, useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';

const BurgerConstructor = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.burgerIngredients.notBun);
  const bun = useSelector((state) => state.burgerIngredients.bun);

  useEffect(() => {
    const newTotalPrice = ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0) + 2 * (bun?.price ?? 0);
    setTotalPrice(newTotalPrice);
  }, [ingredients, bun?.price]);

  const { isModalOpen, openModal, closeModal } = useModal();

  const orderId = useSelector(state => state.createdOrder);

  const onCLick = useCallback(
    () => {
      const allIngredientsIds = ingredients.map(x => x._id);
      if (bun) allIngredientsIds.push(bun._id);
      dispatch(createOrder({ ingredients: allIngredientsIds }));
      openModal();
    }
  , [dispatch, openModal, ingredients, bun]);

  const [, drop] = useDrop({
    accept: 'INGREDIENT',
    drop: (item) => {
      dispatch(addBurgerIngredient(item.ingredient));
    },
  });


  return (
    <section className={`${styles.column} pt-25`} ref={drop}>
        {bun && <Constructor data={bun} type='top' className={styles.edge}/>}
        <div className={styles.constructor}>
          {ingredients
            .filter((ingredient) => ingredient.type !== 'bun')
            .map((ingredient, index) => (
                <Constructor key={`${ingredient._id}+${index}`} data={ingredient} position={index} />
          ))}
        </div>
        {bun && <Constructor data={bun} type='bottom' className={styles.edge}/>}
        <div className={`${styles.checkout} pt-10`}>
          <div className={`${styles.total} pr-10`}>
            <p className={`text text_type_digits-medium`}>
              {totalPrice}
            </p>
            <div className={styles.icon}>
              <CurrencyIcon />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Button htmlType="button" type="primary" size="large" onClick={onCLick} disabled={ingredients.length === 0 && !bun}>
                {isModalOpen && !orderId? "Ожидайте..." : "Оформить заказ"}
            </Button>
            {orderId && isModalOpen && 
            <Modal onClose={closeModal}>
              <OrderDetails/>
            </Modal>}
          </div>
        </div>
    </section>
  )
};

export default BurgerConstructor;