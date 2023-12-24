import HomePage from '../../pages/home/home';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkUserAuth } from '../../services/actions/user';
import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [dispatch]);

  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    navigate(-1);
  }

  console.log('background', background);
  console.log('location', location);

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<OnlyUnAuth component={<LoginPage />} />} />
        <Route path="/register" element={<OnlyUnAuth component={<RegisterPage />} />} />
        <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPasswordPage />} />} />
        <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPasswordPage />} />} />
        <Route path="/profile" element={<OnlyAuth component={<ProfilePage />} />} />
        <Route path="/ingredients/:id" element={<IngredientDetailsPage />}/>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      {background && (
        <Routes>
	        <Route
	          path='/ingredients/:id'
	          element={
	            <Modal title="Детали ингредиента" onClose={handleModalClose}>
	              <IngredientDetails/>
	            </Modal>
	          }
	        />
        </Routes>
      )}
    </>
  );
}

export default App;
