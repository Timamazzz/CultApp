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
  text: {
    color: colors.purple,
  },
});

export default styles;
