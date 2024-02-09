import React from 'react';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { login } from '../../services/actions/user';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import styles from './login.module.css';
import { useAppDispatch } from '../../utils/redux-hooks';

const LoginPage: React.FC = () => {
  const { values, handleChange } = useForm({
    email: '',
    password: '',
  });

  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      dispatch(login(values.email, values.password));
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <section className={`${styles.page} mt-40`}>
        <h1 className="text text_type_main-medium mb-6">Вход</h1>
        <div className='mb-6'>
          <Input
            value={values.email}
            type={'email'}
            placeholder={'E-mail'}
            onChange={handleChange}
            name={'email'}
            size={'default'}
            extraClass="ml-1"
          />
        </div>
        <div className='mb-6'>
          <Input
            value={values.password}
            type={'password'}
            placeholder={'Password'}
            onChange={handleChange}
            icon={'ShowIcon'}
            name={'password'}
            size={'default'}
            extraClass="ml-1"
          />
        </div>
        <div className='mb-20'>
          <Button htmlType="submit" type="primary" size="large">
            Войти
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mb-4">
          Вы — новый пользователь? <Link to={'/register'} state={location.state}>Зарегистрироваться</Link>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль? <Link to={'/forgot-password'} state={location.state}>Восстановить пароль</Link>
        </p>
      </section>
    </form>
  );
}

export default LoginPage;