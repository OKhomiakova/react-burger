import IngredientCard from './ingredient-card';
import styles from './burger-ingredients.modules.css';
import data from '../../utils/data';

function IngredientGroup({ title, data }) {
    return (
      <div>
        <h2 className='text text_type_main-medium mt-10 mb-6'>{title}</h2>
        <div className="group-wrapper mr-4 ml-4">
          {data.map((ingredient) => (
            <div key={ingredient.id} className="ingredient-column">
              <IngredientCard data={ingredient} />
            </div>
          ))}
        </div>
      </div>
    );
}

export default IngredientGroup;