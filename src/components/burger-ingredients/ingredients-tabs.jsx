import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './burger-ingredients.module.css';

const IngredientsTabs = ({ currentTab }) => {
    return (
        <div className={styles.tab}>
            <Tab value="one" active={currentTab === 'one'}>
                Булки
            </Tab>
            <Tab value="two" active={currentTab === 'two'}>
                Соусы
            </Tab>
            <Tab value="three" active={currentTab === 'three'}>
                Начинки
            </Tab>
        </div>
    );
}

export default IngredientsTabs;