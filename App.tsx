/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CommonNavigator from './src/navigation/CommonNavigator/CommonNavigator';
import NetInfo from '@react-native-community/netinfo';
import ConnectScreen from './src/screens/Connect/ConnectScreen/ConnectScreen';

const App = () => {
  const [isInternetReachable, setIsInternetReachable] = useState(Boolean);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      return setIsInternetReachable(state.isInternetReachable);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <NavigationContainer>
      {isInternetReachable ? <CommonNavigator /> : <ConnectScreen />}
    </NavigationContainer>
  );
};

export default App;
