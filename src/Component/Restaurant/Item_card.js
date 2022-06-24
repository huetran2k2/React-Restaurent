// import Item from 'antd/lib/list/Item';
import axios from "axios";
import React, { Fragment, Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import List from "../Restaurant/Menu";
import Bill from './Bill';

// process.env.REACT_APP_NAME_VARIABLE=window.Item; (lấy dữ liệu all)
window.window.window.total = 0;
const URL_API = 'https://61bec846b25c3a00173f4b70.mockapi.io/Bills'
const CART_KEY = "ShoppingCart";
export default class Card extends Component {
  shoppingCart = [];
  constructor(prop) {
    super(prop);
    this.state = {
      reload: false,
        cusName:"",
        phoneNumber: "",
        address:""

    };
    this.getDate();
    this.cusNameChange = this.cusNameChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.addressChange = this.addressChange.bind(this);
  }
  
  
  getDate = () => {
    var getItem = JSON.parse(localStorage.getItem(CART_KEY));
    console.log(getItem);
    this.shoppingCart = getItem;
  };

  // Plus Product
  plusPro = (index) => {
    this.shoppingCart[index].quantity = this.shoppingCart[index].quantity + 1;
    window.total = 0;
    localStorage.setItem(CART_KEY, JSON.stringify(this.shoppingCart));
    this.setState({
      reload: !this.state.reload,
    });
  };

  // Minus product
  misusPro = (index) => {
    if (this.shoppingCart[index].quantity > 1) {
      this.shoppingCart[index].quantity = this.shoppingCart[index].quantity - 1;
      window.total = 0;
      localStorage.setItem(CART_KEY, JSON.stringify(this.shoppingCart));
      this.setState({
        reload: !this.state.reload,
      });
    }
  };

  // Delete a product
  deletePro = (id) => {
    window.location.reload();
    this.shoppingCart.splice(id, 1);
    localStorage.setItem(CART_KEY, JSON.stringify(this.shoppingCart));
    window.total = 0;
    this.setState({
      reload: !this.state.reload,
    });
    alert("Removed!");
  };

  // Push Data into JSON
  pushData = async () => {
    // console.log(cusInfor);
    // console.log(this.shoppingCart);
    const details = JSON.parse(localStorage.getItem(CART_KEY)).map(detail => {
      return { id: detail.id, quantity: detail.quantity, cost: detail.price * detail.quantity }
    })
    // console.log(details)
    await axios.post(URL_API, {
      cusName: this.state.cusName,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      details
    })
    localStorage.setItem(CART_KEY, "[]")
    console.log(this.state);
  };
  cusNameChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value; 
    this.setState({[name]: value});
  }
  phoneChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value; 
    this.setState({[name]: value});
  }
  addressChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value; 
    this.setState({[name]: value});
  }

  render() {
    console.log(this.shoppingCart);
    if (this.shoppingCart == null) {
      return (
        <div style={{ position: "fixed", top: 0, width: "100%", height: "100%", zIndex: 1, background: "white" }}>
          <Fragment>
            <table style={{ width: "100%" }}>
              <thead style={{ backgroundColor: "#0d0c0c", color: "#faf9f7" }}>
                <tr>
                  <th style={{ padding: "10px 65px" }}>Img</th>
                  <th style={{ padding: "10px" }}>Product</th>
                  <th style={{ padding: "10px" }}>Price</th>
                  <th style={{ padding: "10px" }}>Quantity</th>
                  <th style={{ padding: "10px", columnCount: "2" }}></th>
                  <th></th>
                </tr>
              </thead>
            </table>
          </Fragment>
        </div>
      );
    } else {
      return (
        <div style={{ position: "fixed", top: 0, width: "100%", height: "100%", zIndex: 1, background: "white", overflow: "scroll" }}>
          <Fragment>
            <table style={{ width: "100%" }}>
              <thead style={{ backgroundColor: "#0d0c0c", color: "#faf9f7" }}>
                <tr>
                  <th style={{ padding: "10px 65px" }}>Img</th>
                  <th style={{ padding: "10px" }}>Product</th>
                  <th style={{ padding: "10px" }}>Price</th>
                  <th style={{ padding: "10px" }}>Quantity</th>
                  <th style={{ padding: "10px", columnCount: "2" }}>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.shoppingCart.map((product, index) => {
                  window.total =
                    window.total + product.quantity * product.price;
                  return (
                    <Fragment key={index}>
                      <tr style={{ borderBottom: "3px solid #8a8987" }}>
                        <td style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                          <img
                            src={product.image}
                            style={{ width: "150px", height: "150px" }}
                            alt="..."
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>$ &nbsp;{product.price}</td>
                        <td>
                          <i
                            className="fas fa-minus"
                            style={{ color: "red", paddingRight: "9px" }}
                            onClick={() => this.misusPro(index)}
                          ></i>
                          <input
                            type="text"
                            value={product.quantity}
                            style={{ width: "35px", paddingLeft: "8px" }}
                          />
                          <i
                            className="fas fa-plus"
                            style={{ color: "red", paddingLeft: "8px" }}
                            onClick={() => this.plusPro(index)}
                          ></i>
                        </td>
                        <td>$ &nbsp;{product.quantity * product.price}</td>
                        <td>
                          <i
                            className="far fa-trash-alt"
                            style={{ color: "red" }}
                            onClick={() => this.deletePro(index)}
                          >
                            {" "}
                          </i>
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-sm-3" style={{ marginLeft: "55px" }}>
                <div style={{ border: "2px solid #c9c8c3", width: "220px" }}>
                  <div className="row">
                    <div className="col-sm-6" style={{ padding: "10px" }}>
                      <p style={{ paddingLeft: "25px" }}>DISCOUNT</p>
                    </div>
                    <div className="col-sm-6" style={{ padding: "10px" }}>
                      <p style={{ paddingLeft: "30px" }}>$ &nbsp;0.00 </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-3" style={{ marginLeft: "80px" }}>
                <div style={{ border: "2px solid #c9c8c3", width: "220px" }}>
                  <div className="row">
                    <div className="col-sm-6" style={{ padding: "10px" }}>
                      <p style={{ paddingLeft: "25px" }}>DELIVERY</p>
                    </div>
                    <div className="col-sm-6" style={{ padding: "10px" }}>
                      <p style={{ paddingLeft: "30px" }}>$ &nbsp;0.00 </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-3" style={{ marginLeft: "80px" }}>
                <div style={{ border: "2px solid #c9c8c3", width: "220px" }}>
                  <div className="row">
                    <div className="col-sm-6" style={{ padding: "10px" }}>
                      <p style={{ paddingLeft: "25px" }}>SUBTOTAL</p>
                    </div>
                    <div className="col-sm-6" style={{ padding: "10px" }}>
                      <p>$ &nbsp;{window.window.total} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span style={{ display: "flex", justifyContent: "end", gap: "50px", paddingRight: "100px" }}>
              <button
                style={{
                  marginBottom: "20px",
                  marginTop: "30px",
                }}
                type="submit"
                className="btn btn-outline-success"
              >
                <Link className="text-success" to="/Menu">Tiếp tục mua hàng</Link>
              </button>
              <button
                style={{
                  marginBottom: "20px",
                  marginTop: "30px",
                }}
                type="submit"
                onClick={() => this.pushData()}
                className="btn btn-outline-success"
              >
                <Link className="text-success" to="/Bill"> Check out</Link>
              </button>
              <Routes>
                <Route path="/Menu" element={<List />} />
                <Route path="/Bill" element={<Bill />} />
              </Routes>
            </span>
          </Fragment>
    
            <div className="container">
            <h1>Thông tin khách hàng</h1>
            <form>
            <div className="form-group">
              <label htmlFor="cusName">Customer Name</label>
              <input type="text" className="form-control" id="cusName" name="cusName" onChange={this.cusNameChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Phone number</label>
              <input type="text" className="form-control" id="phoneNum" name="phoneNumber" onChange={this.phoneChange} />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Address</label>
              <input type="text" className="form-control" id="phoneNum" name="address" onChange={this.addressChange} />
            </div>
          </form>
          </div>
        </div>

      );
    }
  }
}
