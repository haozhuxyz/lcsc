import React from 'react';
import "../assets/css/Login.css"
import myback from "../assets/img/back.png"
import logo from "../assets/img/loginlogo.png"
import loacc from "../assets/img/acc.png"
import lopwd from "../assets/img/pwd.png"

export default class Login extends React.Component{

    constructor(){
        super()

    }

    goBack(){
        this.props.history.go(-1);

    }
    goReg(){
        this.props.history.push("/register")
    }
    sendLogin(){
        //console.log("login")
        //console.log(this.refs.userName.value)
        //console.log(localStorage.lcuserName)

        if(this.refs.userName.value===localStorage.lcuserName&&this.refs.pwd.value===localStorage.lcpwd){
            console.log("正确")
            this.refs.warn.style.visibility="hidden"
            this.props.history.push("/")


        }else{
            this.refs.warn.style.visibility="visible"

        }

    }

    cleanWarn(){
        this.refs.warn.style.visibility="hidden"
    }




    render(){
        return (
            <div className={"lowrap"}>
                <div className={"loheader"}>
                    <div onClick={this.goBack.bind(this)}>
                        <img src={myback} alt=""/>

                    </div>
                    <span>账户登录</span>
                    <i></i>

                </div>

                <div className={"lomain"}>
                    <div className={"lo"}>
                        <img src={logo} alt=""/>

                    </div>
                    <div className={"loaccount"}>
                        <img src={loacc} alt=""/>
                        <input type="text" placeholder={"请输入账号"} onFocus={this.cleanWarn.bind(this)} ref={"userName"}/>



                    </div>
                    <div className={"password"}>
                        <img src={lopwd} alt=""/>
                        <input type="password" placeholder={"请输入密码"} onFocus={this.cleanWarn.bind(this)} ref={"pwd"}/>

                    </div>

                    <div className={"lolink"}>
                        <i onClick={this.goReg.bind(this)}>立即注册</i>
                        <span>&nbsp;|&nbsp;</span>
                        <i>忘记密码</i>
                    </div>

                    <div className={"dl"}>
                        <input type="button" value={"登录"} onClick={this.sendLogin.bind(this)}/>
                    </div>

                    <div className={"warn"}>
                        <span ref={"warn"}>账号或密码错误！</span>
                    </div>







                </div>
            </div>



        )
    }

    componentWillMount(){
        console.log(this.props)
    }

}