import React from 'react';
import styles from './reset-password.module.css';  
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
 
const ResetPasswordPage = () => {
    const [value, setValue] = React.useState('value')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <section className={`${styles.page} mt-40`}>
            <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
            <div className='mb-6'>
                <Input 
                    type={'password'}
                    placeholder={'Введите новый пароль'}
                    onChange={e => setValue(e.target.value)}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
                    errorText={'Некорректный e-mail'}
                    size={'default'}
                    extraClass="ml-1"
                />
            </div>
            <div className='mb-6'>
                <Input 
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    onChange={e => setValue(e.target.value)}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
                    errorText={'Некорректный e-mail'}
                    size={'default'}
                    extraClass="ml-1"
                />
            </div>
            <div className='mb-20'>
                <Button htmlType="button" type="primary" size="large">
                    Сохранить
                </Button>
            </div>
            <p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <a href="/login">Войти</a></p>
        </section>
    );
}

export default ResetPasswordPage;
