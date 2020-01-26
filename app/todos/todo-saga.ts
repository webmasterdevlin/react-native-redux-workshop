import {put, takeEvery, call} from 'redux-saga/effects';
import {all} from '@redux-saga/core/effects';
import {TodoActionTypes, ITodoModel} from './todo-types';
import {getTodos, deleteTodo, postTodo} from './todo-service';

/* function generator implementations of Saga */
function* fetchingTodos() {
  try {
    const {data} = yield call(getTodos); // saga

    // sorting in alphabetical way
    const sortedData: ITodoModel[] = data.sort(
      (firstItem: ITodoModel, secondItem: ITodoModel) =>
        firstItem.title.toLowerCase() < secondItem.title.toLowerCase() ? -1 : 1,
    );

    yield put({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: sortedData});
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

function* addingTodo({payload: newTodo}: any) {
  try {
    const {data} = yield call(postTodo, newTodo);
    yield put({type: TodoActionTypes.ADD_TODO_SUCCESS, payload: data});
  } catch (e) {
    yield put({type: TodoActionTypes.ADD_TODO_FAIL, payload: e.message});
  }
}

/* Saga watches actions */
function* watchFetchingTodos() {
  yield takeEvery(TodoActionTypes.FETCH_TODOS_REQUEST, fetchingTodos);
}
function* watchRemovingTodo() {
  yield takeEvery(TodoActionTypes.REMOVE_TODO_REQUEST, removingTodo);
}

function* watchAddingTodo() {
  yield takeEvery(TodoActionTypes.ADD_TODO_REQUEST, addingTodo);
}

/* Saga sends all the watchers to the sagaMiddleware to run */
export function* todoSaga() {
  yield all([watchFetchingTodos(), watchRemovingTodo(), watchAddingTodo()]);
}
