// src/store/hooks.ts
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import {AppState} from '@types';
import {AppDispatch} from './types';

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
