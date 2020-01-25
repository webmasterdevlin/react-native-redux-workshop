import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {
  Title,
  ActivityIndicator,
  Button,
  TextInput,
  HelperText,
} from 'react-native-paper';
import {Dispatch} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFoods, removeFood, addFood} from '../food-actions';
import {Formik, validateYupSchema} from 'formik';
import * as Yup from 'yup';
import {IApplicationState} from '../../store';

import {IFoodModel} from '../food-types';

const FoodList: React.FC<any> = props => {
  const dispatch: Dispatch = useDispatch();
  const {foods, isLoading} = useSelector(
    (s: IApplicationState) => s.foodReducer,
  );
  const [food, setFood] = React.useState<IFoodModel>({
    name: '',
  } as IFoodModel);
  const [forEditing, setForEditing] = React.useState<string>('0');

  React.useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .label('Name')
      .min(2, 'Name must have at least 2 characters')
      .max(120)
      .required(),
  });

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 20}}>
        <Formik
          initialValues={food}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            dispatch(addFood(values));
            actions.resetForm();
          }}>
          {formikProps => (
            <View>
              <TextInput
                onChangeText={formikProps.handleChange('name')}
                onBlur={formikProps.handleBlur('name')}
                value={formikProps.values.name}
                label="what's new?"
              />
              <HelperText type={'error'}>{formikProps.errors.name}</HelperText>
              <Button mode="contained" onPress={formikProps.handleSubmit}>
                Save
              </Button>
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.list}>
        {isLoading ? (
          <View style={styles.loaderBase}>
            <ActivityIndicator animating size="large" />
          </View>
        ) : (
          foods.map((f: IFoodModel) => (
            <Formik
              key={f.id}
              initialValues={{}}
              onSubmit={(values, actions) => {
                // TODO: dispatch!
              }}>
              {formikProps => (
                <View style={styles.cell}>
                  {forEditing === f.id ? (
                    <View style={styles.input}>
                      <TextInput mode="outlined" multiline={true} />
                      <HelperText type={'error'}>
                        {
                          // TODO: error message from Yup validation
                        }
                      </HelperText>
                    </View>
                  ) : (
                    <Title>{f.name}</Title>
                  )}
                  <View style={{flexDirection: 'row'}}>
                    {forEditing === f.id ? (
                      <View style={{flexDirection: 'row'}}>
                        <Button>Cancel</Button>
                        <Button>Update</Button>
                      </View>
                    ) : (
                      <View style={{flexDirection: 'row'}}>
                        <Button
                          icon="pencil"
                          onPress={() => setForEditing(f.id)}></Button>
                        <Button
                          icon="information"
                          onPress={() =>
                            props.navigation.navigate('foodDetail', {obj: f})
                          }></Button>
                        <Button
                          icon="delete"
                          onPress={() => dispatch(removeFood(f.id))}></Button>
                      </View>
                    )}
                  </View>
                </View>
              )}
            </Formik>
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
