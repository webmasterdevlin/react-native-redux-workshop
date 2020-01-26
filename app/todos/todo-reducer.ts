import {ITodoState, TodoActionTypes} from './todo-types';
import {Action} from 'redux';

const initialState: ITodoState = {
  todos: [{id: '', title: ''}],
  todo: {id: '', title: ''},
  isLoading: false,
  error: '',
};

interface IAction extends Action {
  readonly payload?: any;
}
