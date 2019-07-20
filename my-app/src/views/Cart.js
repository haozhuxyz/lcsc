import React from "react";
import "../assets/css/Cart.css";
import la from "../assets/img/my1.png";
import shop0 from "../assets/img/shop0.jpg"
import store from "../store"
import {addToCart,updateCart,deleteFromCart,addNum,reduceNum} from "../store/actions/cart";

class Cart extends React.Component{
    constructor(){
        super()
        this.state={
            isLogin:0,


        }
    }


    goBack(){
        this.props.history.go(-1)
    }
    goLogin(){
        this.props.history.push("login")
    }

    reduceNum(shopId){
        //console.log(12345)
        //console.log(store.getState().cartReducer.cart);
        this.setState({

        })
        store.dispatch(reduceNum(shopId,1));


    }
    add(shopId){
        //console.log(shopId)
      // console.log(store.getState())
        this.setState({

        })
        store.dispatch(addNum(shopId,1));




    }
    componentWillMount(){
        if(localStorage.lcuserName&&localStorage.lcpwd){
            this.setState({
                isLogin : 1,
<<<<<<< HEAD

=======
>>>>>>> 023b6bddc317c2ec11dc4af0576e5df9391a0a96
            })
        }
    }
    render(){
        console.log("购物车",store.getState().cartReducer.cart)
        console.log()
        return (
            <div className={"cawrap"}>
                <div className={"caheader"}>
                    <div onClick={this.goBack.bind(this)}><img src={la} alt=""/></div>
                    <span>购物车</span>
                    <i></i>
                </div>
                <div className={"camain"} style={{display:this.state.isLogin?"none":"block"}}>
                    <p>
                        用户未登录，<span onClick={this.goLogin.bind(this)}>去登录&gt;</span>
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
<<<<<<< HEAD
                        {
                            store.getState().cartReducer.cart.map((v)=>{
                                return (
                                    <div key={v.shopId} className={"product_list"}>
                                        <div className={"input_check"}>
                                            <input type="checkbox" name={"pids"} value={"275"} className={"pids"}/>
                                        </div>
                                        <div className={"cart_goods_box"}>
                                            <img src={v.imgUrl?v.imgUrl:shop0} alt=""/>
                                            <p>
                                                <a className={"product_name"}>{v.product}</a>
                                                <span className={"price"}>￥{v.unitCost.toFixed(2)}</span>

                                            </p>

                                        </div>
                                        <div className={"buy_num_wrap"}>
                                            <span className={"num_minus"} onClick={this.reduceNum.bind(this,v.shopId)} data-pid={v.shopId} >-</span>
                                            <span className={"buy_num"}>{v.quantity}</span>
                                            <span className={"num_add"} onClick={this.add.bind(this,v.shopId)} data-pid={v.shopId} ref={"add"}>+</span>
                                        </div>

                                    </div>
                                )
                            })

                        }



=======
                        <div className={"product_list"} data-pid={"275"}>
                            <div className={"input_check"}>
                                <input type="checkbox" name={"pids"} value={"275"} className={"pids"}/>
                            </div>
                            <div className={"cart_goods_box"}>
                                <img src={shop0} alt=""/>
                                <p>
                                    <span className={"product_name"}>诛仙3-树妖抱枕</span>
                                    <span className={"price"}>￥49.00</span>
                                </p>
                            </div>
                            <div className={"buy_num_wrap"}>
                                <span className={"num_minus"}>-</span>
                                <span className={"buy_num"}>1</span>
                                <span className={"num_add"}>+</span>
                            </div>
                        </div>
>>>>>>> 023b6bddc317c2ec11dc4af0576e5df9391a0a96
                    </div>
                    <div className={"mysum"}>
                        <div className={"sumleft"}>
                            <p className={"money"}>￥0.00</p>
                            <div><span>商品</span><b>0</b></div>
                        </div>
                        <span className={"tj"}>提交订单</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;