/* action creators of Saga */
import {ITodoModel, TodoActionTypes} from './todo-types';
import {Action} from 'redux';

interface IAction extends Action {
  readonly payload?: any;
}

export const fetchTodos = (): IAction => ({
  type: TodoActionTypes.FETCH_TODOS_REQUEST,
});
