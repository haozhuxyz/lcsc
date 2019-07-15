import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom"

import Home from "../views/Home"
import Classify from "../views/Classify"
import Cart from "../views/Cart"
import My from "../views/My"


class FooterNav extends React.Component{
    render(){
      return (
          <Router>
            <NavLink to={"/Home"}  exact >首页</NavLink>|
            <NavLink to={"/Classify"}>分类</NavLink>|
            <NavLink to={"/Cart"}>购物车</NavLink>|
            <NavLink to={"/My"}>个人中心</NavLink>
    
            <Route path={"/Home"}  exact component={Home}></Route>
            <Route path={"/Classify"} component={Classify}></Route>
            <Route path={"/Cart"} component={Cart}></Route>
            <Route path={"/My"} component={My}></Route>
          </Router>
      );
    }
  }
  
  export default FooterNav;
  