import React from 'react';
import styles from './login.module.css';  
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
 
const LoginPage = () => {
    const [value, setValue] = React.useState('value')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <section className={`${styles.page} mt-40`}>
            <h1 className="text text_type_main-medium mb-6">Вход</h1>
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
                    Войти
                </Button>
            </div>
            <p className="text text_type_main-default text_color_inactive mb-4">Вы — новый пользователь? <a href="/register">Зарегистрироваться</a></p>
            <p className="text text_type_main-default text_color_inactive">Забыли пароль? <a href="/forgot-password">Восстановить пароль</a></p>
        </section>
    );
}

export default LoginPage;
