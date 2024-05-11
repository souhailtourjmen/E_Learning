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
import {
  useForgetPasswordMutation,
  useLoginMutation,
  useSignUpMutation,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from "./auth";
import { useFetchAllCourseQuery, useFetchCourseIdQuery } from "./course";
>>>>>>> 97ed279c (- add dynamic screen details)

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
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
  // end auth service
  // course service
  useFetchAllCourseQuery,
  useFetchCourseIdQuery,
>>>>>>> 97ed279c (- add dynamic screen details)
};
