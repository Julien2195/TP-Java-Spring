import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormUpdateDepartment = () => {
    const params = useParams();
    const [departmentName, setDepartmentName] = useState("");
    const [departmentDescription, setDepartmentDescription] = useState("");

    axios.put(`http://localhost:8080/api/department/${params}`,
        departmentDescription,
        departmentName
    ).then((data) => {
        console.log(data);
    })
console.log(params);
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form className="w-25 p-3 border rounded bg-light">
                <div className="form-group mb-3">
                    <label htmlFor="departmentName">Department name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="departmentName"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="departmentName">Department Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="departmentName"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
export default FormUpdateDepartment;