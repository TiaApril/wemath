import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/Logo.svg"
import {FaHome} from "react-icons/fa"

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-dark py-3 sticky-top'>
        <div className='container-fluid'>
            <ul className='navbar-nav'>
                <li className='nav-item m-3'>
                    <a className='navbar-brand'href="#">
                    <Link to="/">
                        <img src={Logo} height="20px"></img>
                    </Link>
                    </a>
                </li>
                <li className='nav-item m-3'>
                <Link to="/" className='nav-link active'>
                        <FaHome/>
                    </Link>
                </li>
            </ul>
            <form className="d-flex input-group" role="search">
                <input className="form-control col-auto" type="search" placeholder="Ask Question Here" aria-label="Recipient's username" aria-describedby="button-addon3"/>
                <Link className="btn btn-light btn-outline-secondary" type="button" id="button-addon3" to="/result">Search</Link>
            </form>

            <div className="col-3 navbar-collapse justify-content-end container-fluid" id="#navMenu">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/aboutus" className='nav-link active'>
                            About Us
                        </Link>
    
                    </li>
                    <li className="nav-item">
                        <Link to="/loginform" className="nav-link active">Log In</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signinform" className="nav-link active">Sign In</Link>
                    </li>
                </ul>
            </div>
        </div>
     
        
    </nav>
  )
}

export default Navbar