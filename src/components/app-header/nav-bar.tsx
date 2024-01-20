import React, { ReactNode } from 'react';
import styles from './app-header.module.css';

interface NavBarProps {
  children: ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => (
  <header className={`${styles.header} p-4 m-15`}>
    {children}
  </header>
);

export default NavBar;