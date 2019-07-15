import React from "react";
import  axios from "axios"
import "../assets/css/Home.css"



class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            goods:[],
            orderList:[],
            activeList:[],
            goodsList:[]
        }
    }
    render(){
        console.log(this.state.goods)
        return (
            <div>
                {
                    this.state.activeList.map((v,index)=>{
                        return (
                            <div key={index} className="activeList">
                                <button>{v.icon_name}</button>
                            </div>
                        )
                    })
                }
                {
                    this.state.orderList.map((v,index)=>{
                        return (
                            <div key={index} className="orderList">
                                <h3>{v.title}</h3>
                                <div>{v.recmmd_product_list.title}</div>
                                <span>{v.brand.name}</span>
                            </div>
                        )
                    })
                }
                {
                    this.state.goodsList.map((v,index)=>{
                        return (
                            <div key={index} className="goodsList">
                                <h3>{v.title}</h3>
                                <img src={v.img_url}></img>
                                <p>{v.business_name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    getGoods() {
        axios.get("https://www.linkpet.com.cn/Mobile/0/0")
                        .then(({data})=>{
                            this.setState({
                                goods:data.data,
                                orderList:data.data.floor,
                                activeList:data.data.icons,
                                goodsList:data.data.ordinary_p_list
                            })
                        })
    }
    componentDidMount(){
        this.getGoods();
    }
}

export default Home;
