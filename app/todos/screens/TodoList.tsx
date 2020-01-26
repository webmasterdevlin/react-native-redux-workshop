import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Title} from 'react-native-paper';

import {useSelector, useDispatch} from 'react-redux';

import {fetchTodos} from '../todo-actions';
import {ITodoModel} from '../todo-types';

import {Dispatch} from 'redux';
import {IApplicationState} from '../../store';

const TodoList: React.FC = () => {
  /* part of Redux pattern */
  const dispatch: Dispatch = useDispatch();
  const {todos} = useSelector((state: IApplicationState) => state.todoReducer);

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <View>
      {todos.map((t: ITodoModel) => (
        <Title key={t.id}>{t.title}</Title>
      ))}
    </View>
  );
};
export default TodoList;
