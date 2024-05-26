/* eslint-disable prettier/prettier */


import { apiSlice } from "../../api/";

export const progressionApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        getProgressionByMatricule: builder.query({
            query: () => `/api/progresion/progressionByMatricule`,
            providesTags: (result: any) => {
                return [{ type: 'Progression' }];
            },
        }),
        addVideo: builder.mutation({
            query: ({ videoId, courseId }: { videoId: string, courseId: string }) => ({
                url: `/api/progresion/addVideo/${courseId}`,
                method: "PUT",
                body: { videoId },
            }),
            invalidatesTags: ['Progression',"course"],
        }),

    }),
    overrideExisting: true
});

export const {
    useGetProgressionByMatriculeQuery,
    useAddVideoMutation,

} = progressionApiSlice;
