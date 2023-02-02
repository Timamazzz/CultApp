import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/global';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.75,
    height: SCREEN_HEIGHT * 0.05,
    borderRadius: 6,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
  },
});
export default styles;
