import {put, takeEvery, call} from 'redux-saga/effects';
import {all} from '@redux-saga/core/effects';
import {TodoActionTypes} from './todo-types';
import {getTodos, deleteTodo} from './todo-service';

/* function generator implementations of Saga */
function* fetchingTodos() {
  try {
    const {data} = yield call(getTodos); // saga
    yield put({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: data});
  } catch (e) {
    yield put({
      type: TodoActionTypes.FETCH_TODOS_FAIL,
      payload: e.message,
    });
  }
}
// renaming the payload with id
function* removingTodo({payload: id}: any) {
  try {
    yield call(deleteTodo, id);
    yield put({type: TodoActionTypes.REMOVE_TODO_SUCCESS, payload: id});
  } catch (e) {
    yield put({
      type: TodoActionTypes.REMOVE_TODO_FAIL,
      payload: e.message,
    });
  }
}

/* Saga watches actions */
function* watchFetchingTodos() {
  yield takeEvery(TodoActionTypes.FETCH_TODOS_REQUEST, fetchingTodos);
}
function* watchRemovingTodo() {
  yield takeEvery(TodoActionTypes.REMOVE_TODO_REQUEST, removingTodo);
}

/* Saga sends all the watchers to the sagaMiddleware to run */
export function* todoSaga() {
  yield all([watchFetchingTodos(), watchRemovingTodo()]);
}
