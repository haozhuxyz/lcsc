import React from "react";
import "../assets/css/Cart.css";
import la from "../assets/img/my1.png";
import shop0 from "../assets/img/shop0.jpg"
import store from "../store"
import {addToCart,updateCart,deleteFromCart,addNum,reduceNum,changeCheck,changeAllTrue,changeAllFalse} from "../store/actions/cart";

class Cart extends React.Component{
    constructor(){
        super()
        this.state={
            isLogin:0,
            num:0,
            sum:0,
            checked:false


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

        store.dispatch(reduceNum(shopId,1));
        this.getSum()
        this.setState({

            num:this.getSum(),
            sum:this.getCost()

        })


    }
    add(shopId){
        //console.log(shopId)
      // console.log(store.getState())

        store.dispatch(addNum(shopId,1));
        this.getSum()
        this.setState({

            num:this.getSum(),
            sum:this.getCost()

        })

    }
    changeChecked(shopId){
        //console.log("改变")


        store.dispatch(changeCheck(shopId,1));

        if(store.getState().cartReducer.cart.every((v,i)=>{
                return v.mychecked%2===0
            })){
            console.log("alltrue")
            this.refs.checkAll.checked = true;


        }else{
            this.refs.checkAll.checked = false;
        }

        this.getSum()
        this.setState({

            num:this.getSum(),
            sum:this.getCost()

        })



    }

    changeAll(){
        console.log("all")

        if (store.getState().cartReducer.cart.length>0){
            if(store.getState().cartReducer.cart.every((v,i)=>{
                return v.mychecked%2===0
                })){
                store.dispatch(changeAllFalse())

            }else{
                store.dispatch(changeAllTrue())
            }

        }


        this.getSum()
        this.setState({

            num:this.getSum(),
            sum:this.getCost()

        })
    }

    componentWillMount(){
        if(localStorage.lcuserName&&localStorage.lcpwd){
            this.setState({
                isLogin : 1,
                num:this.getSum(),
                sum:this.getCost()

            })
        }




    }
    getSum(){
        var mynum=0;

        store.getState().cartReducer.cart.filter((v)=>{
            if(v.mychecked%2==0){
                mynum+=v.quantity;

            }
        })
        console.log(mynum)
        return mynum
    }
    getCost(){
        var mycost=0;
        store.getState().cartReducer.cart.filter((v)=>{
            if(v.mychecked%2==0){
                mycost+=v.quantity*v.unitCost

            }
        })

        return mycost

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
                            <input type="checkbox" ref={"checkAll"} className={"check_all"} onChange={this.changeAll.bind(this)}/>
                        </div>
                        <h3>商品信息</h3>
                        <span>操作</span>
                    </div>
                    <div className={"myshop"}>

                        {
                            store.getState().cartReducer.cart.map((v)=>{
                                return (
                                    <div key={v.shopId} className={"product_list"}>
                                        <div className={"input_check"}>
                                            <input type="checkbox" mychecked={v.checked} checked={v.mychecked%2==0?true:false} onChange={this.changeChecked.bind(this,v.shopId)}  className={"pids"}/>
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

                    </div>
                    <div className={"mysum"}>
                        <div className={"sumleft"}>


                            <p className={"money"}>￥{this.state.sum.toFixed(2)}</p>
                            <div><span>商品</span><b>{this.state.num}</b></div>
                        </div>
                        <span className={"tj"}>提交订单</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;