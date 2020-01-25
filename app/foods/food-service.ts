import {api} from '../api-config';
import {IFoodModel} from './food-types';

export async function getFoods() {
  return await api.get<IFoodModel[]>('foods');
}
export async function deleteFood(id: string) {
  return await api.delete<void>('foods/' + id);
}
