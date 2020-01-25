import {foodReducer} from './../foods/food-reducer';
// @ts-ignore
import logger from 'redux-logger';
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
  Store,
  Action,
} from 'redux';
import {foodReducer} from '../foods/food-reducer';
import thunk from 'redux-thunk';
import {IFoodState} from '../foods/food-types';

export interface IApplicationState {
  foodReducer: IFoodState;
}

const rootReducer = combineReducers<IApplicationState>({
  foodReducer,
});

// @ts-ignore
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, logger];

const store: Store<IApplicationState, Action<any>> = createStore(
  rootReducer,
  withDevTools(applyMiddleware(...middleware)),
);

export default store;
