import React from "react";
import '../assets/css/Classify.css'
import axios from 'axios';
import {
    connect
} from "react-redux"

import Arrow from "../assets/img/Arrow.png";
class Classify extends React.Component{
    constructor(props){
        super(props);
        this.state={
            goodsClass:[],
            trademark:[]
        }
    }
    render(){
        try{
            if(this.state.goodsClass.length===0) this.changData('33');
        }
        catch(err){

        }
        // console.log(this.state.goodsClass.length===0,1111)
        // console.log('~~~',this.props.classify.shopListData);
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
                                        <li ref={v.category_fid} key={v.category_fid}  className={v.category_fid==='33'?'liStyle':'list'} onClick={()=>{
                                            this.changeClassName(v.category_fid);
                                            // this.props.getClassifyShopList(v.category_fid)
                                            this.changData(v.category_fid);
                                        }}>{v.name}</li>
                                )
                            })
                        }
                        </ul>
                    </div>
                    <div className='view-rigth'>
                        {
                            this.state.goodsClass.map(v=>{
                                return(
                                    <dl key={v.middle_id}>
                                        <dt>{v.name}</dt>
                                        {v.cate.map(v=>{
                                            return(
                                                <dd key={v.category_id} onClick={
                                                    ()=>{
                                                        this.props.history.push({pathname: `/ClassifyShopList`,state:{data: v}});
                                                    }
                                                }>
                                                    {v.name}
                                                </dd>
                                            )
                                        })}
                                    </dl>
                                )
                            })
                        }
                        {
                            this.state.trademark.map(v=>{
                                return(
                                    <div  key={v.brand_id} className='v-r-img'>
                                        <img src={v.logo} alt="" onClick={()=>{
                                            this.props.history.push({pathname: `/DetailShop/${v.brand_id}`,state:{data: v}})
                                        }}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    changData(_id){
        let data = this.props.classify.list;
        // console.log(data);
        this.setState({
            goodsClass:data.find(v=>v.category_fid===_id).cate,
            trademark:data.find(v=>v.category_fid===_id).brand
        })
        console.log(this.state.goodsClass,this.state.trademark)
    }
    changeClassName(_id){
        // console.log(_id);
        // console.log(typeof(this.refs));
        // console.log(this.refs[_id]);
        let obj = this.refs;
        // console.log(obj);
        Object.keys(obj).forEach(function(key){

            obj[key].className='list';
       
       });
        this.refs[_id].className='liStyle';
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
                axios.get("/proxy/Index/product_category")
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
                axios.get("/proxy/Index/product_category")
                .then(({data})=>{
                    // console.log(data.data.cates)
                    dispatch({
                        type:'CHANGE_CLASSIFTSHOPLIST',
                        payload:({
                            shopListData:data.data.cates,
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