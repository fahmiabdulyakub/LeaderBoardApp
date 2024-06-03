import reducer from './reducer';
import {ACTION_TYPES} from '@constants/ActionTypes';
import {AppState, User} from '@types';
import {UserActions, SetUsersAction, SearchUserAction} from './actions';

describe('Reducer Tests', () => {
  const initialState: AppState = {
    users: [],
    searchedUser: null,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {} as UserActions)).toEqual(initialState);
  });

  it('should handle SET_USERS', () => {
    const users: User[] = [
      {
        bananas: 0,
        lastDayPlayed: '2017-11-01',
        longestStreak: 0,
        name: 'User 1',
        stars: 5,
        subscribed: false,
        uid: 'ymAf3Zs3MCe0zwjQnATm2B9LmeY2',
      },
      {
        bananas: 0,
        lastDayPlayed: '2017-11-01',
        longestStreak: 0,
        name: 'User 2',
        stars: 5,
        subscribed: false,
        uid: 'ymAf3Zs3MCe0zwjQnATm2B9LmeY2',
      },
    ];
    const action: SetUsersAction = {
      type: ACTION_TYPES.SET_USERS,
      users,
    };
    const expectedState: AppState = {
      ...initialState,
      users,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SEARCH_USER', () => {
    const username = 'User 1';
    const action: SearchUserAction = {
      type: ACTION_TYPES.SEARCH_USER,
      username,
    };
    const expectedState: AppState = {
      ...initialState,
      searchedUser: username,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
