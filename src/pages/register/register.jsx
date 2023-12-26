import { useState } from 'react';
import styles from './register.module.css';  
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { register } from '../../services/actions/user';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const handleRegister = async () => {
        try {
            dispatch(register(email, password, name));
        } catch (error) {
            console.error('Registration failed:', error);
    }
  };

    return (
        <section className={`${styles.page} mt-40`}>
            <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
            <div className='mb-6'>
                <Input 
                    value={name}
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={e => setName(e.target.value)}
                    name={'name'}
                    error={false}
                    size={'default'}
                    extraClass="ml-1"
                />
            </div>
            <div className='mb-6'>
                <Input
                    value={email}
                    type={'email'}
                    placeholder={'E-mail'}
                    onChange={e => setEmail(e.target.value)}
                    name={'email'}
                    error={false}
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
                    error={false}
                    size={'default'}
                    extraClass="ml-1"
                />
            </div>
            <div className='mb-20'>
                <Button htmlType="button" type="primary" size="large" onClick={handleRegister}>
                    Зарегистрироваться
                </Button>
            </div>
            <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы? <Link to={"/login"}>Войти</Link></p>
        </section>
    );
}

export default RegisterPage;
