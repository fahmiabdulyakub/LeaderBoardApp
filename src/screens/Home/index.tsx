import {View, Text, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {Header, ModalInfo} from '@components/molecules';
import {Card} from '@components/atoms';
import {User} from '@types';
import useHome from './hooks/useHome';

const Home = () => {
  const {
    modalRef,
    topUsers,
    searchedUser,
    searchQuery,
    handleSearch,
    handleSearchInput,
  } = useHome();

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
      <Header
        value={searchQuery}
        onChangeText={handleSearchInput}
        onPress={handleSearch}
      />
      <View style={styles.container}>
        <View style={styles.table}>
          <Text style={styles.textTable}>Name</Text>
          <Text style={styles.textTable}>Rank</Text>
          <Text style={styles.textTable}>Number of bananas</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          data={topUsers}
          renderItem={renderItem}
        />
      </View>
      <ModalInfo
        ref={modalRef}
        text="This user name does not exist! Please specify an existing user name!"
      />
    </View>
  );
};

export default Home;
