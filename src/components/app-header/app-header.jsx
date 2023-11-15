import { BurgerIcon, ListIcon, Logo, ProfileIcon, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components'
import NavBar from './nav-bar';
import NavBarItem from './nav-bar-item';
import styles from './app-header.css';

function AppHeader() {
  return (
    <NavBar>
        <div className='wrapper-2'>
            <div className="pr-2 wrapper-2">
                <div className="pl-5 pr-2 ok">
                    <BurgerIcon type="secondary" />
                </div>
                <NavBarItem text='Конструктор' />
            </div>
            <div className='wrapper-2'>
                <div className="pl-5 pr-2 ok">
                    <ListIcon type="secondary" />
                </div>
                <NavBarItem text='Лента заказов' />
            </div>
        </div>
        <div className='logo-wrapper '>
            <Logo />
        </div>
        <div className='wrapper-2'>
            <div className="placeholder" />
            <div className='wrapper-2'>
                <div className="pl-5 pr-2 ok">
                    <ProfileIcon type="secondary" />
                </div>
                <NavBarItem text='Личный кабинет' />
            </div>
        </div>
    </NavBar>
  );
}

export default AppHeader;