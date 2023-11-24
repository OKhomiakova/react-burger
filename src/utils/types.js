import PropTypes from 'prop-types';

const ingredientType = PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number, 
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
}); 

export default ingredientType;