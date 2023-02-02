import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import {SCREENS} from '../../../navigation/screensName';

// @ts-ignore
const AuthScreen = ({navigation}) => {
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);
  const [valueEmailInput, setValueEmailInput] = useState(String);
  const [valuePasswordInput, setPasswordInput] = useState(String);
  const toIndex = () => {
    if (isValidEmail && isValidPassword) {
      navigation.navigate(SCREENS.Index, {
        email: valueEmailInput,
      });
    } else {
      if (!isValidEmail) {
        // @ts-ignore
        setIsValidEmail(false);
      }
      if (!isValidPassword) {
        // @ts-ignore
        setIsValidPassword(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input
          placeHolderText={'Введите email'}
          isValid={isValidEmail}
          changeIsValid={setIsValidEmail}
          valueText={valueEmailInput}
          setValueText={setValueEmailInput}
        />
        <Input
          placeHolderText={'Введие пароль'}
          isPassword
          isValid={isValidPassword}
          changeIsValid={setIsValidPassword}
          valueText={valuePasswordInput}
          setValueText={setPasswordInput}
        />
        <Button text={'Войти'} action={() => toIndex()} />
      </View>
    </View>
  );
};
export default AuthScreen;
