import React from "react";
import "../assets/css/My.css"
import la from "../assets/img/my1.png"
import mylogo from "../assets/img/myLogo.png"
import mydd from "../assets/img/mydd.png"
import righta from "../assets/img/righta.png"
import df from "../assets/img/sp.png"
import dfh from "../assets/img/qs.png"
import dsh from "../assets/img/dsh.png"
import ye from "../assets/img/ye.png"
import jf from "../assets/img/jf.png"
import yhj from "../assets/img/yhj.png"
import wdz from "../assets/img/wdz.png"
import wsc from "../assets/img/wsc.png"
import bz from "../assets/img/bz.png"
class My extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogin : 0,
            userName:","

        }

    }

    goBack(){
        this.props.history.go(-1)
        //console.log(this.props.history)
    }
    goLogin(){
        this.props.history.push("login")
    }
    goCar(){
        this.props.history.push("cart")
    }
    goLogout(){

        this.props.history.push("login")

    }
    componentWillMount(){
        //console.log("componentWillMount")
        if(localStorage.lcuserName&&localStorage.lcpwd){
            this.setState({
                isLogin : 1,
                userName:localStorage.lcuserName,

            })
        }
    }
    render(){

        return (

            <div className="my">

                <div className="myheader">

                    <div onClick={this.goBack.bind(this)}>
                        <img src={la} alt=""/>
                    </div>

                    <b>我的联宠</b>
                    <span>账号管理</span>


                </div>
               <div className={"main"}>
                   <div className={"mybanner"}>
                       <span><img src={mylogo} alt=""/></span>
                       <p style={{display:this.state.isLogin?"none":"block"}} onClick={this.goLogin.bind(this)}><i>你好</i><i>,</i><i>请登录</i></p>
                       <p style={{display:this.state.isLogin?"block":"none"}}><i>你好</i><b>&nbsp;</b><i>{this.state.userName}</i><b>&nbsp;</b><i onClick={this.goLogout.bind(this)}>退出</i></p>

                   </div>

                   <div className={"dd"} onClick={this.goCar.bind(this)}>
                       <p><img className={"mdd"} src={mydd} alt=""/><span>我的订单</span></p>
                       <p><i>全部订单</i><img className={"ar"} src={righta} alt=""/></p>

                   </div>

                   <div className={"sh"}>
                       <div>
                           <img src={df} alt=""/>
                           <p>待付款</p>
                       </div>
                       <div>
                           <img src={dfh} alt=""/>
                           <p>待发货</p>
                       </div>
                       <div>
                           <img src={dsh} alt=""/>
                           <p>待收货</p>
                       </div>
                       <div>
                           <img src={df} alt=""/>
                           <p>退换货</p>
                       </div>

                   </div>
                   <div className={"listwrap"}>
                       <div className={"mylist"}>
                           <p><img className={"mdd"} src={ye} alt=""/><span>我的余额</span></p>
                           <div><i>￥0.00</i><img className={"ar"} src={righta} alt=""/></div>

                       </div>
                   </div>
                   <div className={"listwrap"}>
                       <div className={"mylist"}>
                           <p><img className={"mdd"} src={jf} alt=""/><span>我的积分</span></p>
                           <div><i>0积分</i><img className={"ar"} src={righta} alt=""/></div>

                       </div>
                   </div>
                   <div className={"listwrap"}>
                       <div className={"mylist"}>
                           <p><img className={"mdd"} src={yhj} alt=""/><span>我的优惠券</span></p>
                           <div><i>0张</i><img className={"ar"} src={righta} alt=""/></div>

                       </div>
                   </div>
                   <div className={"listwrap"}>
                       <div className={"mylist"}>
                           <p><img className={"mdd"} src={wdz} alt=""/><span>我的地址</span></p>
                           <div><i></i><img className={"ar"} src={righta} alt=""/></div>

                       </div>
                   </div>
                   <div className={"listwrap"}>
                       <div className={"mylist"}>
                           <p><img className={"mdd"} src={wsc} alt=""/><span>我的收藏</span></p>
                           <div><i></i><img className={"ar"} src={righta} alt=""/></div>

                       </div>
                   </div>
                   <div className={"listwrap"}>
                       <div className={"mylist"}>
                           <p><img className={"mdd"} src={bz} alt=""/><span>帮助中心</span></p>
                           <div><i></i><img className={"ar"} src={righta} alt=""/></div>

                       </div>
                   </div>



               </div>
            </div>
        )
    }
}
export default My;