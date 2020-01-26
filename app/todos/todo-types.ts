export interface ITodoState {
  readonly todos: ITodoModel[];
  readonly todo: ITodoModel;
  readonly isLoading: boolean;
  readonly error: string;
}

export type ApiResponse = Record<string, any>;

export interface ITodoModel extends ApiResponse {
  id: string;
  title: string;
}

/* action types */
export const TodoActionTypes = {
  FETCH_TODOS_REQUEST: '@@/todo/FETCH_TODOS_REQUEST',
  FETCH_TODOS_SUCCESS: '@@/todo/FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAIL: '@@/todo/FETCH_TODOS_FAIL',

};
