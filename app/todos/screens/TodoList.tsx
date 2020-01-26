import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {
  Button,
  Title,
  ActivityIndicator,
  TextInput,
  HelperText,
} from 'react-native-paper';

import {useSelector, useDispatch} from 'react-redux';

import {fetchTodos, removeTodo, addTodo} from '../todo-actions';
import {ITodoModel} from '../todo-types';

import {Dispatch} from 'redux';
import {IApplicationState} from '../../store';

import {Formik, FormikProps} from 'formik';
import * as Yup from 'yup';

const TodoList: React.FC<any> = props => {
  /* part of Redux pattern */
  const dispatch: Dispatch = useDispatch();
  const {todos, isLoading} = useSelector(
    (state: IApplicationState) => state.todoReducer,
  );

  const [todo, setTodo] = React.useState<ITodoModel>({
    title: '',
  } as ITodoModel);

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .label('Title')
      .min(4, 'Title must have at least 4 characters')
      .max(120)
      .required(),
  });

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 20}}>
        <Formik
          initialValues={todo}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            dispatch(addTodo(values));
            actions.resetForm();
          }}>
          {formikProps => (
            <View>
              <TextInput
                onChangeText={formikProps.handleChange('title')}
                onBlur={formikProps.handleBlur('title')}
                value={formikProps.values.title}
                label="what's new?"
              />
              <HelperText type={'error'}>{formikProps.errors.title}</HelperText>
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
          todos.map((t: ITodoModel) => (
            <View key={t.id} style={styles.cell}>
              <Title>{t.title}</Title>
              <View style={{flexDirection: 'row'}}>
                <Button icon="pencil">{''}</Button>
                <Button
                  icon="information"
                  onPress={() =>
                    props.navigation.navigate('todoDetail', {
                      obj: t,
                    })
                  }>
                  {''}
                </Button>
                <Button
                  icon="delete"
                  onPress={() => dispatch(removeTodo(t.id))}>
                  {''}
                </Button>
              </View>
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
export default TodoList;
