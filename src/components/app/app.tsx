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

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    navigate(-1);
  }
  
  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage />}/>
        <Route path="/reset-password" element={<ResetPasswordPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/ingredients/:id" element={<IngredientDetails />}/>
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
        </Routes>
      )}
    </>
  );
}

export default App;
