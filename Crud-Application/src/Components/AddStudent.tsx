import React, { useEffect, useState } from 'react'
import Header from './Header'
import {useGetStudentQuery, useUpdateStudentMutation } from '../features/studentApi';
import { useNavigate, useParams } from 'react-router-dom';

type objType = {
  id? : string; 
  studentName : string;
  studentEmail : string;
}

function AddStudent() {

  const {id} = useParams()
  const {data} =useGetStudentQuery(id!)
  const  [studentName , setStudentName] = useState<string>('')
const [studentEmail , setStudentEmail] = useState<string>(data?.studentEmail!)

  useEffect(() =>{
    if(data && id) {
      setStudentName(data.studentName)
      setStudentEmail(data.studentEmail)
    }
  }, [data , id])


  // const {refetch} = useGetStudentsQuery()

  const navigate = useNavigate()

  // const [addStudent] = useAddStudentMutation()
  const [updateStudent] = useUpdateStudentMutation()

  // useEffect(() => {
  //   if(id && data) {
  //     setStudentName(data.studentName)
  //     setStudentEmail(data.studentEmail)
  //   }else {
  //     console.log(isError)
  //   }
  // })

    const handleForm = async (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      let obj : objType  = {
        id : id,
        studentName : studentName ,
        studentEmail : studentEmail
      }
      console.log(obj)
      await updateStudent(obj)
      // refetch()
      navigate('/')
    }
  return (
    <>
      <Header isActive={true} />
      <form className="w-full max-w-sm mt-10">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" onChange={(e) => setStudentName(e.target.value)} type="text" placeholder='Name' value={studentName}/>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" onChange={(e) => setStudentEmail(e.target.value)} placeholder="example@gmail.com" value={studentEmail}/>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleForm}>
              Add Student
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddStudent