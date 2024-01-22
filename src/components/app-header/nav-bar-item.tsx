import React from 'react';
import styles from './app-header.module.css';

type TNavBarItemProps = {
  text: string;
  isActive: boolean;
};

const NavBarItem: React.FC<TNavBarItemProps> = ({ text, isActive }) => (
  <button
    type='button'
    className={`${isActive && styles.textColor} ${styles.text} ${
      !isActive && 'text_color_inactive'
    } text text_type_main-default ml-2`}
  >
    {text}
  </button>
);

export default NavBarItem;