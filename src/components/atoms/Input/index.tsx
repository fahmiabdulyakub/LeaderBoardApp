import {View} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import {PropsType} from './types';
import {TextInput} from 'react-native';
import {Colors} from '@themes';

const Input = ({icon, value, placeholder, onChangeText}: PropsType) => {
  return (
    <View style={styles.container}>
      {icon}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={Colors.dark_grey}
          numberOfLines={5}
        />
      </View>
    </View>
  );
};

export default memo(Input);
