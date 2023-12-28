import styles from './burger-ingredients.module.css'
import IngredientsTabs from './ingredients-tabs';
import IngredientsList from './ingredient-list';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllIngredients } from '../../services/actions/all-ingredients';

const BurgerIngredients = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllIngredients());
  }, [dispatch]);

  const ingredients = useSelector(state => state.allIngredients);

  const [currentTab, setCurrentTab] = useState(0);
  const burgerIngredientsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionsNodeList = document.querySelectorAll('.ingredient-group')
      const sectionsHeights = [...sectionsNodeList].slice(0, 2).reduce((acc, val) => {
          if (acc.length === 0) return [val.offsetHeight];
          return [...acc, acc[acc.length - 1] + val.offsetHeight];
        }, [0]);
      const currentScroll = burgerIngredientsRef.current.scrollTop;
      let minDistance = Number.MAX_VALUE;
      let closestTab;

      sectionsHeights.forEach((sectionHeight, index) => {
        const distance = Math.abs(currentScroll - sectionHeight);
        if (distance < minDistance) {
          minDistance = distance;
          closestTab = index;
        }
      });
      setCurrentTab(closestTab);
    };

    const scrollContainer = burgerIngredientsRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${styles.column} pr-10`}>
      <div className={`${styles.heading} text text_type_main-medium pt-10 pb-5`}>
        <h1 className={styles.h1}>Соберите бургер</h1>
      </div>
      <IngredientsTabs currentTab={currentTab}/>
      <div className={styles.ingredients} ref={burgerIngredientsRef}>
        <IngredientsList ingredients={ingredients}/>
      </div>
    </section>
  )
};

export default BurgerIngredients;