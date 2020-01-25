import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Title} from 'react-native-paper';
import {Dispatch} from 'redux';
import {fetchFoods} from '../food-actions';
import {Formik} from 'formik';
import * as Yup from 'yup';

const FoodList: React.FC = () => {
  return (
    <View>
      <Title>FoodList Works!</Title>
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
