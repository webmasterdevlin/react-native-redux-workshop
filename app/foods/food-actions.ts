import {Dispatch, ActionCreator} from 'redux';
import {IFoodModel, FoodActionTypes} from './food-types';

/* action creators of thunk */
export const fetchFoods: ActionCreator<any> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: FoodActionTypes.FETCH_FOODS_REQUEST
        })
        try {
            // a GET HTTP Request
        }
    }
}