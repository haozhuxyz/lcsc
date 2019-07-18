import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
    withRouter
} from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
    constructor(props){
        super(props)

    }
    render(){
        let hideFooter = null;
        const { location: { pathname } } = this.props
        const hideFooterPath = ['/login', '/register','/detail','/detailshop','/classifyshoplist']
        //const hideFooter = hideFooterPath.includes(pathname.trim())
        //console.log(pathname.toLowerCase())
        for(let i=0;i<hideFooterPath.length;i++){
            if((pathname.trim()).toLowerCase().indexOf(hideFooterPath[i].toLowerCase())!==-1){
                hideFooter=true;

            }
        }

        if(hideFooter){
            return null
        }else{
            return (


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

            );
        }

    }

  }
  
  export default withRouter(connect(()=>({}))(FooterNav));
  