import { Link, useNavigate } from 'react-router-dom'; 
import styles from './forgot-password.module.css';  
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { forgotPassword } from '../../utils/api';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';
 
const ForgotPasswordPage = ({onForgotPassword}) => {
    const { values, handleChange } = useForm({
        email: '',
        
    });

    const navigate = useNavigate(); 

    const handleForgotPassword = async (e) => {
        e.preventDefault(); // Prevent the default form submission
    
        try {
          const response = await forgotPassword(values.email);
          console.log('Successful:', response);
    
          if (onForgotPassword) {
            onForgotPassword();
            navigate('/reset-password');
          }
        } catch (error) {
          console.error('Failed:', error);
    }
};

    return (
        <form onSubmit={handleForgotPassword}>
            <section className={`${styles.page} mt-40`}>
                <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
                <div className='mb-6'>
                    <Input
                        value={values.email} 
                        type={'email'}
                        placeholder={'Укажите e-mail'}
                        onChange={handleChange}
                        name={'email'}
                        error={false}
                        size={'default'}
                        extraClass="ml-1"
                    />
                </div>
                <div className='mb-20'>
                    <Button htmlType="submit" type="primary" size="large">
                        Восстановить
                    </Button>
                </div>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to={"/login"}>Войти</Link></p>
            </section>
        </form>
    );
}

export default ForgotPasswordPage;

ForgotPasswordPage.propTypes = {
    onForgotPassword: PropTypes.func,
}; 
