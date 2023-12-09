import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const App = () => {
  return (
    <div>
      <AppHeader />
      <main className={styles.page}>
          <BurgerIngredients />
          <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
