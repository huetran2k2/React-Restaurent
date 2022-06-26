import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="preloader">
            <div className="spinner" />
          </div>
          {/* Header Area Starts */}
          <header className="header-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <div className="logo-area">
                    <a href="index.html"><img src="assets/images/logo/logo.png" alt="logo" /></a>
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="custom-navbar">
                    <span />
                    <span />
                    <span />
                  </div>  
                  <div className="main-menu">
                    <ul>
                      <li className="active"><a href="">home</a></li>
                      <li><a href="">about</a></li>
                      <li><a href="">menu</a></li>
                      <li><a href="">blog</a>
                        <ul className="sub-menu">
                          <li><a href="">Blog Home</a></li>
                          <li><a href="">Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="">contact</a></li>
                      <li><a href="">Login</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* Header Area End */}
            </div>
        );
    }
}

export default Header;