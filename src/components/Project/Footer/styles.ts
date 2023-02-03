import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightAstro,
    height: '5%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  urlText: {
    color: colors.purple,
  },
});

export default styles;
