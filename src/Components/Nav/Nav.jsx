import './Nav.css'
import Logo from '../../assets/logo_transparent.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



export default function Nav() {
  return (

        <div className="navbar">   
            <img src={Logo} alt="personal logo" className="nav_logo" />
            <ul className="nav-menu">
                <li className="nav-link">Home</li>
                <li className="nav-link">About Us</li>
                <li className="nav-link">Menu</li>
            </ul>
            <div className="btn-primary">
                <a href="">Order Here</a>
            </div>

        </div>  
     
  );
}