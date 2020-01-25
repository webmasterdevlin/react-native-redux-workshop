/* schemas */
export interface IFoodState {
  readonly foods: IFoodModel[];
  readonly food: IFoodModel;
  readonly isLoading: boolean;
  readonly error: string;
}

export type ApiResponse = Record<string, any>;

export interface IFoodModel extends ApiResponse {
  id: string;
  name: string;
}

/* action types */
export const FoodActionTypes = {
  FETCH_FOODS_REQUEST: '@@/food/FETCH_FOODS_REQUEST',
  FETCH_FOODS_SUCCESS: '@@/food/FETCH_FOODS_SUCCESS',
  FETCH_FOODS_FAIL: '@@/food/FETCH_FOODS_FAIL',
};
