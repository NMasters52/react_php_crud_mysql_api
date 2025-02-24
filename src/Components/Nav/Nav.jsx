import './Nav.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



export default function Nav() {
  return (

        <div className="navbar">   
            <ul className="nav-menu">
                <li className="nav-link">
                    <Link className="nav-link" to="/">List User</Link>
                </li>
                <li className="nav-link">
                    <Link className="nav-link" to="/create">Create User</Link>
                </li>
            </ul>

        </div>  
     
  );
}