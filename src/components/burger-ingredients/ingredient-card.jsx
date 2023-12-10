import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import ingredientType from '../../utils/types';
import Modal from '../modal/modal';
import IngredientDetails from './ingredient-details';
import useModal from '../../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIngredientDetails, setIngredientDetails } from '../../services/actions/selected-ingredient';
import { useDrag } from 'react-dnd';

const IngredientCard = ({ ingredient }) => {
    const [, drag] = useDrag({
      type: 'INGREDIENT',
      item: { ingredient },
    });
    
    const dispatch = useDispatch();

    const handleOnClick = () => {
      dispatch(setIngredientDetails(ingredient));
      openModal();
    }

    const handleOnClose = () => {
      dispatch(deleteIngredientDetails());
      closeModal();
    }

    const { isModalOpen, openModal, closeModal } = useModal();

    const ingredientCount = useSelector(state => {
      if (ingredient.type === 'bun') {
        return state.burgerIngredients.bun?._id === ingredient._id ? 1 : 0;
      }
      return state.burgerIngredients.notBun.filter(x => x._id === ingredient._id).length;
    });

    return (
        <div className={styles.cardWrapper} ref={drag}>
            <article className={styles.card} onClick={handleOnClick} >
                {ingredientCount > 0 && <Counter count={ingredientCount} size="default" extraClass="m-1" />}
                <img src={ingredient.image} className={`pr-4 pl-4`} alt={ingredient.name} />
                <div className={`${styles.price} pt-1 pb-1`}>
                    <p className={`text text_type_digits-default`}>{ingredient.price}</p> 
                    <CurrencyIcon className={styles.icon}/>
                </div>
                <p className={`text text_type_main-default`}>{ingredient.name}</p>
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
    ingredient: ingredientType,
}; 