import styles from './app-header.module.css';

function NavBar({children}) {
    return (
      <header className={`${styles.header} p-4 m-15`}>
        {children}
      </header>
    );
  }

  export default NavBar;