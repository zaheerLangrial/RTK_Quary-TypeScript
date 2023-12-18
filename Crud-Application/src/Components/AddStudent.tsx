import React from 'react'
import Header from './Header'
import { useAddStudentMutation, useGetStudentsQuery } from '../features/studentApi';
import { useNavigate } from 'react-router-dom';

type objType = {
  id? : string; 
  studentName : string;
  studentEmail : string;
}

function AddStudent() {

  // const {refetch} = useGetStudentsQuery()

  const navigate = useNavigate()

  const [addStudent] = useAddStudentMutation()

    const handleForm = async (e : React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      let obj : objType  = {
        studentName : e.target.name.value ,
        studentEmail : e.target.email.value
      }
      await addStudent(obj)
      // refetch()
      navigate('/')
    }
  return (
    <>
      <Header isActive={true} />
      <form className="w-full max-w-sm mt-10" onSubmit={handleForm}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" name='name' type="text" placeholder='Name'/>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" name='email' type="email" placeholder="example@gmail.com"/>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Add Student
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddStudent