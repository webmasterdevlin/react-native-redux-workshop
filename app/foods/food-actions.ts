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
