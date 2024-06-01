import {View, Text} from 'react-native';
import React, {memo, useCallback} from 'react';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {User} from '@types';
import {Card} from '@components/atoms';

interface PropsType {
  data: User[];
  searchedUser: string | null;
}

const CommonList = ({data, searchedUser}: PropsType) => {
  const keyExtractor = useCallback((item: User) => item.uid, []);

  const renderItem = useCallback(
    ({item}: {item: User}) => {
      const isSearchedUser =
        item.name.toLowerCase() === searchedUser?.toLowerCase();

      return (
        <Card
          item={item}
          rank={item.rank as number}
          isSearchedUser={isSearchedUser}
        />
      );
    },
    [searchedUser],
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>Rank</Text>
        <Text style={styles.text}>Number of bananas</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

const propsAreEqual = (prevProps: PropsType, nextProps: PropsType) =>
  JSON.stringify(prevProps) === JSON.stringify(nextProps);

export default memo(CommonList, propsAreEqual);
