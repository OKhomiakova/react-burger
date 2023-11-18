import { CurrencyIcon, Button, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import Constructor from './constructor';
import data from '../../utils/data';
import styles from './burger-constructor.modules.css';
import PropTypes from 'prop-types';

function BurgerConstructor() {
  return (
    <div className='column-1 pt-25'>
        <div className='constructor'>
            {data.map((ingredient, index) => {
              const type = index === 0
                ? "top" // первый элемент
                : index === data.length - 1
                ? "bottom" // последний элемент
                : undefined; // остальные элементы
              return (<Constructor key={ingredient.id} data={ingredient} type={type} />);
            })}
        </div>
        <div className='check-out-wrapper pt-10 '>
          <div className='total-price pr-10'>
            <p className='text text_type_digits-medium '>
              610
            </p>
            <div className='icon'>
              <CurrencyIcon />
            </div>
          </div>
          <Button htmlType="button" type="primary" size="large">
              Оформить заказ
          </Button>
        </div>
    </div>
  );
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number, 
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
}; 