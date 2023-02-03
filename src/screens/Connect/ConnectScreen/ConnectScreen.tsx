import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

// @ts-ignore
const ConnectScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Чтобы смотреть контент, нужно приложение, его я дам. Чтобы контент
        грузился, нужен интернет, его я не дам.
      </Text>
    </View>
  );
};
export default ConnectScreen;
