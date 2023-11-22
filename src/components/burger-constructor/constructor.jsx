import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import ingredientType from '../../utils/types';

const Constructor = ({data, type}) => {
  const isTopOrBottom = type === 'top' || type === 'bottom';
  const showDragIcon = !isTopOrBottom;
  const showAppendix = type === 'top' ? data.name + " (верх)" : type === 'bottom' ? data.name + " (низ)" : data.name;
  const isLocked = type === 'top' ? true : type === 'bottom' ? true : false;
  
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
      />
    </article>
  )
}

export default Constructor;

Constructor.propTypes = {
  type: PropTypes.string,
  data: ingredientType,
}; 