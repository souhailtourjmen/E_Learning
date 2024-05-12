/* eslint-disable prettier/prettier */
import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';

interface SessionUser{
    user: any;
    isAuthenticated: boolean;
}
const initialState: SessionUser = {
  user:null,
  isAuthenticated: false,
};

export const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{user: any}>) => {
      const {user} = action.payload;
      console.log('\x1b[34m%s\x1b[0m', 'src/store/slices/auth/index.ts:19 user', user);
      state.user = user;
      state.isAuthenticated = true;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    
    logOutUser: state => {
      state.user =null;
      state.isAuthenticated = false;
    },
  },
});
// Select the credentials slice from the Redux store
const selectCredentialsSlice = (state: { credentials: SessionUser; }) => state.credentials;

// Select the user from the credentials slice
export const selectUser = createSelector(
  [selectCredentialsSlice],
  (credentials) => credentials.user
);

// Select the isAuthenticated from the credentials slice
export const selectIsAuthenticated = createSelector(
  [selectCredentialsSlice],
  (credentials) => credentials.isAuthenticated
);
export const {
  setCredentials,
  setAuthenticated,
  logOutUser,
} = credentialsSlice.actions;
