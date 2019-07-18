import React, {Component} from 'react';
import "../assets/css/Detail.css"
import  axios from "axios"


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
            same_list:[]
        }
    }
    render() {
        return (
            <div className="detailWrap">
                <div className="detailTitle">
                    <div onClick={this.confirm} className="detailGo">返回</div>
                    <ul className="detailTitle_1">
                        <li>商品</li>
                        <li>详情</li>
                    </ul>
                </div>
                <div>
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
            </div>
        )
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
                    same_list:data.data.same_list
                })
            })
    }
    componentWillMount(){
        this.getGoods();
    }
    confirm = () =>{
        this.props.history.go(-1)
    }
    routerTo(v) {
        this.props.history.push({pathname: `/Detail/${v.product_id}`,state:{data: v}});
        this.props.history.go(0)
    }
    update(){
        this.forceUpdate(); 
    }
}

export default Detail;