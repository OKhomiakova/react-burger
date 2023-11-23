import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useState, useEffect } from 'react';
import { DOMAIN_URL } from '../../constants';

const App = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(DOMAIN_URL)
      .then(response => {
        console.log(response)
        return response.json();
      })
      .then(response => {
        setIngredients(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении ингредиентов:', error);
      });
  }, []);

  return (
    <div>
      <header>
        <AppHeader />
      </header>
      <main className={styles.page}>
        {ingredients.length !== 0 && (
          <>
            <BurgerIngredients ingredients={ingredients} />
            <BurgerConstructor ingredients={ingredients} />
          </>
        )} 
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
