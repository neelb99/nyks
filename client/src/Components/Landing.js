import React,{useEffect,useState} from 'react';
import '../css/Landing.css';

const Landing = ()=>{
    const [loaded,setLoaded] = useState(false);
    const [username,setUsername] = useState('');
    const [role,setRole] = useState('');

    const handleUsernameChange = e=>{setUsername(e.target.value)}
    const handleRoleChange = e=>{setRole(e.target.value)}

    const handleSubmit = e=>{
        e.preventDefault();
        sessionStorage['username']  = username.trim();
        sessionStorage['role']=role.trim();
        window.location='/home';
    }

    useEffect(()=>{
        const session_username = sessionStorage.getItem('username');
        if(session_username!==null){
            window.location = '/home';
        }
        else{
            setLoaded(true);
        }
    },[]);

    const loadPage = ()=>{
        if(loaded){
            return(
            <div className="container-fluid">
                <div className="landing row text-center">
                    <div className="col-12 col-md-6" id="intro">
                        <h1>NYKS Attendance System</h1>
                        <p>This system can be used by employees and managers to mark and monitor attendance. 
                            Please Log in to continue. In case of any difficulties in logging in, please contact the manager of the office.
                        </p>
                    </div>
                    <div className="col-12 col-md-6" id="login">
                        <div id="loginform" className="col-12 col-md-8 offset-md-2 text-center">
                            <div className="jumbotron">
                                <h2>Login</h2>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Username" className="form-control" required onChange={handleUsernameChange}></input>
                                    <input type="text" placeholder = "Role" className="form-control" required onChange={handleRoleChange}></input>
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

export default Landing;