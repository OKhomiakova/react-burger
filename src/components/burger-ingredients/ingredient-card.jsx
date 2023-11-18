import data from '../../utils/data';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.modules.css';
import { useState } from 'react';

function IngredientCard({data}) {
    const [count, setCount] = useState(0);
    const handleCardClick = () => {
        setCount(count + 1);
    };
    return (
        <div className='card-wrapper' onClick={handleCardClick}>
            {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
            <img src={data.image} className='pr-4 pl-4' />
            <div className='price-wrapper pt-1 pb-1'>
                <p className="text text_type_digits-default">{data.price}</p> 
                <CurrencyIcon className='icon'/>
            </div>
            <p className="text text_type_main-default">{data.name}</p>
        </div>
    );
}

export default IngredientCard;
