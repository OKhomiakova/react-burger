import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Constructor from './constructor';
import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from './order-details';
import useModal from '../../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { addBurgerIngredient, updateBurgerIngredientsOrder } from '../../services/actions/burger-constructor-ingredients';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDrop } from 'react-dnd';
import { createOrder } from '../../services/actions/created-order';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const BurgerConstructor = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.burgerIngredients);

  useEffect(() => {
    const newTotalPrice = ingredients.reduce((sum, ingredient) => sum + ingredient.price * (ingredient.type === 'bun' ? 2 : 1), 0);
    setTotalPrice(newTotalPrice);
  }, [ingredients]);

  const bun = ingredients.find((item) => {
    return item.type === 'bun';
  });

  const { isModalOpen, openModal, closeModal } = useModal();
  const orderId = useSelector(state => state.createdOrder);

  const onCLick = useCallback(
    () => {
      dispatch(createOrder({ ingredients: ingredients.map(x => x._id) }));
      openModal();
    }
  , [dispatch, openModal, ingredients]);

  const memoizedTotalPrice = useMemo(() => totalPrice, [totalPrice]);

  const [, drop] = useDrop({
    accept: 'INGREDIENT',
    drop: (item) => {
      dispatch(addBurgerIngredient(item.ingredient));
    },
  });

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newOrder = Array.from(ingredients);
    const [removed] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, removed);

    dispatch(updateBurgerIngredientsOrder(newOrder));
  };

  return (
    <section className={`${styles.column} pt-25`} ref={drop}>
      {bun && <Constructor data={bun} type='top' className={styles.edge} />}
      <div className={styles.constructor}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="ingredients">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {ingredients.map((ingredient, index) => (
                    <Draggable key={ingredient._id} draggableId={ingredient._id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Constructor data={ingredient} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
      </div>
      {bun && <Constructor data={bun} type='bottom' className={styles.edge} />}
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
            <Button htmlType="button" type="primary" size="large" onClick={onCLick} disabled={ingredients.length === 0}>
                {isModalOpen && !orderId? "Ожидайте..." : "Оформить заказ"}
            </Button>
            {orderId && isModalOpen && 
            <Modal onClose={closeModal}>
              <OrderDetails/>
            </Modal>}
          </div>
        </div>
    </section>
  );
}

export default BurgerConstructor;