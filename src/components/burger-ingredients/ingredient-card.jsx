import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { useState } from 'react';
import ingredientType from '../../utils/types';
import Modal from '../modal/modal';
import IngredientDetails from './ingredient-details';

const IngredientCard = ({data}) => {
    // const [count, setCount] = useState(0);
    // const handleCardClick = () => {
    //     setCount(count + 1);
    // };

    const [visible, setVisible] = useState(false);

    const handleOpenModal = () => {
      setVisible(true);
    };
  
    const handleCloseModal = () => {
      setVisible(false);
    };

    return (
        <div style={{overflow: 'hidden'}}>
            <article className={styles.card} onClick={handleOpenModal}>
                {/* {count > 0 && <Counter count={count} size="default" extraClass="m-1" />} */}
                <img src={data.image} className={`pr-4 pl-4`} />
                <div className={`${styles.price} pt-1 pb-1`}>
                    <p className={`text text_type_digits-default`}>{data.price}</p> 
                    <CurrencyIcon className={styles.icon}/>
                </div>
                <p className={`text text_type_main-default`}>{data.name}</p>
            </article>
            {visible && 
            <Modal title="Детали ингредиента" onClose={handleCloseModal}>
              <IngredientDetails ingredient={data}/>
            </Modal>}
        </div>
    );
}

export default IngredientCard;

IngredientCard.propTypes = {
    data: ingredientType,
}; 