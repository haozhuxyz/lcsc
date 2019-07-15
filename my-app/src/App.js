import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/reset.css'


import FooterNav from "./components/FooterNav"


class App extends React.Component{
    constructor(){
        super();

    }

  render(){
    return (
      <div className="App">


          <FooterNav></FooterNav>


      </div>
    );
  }
}

export default App;
