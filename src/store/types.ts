import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {AppState} from '@types';

export type AppDispatch = ThunkDispatch<AppState, void, AnyAction>;
