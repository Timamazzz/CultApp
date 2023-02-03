import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT} from '../../../constants/global';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backAstro,
  },
  form: {
    height: '25%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightAstro,
    padding: '5%',
    borderRadius: 8,
  },
});

export default styles;
