import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/employees/employees')
            .then(res => {
                setEmployees(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/employees/${id}`)
            .then(
                () => {
                    setEmployees(prevEmployees =>
                        prevEmployees.filter(employee => employee.id !== id)
                    )
                }
            )
    }

    return (
        <div>
            <h2 className="text-center">List of Employees</h2>
            <button type="button" className="btn btn-primary" onClick={() => {navigate('/add-employee')}}>Add Employee</button>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Employee Id</th>
                        <th scope="col">Employee Firstname</th>
                        <th scope="col">Employee Lastname</th>
                        <th scope="col">Employee email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <th scope="row">{employee.id}</th>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button type="button" className="btn btn-info me-3" onClick={() => {navigate(`/update-employee/${employee.id}`)}}>Update</button>
                                <button type="button" className="btn btn-danger" onClick={() => {handleDelete(employee.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default Employees;