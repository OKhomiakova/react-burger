import { CurrencyIcon, Button, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import Constructor from './constructor';
import data from '../../utils/data';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';

function BurgerConstructor() {
  const bun = data.find(function (item) {
    return item._id === '60666c42cc7b410027a1a9b1';
  });
  return (
    <section className={`${styles.column} pt-25`}>
        <Constructor data={bun} type='top' className={styles.edge}/>
        <div className={styles.constructor}>
            {data.map((ingredient) => {
              return (<Constructor key={ingredient._id} data={ingredient} />);
            })}
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
          <Button htmlType="button" type="primary" size="large">
              Оформить заказ
          </Button>
        </div>
    </section>
  );
}

export default BurgerConstructor;