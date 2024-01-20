import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './reset-password.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { resetPassword } from '../../utils/api';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

const ResetPasswordPage: React.FC = () => {
  const { values, handleChange } = useForm({
    password: '',
    token: ''
  });

  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await resetPassword(values.password, values.token);
      console.log('Password reset successful:', response);
      navigate('/');
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

  return (
    <form onSubmit={handleResetPassword}>
      <section className={`${styles.page} mt-40`}>
        <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
        <div className='mb-6'>
          <Input
            value={values.password}
            type={'password'}
            placeholder={'Введите новый пароль'}
            onChange={handleChange}
            name={'password'}
            size={'default'}
            extraClass="ml-1"
          />
        </div>
        <div className='mb-6'>
          <Input
            value={values.token}
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={handleChange}
            name={'token'}
            size={'default'}
            extraClass="ml-1"
          />
        </div>
        <div className='mb-20'>
          <Button htmlType="submit" type="primary" size="large">
            Сохранить
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to={"/login"}>Войти</Link></p>
      </section>
    </form>
  );
}

export default ResetPasswordPage;