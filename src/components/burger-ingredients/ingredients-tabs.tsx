import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';

type TIngredientsTabsProps = {
  currentTab: number;
};

const IngredientsTabs: React.FC<TIngredientsTabsProps> = ({ currentTab }) => {
  return (
    <div className={styles.tab}>
      <Tab value="one" active={currentTab === 0} onClick={()=>{}}>
        Булки
      </Tab>
      <Tab value="two" active={currentTab === 1} onClick={()=>{}}>
        Соусы
      </Tab>
      <Tab value="three" active={currentTab === 2} onClick={()=>{}}>
        Начинки
      </Tab>
    </div>
  );
}

export default IngredientsTabs;
