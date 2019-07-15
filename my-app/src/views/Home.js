import React from "react";
import HeaderNav from "../components/HeaderNav"

class Home extends React.Component{
    render(){
        return (
            <div>
                <div>登录，搜索</div>
                <HeaderNav></HeaderNav>
                <div>活动</div>
                <div>main</div>
                <div>推荐</div>
            </div>
        )
    }
}

export default Home;