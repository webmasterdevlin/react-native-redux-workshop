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
import {todoReducer} from '../todos/todo-reducer';
import thunk from 'redux-thunk';
import {IFoodState} from '../foods/food-types';
import {ITodoState} from '../todos/todo-types';
import createSagaMiddleware from 'redux-saga';
import {todoSaga} from '../todos/todo-saga';

export interface IApplicationState {
  foodReducer: IFoodState;
  todoReducer: ITodoState;
}

const rootReducer = combineReducers<IApplicationState>({
  foodReducer,
  todoReducer,
});

// @ts-ignore
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk, logger];

const store: Store<IApplicationState, Action<any>> = createStore(
  rootReducer,
  withDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(todoSaga);
export default store;
