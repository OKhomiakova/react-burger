import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import IngredientsTabs from './ingredients-tabs';
import IngredientsList from './ingredient-list';
import ingredientType from '../../utils/types';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAllIngredients } from '../../services/actions/all-ingredients';

const BurgerIngredients = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setAllIngredients());
  }, []);

  const [currentTab, setCurrentTab] = React.useState('one');

  const burgerIngredientsRef = React.useRef(null);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCurrentTab(entry.target.getAttribute('data-tab'));
      }
    });
  }, { threshold: 0.5 });

  React.useEffect(() => {
    const tabs = document.querySelectorAll(`.tab[value="${currentTab}"]`); 
    tabs.forEach((tab) => {
      observer.observe(tab);
    });
  
    return () => {
      tabs.forEach((tab) => {
        observer.unobserve(tab);
      });
    };
  }, [observer]);
    
  return (
    <section className={`${styles.column} pr-10`} ref={burgerIngredientsRef}>
      <div className={`${styles.heading} text text_type_main-medium pt-10 pb-5`}>
        <h1 className={styles.h1}>Соберите бургер</h1>
      </div>
      <IngredientsTabs currentTab={currentTab}/>
      <div className={styles.ingredients}>
        <IngredientsList ingredients={ingredients} />
      </div>
    </section>
  )
};

export default BurgerIngredients;