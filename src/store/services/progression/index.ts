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
<<<<<<< HEAD
                url: `/api/progresion/addVideo/${courseId}`,
                method: "PUT",
                body: { videoId },
            }),
            invalidatesTags: ['Progression',"course"],
=======
                url: `/api/profile/updateProfileController/${courseId}`,
                method: "PUT",
                body: { videoId },
            }),
            invalidatesTags: ['Progression',],
>>>>>>> f69bf6ed (- add design progression)
        }),

    }),
    overrideExisting: true
});

export const {
    useGetProgressionByMatriculeQuery,
    useAddVideoMutation,

} = progressionApiSlice;
