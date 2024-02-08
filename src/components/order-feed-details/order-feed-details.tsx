import styles from './order-feed-details.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { Navigate } from 'react-router-dom';

import IngredientsList from './ingredients-list/ingredients-list';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { useEffect, useState } from 'react';
import { setAllIngredients } from '../../services/actions/all-ingredients';
import { wsConnectionCloseAllOrders, wsConnectionStartAllOrders } from '../../services/actions/ws-all-orders';
import { WS_API_URL } from '../../constants';
import { wsConnectionCloseMyOrders, wsConnectionStartMyOrders } from '../../services/actions/ws-my-orders';
import { TOrderType } from '../../utils/types';

const OrderFeedDetails = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const locationPathname = location.pathname;

  const [orderData, setOrderData] = useState<TOrderType | null>(null);
  const [noOrderData, setNoOrderData] = useState(false);

  const orderNumber = locationPathname.split('/').pop();

  const isProfileOrders = locationPathname === `/profile/orders/${orderNumber}`;

  const orders = useAppSelector(state => isProfileOrders ? state.wsMyOrdersReducer.lastMessage?.orders : state.wsAllOrdersReducer.lastMessage?.orders);
  const allIngerdients = useAppSelector(state => state.allIngredients);

  useEffect(() => {
    if (!allIngerdients.length) {
      dispatch(setAllIngredients());
    }
  }, [allIngerdients, dispatch]);

  useEffect(() => {
    if (!orderNumber) return;
    if (orders?.length) {
      const orderDataFromOrders = orders.find((order) => order.number === +orderNumber);
      if (orderDataFromOrders) {
        setOrderData(orderDataFromOrders);
      } else {
        fetch(`https://norma.nomoreparties.space/api/orders/${orderNumber}`)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .then((data) => {
            if (data.orders.length === 0) {
              setNoOrderData(true);
              return;
            }
            setOrderData(data.orders[0]);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }, [dispatch, isProfileOrders, orderNumber, orders]);
      
  useEffect(() => {
    if (!isProfileOrders) {
      dispatch(wsConnectionStartAllOrders(`${WS_API_URL}/all`));
    } else {
      dispatch(wsConnectionStartMyOrders(`${WS_API_URL}?token=${localStorage.getItem('accessToken')?.split('Bearer ')[1]}`));
    }
    return () => {
      if (!isProfileOrders) {
        dispatch(wsConnectionCloseAllOrders());
      } else {
        dispatch(wsConnectionCloseMyOrders());
      }
    };
  }, [dispatch, isProfileOrders]);

  if (!orderNumber) return <Navigate to="/404" />;

  if (noOrderData) return <Navigate to="/404" />;

  if (!orderData) return (
    <div className="text text_type_main-default">
      Загрузка...
    </div>
  )
  
  const price = orderData.ingredients.reduce((acc, id) => {
    const ingredient = allIngerdients.find((item) => item._id === id);
    
    if (ingredient) {
      if (ingredient.type === 'bun') {
        return acc + (ingredient.price * 2);
      } else {
        return acc + ingredient.price;
      }
    } else {
      return acc;
    }
  }, 0);

  return (
    <div className={styles.orderWrapper}>
      <div className="mt-10 mb-15">
        <h3 className="mb-2 text text_type_main-medium">{orderData.name}</h3>
        <span className={`text text_type_main-default ${styles.statusDone} ${styles.status}`}>
          {orderData.status === 'done' ? 'Выполнен' : 'Готовится'}
        </span>
      </div>
      <div className="mb-10">
        <h3 className="mb-6 text text_type_main-medium">Состав:</h3>
        <IngredientsList ingredients={orderData.ingredients} />
      </div>
      <div className={`mb-10 ${styles.total_price}`}>
        <FormattedDate
          date={new Date(orderData.createdAt)}
          className="text_type_main-default text_color_inactive"
        />
        <div className={styles.price}>
          <span className="text text_type_digits-default pr-1">{price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default OrderFeedDetails;