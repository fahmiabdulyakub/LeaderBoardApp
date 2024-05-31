import {View} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

import {PropsType} from './types';
import {ICSearch} from '@assets/icons';
import {Button, Input} from '@components/atoms';

const Header = ({value, onChangeText, onPress}: PropsType) => {
  return (
    <View style={styles.container}>
      <Input
        onChangeText={onChangeText}
        value={value}
        placeholder="User name.."
        icon={<ICSearch />}
      />
      <View style={styles.gap} />
      <Button text="Search" onPress={onPress} />
    </View>
  );
};

export default memo(Header);
