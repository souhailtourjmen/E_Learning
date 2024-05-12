/* eslint-disable prettier/prettier */


import { POSTMessage } from "../../../types";
import { apiSlice } from "../../api/";
  
export const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
      fetchAllChats: builder.query({
          query: () => `getAllMessages`,
          providesTags: (result: any) => {
            return [{type: 'chats'}];
          },
        }),
        sendMessage: builder.mutation({
            query: (postMessage: POSTMessage) => ({
              url: `postMessageWithNomPrenom`,
              method: "POST",
              body: postMessage,
            }),
            invalidatesTags: ['chats',],
          }),
      
  }),
  overrideExisting: true
});

export const {
  useFetchAllChatsQuery,
  useSendMessageMutation,
} = chatApiSlice;
