import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="preloader">
            <div className="spinner" />
          </div>
          {/* Preloader End */}
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
                      <li className="active"><a href="index.html">home</a></li>
                      <li><a href="about.html">about</a></li>
                      <li><a href="menu.html">menu</a></li>
                      <li><a href="#">blog</a>
                        <ul className="sub-menu">
                          <li><a href="blog-home.html">Blog Home</a></li>
                          <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="contact-us.html">contact</a></li>
                      <li><a href="contact-us.html">Login</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>
          
          {/* Header Area End */}
          {/* Banner Area Starts */}
          <section className="banner-area text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h6>the most interesting food in the world</h6>
                  <h1>Discover the <span className="prime-color">flavors</span><br />  
                    <span className="style-change">of <span className="prime-color">food</span>fun</span></h1>
                </div>
              </div>
            </div>
          </section>
          {/* Banner Area End */}
          {/* Welcome Area Starts */}
          <section className="welcome-area section-padding2">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <div className="welcome-img">
                    <img src="assets/images/welcome-bg.png" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-6 align-self-center">
                  <div className="welcome-text mt-5 mt-md-0">
                    <h3><span className="style-change">welcome</span> <br />to food fun</h3>
                    <p className="pt-3">Created god gathered don't you yielding herb you had. And isn't, god was saw. Dominion. Great sixth for in unto was. Open can't tree am waters brought. Divide after there. Was.</p>
                    <p>Created god gathered don't you yielding herb you had. And isn't, god was saw. Dominion. Great sixth for in unto was. Open can't tree waters brought. Divide after there. Was. Created god gathered don't you yielding herb you had. And isn't god.</p>
                    <a href="#" className="template-btn mt-3">book a table</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
            </div>
        );
    }
}

export default Header;