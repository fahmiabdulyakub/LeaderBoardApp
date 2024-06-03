import {setUsers, searchUser} from './actions';
import {ACTION_TYPES} from '@constants/ActionTypes';
import {User} from '@types';

describe('Actions Tests', () => {
  it('should create an action to set users', () => {
    const users: User[] = [
      {
        uid: '1',
        name: 'User 1',
        bananas: 10,
        lastDayPlayed: '2024-01-01',
        longestStreak: 5,
        stars: 3,
        subscribed: true,
      },
      {
        uid: '2',
        name: 'User 2',
        bananas: 20,
        lastDayPlayed: '2024-01-02',
        longestStreak: 7,
        stars: 5,
        subscribed: false,
      },
    ];
    const expectedAction = {
      type: ACTION_TYPES.SET_USERS,
      users,
    };
    expect(setUsers(users)).toEqual(expectedAction);
  });

  it('should create an action to search user', () => {
    const username = 'User 1';
    const expectedAction = {
      type: ACTION_TYPES.SEARCH_USER,
      username,
    };
    expect(searchUser(username)).toEqual(expectedAction);
  });
});
