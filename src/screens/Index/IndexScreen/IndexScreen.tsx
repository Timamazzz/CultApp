import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

// @ts-ignore
const IndexScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>{route.params.email}</Text>
    </View>
  );
};
export default IndexScreen;
