import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Button from '../../UI/Button/Button';

// @ts-ignore
const Header = ({email, exit}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.emailText}>{email}</Text>
      <Button text={'Выйти'} action={exit} styleContainer={styles.button} />
    </View>
  );
};
export default Header;
