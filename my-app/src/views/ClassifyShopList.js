import React from 'react';
import axios from 'axios';

import "../assets/css/ShopDetail.css"
import Arrow from "../assets/img/black_zjt.png";
import blueCart from "../assets/img/blueCart.png";

class Shaixuan extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input_value1:'',
            input_value2:''
        }
    }
    inputChange1(val){
        //获取用户输入内容
        console.log(val)//这是对象
        console.log(val.target.value)//这是输入框内容文本
        //使用setsatte方法改变类中属性
        this.setState({
            input_value1:val.target.value
        })
    }
    inputChange2(val){
        //获取用户输入内容
        console.log(val)//这是对象
        console.log(val.target.value)//这是输入框内容文本
        //使用setsatte方法改变类中属性
        this.setState({
            input_value2:val.target.value
        })
    }
    render(){
        return(
            <div className='sx_warp' ref='sx'>
                <div className='sx_left' onClick={()=>{
                    let l=0;
                    let timer = window.setInterval(()=>{
                        document.querySelector('.sx_warp').style.right=-l+'vw';
                        if(l===100){
                            window.clearInterval(timer);
                        }
                        l+=2;
                    },5)
                }}></div>
                <div className='sx_main'>
                    <div className='sx_top'>
                        <div className='_3fd3'>筛选</div>
                        <div className='_1Aa3'>
                            <div>重置</div>
                            <div onClick={()=>{
                                let l=0;
                                let timer = window.setInterval(()=>{
                                    document.querySelector('.sx_warp').style.right=-l+'vw';
                                    if(l===100){
                                        window.clearInterval(timer);
                                    }
                                    l+=2;
                                },5)
                            }}>确定</div>
                        </div>
                    </div>

                    <div className='_1A3rf3'>
                        <div className='_5Sf3'>促销与服务</div>
                        <div className='_1OFSw'>
                            <div>促销商品</div>
                            <div>仅看有货</div>
                        </div>
                        <div className='_5Sf3'>价格区间(元)</div>
                        <div className="_1OFSw">
                            <div className="_2XafX">
                                <input type="number" min="0" name="money" pattern="[0-9]*" placeholder='最低价' value={this.state.input_value1} onChange={this.inputChange1.bind(this)}/>
                            </div>
                            <div className="_2XafX">
                                <input type="number" min="0" name="money" pattern="[0-9]*" placeholder='最高价' value={this.state.input_value2} onChange={this.inputChange2.bind(this)}/>
                            </div>
                        </div>
                    </div>

                    <div className='_9Aas1'>
                        <div className='_04q5gD'>品牌</div>
                        <div className="_32pHa">
                            <div className="_2TiEg">武汉派盛</div>
                            <div className="_2TiEg">汉优</div>
                            <div className="_2TiEg">顽皮wanpy</div>
                            <div className="_2TiEg">韩国瑞必诊</div>
                            <div className="_2TiEg">韩国安捷</div>
                            <div className="_2TiEg">多美洁</div>
                            <div className="_2TiEg">英国格伦仕宝Carexpro</div>
                            <div className="_2TiEg">河北远征</div>
                            <div className="_2TiEg">金环</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


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
                <Shaixuan></Shaixuan>
                <div className='top_a'>
                <img src={Arrow} onClick={()=>{this.props.history.go(-1)}} alt=""/>
                    top
                </div>
                <ul className="nav_a">
                    <li>默认</li>
                    <li>人气</li>
                    <li>价格</li>
                    <li>销量</li>
                    <li onClick={()=>{
                            let l=100;
                            let timer = window.setInterval(()=>{
                                document.querySelector('.sx_warp').style.right=-l+'vw';
                                if(l===0){
                                    window.clearInterval(timer);
                                }
                                l-=2;
                            },5)
                        }}>筛选</li>
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
                                        <p className='shop_price'>价格：{v.price}元</p>
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
        axios.get("/proxy/Product/index/ProductsList?cfid="+data.f_id+"&mid="+data.mid_category_id+"&cid="+data.category_id+"&cate=1")
        .then(({data})=>{
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