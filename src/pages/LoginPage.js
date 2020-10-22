import React,{Component} from 'react'
import "../assets/styles/loginPage.less"
import Img from "../components/Img"
import FormInput from "../components/FormInput"
import FormBtn from "../components/FormBtn"
export default class LoginPage extends Component{
    render(){
        return(
            <div className="login-page">
                {/*1.logo*/}
               <Img src={"logo.svg"}/>
               {/*2.form表单*/}
               <form className="login-form">
                   {/*1.用户名*/}
                   <FormInput type="text" iconClass="shouji" placeholder="用户名"/>
                   {/*2.密码*/}
                   <FormInput type="password" iconClass="mima" placeholder="密码"/>
                   {/*3.登录按钮*/}
                   <FormBtn isFull={true}>登录</FormBtn>
                   <FormBtn type="ordinary">忘记密码</FormBtn>
                   <FormBtn>免费注册</FormBtn>&ensp;
                   <FormBtn>游客登录</FormBtn>
               </form>
            </div>
        )
    }
}