import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch, useSelector} from '@store/hooks';
import {setUsers, searchUser} from '@store/actions';
import {AppState} from '@types';
import {UserData} from '@constants/UserData';
import Modal from 'react-native-modal';
import {Keyboard} from 'react-native';

const useHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state: AppState) => state.users);
  const searchedUser = useSelector((state: AppState) => state.searchedUser);
  const modalRef = useRef<Modal | null>(null);

  useEffect(() => {
    dispatch(setUsers(UserData));
  }, [dispatch]);

  const handleSearch = useCallback(() => {
    Keyboard.dismiss();
    const userExists = Object.values(users).some(
      user => user.name.toLowerCase() === searchQuery.toLowerCase(),
    );

    if (userExists) {
      dispatch(searchUser(searchQuery));
    } else {
      modalRef.current?.open();
    }
  }, [users, searchQuery, dispatch]);

  const handleSearchInput = useCallback(
    (value: string) => {
      setSearchQuery(value);
      if (!value) {
        dispatch(searchUser(''));
      }
    },
    [dispatch],
  );

  const rankedUsers = useMemo(() => {
    return Object.values(users)
      .sort((a, b) => b.bananas - a.bananas)
      .map((user, index) => ({
        ...user,
        rank: index + 1,
      }));
  }, [users]);

  const topUsers = useMemo(() => {
    if (!searchedUser) {
      return rankedUsers;
    }

    const top10Users = rankedUsers.slice(0, 10);
    const searchedUserData = rankedUsers.find(
      user => user.name.toLowerCase() === searchedUser?.toLowerCase(),
    );

    if (searchedUserData) {
      const searchedUserRank = searchedUserData.rank;

      if (searchedUserRank > 10) {
        top10Users[top10Users.length - 1] = searchedUserData;
      }
    }

    return top10Users;
  }, [rankedUsers, searchedUser]);

  return {
    modalRef,
    topUsers,
    searchedUser,
    searchQuery,
    handleSearch,
    handleSearchInput,
  };
};

export default useHome;
