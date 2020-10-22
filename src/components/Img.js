import React,{Component} from 'react'
//封装好的加载图片组件
export default class Img extends Component{
    render(){
        return(
            <div>
                {/*1.logo*/}
                <img src={require("../assets/images/"+this.props.src)}></img>
            </div>
        )
    }
}