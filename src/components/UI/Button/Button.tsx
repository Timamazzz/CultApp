import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  text: String;
  action: () => void;
  styleContainer?: any;
  styleText?: any;
};
const Button: FC<Props> = ({styleContainer = {}, styleText = {}, ...props}) => {
  return (
    <>
      <TouchableOpacity
        onPress={props.action}
        style={[styles.container, styleContainer]}>
        <Text style={[styles.text, styleText]}>{props.text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
