import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { useState } from 'react';
import ingredientType from '../../utils/types';
import Modal from '../modal/modal';
import IngredientDetails from './ingredient-details';
import useModal from '../../hooks/useModal';
import { useDispatch } from 'react-redux';
import { deleteIngredientDetails, setIngredientDetails } from '../../services/actions/selected-ingredient';

const IngredientCard = ({data}) => {
    
    const dispatch = useDispatch();

    const handleOnClick = () => {
      dispatch(setIngredientDetails(data));
      openModal();
    }

    const handleOnClose = () => {
        dispatch(deleteIngredientDetails());
        closeModal();
    }

    // const [count, setCount] = useState(0);
    // const handleCardClick = () => {
    //     setCount(count + 1);
    // };

    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <div className={styles.cardWrapper}>
            <article className={styles.card} onClick={handleOnClick} >
                {/* {count > 0 && <Counter count={count} size="default" extraClass="m-1" />} */}
                <img src={data.image} className={`pr-4 pl-4`} alt={data.name} />
                <div className={`${styles.price} pt-1 pb-1`}>
                    <p className={`text text_type_digits-default`}>{data.price}</p> 
                    <CurrencyIcon className={styles.icon}/>
                </div>
                <p className={`text text_type_main-default`}>{data.name}</p>
            </article>
            {isModalOpen && 
            <Modal title="Детали ингредиента" onClose={handleOnClose}>
              <IngredientDetails />
            </Modal>}
        </div>
    );
}

export default IngredientCard;

IngredientCard.propTypes = {
    data: ingredientType,
}; 