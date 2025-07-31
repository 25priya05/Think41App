import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DepartmentList = () => {
    const [departments, setDepartments] = React.useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = React.useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3001/departments")
            .then((response) => {
                setDepartments(response.data.departments || []);
                setLoading(false);
            })
            .catch((error) => {
                setError("Error loadingdpartments");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading departments...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div>
            <h1>Departments</h1>
            <ul>
                {departments.map((department) => (
                    <li key={department.id}>
                        <Link to={`/departments/${department.id}`}>
                            {department.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DepartmentList;