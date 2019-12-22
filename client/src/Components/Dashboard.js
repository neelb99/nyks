import React,{useState,useEffect} from 'react';
import '../css/Dashboard.css';
import DoughnutChart from './Doughnut';
import Table from 'react-bootstrap/Table';


const Dashboard = ()=>{
    const [loaded,setLoaded] = useState(false);
    const [username,setUsername] = useState('');
    const [role,setRole] =useState('');

    useEffect(()=>{
        const session_username = sessionStorage.getItem('username');
        const session_role = sessionStorage.getItem('role');
        if(session_username===null || session_role==null){
            window.location='/'
        }
        else{
            setUsername(session_username);
            setRole(session_role);
            setLoaded(true);
            
        }
    },[])

    const loadPage = ()=>{
        if(loaded){
            if(role==='employee'){
                return(
                    <React.Fragment>
                        <div id="chartsdiv">
                            <div className="col-12 col-md-6 doughnutsection">
                                <h3>Monthly Attendance</h3>
                                <DoughnutChart present={90} absent={10}/>
                            </div>
                            <div className="col-12 col-md-6 doughnutsection">
                                <h3>Overall Attendance</h3>
                                <DoughnutChart absent={25} present={75}/>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <form id="abovetable">
                                <div className="form-row">
                                    <div className="offset-2 col-4">
                                        <select  className="form-control">
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <select className="form-control">
                                            <option>2019</option>
                                            <option>2020</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Attendance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2nd Jan</td>
                                        <td style={{color:"green"}}>Present</td>
                                    </tr>
                                    <tr>
                                        <td>3rd Jan</td>
                                        <td style={{color:"red"}}>Absent</td>
                                    </tr>
                                    <tr>
                                        <td>4th Jan</td>
                                        <td style={{color:"green"}}>Present</td>
                                    </tr>
                                    <tr>
                                        <td>5th Jan</td>
                                        <td style={{color:"Green"}}>Present</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </React.Fragment>
                );
            }
            // else if(role==='manager'){
            //     return (
            //         <React.Fragment>
            //             <Card img={person} link="/users" buttonText="View Customers"/>
            //             <Card img={cart} link="/viewproducts" buttonText="Products"/>
            //             <Card img={tasks} link="/pendingorders" buttonText="Pending Orders"/>
            //             <Card img={cash} link="/executedorders" buttonText="Executed Orders"/>
            //             <Card img={form} link="/addfeedback" buttonText="Send Feedback"/>
            //             <Card img={message} link="/viewbroadcasts" buttonText="View Messages"/>
            //         </React.Fragment>
            //     );
            // }
            // else if(role==='admin'){
            //     return (
            //         <React.Fragment>
            //             <Card img={cart} link="/viewproducts"buttonText="Products"/>
            //             <Card img={cash} link="/vieworders" buttonText="Orders"/>
            //             <Card img={form} link="/addfeedback" buttonText="Send Feedback"/>
            //             <Card img={message} link="/viewbroadcasts" buttonText="View Messages"/>
            //         </React.Fragment>
            //     );
            // }
        }
    }

    return(
        <React.Fragment>
            {loadPage()}
        </React.Fragment>
    );
}

export default Dashboard;