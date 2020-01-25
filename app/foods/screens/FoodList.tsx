import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Title, ActivityIndicator} from 'react-native-paper';
import {Dispatch} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFoods} from '../food-actions';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {IApplicationState} from '../../store';

import {IFoodModel} from '../food-types';

const FoodList: React.FC<any> = props => {
  const dispatch: Dispatch = useDispatch();
  const {foods, isLoading} = useSelector(
    (s: IApplicationState) => s.foodReducer,
  );

  React.useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 20}}></View>
      <View style={styles.list}>
        {isLoading ? (
          <View style={styles.loaderBase}>
            <ActivityIndicator animating size="large" />
          </View>
        ) : (
          foods.map((f: IFoodModel) => (
            <View>
              <Title>{f.name}</Title>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  loaderBase: {
    flex: 1,
    margin: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '40%',
    fontSize: 20,
  },
  list: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  cell: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default FoodList;
