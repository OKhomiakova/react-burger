import styles from './home.module.css';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';   
 
const HomePage = () => {
    return (
        <div>
        <DndProvider backend={HTML5Backend}>
            <main className={styles.page}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </DndProvider>
        </div>
    );
}

export default HomePage;
