import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  return (
    <div>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={styles.page}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
      </DndProvider>
    </div>
  );
}

export default App;
