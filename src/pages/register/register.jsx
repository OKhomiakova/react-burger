import React from 'react';
import styles from './register.module.css';  
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
 
const RegisterPage = () => {
    const [value, setValue] = React.useState('value')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <section className={`${styles.page} mt-40`}>
            <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
            <div className='mb-6'>
                <Input 
                    type={'text'}
                    placeholder={'Имя'}
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
                    type={'email'}
                    placeholder={'E-mail'}
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
                    type={'password'}
                    placeholder={'Password'}
                    onChange={e => setValue(e.target.value)}
                    icon={'ShowIcon'}
                    name={'name'}
                    error={false}
                    ref={inputRef}
                    onIconClick={onIconClick}
                    errorText={'Неверный пароль'}
                    size={'default'}
                    extraClass="ml-1"
                />
            </div>
            <div className='mb-20'>
                <Button htmlType="button" type="primary" size="large">
                    Зарегистрироваться
                </Button>
            </div>
            <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы? <a href="/login">Войти</a></p>
        </section>
    );
}

export default RegisterPage;
