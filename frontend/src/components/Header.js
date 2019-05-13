import React from 'react';
import {Link} from 'react-router-dom';

//css import
import "./styles/header.css";


function Header() {
  return (
    <div class = "header_maindiv">
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="#">Car and Showroom Management</a>
      <ul className="navbar-nav navbar_items">
    
        <li className="nav-item">
            <Link className="nav-link" to={"/Car"}>All Car Lists</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/showrooms"}>Show Room lists</Link>
        </li>  
        <li className="nav-item">
            <Link className="nav-link" to={"/creates_showroom"}>Create Showroom</Link>
        </li>  
        <li className="nav-item">
            <Link className="nav-link" to={"/create_car"}>Create Car</Link>
        </li>  
      </ul>
    </nav>
    </div>
  )
}

export default Header;