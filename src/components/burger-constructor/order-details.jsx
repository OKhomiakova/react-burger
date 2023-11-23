import { Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css';
import doneImage from '../../images/done.png';

const OrderDetails = () => (
    <div className={`${styles.order} pl-30 pr-30`}>
        <p className={`text text_type_digits-large mt-30 mb-8`}>034536</p>
        <p className={`text text_type_main-medium`}>идентификатор заказа</p>
        <img src={doneImage} alt="Done" className={`mt-15 mb-15`} /> 
        <p className={`text text_type_main-small mb-2`}>Ваш заказ начали готовить</p>
        <p className={`text text_type_main-default text_color_inactive mb-30`}>Дождитесь готовности на орбитальной станции</p>
    </div>
);

export default OrderDetails;