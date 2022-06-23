import React, { Component } from 'react';
// import Res1 from './Restaurant/Res1';
import Header from './Restaurant/Header';
import Footer from './Restaurant/Footer';
import Dori from'./Restaurant/Menu';



class Content extends Component {
    render() {
        return (
          <div>
            <Header></Header>
            <Dori></Dori>
            <Footer/>
      
        </div>
        );
    }
}

export default Content;