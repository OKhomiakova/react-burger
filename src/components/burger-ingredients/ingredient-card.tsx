import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { TIngredientType } from '../../utils/types';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../utils/redux-hooks';

type TIngredientCardProps = {
  ingredient: TIngredientType;
};

const IngredientCard: React.FC<TIngredientCardProps> = ({ ingredient }) => {
  const [, drag] = useDrag({
    type: 'INGREDIENT',
    item: { ingredient },
  });

  const ingredientCount = useAppSelector((state) => {
    if (ingredient.type === 'bun') {
      return state.burgerIngredients.bun?._id === ingredient._id ? 1 : 0;
    }
    return state.burgerIngredients.notBun.filter((x) => x._id === ingredient._id).length;
  });

  const location = useLocation();
  const ingredientId = ingredient._id;

  return (
    <Link key={ingredientId} to={`/ingredients/${ingredientId}`} state={{ background: location }} className={styles.link}>
      <div className={styles.cardWrapper} ref={drag}>
        <article className={styles.card}>
          {ingredientCount > 0 &&
          <div aria-label="ingredient_counter">
            <Counter count={ingredientCount} size="default" extraClass="m-1"/>
          </div>
          }
          <img src={ingredient.image} className={`pr-4 pl-4`} alt={ingredient.name} />
          <div className={`${styles.price} pt-1 pb-1`}>
            <p className={`text text_type_digits-default`}>{ingredient.price}</p>
            <div className={styles.icon}>
              <CurrencyIcon type='primary'/>
            </div>
          </div>
          <p className={`text text_type_main-default`}>{ingredient.name}</p>
        </article>
      </div>
    </Link>
  );
};

export default IngredientCard;