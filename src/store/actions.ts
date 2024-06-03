import {ACTION_TYPES} from '@constants/ActionTypes';
import {User} from '@types';

interface SetUsersAction {
  type: ACTION_TYPES.SET_USERS;
  users: User[];
}

interface SearchUserAction {
  type: ACTION_TYPES.SEARCH_USER;
  username: string;
}

export type UserActions = SetUsersAction | SearchUserAction;

export const setUsers = (users: User[]): SetUsersAction => ({
  type: ACTION_TYPES.SET_USERS,
  users,
});

export const searchUser = (username: string): SearchUserAction => ({
  type: ACTION_TYPES.SEARCH_USER,
  username,
});
