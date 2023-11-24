import styles from './app-header.module.css';
import PropTypes from 'prop-types';

const NavBar = ({children}) => (
    <header className={`${styles.header} p-4 m-15`}>
      {children}
    </header>
);

export default NavBar;

NavBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}; 