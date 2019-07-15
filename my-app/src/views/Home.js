import React from "react";

import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom"
import Shop from "./Shop"
import Activity from "./Activity"
import Order from "./Order"
import Balance from "./Balance"

class Home extends React.Component{
    render(){
        return (
            <div>
                <div>登录，搜索</div>
                <br/><br/>
                <span onClick={()=>{
                this.props.history.push('/shop')
                }}>商家</span>
                <span onClick={()=>{
                this.props.history.push('/activity')
                }}>活动</span>
                <span onClick={()=>{
                this.props.history.push('/order')
                }}>订单</span>
                <span onClick={()=>{
                this.props.history.push('/balance')
                }}>余额</span>

                <Route path={"/shop"}  component={Shop}></Route>
                <Route path={"/activity"} component={Activity}></Route>
                <Route path={"/order"} component={Order}></Route>
                <Route path={"/balance"} component={Balance}></Route>
                <div>活动</div>
                <div>main</div>
                <div>推荐</div>
            </div>
        )
    }
}

export default Home;