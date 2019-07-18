import React from 'react';
import axios from 'axios';

import "../assets/css/ShopDetail.css"
import Arrow from "../assets/img/black_zjt.png";
import blueCart from "../assets/img/blueCart.png";

class ClassifyShopList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:this.props.location.state.data,
            shopList:[],
            judge:false
        }
    }
    render(){
        return(
            <div className='ShopDetailwrap'>
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
                        this.state.shopList.map((v,i)=>{
                            return (
                                <div key={i} className="ShopDetailgoodswrap" onClick={()=>this.props.history.push({pathname: `/Detail/${v.product_id}`,state:{data: v}})}>
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
    getShopList(){
        let data = this.state.list;
        console.log(data);
        axios.get("/proxy/Product/index/ProductsList?cfid="+data.f_id+"&mid="+data.mid_category_id+"&cid="+data.category_id+"&cate=1")
        .then(({data})=>{
            console.log(data.data.list,111);
            this.setState({
                shopList:data.data.list
            })
        })
    }
    componentWillMount(){
        this.getShopList();
    }
}
export default ClassifyShopList;