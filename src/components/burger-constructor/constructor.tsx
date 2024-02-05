import React, { useCallback, useRef } from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { TIngredientType } from '../../utils/types';
import { deleteBurgerIngredient } from '../../services/actions/burger-constructor-ingredients';
import { useDrop, useDrag } from 'react-dnd';
import { changeOrder } from '../../services/actions/burger-constructor-ingredients';
import { useAppDispatch } from '../../utils/redux-hooks';

type TConstructorProps = {
  data: TIngredientType;
  type: "top" | "bottom" | undefined;
  position?: number;
};

const Constructor: React.FC<TConstructorProps & { className?: string}> = ({ data, type, position }) => {
  const dispatch = useAppDispatch();
  const isTopOrBottom = type === 'top' || type === 'bottom';
  const showDragIcon = !isTopOrBottom;
  const showAppendix =
    type === 'top' ? `${data.name} (верх)` : type === 'bottom' ? `${data.name} (низ)` : data.name;
  const isLocked = type === 'top' ? true : type === 'bottom' ? true : false;

  const handleClose = useCallback(() => {
    if (position) {
      dispatch(deleteBurgerIngredient(position));
    }
  }, [dispatch, position]);

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'orderItems',
    drop: (item) => {
      // @ts-ignore
      dispatch(changeOrder(item.position, position));
    },
  });

  const [, drag] = useDrag({
    type: 'orderItems',
    item: () => {
      return { data, position };
    },
  });

  drag(drop(ref));

  return (
    <article
      ref={ref}
      style={{ paddingLeft: isTopOrBottom ? '32px' : '0', margin: isTopOrBottom ? '0px' : '10px' }}
      className={styles.item}
    >
      {showDragIcon && (
        <div className={styles.icon}>
          <DragIcon type='primary' />
        </div>
      )}
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={showAppendix}
        price={data.price}
        thumbnail={data.image}
        handleClose={handleClose}
      />
    </article>
  );
};

export default Constructor;