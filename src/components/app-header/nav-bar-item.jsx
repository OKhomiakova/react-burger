import styles from './app-header.module.css';
import PropTypes from 'prop-types';

function NavBarItem({text}) {
    return (
        <button type='button' className={`${styles.text} text text_type_main-default`}>{text}</button>
    );
  }

export default NavBarItem;

NavBarItem.propTypes = {
  text: PropTypes.string,
}; 