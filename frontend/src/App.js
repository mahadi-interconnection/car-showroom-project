import React from 'react';
import './App.css';

import { Route,Switch } from "react-router-dom";
//Components
import ShowRoom from "./components/ShowRoom";
import Car from "./components/Car";
import Header from "./components/Header"
import CreateShowroom from "./components/CreateShowroom";
import CreateCar from "./components/CreateCar";

function App() {
  return (
    <div className="App">
      <Header/>
        <Switch> 
          <Route path="/" exact component={Car} /> 
          <Route path="/car" exact component={Car} />
          <Route path="/showrooms" exact component={ShowRoom} />
          <Route path="/creates_showroom" exact component={CreateShowroom} />
          <Route path="/create_car" exact component={CreateCar} />
        </Switch>

    </div>
  );
}

export default App;
