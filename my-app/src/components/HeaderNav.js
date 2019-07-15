import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom"
import Shop from "../views/Shop"
import Activity from "../views/Activity"
import Order from "../views/Order"
import Balance from "../views/Balance"

class HeaderNav extends React.Component{
    render(){
      return (
        <Router>
        <NavLink to={"/shop"} >商家</NavLink>|
        <NavLink to={"/activity"}>活动</NavLink>|
        <NavLink to={"/order"}>订单</NavLink>|
        <NavLink to={"/balance"}>余额</NavLink>

        <Route path={"/shop"}  component={Shop}></Route>
        <Route path={"/activity"} component={Activity}></Route>
        <Route path={"/order"} component={Order}></Route>
        <Route path={"/balance"} component={Balance}></Route>
    </Router>
      );
    }
  }
  export default HeaderNav;
  