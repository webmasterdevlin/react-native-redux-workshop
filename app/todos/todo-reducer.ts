import {ITodoState, TodoActionTypes} from './todo-types';
import {Action} from 'redux';

const initialState: ITodoState = {
  todos: [{id: '', title: ''}],
  todo: {id: '', title: ''},
  isLoading: false,
  error: '',
};

interface IAction extends Action {
  payload?: any;
  type: string;
}

export const todoReducer = (
  state: ITodoState = initialState,
  action: IAction,
): ITodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS_REQUEST:
      return {...state, isLoading: true};
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {...state, isLoading: false, todos: action.payload};
    case TodoActionTypes.FETCH_TODOS_FAIL:
      return {...state, isLoading: false, error: action.payload};
    case TodoActionTypes.REMOVE_TODO_FAIL:
      return {...state, isLoading: true};
    case TodoActionTypes.REMOVE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: state.todos.filter(t => t.id !== action.payload),
      };
    case TodoActionTypes.REMOVE_TODO_FAIL:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }
};
