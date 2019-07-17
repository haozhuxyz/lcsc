import React, {Component} from 'react';
import axios from "axios"
import "../assets/css/ShopDetail.css"

class ShopDetail extends Component {
    constructor(props) {
        super(props)
        this.list = props.location.state.data
        this.state={
            brand_id : this.list.brand_id,
            goodsList:[]
        }
    }
    render() {
        if(this.state.goodsList){
            return (
                <div className="ShopDetailwrap">
                    <button onClick={this.confirm}>返回</button>
                    <p>商店列表</p>
                    {
                        this.state.goodsList.map((v,i)=>{
                            return (
                                <div key={i} className="ShopDetailgoodswrap" onClick={()=>this.routerTo(v)}>
                                    <div className="ShopDetailgoodspic">
                                        <img src={v.img_url} alt=""></img>
                                    </div>
                                    <div className="ShopDetailgoodsFont">
                                        <p>{v.title}</p>
                                        <p>{v.business_name}</p>
                                        <span>价格：{v.price}元</span>
                                    </div>
                                </div>
                            )
                        })
                    }
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
        axios.get("https://www.linkpet.com.cn/Mobile/Product?brand_id="+this.state.brand_id)
            .then(({data})=>{
                console.log(1111,data)
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