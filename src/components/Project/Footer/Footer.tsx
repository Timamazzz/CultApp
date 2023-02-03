import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

// @ts-ignore
const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.urlText}>
        https://go-apod.herokuapp.com/#api-docs
      </Text>
    </View>
  );
};
export default Footer;
