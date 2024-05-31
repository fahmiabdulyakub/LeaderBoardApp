import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.black,
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 16,
    flex: 0,
  },
});
