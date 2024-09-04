import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Departments = () => {
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/department/departments')
            .then(res => {
                setDepartments(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/department/${id}`)
            .then(
                () => {
                    setDepartments(prevDepartments =>
                        prevDepartments.filter(department => department.id !== id)
                    )
                }
            )
    }

    return (
        <div>
            <h2 className="text-center">List of Departments</h2>
            <button type="button" className="btn btn-primary" onClick={() => {navigate('./add-department')}}>Add Department</button>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Department Id</th>
                        <th scope="col">Department name</th>
                        <th scope="col">Department Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department, index) => (
                        <tr key={index}>
                            <th scope="row">{department.id}</th>
                            <td>{department.departmentName}</td>
                            <td>{department.departmentDescription}</td>
                            <td>
                                <button type="button" className="btn btn-info me-3" onClick={() => {navigate(`./update-department/${department.id}`)}}>Update</button>
                                <button type="button" className="btn btn-danger" onClick={() => {handleDelete(department.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default Departments;