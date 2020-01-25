import {Dispatch, ActionCreator} from 'redux';
import {IFoodModel, FoodActionTypes} from './food-types';
import {getFoods, deleteFood} from './food-service';

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

export const removeFood: ActionCreator<any> = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: FoodActionTypes.REMOVE_FOOD_REQUEST,
    });
    try {
      await deleteFood(id);
      dispatch({type: FoodActionTypes.REMOVE_FOOD_SUCCESS, payload: id});
    } catch (e) {
      dispatch({
        type: FoodActionTypes.REMOVE_FOOD_FAIL,
        payload: e.message,
      });
    }
  };
};
