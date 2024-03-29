import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import styles from './profile.module.css';
import { logout } from '../../services/actions/user';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { WS_API_URL } from '../../constants';
import { wsConnectionCloseMyOrders, wsConnectionStartMyOrders } from '../../services/actions/ws-my-orders';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const user = useAppSelector(state => state.user.user);
  useEffect(() => {
    if (user) {
      dispatch(wsConnectionStartMyOrders(`${WS_API_URL}?token=${localStorage.getItem('accessToken')?.split('Bearer ')[1]}`));
    }
    return () => {
      dispatch(wsConnectionCloseMyOrders());
    };
  }, [dispatch, user]);

  return (
    <section className={`${styles.page} mt-40`}>
      <div className='mr-15'>
        <div className={`${styles.textWrapper} mb-20`}>
          <p className={`${location.pathname !== '/profile' && 'text_color_inactive'} text text_type_main-large`}><Link to={'/profile'}>Профиль</Link></p>
          <p className="text text_type_main-large">
            <NavLink to={'/profile/orders'}>
              {({ isActive }) => (
                <span className={`${!isActive && 'text_color_inactive'}`}>История заказов</span>
              )}
            </NavLink>
          </p>
          <p className="text text_type_main-large text_color_inactive"><Link onClick={handleLogout} to={''}>Выход</Link></p>
        </div>
        <p className={`${styles.textInfo} text text_type_main-default text_color_inactive`}>В этом разделе вы можете <br />изменить свои персональные данные</p>
      </div>
      <div>
        <Outlet/>
      </div>
      <div className={styles.placeholder}></div>
    </section>
  );
}

export default ProfilePage;