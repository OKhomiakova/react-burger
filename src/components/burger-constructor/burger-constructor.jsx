import { CurrencyIcon, Button, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import Constructor from './constructor';
import styles from './burger-constructor.module.css';
import Modal from '../modal/modal';
import OrderDetails from './order-details';
import ingredientType from '../../utils/types';
import PropTypes from 'prop-types';
import useModal from '../../hooks/useModal';

const BurgerConstructor = ({ ingredients }) => {
  const bun = ingredients.find((item) => {
    return item._id === '643d69a5c3f7b9001cfa093c';
  });

  const { isModalOpen, openModal, closeModal } = useModal();

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
              610
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

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
}; 