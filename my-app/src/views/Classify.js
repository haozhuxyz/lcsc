import React from "react";
import '../assets/css/Classify.css'
import axios from 'axios';
import {
    connect
} from "react-redux"

import Arrow from "../assets/img/Arrow.png";
class Classify extends React.Component{
    render(){
        console.log('~~~',this.props);
        return (
            <div className='classify'>
                <div className='top'>
                    <img src={Arrow} onClick={()=>{this.props.history.go(-1)}}/>
                    <span>分类</span>
                </div>
                <div className='view'>
                    <div className='view-left'>
                        <ul>
                        {
                            this.props.classify.list.map(v=>{
                                return(
                                        <li key={v.category_fid} className='list' onClick={()=>{
                                            this.props.getClassifyShopList(v.category_fid)
                                        }}>{v.name}</li>
                                )
                            })
                        }
                        </ul>
                    </div>
                    <div className='view-rigth'>
                        {
                            this.props.classify.shopList.cate.map(v=>{
                                return(
                                    <dl key={v.middle_id}>
                                        <dt>{v.name}</dt>
                                        {v.cate.map(v=>{
                                            return(
                                                <dd key={v.category_id}>
                                                    {v.name}
                                                </dd>
                                            )
                                        })}
                                    </dl>
                                )
                            })
                        }
                        {
                            this.props.classify.shopList.brand.map(v=>{
                                return(
                                    <div  key={v.brand_id} className='v-r-img'>
                                        <img src={v.logo}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getClassifyList();
        this.props.getClassifyShopList();
    }
    
}
function mapStateToProps({classify}){
    return{
        classify
    }
}
function mapDispatchToProps(dispatch){
    return {
        getClassifyList(){
            dispatch((dispatch)=>{
                axios.get("https://www.linkpet.com.cn/Mobile/Index/product_category")
                .then(({data})=>{
                    dispatch({
                        type:'CHANGE_CLASSIFYLIST',
                        payload:{
                            classifyList:data.data.cates
                        }
                    })
                })
            })
        },
        getClassifyShopList(_id = '33'){
            dispatch((dispatch)=>{
                axios.get("https://www.linkpet.com.cn/Mobile/Index/product_category")
                .then(({data})=>{
                    dispatch({
                        type:'CHANGE_CLASSIFTSHOPLIST',
                        payload:({
                            shopListCate:data.data.cates.find(v=>v.category_fid === _id).cate,
                            shopListBrand:data.data.cates.find(v=>v.category_fid === _id).brand
                        })
                    })
                })
            })
            
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Classify);