import { useState } from 'react';
import styles from './login.module.css';  
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { login } from '../../services/actions/user';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
 
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent the default form submission
    
        try {
          dispatch(login(email, password));
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
                        value={email}
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
                        value={password}
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
                    <Button htmlType="submit" type="primary" size="large">
                        Войти
                    </Button>
                </div>
                <p className="text text_type_main-default text_color_inactive mb-4">Вы — новый пользователь? <Link to={'/register'} state={location.state}>Зарегистрироваться</Link></p>
                <p className="text text_type_main-default text_color_inactive">Забыли пароль? <Link to={'/forgot-password'} state={location.state}>Восстановить пароль</Link></p>
            </section>
        </form>
    );
}

export default LoginPage;
