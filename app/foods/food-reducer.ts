import {IFoodState, FoodActionTypes} from './food-types';
import {Action} from 'redux';

const initialState: IFoodState = {
  foods: [{id: '', name: ''}],
  food: {
    id: '',
    name: '',
  },
  isLoading: false,
  error: '',
};

interface IAction extends Action {
  readonly payload?: any;
}
