import {Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {PropsType} from './types';

const Button = (props: PropsType) => {
  const {text, style, textStyle, icon, ...baseProps} = props;
  return (
    <TouchableOpacity style={[styles.container, style]} {...baseProps}>
      {icon && icon}
      <Text style={[styles.title, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
