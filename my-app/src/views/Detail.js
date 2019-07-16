import React, {Component} from 'react';

class Detail extends Component {
    constructor(props) {
        super(props)
        this.list = props.location.state.data
    }
    render() {
        var list = {}
        return (
            <div>
                <div>
                    <button onClick={this.confirm}>返回</button>
                    <p>详情页面</p>
                    <img style={{width:"300px"}} src={this.list.img_url} alt=""></img>
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