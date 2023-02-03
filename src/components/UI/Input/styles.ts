import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/global';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.darkAstro,
    borderRadius: 8,
    height: SCREEN_HEIGHT * 0.05,
    width: SCREEN_WIDTH * 0.75,
    color: colors.purple,
  },
  error: {
    color: colors.red,
  },
  eye: {
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 0.05 * 0.25,
    left: SCREEN_WIDTH * 0.75 * 0.88,
    height: SCREEN_HEIGHT * 0.05 * 0.5,
    width: SCREEN_WIDTH * 0.75 * 0.075,
  },
});
export default styles;
