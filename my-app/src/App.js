import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/reset.css'
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom"

import Home from "./views/Home"
import Classify from "./views/Classify"
import Cart from "./views/Cart"
import My from "./views/My"

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Router>
          <NavLink to={"/Home"} exact >首页</NavLink>|
          <NavLink to={"/Classify"}>分类</NavLink>|
          <NavLink to={"/Cart"}>购物车</NavLink>|
          <NavLink to={"/My"}>个人中心</NavLink>
  
          <Route path={"/Home"} exact component={Home}></Route>
          <Route path={"/Classify"} component={Classify}></Route>
          <Route path={"/Cart"} component={Cart}></Route>
          <Route path={"/My"} component={My}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
