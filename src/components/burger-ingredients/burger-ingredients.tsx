import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllIngredients } from '../../services/actions/all-ingredients';
import styles from './burger-ingredients.module.css';
import IngredientsTabs from './ingredients-tabs';
import IngredientsList from './ingredient-list';

const BurgerIngredients: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(setAllIngredients());
  }, [dispatch]);

  const ingredients = useSelector((state: any) => state.allIngredients);

  const [currentTab, setCurrentTab] = useState<number>(0);
  const burgerIngredientsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionsNodeList = document.querySelectorAll('.ingredient-group');
      const sectionsHeights = [...sectionsNodeList].slice(0, 2).reduce((acc, val) => {
        if (acc.length === 0) return [(val as HTMLElement).offsetHeight];
        return [...acc, acc[acc.length - 1] + (val as HTMLElement).offsetHeight];
      }, [0]);
      const currentScroll = burgerIngredientsRef.current?.scrollTop || 0;
      let minDistance = Number.MAX_VALUE;
      let closestTab;

      sectionsHeights.forEach((sectionHeight, index) => {
        const distance = Math.abs(currentScroll - sectionHeight);
        if (distance < minDistance) {
          minDistance = distance;
          closestTab = index;
        }
      });
      setCurrentTab(closestTab !== undefined ? closestTab : 1);
    };

    const scrollContainer = burgerIngredientsRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <section className={`${styles.column} pr-10`}>
      <div className={`${styles.heading} text text_type_main-medium pt-10 pb-5`}>
        <h1 className={styles.h1}>Соберите бургер</h1>
      </div>
      <IngredientsTabs currentTab={currentTab} />
      <div className={styles.ingredients} ref={burgerIngredientsRef}>
        <IngredientsList ingredients={ingredients} />
      </div>
    </section>
  );
};

export default BurgerIngredients;