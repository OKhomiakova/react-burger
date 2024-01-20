import React from 'react';
import IngredientGroup from './ingredient-group';
import ingredientType from '../../utils/types';

type TIngredientsListProps = {
  ingredients: ingredientType[];
};

const IngredientsList: React.FC<TIngredientsListProps> = ({ ingredients }) => {
  const groupedIngredients: Record<string, ingredientType[]> = ingredients.reduce(
    (groups, ingredient) => {
      const type = ingredient.type;
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(ingredient);
      return groups;
    },
    {}
  );

  return (
    <div>
      {groupedIngredients.bun && (
        <IngredientGroup title="Булки" data={groupedIngredients.bun} />
      )}
      {groupedIngredients.sauce && (
        <IngredientGroup title="Соусы" data={groupedIngredients.sauce} />
      )}
      {groupedIngredients.main && (
        <IngredientGroup title="Начинки" data={groupedIngredients.main} />
      )}
    </div>
  );
};

export default IngredientsList;