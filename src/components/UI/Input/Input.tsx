import React, {FC, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {colors} from '../../../constants/colors';
import {isCorrectEmail, isCorrectPassword} from '../../../utils/validation';
import {notViewPassword, viewPassword} from '../../../constants/image';

interface Props {
  placeHolderText: string;
  isPassword?: boolean;
  containerStyle?: any;
  isValid: any;
  changeIsValid: any;
  valueText?: String;
  setValueText?: any;
}

const Input: FC<Props> = ({
  placeHolderText,
  isPassword = false,
  containerStyle,
  isValid,
  changeIsValid,
  valueText,
  setValueText,
}) => {
  const [passwordView, setPasswordView] = useState(isPassword);
  const Validating = (value: string | undefined) => {
    if (value === undefined) {
      value = '';
    }
    if (isPassword) {
      if (isCorrectPassword(value)) {
        // @ts-ignore
        changeIsValid(true);
      } else {
        // @ts-ignore
        changeIsValid(false);
      }
    } else {
      if (isCorrectEmail(value)) {
        // @ts-ignore
        changeIsValid(true);
      } else {
        // @ts-ignore
        changeIsValid(false);
      }
    }
  };
  // @ts-ignore
  return (
    <View>
      <TextInput
        style={[styles.container, containerStyle]}
        onChangeText={value => {
          setValueText(value);
          // @ts-ignore
          Validating(valueText);
        }}
        placeholder={placeHolderText}
        placeholderTextColor={colors.grey}
        secureTextEntry={passwordView}
        onEndEditing={() => {
          // @ts-ignore
          Validating(valueText);
        }}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setPasswordView(passwordView => !passwordView)}>
          {passwordView ? (
            <Image source={viewPassword} style={styles.eye} />
          ) : (
            <Image source={notViewPassword} style={styles.eye} />
          )}
        </TouchableOpacity>
      )}
      {isValid === false ? (
        <Text style={styles.error}>
          {isPassword ? 'Неккоректный пароль' : 'Неккоректный email'}
        </Text>
      ) : null}
    </View>
  );
};

export default Input;
