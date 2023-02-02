import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../../screens/Start/StartScreen/StartScreen';
import {SCREENS} from '../screensName';
import AuthScreen from '../../screens/Auth/AuthScreen/AuthScreen';
import IndexScreen from '../../screens/Index/IndexScreen/IndexScreen';

// @ts-ignore
export const CommonNavigator = () => {
  const CommonStack = createStackNavigator();
  return (
    <>
      <CommonStack.Navigator initialRouteName="App">
        <CommonStack.Screen
          name={SCREENS.Start}
          component={StartScreen}
          options={{headerShown: false}}
        />
        <CommonStack.Screen
          name={SCREENS.Auth}
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <CommonStack.Screen
          name={SCREENS.Index}
          component={IndexScreen}
          options={{headerShown: false}}
        />
      </CommonStack.Navigator>
    </>
  );
};

export default CommonNavigator;
