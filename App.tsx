/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CommonNavigator from './src/navigation/CommonNavigator/CommonNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <CommonNavigator />
    </NavigationContainer>
  );
};

export default App;
