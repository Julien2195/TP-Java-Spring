import axios from "axios";
import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormAddEmployee = () => {
    const [employeefirstName, setEmployeefirstName] = useState("");
    const [employeeLastname, setEmployeeLastname] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [departmentValue, setDepartmentValue] = useState();
    const  [allDepartments, setAllDepartments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/department/departments')
            .then(response => {
                setAllDepartments(response.data);
            }).catch((e) => {
                console.log(e);
            })
    }, [])


    const handleSubmit = async (e) => {
        try {
            console.log(departmentValue);
            e.preventDefault();
            const sendData = await axios.post('http://localhost:8080/api/employees',
                {
                    "firstName" : employeefirstName,
                    "lastName" : employeeLastname,
                    "email" : employeeEmail,
                    "departmentId" : parseInt(departmentValue)
                }
            );
                
        console.log("Employee added successfully", sendData.data);
        navigate('/');
        } catch (error) {
             console.error(error);
        }
    }
    
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form className="w-25 p-3 border rounded bg-light">
                <div className="form-group mb-3">
                <label htmlFor="departmentName">Employee firstname</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="employeeFirstname"
                        value={employeefirstName}
                        onChange={((e) => {setEmployeefirstName(e.target.value)})}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="departmentName">Employee Lastname</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="employeeLastname"
                        value={employeeLastname}
                        onChange={((e) => {setEmployeeLastname(e.target.value)})}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="departmentName">Employee email</label>
                    <input 
                        type="mail" 
                        className="form-control" 
                        id="employeeEmail"
                        value={employeeEmail}
                        onChange={((e) => {setEmployeeEmail(e.target.value)})}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect2">Select Department</label>
                    <select className="form-control form-control-sm" onChange={(e) => setDepartmentValue(e.target.value)}>
                        {allDepartments.map((department, index) => (
                            <option key={index} value={department.id}>
                                {department.departmentName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};
export default FormAddEmployee;
