import React, {Component} from 'react';

class Detail extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <button onClick={this.confirm}>返回</button>
                <p>详情页面</p>
            </div>
        )
    }
    confirm = () =>{
        this.props.history.go(-1)
    }
}

export default Detail;