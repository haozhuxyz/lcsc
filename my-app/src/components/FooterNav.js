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
import Login from "../views/Login"
import Register from "../views/Register"
import "../assets/css/FooterNav.css"
import mf1 from "../assets/img/mf1.png"
import mf2 from "../assets/img/mf2.png"
import mf3 from "../assets/img/mf3.png"
import mf4 from "../assets/img/mf4.png"
class FooterNav extends React.Component{
    render(){
      return (



                  <Router>

                      <Route path={"/"} exact component={Home}></Route>
                      <Route path={"/Classify"} component={Classify}></Route>
                      <Route path={"/Cart"} component={Cart}></Route>
                      <Route path={"/My"} component={My}></Route>
                      <Route path={"/login"} component={Login}></Route>
                      <Route path={"/register"} component={Register}></Route>


                      <div className={"footer"}>

                          <NavLink style={{background:"#606063"}} activeStyle={{background:"#3c3e46"}} to={"/"} exact >
                              <img src={mf1} alt=""/>
                              <span>
                                  首页
                              </span>
                          </NavLink>
                          <NavLink style={{background:"#606063"}} activeStyle={{background:"#3c3e46"}} to={"/Classify"}>
                              <img src={mf2} alt=""/>
                              <span>
                                  分类
                              </span>
                          </NavLink>
                          <NavLink style={{background:"#606063"}} activeStyle={{background:"#3c3e46"}} to={"/Cart"}>
                              <img src={mf3} alt=""/>
                             <span>
                                  购物车
                             </span>
                          </NavLink>
                          <NavLink style={{background:"#606063"}} activeStyle={{background:"#3c3e46"}} to={"/My"}>
                              <img src={mf4} alt=""/>
                              <span>
                                  个人中心
                              </span>

                          </NavLink>
                      </div>


                  </Router>




      );
    }
  }
  
  export default FooterNav;
  