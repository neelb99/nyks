import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    const [role,setRole] = useState("");
    const [loaded,setLoaded] = useState(false);
    const session_role = sessionStorage.getItem('role');
    useEffect(()=>{
        setRole(session_role);
        setLoaded(true);
        },[session_role]);
    
    const loadPage = ()=>{
        if(loaded){
            if(role==="employee"){
                return(
                    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                        <Link to='/' className="navbar-brand">Home</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to='/markattendance' className="nav-link">Mark Attendance</Link></li>
                            </ul>
                        </div>
                    </nav>
                );
            }
            else if(role==="manager"){
                return(
                    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#e3f2fd"}}>
                        <Link to='/' className="navbar-brand">Home</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to='/markattendance' className="nav-link">Mark Attendance</Link></li>
                                <li className="nav-item"><Link to='/viewattendance' className="nav-link">My Attendance</Link> </li>
                                <li className="nav-item"><Link to='/employeeattendance' className="nav-link">Employee Attendance</Link> </li>
                                <li className="nav-item"><Link to='/manageemployees' className="nav-link">Manage Employees</Link> </li>
                            </ul>
                        </div>
                    </nav>
                );
            }
            else if(role==="admin"){
                return(
                    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                        <Link to='/' className="navbar-brand">Home</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to='/manageoffices' className="nav-link">Manage Offices</Link></li>
                                <li className="nav-item"><Link to='/viewattendance' className="nav-link">Edit Managers</Link> </li>
                                <li className="nav-item"><Link to='/employeeattendance' className="nav-link">Check Attendance</Link> </li>
                            </ul>
                        </div>
                    </nav>
                );
            }
        }
        else
            return;
    }
    return(
        <React.Fragment>
            {loadPage()}
        </React.Fragment>
    );
}

export default Navbar;