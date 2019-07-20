import React from 'react';
import "../assets/css/Register.css";
import myback from "../assets/img/back.png"

export default class Register extends React.Component{
    goBack(){
        this.props.history.go(-1)
    }
    sendReg(){
        if(this.refs.userName.value&&this.refs.pwd.value){
            this.refs.jg.style.visibility = "hidden"
            localStorage.lcuserName=this.refs.userName.value;
            localStorage.lcpwd=this.refs.pwd.value;
            this.props.history.push("login")
        }else{
            this.refs.jg.style.visibility = "visible"
        }
    }
    cleanWarn(){
        this.refs.jg.style.visibility = "hidden"
    }
    render(){
        return (
            <div className={"rewrap"}>
                <div className={"rehead"}>
                    <div onClick={this.goBack.bind(this)}>
                        <img src={myback} alt=""/>
                    </div>
                    <span>注册</span>
                    <i></i>
                </div>
                <div className={"remain"}>
                    <div className={"account"}>
                        <span></span>
                        <input type="text" placeholder={"请输入账号"} ref={"userName"} onFocus={this.cleanWarn.bind(this)}/>
                    </div>
                    <div className={"pwd"}>
                        <span></span>
                        <input type="password" placeholder={"请输入密码"} ref={"pwd"} style={{textIndent:"18px"}} onFocus={this.cleanWarn.bind(this)}/>
                    </div>
                    <div className={"zc"}>
                        <input onClick={this.sendReg.bind(this)} type="button" value={"注册"}/>
                    </div>
                    <div className={"jg"}>
                        <span ref={"jg"}>账号或密码错误！</span>
                    </div>
                </div>
            </div>
        )
    }
}