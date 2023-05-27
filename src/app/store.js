import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice'
import groupReducer from '../features/groupSlice';
import classReducer from '../features/classSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
    group: groupReducer,
    class: classReducer
  },
});
