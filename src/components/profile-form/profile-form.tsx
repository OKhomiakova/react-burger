import React, { ChangeEvent, useState } from 'react';

import styles from '../../pages/profile/profile.module.css';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUserInfo } from '../../services/actions/user';
import { useForm } from '../../hooks/useForm';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';

const ProfileForm: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  const { values, handleChange, resetForm } = useForm({
    email: user.email || '',
    password: user.password || '',
    name: user.name || '',
  });

  const [disabled, setDisabled] = useState(true);
  const [isModified, setIsModified] = useState(false);

  const dispatch = useAppDispatch();

  const onIconClick = () => {
    setDisabled(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleProfileUpdate();
  };

  const handleReset = () => {
    try {
      resetForm();
      setDisabled(true);
      setIsModified(false);
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  const handleProfileUpdate = async () => {
    try {
      dispatch(updateUserInfo(values.email, values.password, values.name));
      setDisabled(true);
      setIsModified(false);
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  const handleInputChange = (value: string, name: string) => {
    const customEvent = {
      target: {
        value,
        name,
      },
    } as ChangeEvent<HTMLInputElement>;

    handleChange(customEvent);
    setIsModified(true);
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div className='mb-6'>
        <Input
          value={values.name}
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => handleInputChange(e.target.value, 'name')}
          icon={'EditIcon'}
          disabled={disabled}
          name={'name'}
          onIconClick={onIconClick}
          size={'default'}
          extraClass="ml-1"
        />
      </div>
      <div className='mb-6'>
        <Input
          value={values.email}
          type={'email'}
          placeholder={'E-mail'}
          onChange={(e) => handleInputChange(e.target.value, 'email')}
          icon={'EditIcon'}
          disabled={disabled}
          name={'email'}
          onIconClick={onIconClick}
          size={'default'}
          extraClass="ml-1"
        />
      </div>
      <div className='mb-6'>
        <Input
          value={values.password}
          type={'password'}
          placeholder={'Password'}
          onChange={(e) => handleInputChange(e.target.value, 'password')}
          icon={'EditIcon'}
          disabled={disabled}
          name={'password'}
          onIconClick={onIconClick}
          errorText={'Неверный пароль'}
          size={'default'}
          extraClass="ml-1"
        />
      </div>
      <div className={styles.buttonWrapper}>
        {isModified && (
          <>
            <Button htmlType="reset" type="secondary" size="medium">
              Отмена
            </Button>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </>
        )}
      </div>
    </form>
  );
}

export default ProfileForm;