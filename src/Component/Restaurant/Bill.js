import React, { Component } from "react";
// import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";

export default class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {
         products: [],
          id: "",
          cusName: "",
          phoneNumber: "",
          address: "",
          details: "",
      
        
        };
       
        this.onChange = this.onChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
      }
      componentDidMount() {
        var { match } = this.props;
        if (match) {
          var id = match.params.id;
          axios({
            method: "GET",
            url: `https://61bec846b25c3a00173f4b70.mockapi.io/Bills/${id}`,
            data: null
          })
            .then((res) => {
              var data = res.data;
              this.setState({
                id: data.id,
                cusName: data.cusName,
                phoneNumber: data.phoneNumber,
                address: data.address,
                details: data.details,
              });
            
            })
            .catch((err) => {});
            
        }
        axios
          .get("https://61bec846b25c3a00173f4b70.mockapi.io/Bills")
          .then((res) => {
            this.setState({ products: res.data });
            
          });
      }
      getProduct = (id) => {
        for (var i = 0; i < this.state.products.length; i++) {
          if (this.state.products[i].id === id) {
            return this.state.products[i];
          }
        }
        return null;
      };
      onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    render() {
        return (
            <div>
                 <div className="row">
              {this.state.products.map((product) => (
                <div className="card col-4" style={{ width: "18rem" }}>
                 
                  <div className="card-body">
                    {/* <h5 className="card-title">{product.cusName}</h5> */}
                    <div className="row">
                      <div className="col-6">Customer Name: <b className="text-danger">${product.cusName}</b></div>
                      <div className="col-6">Phone Number: <b className="text-danger">${product.phoneNumber}</b></div>
                      <div className="col-6">Address: <b className="text-danger">${product.address}</b></div>
                      {/* {console.log(product.details[2].cost)} */}
                      {product.details.reduce((total, currentValue) => total = total + currentValue.prix,0)}
                      <>
                        <p></p>
                      </>
                    </div>        
                  </div>
                </div>
              ))}
            </div>
            </div>
        )
  }
}