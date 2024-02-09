import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import NavBar from './nav-bar';
import NavBarItem from './nav-bar-item';
import styles from './app-header.module.css';

const AppHeader: React.FC = () => (
  <NavBar>
    <NavLink className={`${styles.link} pr-2`} to={'/'}>
      {({ isActive }: { isActive: boolean }) => (
        <>
          <div className={`${styles.icon} pl-5`}>
            <BurgerIcon type={`${!isActive ? 'secondary' : 'primary'}`} />
          </div>
          <NavBarItem isActive={isActive} text='Конструктор' />
        </>
      )}
    </NavLink>
    <NavLink className={styles.link} to={'/feed'}>
      {({ isActive }: { isActive: boolean }) => (
        <>
          <div className={`${styles.icon} pl-5 pr-2`}>
            <ListIcon type={`${!isActive ? 'secondary' : 'primary'}`} />
          </div>
          <NavBarItem isActive={isActive} text='Лента заказов' />
        </>
      )}
    </NavLink>
    <NavLink className={styles.logo} to={'/'}>
      <Logo />
    </NavLink>
    <NavLink className={styles.placeholder} to={''}/>
    <NavLink className={styles.link} to={'/profile'} end>
      {({ isActive }: { isActive: boolean }) => (
        <>
          <div className={`${styles.icon} pl-5 pr-2`}>
            <ProfileIcon type={`${!isActive ? 'secondary' : 'primary'}`} />
          </div>
          <NavBarItem isActive={isActive} text='Личный кабинет' />
        </>
      )}
    </NavLink>
  </NavBar>
);

export default AppHeader;
