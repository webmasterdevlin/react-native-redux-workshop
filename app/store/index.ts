// @ts-ignore
import logger from 'redux-logger';
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
  Store,
} from 'redux';
import {foodReducer} from '../foods/food-reducer';
import thunk from 'redux-thunk';
import {IFoodState} from '../foods/food-types';
