import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Navbar />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
