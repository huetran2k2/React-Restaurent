import React, { Component } from "react";
// import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {
          details: [],
          id: "",
          cusName: "",
          phoneNumber: "",
          address: "",
        };
       
        this.onChange = this.onChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
      }
      componentDidMount() {
        const location = useLocation();
        if (match) {
          const id = location.state.id;
          axios({
            method: "GET",
            url: `https://61bec846b25c3a00173f4b70.mockapi.io/Bills/${id}`,
            data: null
          })
            .then((res) => {
              var data = res.data;
              console.log("bill data: ", res.data)
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
      }
      onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      // Total = () => {
      //   const total = this.state.products.map((product) => (
      //     product.details.reduce((total, currentValue) => total = total + currentValue.prix,0)
      //   ));
      //   return <p>Totalzzz: {total}</p>;
      // }

    render() {
        return (
          <div className="text-dark">
          <div>This is bill page </div>
            {/* <div style={{ position: "fixed", top: 0, width: "100%", height: "100%", zIndex: 1, background: "white", overflow: "scroll" }}>
                 <div className="row">
              {this.state.products.map((product) => (
                <div className="card col-4" style={{ width: "18rem" }}>
                 
                  <div className="card-body">
                    <h5 className="card-title">{product.cusName}</h5>
                    <div className="row">
                      <div className="col-6">Customer Name: <b className="text-danger">{product.cusName}</b></div>
                      <div className="col-6">Phone Number: <b className="text-danger">{product.phoneNumber}</b></div>
                      <div className="col-6">Address: <b className="text-danger">{product.address}</b></div>
                      {console.log(product.details[2].cost)}
                      {product.details.reduce((total, currentValue) => total = total + currentValue.prix,0)}

                      
                      <>
                        <p>{product.details.reduce((total,currentValue) => total = total + currentValue.prix ,0)}</p>
                      </>
                    </div>        
                  </div>
                </div>
              ))}
            </div>
            </div> */}
          </div>
          
        )
  }
}