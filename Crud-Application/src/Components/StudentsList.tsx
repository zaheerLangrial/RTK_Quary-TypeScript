import { Link } from "react-router-dom";
import { useDeleteStudentMutation, useGetStudentsQuery } from "../features/studentApi";

function StudentsList() {
    const [deleteStudent] = useDeleteStudentMutation()
    const { data: students, isLoading, isError } = useGetStudentsQuery();
    return (
        <div className=" max-w-xl mx-auto py-5">
            <table className="">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading && <span>Wait Plese</span>
                    }
                    {
                        isError && <span>Something Wents Wrong.....</span>
                    }
                    {
                        students?.map((student) => {
                            return (
                                <tr key={student.id} className="border-b">
                                    <td>{student.id}</td>
                                    <td className="px-5">{student.studentName}</td>
                                    <td className="px-10">{student.studentEmail}</td>
                                    <td className="flex space-x-3">
                                        <button className="px-3 py-1 border" onClick={() =>deleteStudent(student.id)}>Delete</button>
                                        <Link to={`/creat/${student.id}`} className="px-3 py-1 border">Edit</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default StudentsList;
