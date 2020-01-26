import {api} from '../api-config';
import {ITodoModel} from './todo-types';

export async function getTodos() {
  return await api.get<ITodoModel[]>('todos');
}
