import React, { Component } from "react";
import axios from "axios";
import "../css/style.css";
import FilterRes from "./FilterRes";
import Cart from "./Cart";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: "",
      nameFood: "",
      image: "",
      optionName: "",
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onHandlerChange = this.onHandlerChange.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:3000/dataProduct").then((res) => {
      this.setState({ products: res.data });
    });
  }
  // searchByName() {

  // }

  onHandlerChange(event) {
    this.setState({
      optionName: event.target.value,
    });
    console.log(this.state);
  }
  render() {
    return (
      <>
        {/* Welcome Area Starts */}
        <section className="welcome-area section-padding2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <div className="welcome-img">
                  <img
                    src="assets/images/welcome-bg.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 align-self-center">
                <div className="welcome-text mt-5 mt-md-0">
                  <h3>
                    <span className="style-change">welcome</span> <br />
                    to food fun
                  </h3>
                  <p className="pt-3">
                    Created god gathered don't you yielding herb you had. And
                    isn't, god was saw. Dominion. Great sixth for in unto was.
                    Open can't tree am waters brought. Divide after there. Was.
                  </p>
                  <p>
                    Created god gathered don't you yielding herb you had. And
                    isn't, god was saw. Dominion. Great sixth for in unto was.
                    Open can't tree waters brought. Divide after there. Was.
                    Created god gathered don't you yielding herb you had. And
                    isn't god.
                  </p>
                  <a href="#" className="template-btn mt-3">
                    book a table
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="food-area">
          <div className="container-fluid content">
            <div className="left">
              <FilterRes
                optionName={this.state.optionName}
                change={this.onHandlerChange}
              />
              {/*  */}
              <div className="bannerWrapper">
        <div className="bannerTop">
          <div>FOODFUN </div><div><span className="bold">come with us</span></div><div>100% off today</div>
        </div>
        <div className="bannerTopSub">
          <div>
            <span>-100%</span> <br />only today
          </div>
        </div>
        <div className="bannerPicture">
        </div>
        <div className="bannerGuarantee">
          <div className="bannerLike" />
          <span>
            <div className="guaranteeLine">Like </div>
            <div className="guaranteeLine">Share </div>
            <div className="guaranteeLine">Subscribe</div>
          </span>
        </div>
        <div className="bannerBottom">
          <button className="rentNow">BUY NOW</button>
        </div>
      </div>
              {/*  */}
            </div>
            <div className="right">
              <div className="row">
                <div className="col-md-5">
                  <div className="section-top">
                    <h3>
                      <span className="style-change">we serve</span> <br />
                      delicious food
                    </h3>
                    <p className="pt-3">
                      They're fill divide i their yielding our after have him
                      fish on there for greater man moveth, moved Won't together
                      isn't for fly divide mids fish firmament on net.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {this.state.optionName !== ""
                  ? this.state.products
                      .filter((item) => item.nameRes === this.state.optionName)
                      .map((product, index) => (
                        <Cart
                          key={index}
                          id={product.id}
                          nameFood={product.nameFood}
                          image={product.image}
                          price={product.price}
                        ></Cart>
                      ))
                  : this.state.products.map((product, index) => (
                      <Cart
                        key={index}
                        id={product.id}
                        nameFood={product.nameFood}
                        image={product.image}
                        price={product.price}
                      ></Cart>
                    ))}
                {}
              </div>
            </div>
          </div>
        </section>
          {/* Update Area Starts */}
          <section className="update-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-top2 text-center">
                    <h3>Our <span>food</span> update</h3>
                    <p><i>Beast kind form divide night above let moveth bearing darkness.</i></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="single-food">
                    <div className="food-img">
                      <img src="assets/images/update1.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="food-content">
                      <div className="post-admin d-lg-flex mb-3">
                        <span className="mr-5 d-block mb-2 mb-lg-0"><i className="fa fa-user-o mr-2" />Admin</span>
                        <span><i className="fa fa-calendar-o mr-2" />18/09/2018</span>
                      </div>
                      <h5>no finer food can be found</h5>
                      <p>nancy boy off his nut so I said chimney pot be James Bond aking cakes he.</p>
                      <a href="#" className="template-btn3 mt-2">read more <span><i className="fa fa-long-arrow-right" /></span></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-food my-5 my-md-0">
                    <div className="food-img">
                      <img src="assets/images/update2.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="food-content">
                      <div className="post-admin d-lg-flex mb-3">
                        <span className="mr-5 d-block mb-2 mb-lg-0"><i className="fa fa-user-o mr-2" />Admin</span>
                        <span><i className="fa fa-calendar-o mr-2" />20/09/2018</span>
                      </div>
                      <h5>things go better with food</h5>
                      <p>nancy boy off his nut so I said chimney pot be James Bond aking cakes he.</p>
                      <a href="#" className="template-btn3 mt-2">read more <span><i className="fa fa-long-arrow-right" /></span></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single-food">
                    <div className="food-img">
                      <img src="assets/images/update3.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="food-content">
                      <div className="post-admin d-lg-flex mb-3">
                        <span className="mr-5 d-block mb-2 mb-lg-0"><i className="fa fa-user-o mr-2" />Admin</span>
                        <span><i className="fa fa-calendar-o mr-2" />22/09/2018</span>
                      </div>
                      <h5>food head above the rest</h5>
                      <p>nancy boy off his nut so I said chimney pot be James Bond aking cakes he.</p>
                      <a href="#" className="template-btn3 mt-2">read more <span><i className="fa fa-long-arrow-right" /></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Update Area End */}
      </>
    );
  }
}
export default List;
