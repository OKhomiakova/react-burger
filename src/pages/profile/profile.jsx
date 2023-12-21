import React from 'react';
import styles from './profile.module.css';  
import { Input, Button, EditIcon } from '@ya.praktikum/react-developer-burger-ui-components';
 
const ProfilePage = () => {
    const [value, setValue] = React.useState('value')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <section className={`${styles.page} mt-40`}>
            <div className='mr-15'>
                <div className={`${styles.textWrapper} mb-20`}>
                    <p className="text text_type_main-large"><a href='/profile'>Профиль</a></p>
                    <p className="text text_type_main-large"><a href='/profile/orders'>История заказов</a></p>
                    <p className="text text_type_main-large"><a>Выход</a></p>
                </div>
                <p className={`${styles.textInfo} text text_type_main-default text_color_inactive`}>В этом разделе вы можете <br/>изменить свои персональные данные</p>
            </div>
            <div>
                <div className='mb-6'>
                    <Input 
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setValue(e.target.value)}
                        icon={'EditIcon'}
                        disabled={true}
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
                        icon={'EditIcon'}
                        disabled={true}
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
                        icon={'EditIcon'}
                        disabled={true}
                        name={'name'}
                        error={false}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={'Неверный пароль'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                </div>
                <div className={styles.buttonWrapper}>
                    <Button htmlType="button" type="secondary" size="medium">
                        Отмена
                    </Button>
                    <Button htmlType="button" type="primary" size="medium">
                        Сохранить
                    </Button>
                </div>
            </div>
            <div className={styles.placeholder}></div>
        </section>
    );
}

export default ProfilePage;
