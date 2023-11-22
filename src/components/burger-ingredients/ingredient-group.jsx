import IngredientCard from './ingredient-card';
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import ingredientType from '../../utils/types';

const IngredientGroup = ({ title, data }) => (
  <div>
    <h2 className={`text text_type_main-medium mt-10 mb-6`}>{title}</h2>
    <div className={`${styles.group} mr-4 ml-4`}>
      {data.map((ingredient) => (
        <div key={ingredient._id}>
          <IngredientCard data={ingredient} />
        </div>
      ))}
    </div>
  </div>
);

export default IngredientGroup;


IngredientGroup.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(ingredientType).isRequired,
}; 