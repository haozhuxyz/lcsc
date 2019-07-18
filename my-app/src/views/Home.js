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
                <div className="head">
                    <div className="head_1">
                        <img id="head_1_img" src="data:image/png;base64,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" alt=""></img>
                    </div>
                    <div className="head_2">
                        <img id="head_2_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAfRJREFUSA3tVT1PAkEQ5Y6DDkuwMFbaGP0HWOPHL7C0VmPCQSBWVOQIhELt/QMmVn7FEloSo5YmNhZCKTEhHB++R7jjsne3rJ0Fl2xuZ+bNvp25mblIZPEsMvDHDGiq+PF4rBWLxc3BYLCtaVoScscwjIZlWW+Qx6rnKBGCaM227SuQrOi6fo/DO1jJ0Wi0C7LPWCx2COJ3FdK5hPl8fm84HN6C6KRWq12Kh2az2SPoytFo9KBard6JdlGWEjKyfr/fQgTpSqXyKjo7cqFQ2EIGXuLx+Pq8SHXHSXzzmzGN0J/JyOhHOzMwTbs0CJHHlXlrpOvDVShsiKefDBoaIW6bRkE8yJxFGwuKVSzqvbLhFbx7OKcgt706hX2HLSPDhUaIkm9jLcucA2yT/gzQu6pQQlRmE6iMi1TYsC85DBSgfgir1DTNRi6XO/Zb/Rr2I/H081tnmtAIOa44QXDri3mVN7WXiaff7Hj/LpSQUDYxJsg+KrY5nSi+E5gB2F9AdI0hseEDCApp+A7WO0uhe0QFfyF1KawdEE1mKXQ/vV6vhbeFEXju+IpvJUI68dvwb8H+ZMuwillY3r8FUrsKO3v3qV6vn4pklJUJg5yDdKVSaanb7d7gUiaG+bOIkX5DEawig/A7kUhkQGir4BeYRQb+XwZ+Acga2NPsfF4rAAAAAElFTkSuQmCC" alt=""></img>
                        <input type="text" className="head_2_input" autoComplete="off" placeholder="请输入搜索内容"></input>
                    </div>
                    <div className="head_3">
                        <span onClick={()=>{this.props.history.push("/Login")}}>登录</span>
                    </div>
                </div>
                <div className="activeList">
                    {
                        this.state.activeList.map((v,index)=>{
                            return (
                                <div key={index} className="activeList_1">
                                    <img id="activeList_1_img" src={v.icon_url} alt=""></img>
                                    <div className="activeList_1_font">{v.icon_name}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="active">
                    <img className="active_1" src="data:image/png;base64,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" alt=""></img>
                    <img className="active_2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAohJREFUWAntlj2IE0EYhpO4GBILT2xEkWuCSNALqKdLsknAVrALiFqL4KmIhSBcaynqgTZ2doKNhaWaZBMVAjFFGgsLBRsTuFxcFfOzPqMZWPZmj0lW0SILw/cz873vO99OZhOJzJ95B/5xB6J/g7/ZbC70+/0HYBcYT/P5/Eo0Gh2puP64gEqlsuS67hPIUpIwFotdRcQ9GXut4Q3C+I1GY6fjOJfBuMlIeLEQdIOxRhdcb174oTrQbre3dzodC+ASBGfAW/ATyJg1VqFQqMlY2qk6UKvVFofDoQnYUQCWu93uCWwCcokXaIUAJmcTUK/XE4PB4LkgFww6hH4l4/H4iD8nYmUHbNs2KTjN4XlmWZaN3c3aX+QqEJ0cHdirWqcUMBqNHrE4hYjPWFtVOG2OrolNbHpimzK/E6mA/MxpOjCVgJmJtijcpZoL6oBqbdjcugogSICjWhwy90lVrxTAqV9j8ToH54eqaJYcWEoBWjchxUa1Wl3BnuQwHULAIr5S/Bbi7heLxUv+eeXP0L8I0iG5O5MRERcT/kEupgxzxxCTZyz567wxXX3pjaWv1YFWq7WDz+sp7odX7OKjLPbacrm8HzHnEXKF/B7vHP6XeDy+zzTNDV9e72MkBPR6vQ3RdkjesZuL3JAv/GAinlzbD3HPynlqbvMhui5jr9V6j5lMxoH8jSjEHqATd7HbvEDSz2az3+jSOeJViF1GJZlMrsp5v9V6BaKIQ1jian4sAQC+xq7EuQh8xOc6nU4PhJCgRdoCRPv5t/MaoGUBBuhXxmH+6bwPAtfJa72CCeHYMIwL+N9FjKAk45bwwzzaAgRJLpd7ywEssfMPE9LjYcjntfMO/Bcd+AnUOOLljGw83wAAAABJRU5ErkJggg==" alt=""></img>
                    <span className="active_3">宠物食品/药品周五限时打折大放送</span>
                </div>
                <div className="mainList">
                    {
                        this.state.orderList.map((v,index)=>{
                            return (
                                <div key={index} className="orderList">
                                    <span className="orderListTitle">{index+1}、{v.title}</span>
                                    <div>
                                        {
                                            v.recmmd_product_list.map((m,i)=>{
                                                return (
                                                    <div key={i} className="goods"  onClick={()=>this.routerTo(m)}>
                                                        <img className="goods_img" src={m.img_url} alt=""></img>
                                                        <p className="goods_font">{m.title}</p>
                                                        <span className="goods_span">价格：{m.showprice}元</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    
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
                </div>
                
                <div className="title">产品推荐</div>
                <div className="context">
                    {
                        this.state.goodsList.map((v,index)=>{
                            return (
                                <div key={index} className="goodsList" onClick={()=>this.routerTo(v)}>
                                    <img src={v.img_url} alt=""></img>
                                    <p>{v.title}</p>
                                    <p className="goodsList_1">价格：{v.showprice}元</p>
                                    <p className="goodsList_2">{v.business_name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                
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
        this.props.history.push({pathname: `/DetailShop/${v.brand_id}/${v.product_id}`,state:{data: v}})
    }
}

export default Home;
