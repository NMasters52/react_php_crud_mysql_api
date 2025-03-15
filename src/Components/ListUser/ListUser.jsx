import React from "react";
import './ListUser.css';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUserList();
    }, [])

    function getUserList() {
        axios.get('http://localhost/my-react-api/api/index.php').then(response => {
            console.log(response.data);
            setUsers(response.data);
        })
        .catch(error => {
            console.error("Error occurred:", error);
        });
    }   

    const deletUser = (id) => {
        axios.delete(`http://localhost/my-react-api/api/index.php/${id}`)
            .then(response => {
                console.log("Response received:", response.data);
                getUserList(); // Refresh the user list after deletion
            })
            .catch(error => {
                console.error("Error occurred:", error);
            });
    };
    

    
    return (
        <div>
            <h1>List User</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <button onClick={() => deletUser(user.id)}>delete</button>
                                    <Link to={`/edit/${user.id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
        </div>
    )
}