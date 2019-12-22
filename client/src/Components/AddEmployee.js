import React, { useState, useEffect } from 'react';

const AddEmployee = ()=>{
    const [loaded,setLoaded] = useState(false);
    useEffect(()=>{
        if(sessionStorage['username']!=null && sessionStorage['role']==='manager')
            setLoaded(true);
        else
            window.location='/'
    },[])

    const handleSubmit = e=>{
        e.preventDefault();
        window.location = '/manageemployees'
    }

    const loadPage = ()=>{
        if(loaded){
            return(
                <div className="container-fluid">
                <div className="markattendance row text-center">
                    <div className="col-12 col-md-6 col-lg-4" id="login">
                        <div id="loginform" className="col-12 text-center">
                            <div className="jumbotron">
                                <h2>Add Employee</h2>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Name" className="form-control" ></input>
                                    <input type="text" placeholder="Voice Data" className="form-control" required></input>
                                    <input type="submit" className="btn btn-success text-center form-control"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }

    return(
        <React.Fragment>
            {loadPage()}
        </React.Fragment>
    );
}

export default AddEmployee;