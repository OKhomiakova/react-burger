import React from 'react';
import IngredientGroup from './ingredient-group';
import { TIngredientType } from '../../utils/types';

type TIngredientsListProps = {
  ingredients: TIngredientType[];
};

const IngredientsList: React.FC<TIngredientsListProps> = ({ ingredients }) => {
  const groupedIngredients: Record<string, TIngredientType[]> = ingredients.reduce(
    (groups: Record<string, TIngredientType[]>, ingredient: TIngredientType) => {
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
    <div data-cy="ingredients">
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