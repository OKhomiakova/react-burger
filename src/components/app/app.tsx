import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  return (
    <div>
      <header>
        <AppHeader />
      </header>
      <main className={styles.page}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
