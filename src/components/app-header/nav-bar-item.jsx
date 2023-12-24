import styles from './app-header.module.css';
import PropTypes from 'prop-types';

const NavBarItem = ({text, isActive}) => (
  <button type='button' className={`${isActive && styles.textColor} ${styles.text} ${!isActive && 'text_color_inactive'} text text_type_main-default ml-2`}>
    {text}
  </button>
);

export default NavBarItem;

NavBarItem.propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool,
}; 