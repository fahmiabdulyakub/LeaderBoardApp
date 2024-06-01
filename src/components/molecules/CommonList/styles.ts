import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingHorizontal: 8,
  },
  text: {
    fontFamily: Fonts.Inter,
    fontSize: 14,
    color: Colors.blue,
    width: 70,
  },
});

export default styles;
