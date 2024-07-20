/* eslint-disable prettier/prettier */


  import { apiSlice } from "../../api/";
  
  export const courseApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        fetchAllCourse: builder.query({
            query: () => `getAllCours`,
            providesTags: (result: any) => {
              return [{type: 'courses'}];
            },
          }),
        fetchCourseId: builder.query({
            query: (id:string) => `/getCour/${id}`,
<<<<<<< HEAD
<<<<<<< HEAD
            providesTags: (result: any) => {
              return [{type: 'course'}];
            },
          }),
        fetchCourseByNiveau: builder.query({
            query: (niveau:string) => `getCourByNiveau/${decodeURI(niveau)}/`,
            providesTags: (result: any) => {
                return [{type: 'coursesFiltre'}];
              },
=======
           
>>>>>>> 97ed279c (- add dynamic screen details)
=======
            providesTags: (result: any) => {
              return [{type: 'course'}];
            },
>>>>>>> 413519c4 (- fixed Progression)
          }),
        fetchCourseByNiveau: builder.query({
            query: (niveau:string) => `getCourByNiveau/${decodeURI(niveau)}/`,
            providesTags: (result: any) => {
                return [{type: 'coursesFiltre'}];
              },
          }),
        
    }),
    overrideExisting: true
  });
  
  export const {
    useFetchAllCourseQuery,
<<<<<<< HEAD
<<<<<<< HEAD
    useFetchCourseIdQuery,
    useFetchCourseByNiveauQuery
=======
    useFetchCourseIdQuery
>>>>>>> 97ed279c (- add dynamic screen details)
=======
    useFetchCourseIdQuery,
    useFetchCourseByNiveauQuery
>>>>>>> 2960beef (Add screen filter for course by niveau)
  } = courseApiSlice;
  