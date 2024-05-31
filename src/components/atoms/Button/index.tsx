import {Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {PropsType} from './types';

const Button = ({text, textStyle, style, onPress}: PropsType) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.title, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
