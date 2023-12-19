import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export type students = {
    id : string;
    studentName : string;
    studentEmail : string;
}


export const studentApi = createApi({
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://658027cc6ae0629a3f547e8e.mockapi.io/rtkQuaryApi'
    }), 
    tagTypes : ['Students'],
    endpoints : (builder) => ({
        getStudents : builder.query<students[] , void>({
            query : () => '/students',
            providesTags : ['Students']
        }),
        getStudent : builder.query<students , string>({
            query : (id) => `/students/${id}/`,
            providesTags : ['Students']
        }),
        addStudent : builder.mutation<void , students>({
            query : (student) => ({
                url : '/students',
                method : 'POST',
                body : student,
            }),
            invalidatesTags : ['Students']
        }),
        deleteStudent : builder.mutation<void , string>({
            query : (id) => ({
                url : `/students/${id}/`,
                method : 'DELETE'
            }),
            invalidatesTags : ['Students']
        }),
        updateStudent : builder.mutation<void,students>({
            query : (student) => ({
                url : `/students/${student.id}`,
                method : 'PUT',
                body : student
            }),
            invalidatesTags : ['Students']
        }),
    }),
})



export const { useGetStudentsQuery , useAddStudentMutation  , useDeleteStudentMutation , useGetStudentQuery , useUpdateStudentMutation} = studentApi