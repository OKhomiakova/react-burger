import { Action, ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import store from '../store';

import type { TAllIngredientsActionTypes } from '../actions/all-ingredients';
import type { TBurgerIngredientsActionTypes } from '../actions/burger-constructor-ingredients';
import type { TCreateOrderActionTypes } from '../actions/created-order';
import type { TUserActionTypes } from '../actions/user';

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = TAllIngredientsActionTypes | TBurgerIngredientsActionTypes | TCreateOrderActionTypes | TUserActionTypes;

export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, Action, TApplicationActions>;
export type AppThunk<ReturnType = void> = ActionCreator <ThunkAction <ReturnType, RootState, Action, TApplicationActions>>;
