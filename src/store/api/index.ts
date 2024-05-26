import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import { getToken } from '../../storage';
const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: `${Config.API_URL}`,
  credentials: 'include',
  prepareHeaders: async headers => {
    const token = await getToken();
    console.log('\x1b[34m%s\x1b[0m', 'src/store/api/index.ts:9 token', token);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQueryWithAuth(args, api, extraOptions);

  
  console.log(
    '%capiSlice.ts line:22 result',
    'color: #007acc;',
    '\n',
    args,
    '\n',
    api,
    '\n',
    result,
  );
  return result;
};

export const apiSlice: any = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [
   "courses",
   "coursesFiltre",
   'chats',
   'profile',
   'Progression'
  ],
  endpoints: builder => ({}),
});
