import React, { ChangeEvent, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './profile.module.css';
import { Input, Button, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { logout, updateUserInfo } from '../../services/actions/user';
import { useForm } from '../../hooks/useForm';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';

const ProfilePage: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  const { values, handleChange, resetForm } = useForm({
    email: user.email || '',
    password: user.password || '',
    name: user.name || '',
  });

  const [disabled, setDisabled] = useState(true);
  const [isModified, setIsModified] = useState(false);

  const location = useLocation();
  const dispatch = useAppDispatch();

  const onIconClick = () => {
    setDisabled(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleProfileUpdate();
  };

  const handleReset = () => {
    try {
      resetForm();
      setDisabled(true);
      setIsModified(false); // Reset modification state
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  const handleProfileUpdate = async () => {
    try {
      // @ts-ignore
      dispatch(updateUserInfo(values.email, values.password, values.name));
      setDisabled(true);
      setIsModified(false);
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  const handleLogout = () => {
    // @ts-ignore
    dispatch(logout());
  };

  const handleInputChange = (value: string, name: string) => {
    const customEvent = {
      target: {
        value,
        name,
      },
    } as ChangeEvent<HTMLInputElement>;

    handleChange(customEvent);
    setIsModified(true);
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
          <p className="text text_type_main-large text_color_inactive"><Link onClick={handleLogout} to={''}>Выход</Link></p>
        </div>
        <p className={`${styles.textInfo} text text_type_main-default text_color_inactive`}>В этом разделе вы можете <br />изменить свои персональные данные</p>
      </div>
      <div>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className='mb-6'>
            <Input
              value={values.name}
              type={'text'}
              placeholder={'Имя'}
              onChange={(e) => handleInputChange(e.target.value, 'name')}
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
              value={values.email}
              type={'email'}
              placeholder={'E-mail'}
              onChange={(e) => handleInputChange(e.target.value, 'email')}
              icon={'EditIcon'}
              disabled={disabled}
              name={'email'}
              onIconClick={onIconClick}
              size={'default'}
              extraClass="ml-1"
            />
          </div>
          <div className='mb-6'>
            <Input
              value={values.password}
              type={'password'}
              placeholder={'Password'}
              onChange={(e) => handleInputChange(e.target.value, 'password')}
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
                <Button htmlType="reset" type="secondary" size="medium">
                  Отмена
                </Button>
                <Button htmlType="submit" type="primary" size="medium">
                  Сохранить
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
      <div className={styles.placeholder}></div>
    </section>
  );
}

export default ProfilePage;