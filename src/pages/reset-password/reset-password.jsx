import React, { useState } from 'react';
import styles from './reset-password.module.css';  
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { resetPassword } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
 
const ResetPasswordPage = () => {
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const navigate = useNavigate();

    const handleResetPassword = async () => {
        try {
             const response = await resetPassword(password, token);
            console.log('Password reset successful:', response);
            navigate('/');
        } catch (error) {
            console.error('Password reset failed:', error);
    }
  };
    return (
        <section className={`${styles.page} mt-40`}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <div className='mb-6'>
                <Input 
                    type={'password'}
                    placeholder={'Введите новый пароль'}
                    onChange={e => setPassword(e.target.value)}
                    name={'password'}
                    size={'default'}
                    extraClass="ml-1"
                />
            </div>
            <div className='mb-6'>
                <Input 
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    onChange={e => setToken(e.target.value)}
                    name={'token'}
                    size={'default'}
                    extraClass="ml-1"
                />
            </div>
            <div className='mb-20'>
                <Button htmlType="button" type="primary" size="large" onClick={handleResetPassword}>
                    Сохранить
                </Button>
            </div>
            <p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <a href="/login">Войти</a></p>
        </section>
    );
}

export default ResetPasswordPage;
