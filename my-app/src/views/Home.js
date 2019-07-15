import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom"
import Shop from "../components/Shop"
import Activity from "../components/Activity"
import Order from "../components/Order"
import Balance from "../components/Balance"

class Home extends React.Component{
    render(){
        return (
            <div>
                <div>登录，搜索</div>
                <div>
                    <Router>
                        <NavLink to={"/shop"} >商家</NavLink>|
                        <NavLink to={"/activity"}>活动</NavLink>
                        <NavLink to={"/order"}>订单</NavLink>
                        <NavLink to={"/balance"}>余额</NavLink>

                        <Route path={"/shop"}  component={Shop}></Route>
                        <Route path={"/activity"} component={Activity}></Route>
                        <Route path={"/order"} component={Order}></Route>
                        <Route path={"/balance"} component={Balance}></Route>
                    </Router>
                </div>
                <div>活动</div>
            </div>
        )
    }
}

export default Home;