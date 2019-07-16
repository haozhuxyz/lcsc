<<<<<<< HEAD
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
=======
// import React from 'react';
// import {
//   BrowserRouter as Router,
//   NavLink,
//   Route
// } from "react-router-dom"
// import Shop from "../views/Shop"
// import Activity from "../views/Activity"
// import Order from "../views/Order"
// import Balance from "../views/Balance"

// class HeaderNav extends React.Component{
//   componentDidMount(){
//     console.log(this.props);
// }
//     render(){
//       return (
//         <Router>
//         <span onClick={()=>{
//           this.props.history.push('/shop')
//         }}>商家</span>
//         <span onClick={()=>{
//           this.props.history.push('/activity')
//         }}>活动</span>
//         <span onClick={()=>{
//           this.props.history.push('/order')
//         }}>订单</span>
//         <span onClick={()=>{
//           this.props.history.push('/balance')
//         }}>余额</span>

//         <Route path={"/shop"}  component={Shop}></Route>
//         <Route path={"/activity"} component={Activity}></Route>
//         <Route path={"/order"} component={Order}></Route>
//         <Route path={"/balance"} component={Balance}></Route>
//     </Router>
//       );
//     }
//   }
//   export default HeaderNav;
>>>>>>> 48c50f65197464f07b3dfb600fa03e8f79ffda7d
  