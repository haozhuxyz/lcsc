import React from "react";
import "../assets/css/Cart.css";
import la from "../assets/img/my1.png";

class Cart extends React.Component{
    constructor(){
        super()
        this.state={
            isLogin:0
        }

    }
    goBack(){
        this.props.history.go(-1)
    }
    goLogin(){
        this.props.history.push("login")
    }
    componentWillMount(){
        //console.log("componentWillMount")
        if(localStorage.lcuserName&&localStorage.lcpwd){
            this.setState({
                isLogin : 1,


            })
        }
    }
    render(){
        return (

            <div className={"cawrap"}>
                <div className={"caheader"}>
                    <div onClick={this.goBack.bind(this)}><img src={la} alt=""/></div>
                    <span>购物车</span>
                    <i></i>

                </div>
                <div className={"camain"} style={{display:this.state.isLogin?"none":"block"}}>

                    <p>
                        用户未登录，<a onClick={this.goLogin.bind(this)}>去登录&gt;</a>
                    </p>


                </div>
                <div className={"cartmain"} style={{display:this.state.isLogin?"block":"none"}}>
                    cartmain
                </div>


            </div>
        )
    }
}
export default Cart;