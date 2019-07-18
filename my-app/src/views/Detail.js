import React, {Component} from 'react';
import "../assets/css/Detail.css"
import  axios from "axios"


class Detail extends Component {
    constructor(props) {
        super(props)
        this.list = props.location.state.data
        this.state={
            product_id : this.list.product_id,
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
                    <h2>{this.list.title}</h2>
                    <span>价格：{this.list.showprice}元</span>
                    <p>{this.list.title_secondary}</p>
                    <p>公司：{this.list.business_name}</p>
                </div>
            </div>
        )
    }
    getGoods() {
        axios.get("https://www.linkpet.com.cn/Mobile/Product/productDetail/ProductDetail?id="+this.state.product_id)
            .then(({data})=>{
                console.log(data)
            })
    }
    componentDidMount(){
        this.getGoods();
    }
    confirm = () =>{
        this.props.history.go(-1)
    }
}

export default Detail;