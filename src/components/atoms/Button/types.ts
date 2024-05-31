import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface PropsType {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}
