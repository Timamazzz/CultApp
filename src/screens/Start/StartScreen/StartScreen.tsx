import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Button from '../../../components/UI/Button/Button';
import {SCREENS} from '../../../navigation/screensName';

// @ts-ignore
const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        text={'Начать'}
        action={() => {
          // @ts-ignore
          navigation.navigate(SCREENS.Auth);
        }}
      />
    </View>
  );
};
export default StartScreen;
