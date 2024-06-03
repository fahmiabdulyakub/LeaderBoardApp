import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {LeaderList, Header, ModalInfo} from '@components/molecules';
import useHome from './hooks/useHome';

const Home = () => {
  const {
    modalRef,
    topUsers,
    searchedUser,
    searchQuery,
    handleSearch,
    handleSearchInput,
    handleSortList,
  } = useHome();

  return (
    <View style={styles.container}>
      <Header
        value={searchQuery}
        onChangeText={handleSearchInput}
        onPress={handleSearch}
      />
      <LeaderList
        data={topUsers}
        searchedUser={searchedUser}
        onLabelPress={handleSortList}
      />
      <ModalInfo
        ref={modalRef}
        text="This user name does not exist! Please specify an existing user name!"
      />
    </View>
  );
};

export default Home;
