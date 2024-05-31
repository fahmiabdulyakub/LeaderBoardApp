import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.white,
  },
});
