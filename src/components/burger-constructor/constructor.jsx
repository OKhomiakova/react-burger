import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import ingredientType from '../../utils/types';
import { useDispatch } from 'react-redux';
import { deleteBurgerIngredient } from '../../services/actions/burger-constructor-ingredients';
import { useCallback } from 'react';

const Constructor = ({ data, type, position }) => {
  const dispatch = useDispatch();
  const isTopOrBottom = type === 'top' || type === 'bottom';
  const showDragIcon = !isTopOrBottom;
  const showAppendix = type === 'top' ? data.name + " (верх)" : type === 'bottom' ? data.name + " (низ)" : data.name;
  const isLocked = type === 'top' ? true : type === 'bottom' ? true : false;
  
  const handleClose = useCallback(
    () => {
      dispatch(deleteBurgerIngredient(position));
    },
    [dispatch, position],
  );

  return (
    <article style={{paddingLeft: isTopOrBottom ? '32px' : '0', margin: isTopOrBottom ? '0px' : '10px'}} className={styles.item}>
      {showDragIcon && (
        <div className={styles.icon}>
          <DragIcon />
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
  )
}

export default Constructor;

Constructor.propTypes = {
  type: PropTypes.string,
  data: ingredientType,
}; 