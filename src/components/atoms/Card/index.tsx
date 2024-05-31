import {Text, View} from 'react-native';
import React, {memo, useMemo} from 'react';
import styles from './styles';
import {PropsType} from './types';
import {Colors} from '@themes';

const Card = ({item, rank, isSearchedUser}: PropsType) => {
  const textStyle = useMemo(
    () => [
      styles.text,
      {
        color: isSearchedUser ? Colors.red : Colors.black,
      },
    ],
    [isSearchedUser],
  );

  return (
    <View style={styles.container}>
      <Text style={textStyle}>{item.name}</Text>
      <Text style={styles.text}>{rank}</Text>
      <Text style={styles.text}>{item.bananas}</Text>
    </View>
  );
};

const propsAreEqual = (prevProps: PropsType, nextProps: PropsType) =>
  JSON.stringify(prevProps) === JSON.stringify(nextProps);

export default memo(Card, propsAreEqual);
