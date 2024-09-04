import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormUpdateDepartment = () => {
    const {id} = useParams();
    const [departmentName, setDepartmentName] = useState("");
    const [departmentDescription, setDepartmentDescription] = useState("");
    const [newDataDepartmentName, setNewDataDepartmentName] = useState("");
    const [newDataDepartmentDescription, setNewDataDepartmentDescription] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8080/api/department/${id}`)
            .then((response) => {
                const data = response.data;
                setDepartmentName(data.departmentName);
                setDepartmentDescription(data.departmentDescription);
            })
    }, [id]);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
           const updateData = await axios.put(`http://localhost:8080/api/department/${id}`,
            {
                departmentName : newDataDepartmentName,
                departmentDescription : newDataDepartmentDescription
            })
            console.log(updateData);
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
                        placeholder={departmentName}
                        value={newDataDepartmentName}
                        onChange={((e) => {setNewDataDepartmentName(e.target.value)})}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="departmentName">Department Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="departmentName"
                        placeholder={departmentDescription}
                        value={newDataDepartmentDescription}
                        onChange={((e) => {setNewDataDepartmentDescription(e.target.value)})}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
export default FormUpdateDepartment;