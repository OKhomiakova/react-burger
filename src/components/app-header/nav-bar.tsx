import React, { ReactNode } from 'react';
import styles from './app-header.module.css';

type TNavBarProps = {
  children: ReactNode;
}

const NavBar: React.FC<TNavBarProps> = ({ children }) => (
  <header className={`${styles.header} p-4 m-15`}>
    {children}
  </header>
);

export default NavBar;