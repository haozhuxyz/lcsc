import React, {Component} from 'react';
import axios from "axios"

import "../assets/css/ShopDetail.css"
import Arrow from "../assets/img/black_zjt.png";
import blueCart from "../assets/img/blueCart.png";

class ShopDetail extends Component {
    constructor(props) {
        super(props)
        this.list = props.location.state.data
        this.state={
            brand_id : this.list.brand_id,
            goodsList:[],
            judge:false
        }
    }
    render() {
        if(this.state.goodsList){
            return (
                <div className="ShopDetailwrap">
                    <div className='top_a'>
                        <img src={Arrow} onClick={()=>{this.props.history.go(-1)}} alt=""/>
                        top
                    </div>
                    <ul className="nav_a">
                        <li>默认</li>
                        <li>人气</li>
                        <li>价格</li>
                        <li>销量</li>
                        <li>筛选</li>
                    </ul>
                    <div className="view_1" >
                        {
                            this.state.goodsList.map((v,i)=>{
                                return (
                                    <div key={i} className="ShopDetailgoodswrap" onClick={()=>this.routerTo(v)}>
                                        <div className="ShopDetailgoodspic">
                                            <img src={v.img_url} alt=""></img>
                                        </div>
                                        <div className="ShopDetailgoodsFont">
                                            <div className="shop_title">
                                                <p className='shop_name'>{v.title}</p>
                                                <p className='second_name'>{v.title_secondary}</p>
                                            </div>
                                            <p className='shop_price'>{this.state.judge?'￥'+v.price:'登录显示价格'}</p>
                                            <p className='shop_city'>{v.business_name}</p>
                                            <img src={blueCart} alt=""/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="ShopDetailwrap">
                    <button onClick={this.confirm}>返回</button>
                    <p>商店列表</p>
                    <div>商品未找到</div>
                </div>
            )
        }
    }
    confirm = () =>{
        this.props.history.go(-1)
    }
    getList(){
        axios.get("/proxy/Product?brand_id="+this.state.brand_id)
            .then(({data})=>{
                this.setState({
                    goodsList:data.data.list
                })
        })
    }
    componentWillMount(){
        this.getList();
    }
    routerTo(v) {
        this.props.history.push({pathname: `/Detail/${v.product_id}`,state:{data: v}})
    }
}

export default ShopDetail;