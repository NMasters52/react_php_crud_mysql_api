import React from "react";
import { useState } from "react";
import axios from "axios";
import './CreateUser.css';
import { useNavigate } from "react-router-dom";

export default function CreateUser() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({})

    //updates the state object when any form input changes
    //extracts the input's name and current value from the event
    //Then merges this new key-value pair with the existing state object
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    //prevents default behaviour of form submission
    //prints the current state object to the console
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with data:", inputs);
        
        axios.post('http://localhost/my-react-api/api/index.php', inputs, {
                
                headers: {
                    'Content-Type': 'application/json'
                }
        })
            .then(response => {
                console.log("Response received:", response.data);
                navigate('/');
                // Handle success - show message to user and return to home page
            })
            .catch(error => {
                console.error("Error occurred:", error);
                // Handle error - show message to user
            });
    } 

    return (
        <div>
            <h1>Create User</h1>

            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label>Name:</label>
                            </th>
                            <td>
                             <input type="text" name="name" onChange={handleChange} required />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Email:</label>
                            </th>
                            <td>
                             <input type="text" name="email" onChange={handleChange} required />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Phone:</label>
                            </th>
                            <td>
                             <input type="text" name="mobile" onChange={handleChange} required />
                            </td>
                        </tr>

                        

                    </tbody>
                </table>
                <button>Create</button>
                
            </form>
        </div>
    )
}