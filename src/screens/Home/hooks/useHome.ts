import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Keyboard} from 'react-native';
import {useDispatch, useSelector} from '@store/hooks';
import {setUsers, searchUser} from '@store/actions';
import {AppState} from '@types';
import {UserData} from '@constants/UserData';
import Modal from 'react-native-modal';
import {LABELS_DATA} from '@constants/LabelData';
import {SORT_ORDER} from '@constants/Filter';

const useHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState<LABELS_DATA>(
    LABELS_DATA.RANK,
  );
  const [sortOrder, setSortOrder] = useState<SORT_ORDER>(SORT_ORDER.DESC);
  const dispatch = useDispatch();
  const users = useSelector((state: AppState) => state.users);
  const searchedUser = useSelector((state: AppState) => state.searchedUser);
  const modalRef = useRef<Modal | null>(null);

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

  const sortUsers = useCallback(
    (criteria?: LABELS_DATA) => {
      const initialUsers = [...Object.values(UserData)];
      let sorted = users.length ? users : initialUsers;

      switch (criteria ?? sortCriteria) {
        case LABELS_DATA.NAME:
          sorted.sort((a, b) =>
            sortOrder === SORT_ORDER.ASC
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name),
          );
          break;
        default:
          sorted.sort((a, b) =>
            sortOrder === SORT_ORDER.ASC
              ? a.bananas - b.bananas
              : b.bananas - a.bananas,
          );
      }

      if (!users.length) {
        sorted = sorted.map((user, index) => ({
          ...user,
          rank: index + 1,
        }));
      }

      dispatch(setUsers(sorted));
    },
    [users, dispatch, sortCriteria, sortOrder],
  );

  useEffect(() => {
    sortUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topUsers = useMemo(() => {
    if (!searchedUser) {
      return users;
    }

    const top10Users = users.slice(0, 10);
    const searchedUserData = users.find(
      user => user.name.toLowerCase() === searchedUser?.toLowerCase(),
    );

    if (searchedUserData) {
      const isSearchedUserInTop10 = top10Users.some(
        user => user.name.toLowerCase() === searchedUserData.name.toLowerCase(),
      );

      if (!isSearchedUserInTop10) {
        top10Users[top10Users.length - 1] = searchedUserData;
      }
    }

    return top10Users;
  }, [searchedUser, users]);

  const handleSortList = useCallback(
    (label: LABELS_DATA) => {
      dispatch(searchUser(''));
      if (sortCriteria === label) {
        setSortOrder(prevOrder =>
          prevOrder === SORT_ORDER.ASC ? SORT_ORDER.DESC : SORT_ORDER.ASC,
        );
      } else {
        setSortCriteria(label);
        setSortOrder(SORT_ORDER.ASC);
      }
      sortUsers(label);
    },
    [sortUsers, sortCriteria, dispatch],
  );

  return {
    modalRef,
    topUsers,
    searchedUser,
    searchQuery,
    handleSearch,
    handleSearchInput,
    handleSortList,
  };
};

export default useHome;
