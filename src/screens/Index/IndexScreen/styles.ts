import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/global';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: colors.backAstro,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    height: '85%',
    width: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightAstro,
    borderRadius: 8,
    padding: '5%',
  },
  text: {
    color: colors.black,
  },
  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: colors.purple,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  imageContainer: {
    width: '95%',
    height: '30%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.purple,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  imageHD: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    zIndex: -1,
  },
  post: {
    width: '95%',
    height: '60%',
    flexDirection: 'column',
    backgroundColor: colors.darkAstro,
    borderRadius: 8,
    paddingHorizontal: '5%',
  },
  titleText: {
    color: colors.purple,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  greyText: {
    color: colors.grey,
  },
  margin: {
    marginRight: 10,
  },
  closeImage: {
    color: colors.purple,
    fontSize: 50,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});

export default styles;
