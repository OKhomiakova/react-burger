import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';

const IngredientsTabs = ({ currentTab }) => {
    return (
        <div className={styles.tab}>
            <Tab value="one" active={currentTab === 0}>
                Булки
            </Tab>
            <Tab value="two" active={currentTab === 1}>
                Соусы
            </Tab>
            <Tab value="three" active={currentTab === 2}>
                Начинки
            </Tab>
        </div>
    );
}

export default IngredientsTabs;

IngredientsTabs.propTypes = {
    currentTab: PropTypes.number,
}; 