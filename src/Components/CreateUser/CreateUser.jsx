import React from "react";
import { useState } from "react";
import './CreateUser.css';

export default function CreateUser() {

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

        console.log(inputs);
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
                             <input type="text" name="phone" onChange={handleChange} required />
                            </td>
                        </tr>
                        <tr align="right">
                            <button>Create</button>
                        </tr>
                    </tbody>
                </table>
                
            </form>
        </div>
    )
}