import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appData } from './app-data/app-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.User]: userProcess.reducer
});
