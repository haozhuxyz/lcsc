import React, {Component} from 'react';
import "../assets/css/Detail.css"
import backcart from "../assets/img/backcart.png"
import  axios from "axios"
import store from "../store/index"
import {addToCart,updateCart,deleteFromCart} from "../store/actions/cart";
class Detail extends Component {
    constructor(props) {
        super(props)
        this.list = props.location.state.data
        this.state={
            product_id : this.list.product_id,
            info:[],
            shop:[],
            all:{},
            img:[],
            same_list:[],
            detailOne:[],
            display_name:"block",
            user:'',
            cartInfo:{},
            cartList:[]

        }
    }
    goCart(){
        console.log(111)
        this.props.history.push("/cart")
    }
    addCart(){

        /*console.log("加入购物车")
        console.log(Number(this.list.showprice))
        console.log(this.list.title)
        console.log("库存",this.state.info.stock)*/

        if(localStorage.lcuserName&&localStorage.lcpwd){
            if(this.state.info.stock<1){
                alert("库存不足")

                }else{
                console.log("加入购物车",this.state.product_id)
                //console.log(this.state.user)
                store.dispatch(addToCart(this.list.title, 1, Number(this.list.showprice),this.state.product_id,this.list.img_url));
               // this.props.history.push("cart")
                //console.log(this.props)



            }
        }
        else{
            alert("请先登录")

        }



    }
    render() {

        return (
            <div className="detailWrap">
                <div className="detailTitle">
                    <div onClick={this.confirm} className="detailGo">返回</div>
                    <ul className="detailTitle_1">
                        <li onClick={this.display_block.bind(this)}>商品</li>
                        <li onClick={this.display_none.bind(this)}>详情</li>

                    </ul>
                    <div className={"gocart"} onClick={this.goCart.bind(this)}>
                        <img src={backcart} alt=""/>
                    </div>
                </div>
                <div style={{display:this.state.display_name}}>
                    <div className="detailimg">
                        <img className="detailimg_1" src={this.list.img_url} alt=""></img>
                    </div>
                    <div className="detailMain">
                        <h3 className="detailMain_1">{this.list.title}</h3>
                        <p className="detailMain_2"></p>
                        <div className="detailMain_3">
                            <span className="detailMain_3_1">价格：{this.list.showprice}元</span>
                            <span className="detailMain_3_2">库存：{this.state.info.stock}件</span>
                        </div>
                        <p className="detailMain_4">
                            <span>起订量：{this.state.info.min_sale_num}件</span>
                        </p>
                    </div>
                </div>
                <div className="detailContext">
                    <div className="detailContext_1">
                        <img src={this.state.shop.shop_logo} alt=""></img>
                    </div>
                    <div className="detailContext_2">
                        <h1 className="detailContext_2_title">{this.state.shop.shop_name}</h1>
                        <div className="detailContext_3">
                            <span>在售商品：{this.state.all.product_num}件</span>
                            <span>(客服上班时间:{this.state.shop.support_b_time}-{this.state.shop.support_e_time})</span>
                        </div>
                    </div>
                </div>
                <div className="detailOne">
                    <div className="detailInfo_1">规格参数</div>
                    <ul className="detailOne_1">
                        {
                            this.state.detailOne.map((v,i)=>{
                                return(
                                    <li key={i} className="detailOne_2">
                                        <div className="detailOne_L">{v.name}</div>
                                        <div className="detailOne_R">{v.m_value}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="detailInfo">
                    <div className="detailInfo_1">产品详情</div>
                    <div>
                        {
                            this.state.img.map((v,i)=>{
                                return (
                                    <div key={i}>
                                        <img className="detailInfo_2" src={v.img_url} alt=""></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="recommend">
                    <div id="recommend_1">
                        <div>同类推荐</div>
                        <div>掌柜推荐</div>
                    </div>
                    <div className="recommend_2">
                        {
                            this.state.same_list.map((v,i)=>{
                                return(
                                    <div className="recommend_3" key={i}>
                                        <img onClick={()=>{this.routerTo(v)}} className="recommend_3_img" src={v.img_url} alt=""></img>
                                        <p className="recommend_3_1">{v.title}</p>
                                        <p className="recommend_3_2">价格：{v.showprice}元</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={"buybar"}>
                    <div className={"fastbuy"}>
                        立即购买

                    </div>
                    <div className={"addcart"} onClick={this.addCart.bind(this)}>
                        加入购物车

                    </div>

                </div>
            </div>
        )
    }
    display_none() {
        this.setState({
            display_name: 'none',
        })
    }
    display_block() {
        this.setState({
            display_name: 'block',
        })
    }
    getGoods() {
        axios.get("/proxy/Product/productDetail/ProductDetail?id="+this.state.product_id)
            .then(({data})=>{
                console.log(data.data)
                this.setState({
                    all:data.data,
                    info:data.data.info,
                    shop:data.data.shop,
                    img:data.data.img,
                    same_list:data.data.same_list,
                    detailOne:data.data.attribute
                })
            })
    }
    componentWillMount(){
        this.getGoods();
        if(localStorage.lcuserName&&localStorage.lcpwd){
            this.setState({
                user:localStorage.lcuserName
            })

                //this.state.user=localStorage.lcuserName

        }else{
           // this.state.user=''
            this.setState({
                user:""
            })
        }
    }
    confirm = () =>{
        this.props.history.go(-1)
    }
    routerTo(v) {
        this.props.history.push({pathname: `/Detail/${v.product_id}`,state:{data: v}});
        this.props.history.go(0)
    }
}

export default Detail;