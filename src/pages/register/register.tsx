import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './register.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { register } from '../../services/actions/user';
import { useForm } from '../../hooks/useForm';

const RegisterPage: React.FC = () => {
  const { values, handleChange } = useForm({
    email: '',
    password: '',
    name: ''
  });

  const dispatch = useDispatch();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // @ts-ignore
      dispatch(register(values.email, values.password, values.name));
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <section className={`${styles.page} mt-40`}>
        <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
        <div className='mb-6'>
          <Input
            value={values.name}
            type={'text'}
            placeholder={'Имя'}
            onChange={handleChange}
            name={'name'}
            error={false}
            size={'default'}
            extraClass="ml-1"
          />
        </div>
        <div className='mb-6'>
          <Input
            value={values.email}
            type={'email'}
            placeholder={'E-mail'}
            onChange={handleChange}
            name={'email'}
            error={false}
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
            error={false}
            size={'default'}
            extraClass="ml-1"
          />
        </div>
        <div className='mb-20'>
          <Button htmlType="submit" type="primary" size="large">
            Зарегистрироваться
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы? <Link to={"/login"}>Войти</Link></p>
      </section>
    </form>
  );
}

export default RegisterPage;