import * as React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../auth/LoginScreen';
import TodoList from '../todos/screens/TodoList';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="loginScreen">
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="todoList"
          component={TodoList}
          options={{title: 'My Todo List'}}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};
export default RootNavigation;
