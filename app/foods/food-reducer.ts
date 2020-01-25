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

export const foodReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case FoodActionTypes.FETCH_FOODS_REQUEST:
      return {...state, isLoading: true};
    case FoodActionTypes.FETCH_FOODS_SUCCESS:
      return {...state, isLoading: false, foods: action.payload};
    case FoodActionTypes.FETCH_FOODS_FAIL:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }
};
