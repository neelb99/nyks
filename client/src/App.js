import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Dashboard from './Components/Dashboard';
import MarkAttendance from './Components/MarkAttendance';
import Logout from './Components/Logout';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/home" exact component={Dashboard}></Route>
        <Route path="/logout" exact component={Logout}></Route>
        <Route path="/markattendance" exact component={MarkAttendance}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
