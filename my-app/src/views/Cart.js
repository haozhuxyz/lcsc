import React from "react";
import "../assets/css/Cart.css";
import la from "../assets/img/my1.png";
import shop0 from "../assets/img/shop0.jpg"

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
                    <div className={"cart_h"}>
                        <div>
                            <input type="checkbox" className={"check_all"}/>
                        </div>
                        <h3>商品信息</h3>
                        <span>操作</span>

                    </div>

                    <div className={"myshop"}>

                        <div className={"product_list"} data-pid={"275"}>
                            <div className={"input_check"}>
                                <input type="checkbox" name={"pids"} value={"275"} className={"pids"}/>
                            </div>
                            <div className={"cart_goods_box"}>
                                <img src={shop0} alt=""/>
                                <p>
                                    <a className={"product_name"}>诛仙3-树妖抱枕</a>
                                    <span className={"price"}>￥49.00</span>

                                </p>

                            </div>
                            <div className={"buy_num_wrap"}>
                                <span className={"num_minus"}>-</span>
                                <span className={"buy_num"}>1</span>
                                <span className={"num_add"}>+</span>
                            </div>

                        </div>

                    </div>

                    <div className={"mysum"}>
                        <div className={"sumleft"}>
                            <p className={"money"}>￥0.00</p>
                            <div><span>商品</span><b>0</b></div>
                        </div>

                        <a className={"tj"}>提交订单</a>

                    </div>

                </div>


            </div>
        )
    }
}
export default Cart;