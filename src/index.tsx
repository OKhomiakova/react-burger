import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppHeader from './components/app-header/app-header';
import reportWebVitals from './reportWebVitals';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppHeader />
    <div className='page-wrapper'>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
