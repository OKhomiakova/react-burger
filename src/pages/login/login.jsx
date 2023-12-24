import { useState } from 'react';
import styles from './login.module.css';  
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { login } from '../../services/actions/user';
import { useDispatch } from 'react-redux';
 
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleLogin = () => {
        try {
            dispatch(login(email, password));
        } catch (error) {
            console.error('Login failed:', error);
    }
};
    return (
        <section className={`${styles.page} mt-40`}>
            <h1 className="text text_type_main-medium mb-6">Вход</h1>
            <div className='mb-6'>
                <Input 
                    type={'email'}
                    placeholder={'E-mail'}
                    onChange={e => setEmail(e.target.value)}
                    name={'email'}
                    size={'default'}
                    extraClass="ml-1"
                />
            </div>
            <div className='mb-6'>
                <Input
                    type={'password'}
                    placeholder={'Password'}
                    onChange={e => setPassword(e.target.value)}
                    icon={'ShowIcon'}
                    name={'password'}
                    size={'default'}
                    extraClass="ml-1"
                />
            </div>
            <div className='mb-20'>
                <Button htmlType="button" type="primary" size="large" onClick={handleLogin}>
                    Войти
                </Button>
            </div>
            <p className="text text_type_main-default text_color_inactive mb-4">Вы — новый пользователь? <a href="/register">Зарегистрироваться</a></p>
            <p className="text text_type_main-default text_color_inactive">Забыли пароль? <a href="/forgot-password">Восстановить пароль</a></p>
        </section>
    );
}

export default LoginPage;
