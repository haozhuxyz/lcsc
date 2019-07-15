import React from "react";
import axios from 'axios';


import Arrow from "../assets/img/Arrow.png";
class Classify extends React.Component{
    render(){
        return (
            <div>
                <div className='top'>
                    {/* <img src={Arrow}/> */}
                    <span>分类</span>
                </div>
                <div className='main'>
                    <div className='main-left'>
                        
                    </div>
                    <div className='main-rigth'>
                        
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log(111);
        console.log(this.props)
    }
}
export default Classify;