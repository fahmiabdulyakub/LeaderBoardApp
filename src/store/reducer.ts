import {ACTION_TYPES} from '@constants/ActionTypes';
import {UserActions} from './actions';
import {AppState} from '@types';

const initialState: AppState = {
  users: {},
  searchedUser: null,
};

const reducer = (
  state: AppState = initialState,
  action: UserActions,
): AppState => {
  switch (action.type) {
    case ACTION_TYPES.SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case ACTION_TYPES.SEARCH_USER:
      return {
        ...state,
        searchedUser: action.username,
      };
    default:
      return state;
  }
};

export default reducer;
