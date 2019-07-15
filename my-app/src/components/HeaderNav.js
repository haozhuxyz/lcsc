import React from 'react';
import {withRouter} from "react-router-dom";


class HeaderNav extends React.Component{
    render(){
      return (
        <div>
            <input type="button" onClick={()=>{
              this.props.history.push("/Shop")
          }} value={"跳转到Shop"}/>
        </div>
      );
    }
  }
  export default withRouter(HeaderNav);
  