import React from 'react';
import IngredientCard from './ingredient-card';
import styles from './burger-ingredients.module.css';
import TIngredientType from '../../utils/types';

type TIngredientGroupProps = {
  title: string;
  data: TIngredientType[];
};

const IngredientGroup: React.FC<TIngredientGroupProps> = ({ title, data }) => {
  return (
    <div className="ingredient-group">
      <h2 className={`text text_type_main-medium mt-10 mb-6`}>{title}</h2>
      <div className={`${styles.group} mr-4 ml-4`}>
        {data.map((ingredient) => (
          <IngredientCard ingredient={ingredient} key={ingredient._id} />
        ))}
      </div>
    </div>
  );
};

export default IngredientGroup;