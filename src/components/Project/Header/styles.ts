import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightAstro,
    height: '5%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
  },
  emailText: {
    color: colors.white,
  },
  button: {
    width: '15%',
    height: '65%',
    backgroundColor: colors.darkAstro,
  },
});

export default styles;
