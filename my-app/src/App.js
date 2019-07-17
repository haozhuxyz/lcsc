import React from 'react';
import './App.css';
import './assets/css/FooterNav.css'
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom"

import mf1 from "./assets/img/mf1.png"
import mf2 from "./assets/img/mf2.png"
import mf3 from "./assets/img/mf3.png"
import mf4 from "./assets/img/mf4.png"
import router from "./router/index"

class App extends React.Component{
    constructor(){
        super();

    }

  render(){
    return (
      <div className="App">
        <Router>
          <div className="footer">
            <NavLink style={{background:"#606063"}} activeStyle={{background:"#3c3e46"}} to={"/Home"}>
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
          {
            router.map((v,i)=>{
              return(
                <Route key={i} {...v}></Route>
              )
            })
          }
        </Router>
      </div>
    )
  }
}

export default App