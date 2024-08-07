import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import testSetupReducer from './testSetupInfo';

const store = configureStore({
  reducer: {
    testSetupInfo: testSetupReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;