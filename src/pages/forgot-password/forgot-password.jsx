import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './forgot-password.module.css';  
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { forgotPassword } from '../../utils/api';
 
const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); 

    const handleForgotPassword = async () => {
        try {
            const response = await forgotPassword(email);
            console.log('Successful:', response);
            navigate('/reset-password');
        } catch (error) {
            console.error('Failed:', error);
    }
};

    return (
        <section className={`${styles.page} mt-40`}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <div className='mb-6'>
                <Input 
                    type={'email'}
                    placeholder={'Укажите e-mail'}
                    onChange={e => setEmail(e.target.value)}
                    name={'name'}
                    error={false}
                    size={'default'}
                    extraClass="ml-1"
                />
            </div>
            <div className='mb-20'>
                <Button htmlType="button" type="primary" size="large" onClick={handleForgotPassword}>
                    Восстановить
                </Button>
            </div>
            <p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <a href="/login">Войти</a></p>
        </section>
    );
}

export default ForgotPasswordPage;
