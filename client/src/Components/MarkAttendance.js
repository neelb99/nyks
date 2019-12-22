import React, { useState } from 'react';
import '../css/Attendance.css';


const MarkAttendance = ()=>{
    const [loaded,setLoaded] = useState(false);
    useState(()=>{
        if(sessionStorage['username']!=null && sessionStorage['role']!=null)
            setLoaded(true);
        else
            window.location='/'
    },[])

    const handleSubmit =e=>{
        e.preventDefault();
        window.location='/home';
    }
    
    const loadPage=()=>{
        if(loaded){
            return(
                <div className="container-fluid">
                <div className="markattendance row text-center">
                    <div className="col-12 col-md-6" id="attendanceintro">
                        <h1>Attendance</h1>
                        <p>In order to mark your attendance for the day, you will need to use your voice, and confirm your location. Only after both the checks are successful, your attendance will be marked.
                        </p>
                    </div>
                    <div className="col-12 col-md-6" id="login">
                        <div id="loginform" className="col-10 col-md-8 co offset-md-2 offset-1 text-center">
                            <div className="jumbotron">
                                <h2>Mark Attendance</h2>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Date" disabled className="form-control" ></input>
                                    <input type="text" placeholder="Voice" className="form-control" required></input>
                                    <input type="text" placeholder = "Location" className="form-control" required></input>
                                    <input type="submit" className="btn btn-success text-center form-control"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
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

export default MarkAttendance;