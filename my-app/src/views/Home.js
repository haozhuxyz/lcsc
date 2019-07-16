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
            <div className="wrap">
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
                                <span className="orderListTitle">{index+1}、{v.title}</span>
                                {
                                    v.recmmd_product_list.map((m,i)=>{
                                        return (
                                            <div key={i} className="goods"  onClick={()=>this.routerTo(m)}>
                                                <img src={m.img_url} alt=""></img>
                                                <h4>{m.title}</h4>
                                            </div>
                                        )
                                    })
                                }
                                <div>
                                    {
                                        v.brand.map((a,b)=>{
                                            return (
                                                <span key={b}>
                                                    <span className="goodsFont" onClick={()=>this.routerGoShop(a)}>{a.name}</span>
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                                <span>{v.brand.name}</span>
                            </div>
                        )
                    })
                }
                <div className="title">产品推荐</div>
                {
                    this.state.goodsList.map((v,index)=>{
                        return (
                            <div key={index} className="goodsList" onClick={()=>this.routerTo(v)}>
                                <h3>{v.title}</h3>
                                <img src={v.img_url} alt=""></img>
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
    routerTo(v) {
        this.props.history.push({pathname: `/Detail/${v.product_id}`,state:{data: v}})
    }
    routerGo(v) {
        this.props.history.push({pathname: `/Detail/${v.product_id}`,state:{data: v}})
    }
    routerGoShop(v) {
        this.props.history.push({pathname: `/DetailShop/${v.brand_id}`,state:{data: v}})
    }
}

export default Home;
