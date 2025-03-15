import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
    const navigate = useNavigate();
    const { id } = useParams();


    const [inputs, setInputs] = useState({ name: "", email: "", mobile: "" });

    useEffect(() => {
        getUserList();
    }, []);

    function getUserList() {
        axios.get(`http://localhost/my-react-api/api/edit/${id}`)
            .then(response => {
                console.log("Full API Response:", response.data);
                const numericId = Number(id);
                console.log("Converted ID:", numericId);

                const user = response.data.find(user => Number(user.id) === numericId);
                console.log("Found User:", user);

                if (user) {
                    setInputs(user);
                }
            })
            .catch(error => {
                console.error("Error fetching user:", error);
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with data:", inputs);

        axios.put(`http://localhost/my-react-api/api/edit/${id}`, inputs, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                console.log("Response received:", response.data);
                navigate('/');
            })
            .catch(error => {
                console.error("Error occurred:", error);
            });
    };

    return (
        <div>
            <h1>Edit User</h1>

            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th><label>Name:</label></th>
                            <td>
                                <input value={inputs.name} type="text" name="name" onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr>
                            <th><label>Email:</label></th>
                            <td>
                                <input value={inputs.email} type="text" name="email" onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr>
                            <th><label>Phone:</label></th>
                            <td>
                                <input value={inputs.mobile} type="text" name="mobile" onChange={handleChange} required />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button>Edit</button>
            </form>
        </div>
    );
}
