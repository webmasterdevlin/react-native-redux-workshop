import {api} from '../api-config';
import {IFoodModel} from './food-types';

export async function getFoods() {
  return await api.get<IFoodModel[]>('foods');
}
