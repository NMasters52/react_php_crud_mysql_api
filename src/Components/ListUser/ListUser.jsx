import React from "react";
import './ListUser.css';
import {axios} from "axios";
import { useEffect } from "react";

export default function ListUser() {

    useEffect(() => {
        getUserList();
    }, [])

    function getUserList() {
        axios.get('http://localhost/my-react-api/api/index.php').then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error occurred:", error);
        });
    }   

    
    return (
        <div>
            <h1>List User</h1>
        </div>
    )
}