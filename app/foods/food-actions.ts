import {Dispatch, ActionCreator} from 'redux';
import {IFoodModel, FoodActionTypes} from './food-types';
import {getFoods} from './food-service';

/* action creators of thunk */
export const fetchFoods: ActionCreator<any> = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: FoodActionTypes.FETCH_FOODS_REQUEST,
    });
    
    try {
      const {data} = await getFoods();
      dispatch({type: FoodActionTypes.FETCH_FOODS_SUCCESS, payload: data});
    } catch (e) {
      dispatch({type: FoodActionTypes.FETCH_FOODS_FAIL, payload: e.message});
    }
  };
};
