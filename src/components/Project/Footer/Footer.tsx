import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

// @ts-ignore
const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://go-apod.herokuapp.com/#api-docs');
        }}>
        <Text style={styles.urlText}>
          https://go-apod.herokuapp.com/#api-docs
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;
