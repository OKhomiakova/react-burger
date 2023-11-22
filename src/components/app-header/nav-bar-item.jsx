import styles from './app-header.module.css';
import PropTypes from 'prop-types';

const NavBarItem = ({text}) => (
  <button type='button' className={`${styles.text} text text_type_main-default`}>
    {text}
  </button>
);

export default NavBarItem;

NavBarItem.propTypes = {
  text: PropTypes.string,
}; 