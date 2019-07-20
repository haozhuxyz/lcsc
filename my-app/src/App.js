import React from 'react';
import './App.css';
import './assets/css/FooterNav.css'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"

import router from "./router/index"
import FooterNav from "./components/FooterNav"

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Router>
                    <FooterNav></FooterNav>
                    {
                        router.map((v,i)=>{
                            return(
                                <Route key={i} {...v}></Route>
                            )
                        })
                    }
                </Router>
            </div>
        )
    }
}

export default App