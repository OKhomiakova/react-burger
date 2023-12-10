import IngredientGroup from './ingredient-group';
import ingredientType from '../../utils/types';
import PropTypes from 'prop-types';

const IngredientsList = ({ ingredients, openModal }) => {
  const groupedIngredients = ingredients.reduce((groups, ingredient) => {
    const type = ingredient.type;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(ingredient);
    return groups;
  }, {});
  
  return (
    <div>
      {groupedIngredients.bun && (
        <IngredientGroup title="Булки" data={groupedIngredients.bun} openModal={openModal} />
      )}
      {groupedIngredients.sauce && (
        <IngredientGroup title="Соусы" data={groupedIngredients.sauce} openModal={openModal} />
      )}
      {groupedIngredients.main && (
        <IngredientGroup title="Начинки" data={groupedIngredients.main} openModal={openModal} />
      )}
    </div>
  );
}

export default IngredientsList;

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
  openModal: PropTypes.func.isRequired,
}; 