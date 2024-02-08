import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import IngredientDetails from '../burger-ingredients/ingredient-details';
import Modal from '../modal/modal';
import NotFound404 from '../../pages/not-found-404/not-found-404';
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ResetPasswordPage from '../../pages/reset-password/reset-password';
import ProfilePage from '../../pages/profile/profile';
import IngredientDetailsPage from '../../pages/ingredient-details/ingredient-details';
import { checkUserAuth } from '../../services/actions/user';
import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route';
import HomePage from '../../pages/home/home';
import { useAppDispatch } from '../../utils/redux-hooks';
import OrderFeedPage from '../../pages/order-feed/order-feed';
import OrderFeedDetails from '../order-feed-details/order-feed-details';
import OrderList from '../order-list/order-list';
import ProfileForm from '../profile-form/profile-form';
import OrderDetailsPage from '../../pages/order-details/order-details';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const [passwordRecoveryInitiated, setPasswordRecoveryInitiated] = useState(false);

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [dispatch]);
  
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    navigate(-1);
  };

  const handleForgotPassword = () => {
    setPasswordRecoveryInitiated(true);
  };

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<OnlyUnAuth component={<LoginPage />} />} />
        <Route path="/register" element={<OnlyUnAuth component={<RegisterPage />} />} />
        <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPasswordPage onForgotPassword={handleForgotPassword} />} />} />
        <Route path="/reset-password" element={<OnlyUnAuth component={passwordRecoveryInitiated ? (<ResetPasswordPage />) : (<Navigate to="/forgot-password" />)} />} />
        <Route path="/profile" element={<OnlyAuth component={<ProfilePage />} />}>
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/profile/orders" element={<OrderList />} />
        </Route>
        <Route path="/feed" element={<OrderFeedPage />} />
        <Route path="/order" element={<OrderFeedDetails />} />
        <Route path="/ingredients/:id" element={<IngredientDetailsPage />} />
        <Route path="/profile/orders/:number" element={<OrderDetailsPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path='/ingredients/:id'
            element={
              <Modal title="Детали ингредиента" onClose={handleModalClose}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path='/profile/orders/:number'
            element={
              <Modal onClose={handleModalClose}>
                <OrderFeedDetails />
              </Modal>
            }
          />
          <Route
            path='/feed/:number'
            element={
              <Modal onClose={handleModalClose}>
                <OrderFeedDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default App;