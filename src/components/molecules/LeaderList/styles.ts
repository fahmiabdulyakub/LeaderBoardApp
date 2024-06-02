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
  },
  text: {
    fontFamily: Fonts.Inter,
    fontSize: 14,
    color: Colors.blue,
    width: 70,
  },
  button: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    padding: 0,
  },
});

export default styles;
