import { useState } from 'react';
import styles from './profile.module.css';  
import { Input, Button, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateUserInfo } from '../../services/actions/user';
 
const ProfilePage = () => {    
    const user = useSelector((state) => state.user.user);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [name, setName] = useState(user.name);
    const [disabled, setDisabled] = useState(true);
    const [isModified, setIsModified] = useState(false);

    const location = useLocation();

    const dispatch = useDispatch();
    
    const onIconClick = () => {
        setDisabled(false);
    };

    const handleProfileUpdate = async () => {
        try {
            dispatch(updateUserInfo(email, password, name));
            setDisabled(true);
            setIsModified(false);
        } catch (error) {
            console.error('Profile update failed:', error);
        }
    };

    const handleCancel = async () => {
        try {
            setEmail(user.email);
            setPassword(user.password);
            setName(user.name);
            setDisabled(true);
            setIsModified(false); // Reset modification state
        } catch (error) {
            console.error('Profile update failed:', error);
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleInputChange = (value, setState) => {
        setState(value);
        setIsModified(true); // Set modification state to true
      };

    return (
        <section className={`${styles.page} mt-40`}>
            <div className='mr-15'>
                <div className={`${styles.textWrapper} mb-20`}>
                    <p className={`${location.pathname !== '/profile' && 'text_color_inactive'} text text_type_main-large`}><Link to={'/profile'}>Профиль</Link></p>
                    <p className="text text_type_main-large">
                        <NavLink to={'/profile/orders'}>
                            {({ isActive }) => (
                                <span className={`${!isActive && 'text_color_inactive'}`}>История заказов</span>
                            )}
                        </NavLink>
                    </p>
                    
                    <p className="text text_type_main-large text_color_inactive"><Link onClick={handleLogout}>Выход</Link></p>
                </div>
                <p className={`${styles.textInfo} text text_type_main-default text_color_inactive`}>В этом разделе вы можете <br/>изменить свои персональные данные</p>
            </div>
            <div>
                <div className='mb-6'>
                    <Input 
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={(e) => handleInputChange(e.target.value, setName)}
                        value={name}
                        icon={'EditIcon'}
                        disabled={disabled}
                        name={'name'}
                        onIconClick={onIconClick}
                        size={'default'}
                        extraClass="ml-1"
                    />
                </div>
                <div className='mb-6'>
                    <Input 
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={(e) => handleInputChange(e.target.value, setEmail)}
                        value={email}
                        icon={'EditIcon'}
                        disabled={disabled}
                        name={'name'}
                        onIconClick={onIconClick}
                        size={'default'}
                        extraClass="ml-1"
                    />
                </div>
                <div className='mb-6'>
                    <Input
                        type={'password'}
                        placeholder={'Password'}
                        onChange={(e) => handleInputChange(e.target.value, setPassword)}
                        value={password}
                        icon={'EditIcon'}
                        disabled={disabled}
                        name={'password'}
                        onIconClick={onIconClick}
                        errorText={'Неверный пароль'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                </div>
                <div className={styles.buttonWrapper}>
                    {isModified && (
                        <>
                            <Button htmlType="button" type="secondary" size="medium" onClick={handleCancel}>
                                Отмена
                            </Button>
                            <Button htmlType="button" type="primary" size="medium" onClick={handleProfileUpdate}>
                                Сохранить
                            </Button>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.placeholder}></div>
        </section>
    );
}

export default ProfilePage;
