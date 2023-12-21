import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import NavBar from './nav-bar';
import NavBarItem from './nav-bar-item';
import styles from './app-header.module.css';

const AppHeader = () => (
    <NavBar>
        <a className={`${styles.link} pr-2`} href='/'>
            <div className={`${styles.icon} pl-5 pr-2`}>
                <BurgerIcon type="secondary" />
            </div>
            <NavBarItem text='Конструктор' />
        </a>
        <a className={styles.link} href='/profile/orders'>
            <div className={`${styles.icon} pl-5 pr-2`}>
                <ListIcon type="secondary" />
            </div>
            <NavBarItem text='Лента заказов' />
        </a>
        <div className={styles.logo}>
            <Logo />
        </div>
        <a className={styles.placeholder}/>
        <a className={styles.link} href='/profile'>
            <div className={`${styles.icon} pl-5 pr-2`}>
                <ProfileIcon type="secondary" />
            </div>
            <NavBarItem text='Личный кабинет' />
        </a>
    </NavBar>
);

export default AppHeader;