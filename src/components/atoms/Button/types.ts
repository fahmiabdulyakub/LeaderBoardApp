import {StyleProp, TextStyle, TouchableOpacityProps} from 'react-native';

export type PropsType = {
  text?: string;
  icon?: JSX.Element;
  textStyle?: StyleProp<TextStyle>;
} & TouchableOpacityProps;
