import React, {Component} from 'react';
import "../assets/css/Detail.css"

class Detail extends Component {
    constructor(props) {
        super(props)
        this.list = props.location.state.data
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
                    <span>价格：{this.list.price}元</span>
                    <p>药效：{this.list.title_secondary}</p>
                </div>
            </div>
        )
    }
    confirm = () =>{
        this.props.history.go(-1)
    }
}

export default Detail;