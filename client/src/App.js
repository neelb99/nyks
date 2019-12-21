import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
