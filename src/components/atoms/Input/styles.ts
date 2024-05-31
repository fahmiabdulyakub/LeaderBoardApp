import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 8,
    backgroundColor: Colors.white,
    height: 60,
  },
  inputContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  input: {
    fontSize: 14,
    fontFamily: Fonts.Inter,
    color: Colors.gray,
    top: 1,
  },
});
