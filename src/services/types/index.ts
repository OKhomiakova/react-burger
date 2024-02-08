import { Action, ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import store from '../store';

import type { TAllIngredientsActionTypes } from '../actions/all-ingredients';
import type { TBurgerIngredientsActionTypes } from '../actions/burger-constructor-ingredients';
import type { TCreateOrderActionTypes } from '../actions/created-order';
import type { TUserActionTypes } from '../actions/user';
import type { TWSAllOrdersActions } from '../actions/ws-all-orders';
import type { TWSMyOrdersActions } from '../actions/ws-my-orders';

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TAllIngredientsActionTypes | TBurgerIngredientsActionTypes | TCreateOrderActionTypes | TUserActionTypes | TWSAllOrdersActions | TWSMyOrdersActions;

export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, Action, TApplicationActions>;

export type AppThunk<ReturnType = void> = ActionCreator <ThunkAction <ReturnType, RootState, Action, TApplicationActions>>;
