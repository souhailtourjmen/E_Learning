<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { useLoginMutation, useSignUpMutation, useUpdatePasswordMutation, useForgetPasswordMutation } from "./auth";
import { useFetchAllChatsQuery, useSendMessageMutation } from "./chat";
import { useFetchAllCourseQuery, useFetchCourseIdQuery } from "./course";
import { useGetInfoProfileQuery, useUpdateProfileMutation } from "./profile";
import { useAddVideoMutation, useGetProgressionByMatriculeQuery } from "./progression";
=======
import { useForgetPasswordMutation, useLoginMutation, useSignUpMutation, useUpdatePasswordMutation, useUpdateProfileMutation } from "./auth";
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
=======
>>>>>>> c662ef07 (- add WS login implementation)
=======
>>>>>>> 2960beef (Add screen filter for course by niveau)
import {
  useForgetPasswordMutation,
  useLoginMutation,
  useSignUpMutation,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from "./auth";
=======

import { useLoginMutation, useSignUpMutation, useUpdatePasswordMutation, useUpdateProfileMutation, useForgetPasswordMutation } from "./auth";
<<<<<<< HEAD
>>>>>>> 525059d7 (Add screen filter for course by niveau)
=======
import { useFetchAllChatsQuery, useSendMessageMutation } from "./chat";
>>>>>>> 248b181a (add feature chat module)
import { useFetchAllCourseQuery, useFetchCourseIdQuery } from "./course";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 97ed279c (- add dynamic screen details)
=======
=======
import { useForgetPasswordMutation, useLoginMutation, useSignUpMutation, useUpdatePasswordMutation, useUpdateProfileMutation } from "./auth";
>>>>>>> df35d18d (- add WS login implementation)
>>>>>>> c662ef07 (- add WS login implementation)
=======
=======
import { useForgetPasswordMutation, useLoginMutation, useSignUpMutation, useUpdatePasswordMutation, useUpdateProfileMutation } from "./auth";
>>>>>>> df35d18d (- add WS login implementation)
=======
>>>>>>> 343adf8e (- add dynamic screen details)
>>>>>>> 11b8c648 (- add dynamic screen details)

export {
  // auth
  useLoginMutation,
  useSignUpMutation,
<<<<<<< HEAD
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useForgetPasswordMutation,
  // end auth service
  // profile service
  useGetInfoProfileQuery,
  // end profile service
  // course service
  useFetchAllCourseQuery,
  useFetchCourseIdQuery,
  // end course service
  // chat service 
  useFetchAllChatsQuery,
  useSendMessageMutation,

  useGetProgressionByMatriculeQuery,
  useAddVideoMutation,
=======
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useForgetPasswordMutation,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
=======
>>>>>>> c662ef07 (- add WS login implementation)
  // end auth service
  // course service
  useFetchAllCourseQuery,
  useFetchCourseIdQuery,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 97ed279c (- add dynamic screen details)
=======
=======
>>>>>>> df35d18d (- add WS login implementation)
>>>>>>> c662ef07 (- add WS login implementation)
=======
=======
>>>>>>> 3179387e (add feature chat module)
=======
>>>>>>> df35d18d (- add WS login implementation)
=======
>>>>>>> 343adf8e (- add dynamic screen details)
<<<<<<< HEAD
>>>>>>> 11b8c648 (- add dynamic screen details)
=======
=======
  // end course service
  // chat service 
  useFetchAllChatsQuery,
  useSendMessageMutation
>>>>>>> 248b181a (add feature chat module)
>>>>>>> 3179387e (add feature chat module)
};
