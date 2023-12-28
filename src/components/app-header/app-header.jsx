import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import NavBar from './nav-bar';
import NavBarItem from './nav-bar-item';
import styles from './app-header.module.css';
import { NavLink } from 'react-router-dom';

const AppHeader = () => (
    <NavBar>
        <NavLink className={`${styles.link} pr-2`} to={'/'}>
            {({ isActive }) => (
                <>
                    <div className={`${styles.icon} pl-5`}>
                        <BurgerIcon type={`${!isActive ? 'secondary' : 'primary'}`} />
                    </div>
                    <NavBarItem isActive={isActive} text='Конструктор' />
                </>
            )}
        </NavLink>
        <NavLink className={styles.link} to={'/profile/orders'}>
            {({ isActive }) => (
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
        <NavLink className={styles.placeholder}/>
        <NavLink className={styles.link} to={'/profile'} end>
            {({ isActive }) => (
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