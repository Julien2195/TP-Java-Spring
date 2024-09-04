import axios from "axios";
import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

const FormAddDepartment = () => {
    const [departmentName, setDepartmentName] = useState("");
    const [departmentDescription, setDepartmentDescription] = useState("");
    const navigate = useNavigate();
    const handleAddDepartment = async (e) => {
        try {
            e.preventDefault();
            const sendData = await axios.post('http://localhost:8080/api/department',
                {
                    departmentDescription,
                    departmentName
                }
            );
        console.log("Department added successfully", sendData.data);
        setDepartmentName("");
        setDepartmentDescription("");
        navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form className="w-25 p-3 border rounded bg-light">
                <div className="form-group mb-3">
                <label htmlFor="departmentName">Department name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="departmentName"
                        value={departmentName}
                        onChange={((e) => {setDepartmentName(e.target.value)})}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="departmentName">Department Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="departmentName"
                        value={departmentDescription}
                        onChange={((e) => {setDepartmentDescription(e.target.value)})}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleAddDepartment}>Submit</button>
            </form>
        </div>
    );
};

export default FormAddDepartment;
