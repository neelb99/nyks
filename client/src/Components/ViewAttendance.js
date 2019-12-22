import React, { useState, useEffect } from 'react';
import DoughnutChart from './Doughnut';
import Table from 'react-bootstrap/Table';

const ViewAttendance = ()=>{
    const [loaded,setLoaded] = useState(false);
    useEffect(()=>{
        if(sessionStorage['username']!=null && sessionStorage['role']==='manager')
            setLoaded(true);
        else
            window.location='/'
    },[])

    const loadPage = ()=>{
        if(loaded)
            return(
                <React.Fragment>
                    <div id="chartsdiv">
                        <div className="col-10 offset-1 col-md-4 offset-md-1 doughnutsection">
                            <h3>Current Month</h3>
                            <DoughnutChart present={90} absent={10}/>
                        </div>
                        <div className="col-10 offset-1 col-md-4 offset-md-2 doughnutsection">
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
        else
            return;
    }

    return(
        <React.Fragment>
            {loadPage()}
        </React.Fragment>
    );
}

export default ViewAttendance;