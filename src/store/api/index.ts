import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import { getToken } from '../../storage';
const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: `${Config.API_URL}`,
  credentials: 'include',
  prepareHeaders: async headers => {
    const token = await getToken();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('\x1b[34m%s\x1b[0m', 'src/store/api/index.ts:9 token', token);
=======
    // console.log('%cindex.ts line:10 token', 'color: #007acc;', token);
>>>>>>> ab93aef2 (first unit project)
=======
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
=======
    // console.log('%cindex.ts line:10 token', 'color: #007acc;', token);
>>>>>>> e6aa837d (first unit project)
>>>>>>> 4cdec91b (first unit project)
=======
=======
>>>>>>> f69bf6ed (- add design progression)
=======
    // console.log('%cindex.ts line:10 token', 'color: #007acc;', token);
>>>>>>> e6aa837d (first unit project)
=======
>>>>>>> df35d18d (- add WS login implementation)
<<<<<<< HEAD
>>>>>>> c662ef07 (- add WS login implementation)
=======
=======
    console.log('\x1b[34m%s\x1b[0m', 'src/store/api/index.ts:9 token', token);
>>>>>>> 1d913c27 (- add design progression)
>>>>>>> f69bf6ed (- add design progression)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   "courses",
   "course",
   "coursesFiltre",
   'chats',
   'profile',
   'Progression'

=======
   
>>>>>>> ab93aef2 (first unit project)
=======
=======
>>>>>>> 2960beef (Add screen filter for course by niveau)
   "courses"
=======
   
>>>>>>> e6aa837d (first unit project)
<<<<<<< HEAD
>>>>>>> 4cdec91b (first unit project)
=======
=======
   "courses",
<<<<<<< HEAD
   "coursesFiltre"
>>>>>>> 525059d7 (Add screen filter for course by niveau)
<<<<<<< HEAD
>>>>>>> 2960beef (Add screen filter for course by niveau)
=======
=======
   "coursesFiltre",
<<<<<<< HEAD
   'chats'
>>>>>>> 248b181a (add feature chat module)
<<<<<<< HEAD
>>>>>>> 3179387e (add feature chat module)
=======
=======
   'chats',
<<<<<<< HEAD
   'profile'
>>>>>>> 7c70e1dc (-add new service profile)
<<<<<<< HEAD
>>>>>>> 00287c65 (-add new service profile)
=======
=======
   'profile',
   'Progression'
>>>>>>> 1d913c27 (- add design progression)
>>>>>>> f69bf6ed (- add design progression)
  ],
  endpoints: builder => ({}),
});
