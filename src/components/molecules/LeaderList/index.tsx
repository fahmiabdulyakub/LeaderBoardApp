import {View} from 'react-native';
import React, {memo, useCallback, useRef} from 'react';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {User} from '@types';
import {Button, Card} from '@components/atoms';
import {ICFilter} from '@assets/icons';
import {LABELS_DATA, LABEL_NAMES} from '@constants/LabelData';

interface PropsType {
  data: User[];
  searchedUser: string | null;
  onLabelPress: (label: LABELS_DATA) => void;
}

const LeaderList = ({data, searchedUser, onLabelPress}: PropsType) => {
  const listRef = useRef<FlatList>(null);
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
        {LABEL_NAMES.map((item, index) => {
          const onPress = () => {
            onLabelPress(item);
            listRef.current?.scrollToOffset({animated: true, offset: 1});
          };
          return (
            <Button
              key={index}
              text={item}
              textStyle={styles.text}
              style={styles.button}
              icon={
                item !== LABELS_DATA.NUMBER_BANANAS ? <ICFilter /> : undefined
              }
              disabled={item === LABELS_DATA.NUMBER_BANANAS}
              onPress={onPress}
            />
          );
        })}
      </View>
    );
  }, [onLabelPress]);

  return (
    <View style={styles.container}>
      {renderLabel()}
      <FlatList
        ref={listRef}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default memo(LeaderList);
