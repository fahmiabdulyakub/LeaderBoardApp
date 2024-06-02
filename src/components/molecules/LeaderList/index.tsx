import {View} from 'react-native';
import React, {memo, useCallback} from 'react';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {User} from '@types';
import {Button, Card} from '@components/atoms';
import {ICFilter} from '@assets/icons';
import {LabelNames} from '@constants/UserData';

interface PropsType {
  data: User[];
  searchedUser: string | null;
}

const LeaderList = ({data, searchedUser}: PropsType) => {
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

  const renderLabel = useCallback(() => {
    return (
      <View style={styles.titleContainer}>
        {LabelNames.map((item, index) => {
          return (
            <Button
              key={index}
              text={item}
              textStyle={styles.text}
              style={styles.button}
              icon={<ICFilter />}
            />
          );
        })}
      </View>
    );
  }, []);

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={renderLabel}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      data={data}
      renderItem={renderItem}
    />
  );
};

const propsAreEqual = (prevProps: PropsType, nextProps: PropsType) =>
  JSON.stringify(prevProps) === JSON.stringify(nextProps);

export default memo(LeaderList, propsAreEqual);
