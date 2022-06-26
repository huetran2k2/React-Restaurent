// import Item from 'antd/lib/list/Item';
import axios from "axios";
import React, { Fragment, Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import List from "../Restaurant/Menu";
import Bill from "./Bill";
import "./emptyCart.css";

// process.env.REACT_APP_NAME_VARIABLE=window.Item; (lấy dữ liệu all)
window.window.window.total = 0;
const URL_API = "https://61bec846b25c3a00173f4b70.mockapi.io/Bills";
const CART_KEY = "ShoppingCart";
export default class Card extends Component {
  shoppingCart = [];
  constructor(prop) {
    super(prop);
    this.state = {
      reload: false,
      cusName: "",
      phoneNumber: "",
      address: "",
      data: {},
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
  handleSubmit = () => {
    this.pushData();
    alert("Bạn đã đặt hàng thành công!");
    // const navigate = useNavigate();
    // navigate("/Bill", { state: { billId: this.state.data.id } });
  };
  // Push Data into JSON
  pushData = async () => {
    // console.log(cusInfor);
    // console.log(this.shoppingCart);
    const details = JSON.parse(localStorage.getItem(CART_KEY)).map((detail) => {
      return {
        id: detail.id,
        quantity: detail.quantity,
        cost: detail.price * detail.quantity,
      };
    });
    // console.log(details)
    const res = await axios.post(URL_API, {
      cusName: this.state.cusName,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      details,
    });
    this.setState({ data: res.data });
    console.log(res.data);
    localStorage.setItem(CART_KEY, "[]");
    // console.log(this.state);
  };
  cusNameChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  phoneChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  addressChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.shoppingCart);
    if (this.shoppingCart == "") {
      return (
        <div
          style={{
            width: "98%",
            margin: "0 auto",
            top: "150px",
            position: "relative",
          }}
        >
          <Link
            to="/Menu"
            style={{
              marginBottom: "20px",
              marginTop: "30px",
            }}
            role="button"
            className="btn btn-outline-success"
          >
            Quay lại giỏ hàng
          </Link>
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
            <div className="empty-cart">
              <svg
                viewBox="656 573 264 182"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  id="bg-line"
                  stroke="none"
                  fillOpacity="0.2"
                  fill="#FFE100"
                  fillRule="evenodd"
                  x={656}
                  y={624}
                  width={206}
                  height={38}
                  rx={19}
                />
                <rect
                  id="bg-line"
                  stroke="none"
                  fillOpacity="0.2"
                  fill="#FFE100"
                  fillRule="evenodd"
                  x={692}
                  y={665}
                  width={192}
                  height={29}
                  rx="14.5"
                />
                <rect
                  id="bg-line"
                  stroke="none"
                  fillOpacity="0.2"
                  fill="#FFE100"
                  fillRule="evenodd"
                  x={678}
                  y={696}
                  width={192}
                  height={33}
                  rx="16.5"
                />
                <g
                  id="shopping-bag"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                  transform="translate(721.000000, 630.000000)"
                >
                  <polygon
                    id="Fill-10"
                    fill="#FFA800"
                    points="4 29 120 29 120 0 4 0"
                  />
                  <polygon
                    id="Fill-14"
                    fill="#FFE100"
                    points="120 29 120 0 115.75 0 103 12.4285714 115.75 29"
                  />
                  <polygon
                    id="Fill-15"
                    fill="#FFE100"
                    points="4 29 4 0 8.25 0 21 12.4285714 8.25 29"
                  />
                  <polygon
                    id="Fill-33"
                    fill="#FFA800"
                    points="110 112 121.573723 109.059187 122 29 110 29"
                  />
                  <polygon
                    id="Fill-35"
                    fillOpacity="0.5"
                    fill="#FFFFFF"
                    points="2 107.846154 10 112 10 31 2 31"
                  />
                  <path
                    d="M107.709596,112 L15.2883462,112 C11.2635,112 8,108.70905 8,104.648275 L8,29 L115,29 L115,104.648275 C115,108.70905 111.7365,112 107.709596,112"
                    id="Fill-36"
                    fill="#FFE100"
                  />
                  <path
                    d="M122,97.4615385 L122,104.230231 C122,108.521154 118.534483,112 114.257931,112 L9.74206897,112 C5.46551724,112 2,108.521154 2,104.230231 L2,58"
                    id="Stroke-4916"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <polyline
                    id="Stroke-4917"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="2 41.5 2 29 122 29 122 79"
                  />
                  <path
                    d="M4,50 C4,51.104 3.104,52 2,52 C0.896,52 0,51.104 0,50 C0,48.896 0.896,48 2,48 C3.104,48 4,48.896 4,50"
                    id="Fill-4918"
                    fill="#000000"
                  />
                  <path
                    d="M122,87 L122,89"
                    id="Stroke-4919"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <polygon
                    id="Stroke-4922"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="4 29 120 29 120 0 4 0"
                  />
                  <path
                    d="M87,46 L87,58.3333333 C87,71.9 75.75,83 62,83 L62,83 C48.25,83 37,71.9 37,58.3333333 L37,46"
                    id="Stroke-4923"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M31,45 C31,41.686 33.686,39 37,39 C40.314,39 43,41.686 43,45"
                    id="Stroke-4924"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M81,45 C81,41.686 83.686,39 87,39 C90.314,39 93,41.686 93,45"
                    id="Stroke-4925"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M8,0 L20,12"
                    id="Stroke-4928"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M20,12 L8,29"
                    id="Stroke-4929"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M20,12 L20,29"
                    id="Stroke-4930"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M115,0 L103,12"
                    id="Stroke-4931"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M103,12 L115,29"
                    id="Stroke-4932"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                  <path
                    d="M103,12 L103,29"
                    id="Stroke-4933"
                    stroke="#000000"
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                </g>
                <g
                  id="glow"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                  transform="translate(768.000000, 615.000000)"
                >
                  <rect
                    id="Rectangle-2"
                    fill="#000000"
                    x={14}
                    y={0}
                    width={2}
                    height={9}
                    rx={1}
                  />
                  <rect
                    fill="#000000"
                    transform="translate(7.601883, 6.142354) rotate(-12.000000) translate(-7.601883, -6.142354) "
                    x="6.60188267"
                    y="3.14235449"
                    width={2}
                    height={6}
                    rx={1}
                  />
                  <rect
                    fill="#000000"
                    transform="translate(1.540235, 7.782080) rotate(-25.000000) translate(-1.540235, -7.782080) "
                    x="0.54023518"
                    y="6.28207994"
                    width={2}
                    height={3}
                    rx={1}
                  />
                  <rect
                    fill="#000000"
                    transform="translate(29.540235, 7.782080) scale(-1, 1) rotate(-25.000000) translate(-29.540235, -7.782080) "
                    x="28.5402352"
                    y="6.28207994"
                    width={2}
                    height={3}
                    rx={1}
                  />
                  <rect
                    fill="#000000"
                    transform="translate(22.601883, 6.142354) scale(-1, 1) rotate(-12.000000) translate(-22.601883, -6.142354) "
                    x="21.6018827"
                    y="3.14235449"
                    width={2}
                    height={6}
                    rx={1}
                  />
                </g>
                <polygon
                  id="plus"
                  stroke="none"
                  fill="#7DBFEB"
                  fillRule="evenodd"
                  points="689.681239 597.614697 689.681239 596 690.771974 596 690.771974 597.614697 692.408077 597.614697 692.408077 598.691161 690.771974 598.691161 690.771974 600.350404 689.681239 600.350404 689.681239 598.691161 688 598.691161 688 597.614697"
                />
                <polygon
                  id="plus"
                  stroke="none"
                  fill="#EEE332"
                  fillRule="evenodd"
                  points="913.288398 701.226961 913.288398 699 914.773039 699 914.773039 701.226961 917 701.226961 917 702.711602 914.773039 702.711602 914.773039 705 913.288398 705 913.288398 702.711602 911 702.711602 911 701.226961"
                />
                <polygon
                  id="plus"
                  stroke="none"
                  fill="#FFA800"
                  fillRule="evenodd"
                  points="662.288398 736.226961 662.288398 734 663.773039 734 663.773039 736.226961 666 736.226961 666 737.711602 663.773039 737.711602 663.773039 740 662.288398 740 662.288398 737.711602 660 737.711602 660 736.226961"
                />
                <circle
                  id="oval"
                  stroke="none"
                  fill="#A5D6D3"
                  fillRule="evenodd"
                  cx="699.5"
                  cy="579.5"
                  r="1.5"
                />
                <circle
                  id="oval"
                  stroke="none"
                  fill="#CFC94E"
                  fillRule="evenodd"
                  cx="712.5"
                  cy="617.5"
                  r="1.5"
                />
                <circle
                  id="oval"
                  stroke="none"
                  fill="#8CC8C8"
                  fillRule="evenodd"
                  cx="692.5"
                  cy="738.5"
                  r="1.5"
                />
                <circle
                  id="oval"
                  stroke="none"
                  fill="#3EC08D"
                  fillRule="evenodd"
                  cx="884.5"
                  cy="657.5"
                  r="1.5"
                />
                <circle
                  id="oval"
                  stroke="none"
                  fill="#66739F"
                  fillRule="evenodd"
                  cx="918.5"
                  cy="681.5"
                  r="1.5"
                />
                <circle
                  id="oval"
                  stroke="none"
                  fill="#C48C47"
                  fillRule="evenodd"
                  cx="903.5"
                  cy="723.5"
                  r="1.5"
                />
                <circle
                  id="oval"
                  stroke="none"
                  fill="#A24C65"
                  fillRule="evenodd"
                  cx="760.5"
                  cy="587.5"
                  r="1.5"
                />
                <circle
                  id="oval"
                  stroke="#66739F"
                  strokeWidth={2}
                  fill="none"
                  cx={745}
                  cy={603}
                  r={3}
                />
                <circle
                  id="oval"
                  stroke="#EFB549"
                  strokeWidth={2}
                  fill="none"
                  cx={716}
                  cy={597}
                  r={3}
                />
                <circle
                  id="oval"
                  stroke="#FFE100"
                  strokeWidth={2}
                  fill="none"
                  cx={681}
                  cy={751}
                  r={3}
                />
                <circle
                  id="oval"
                  stroke="#3CBC83"
                  strokeWidth={2}
                  fill="none"
                  cx={896}
                  cy={680}
                  r={3}
                />
                <polygon
                  id="diamond"
                  stroke="#C46F82"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="886 705 889 708 886 711 883 708"
                />
                <path
                  d="M736,577 C737.65825,577 739,578.34175 739,580 C739,578.34175 740.34175,577 742,577 C740.34175,577 739,575.65825 739,574 C739,575.65825 737.65825,577 736,577 Z"
                  id="bubble-rounded"
                  stroke="#3CBC83"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <h6>Giỏ hàng rỗng!</h6>
            </div>
          </Fragment>
        </div>
      );
    } else {
      return (
        <div
          style={{
            width: "98%",
            margin: "0 auto",
            top: "150px",
            position: "relative",
          }}
        >
          <Link
            to="/Menu"
            style={{
              marginBottom: "20px",
              marginTop: "30px",
            }}
            role="button"
            className="btn btn-outline-success"
          >
            Quay lại giỏ hàng
          </Link>
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
                            style={{
                              width: "150px",
                              height: "150px",
                              objectFit: "cover",
                            }}
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
            <span
              style={{
                display: "flex",
                justifyContent: "end",
                gap: "50px",
                paddingRight: "100px",
              }}
            >
              <Link
                to="/Menu"
                style={{
                  marginBottom: "20px",
                  marginTop: "30px",
                }}
                role="button"
                className="btn btn-outline-success"
              >
                Tiếp tục mua hàng
              </Link>

              <Link
                to="/Menu"
                role="button"
                className="btn btn-outline-success"
                onClick={() => {
                  this.handleSubmit();
                }}
                style={{
                  marginBottom: "20px",
                  marginTop: "30px",
                }}
              >
                Check out
              </Link>
              {/* <Routes>
                <Route path="/Menu" element={<List />} />
                <Route path="/Bill" element={<Bill />} />
              </Routes> */}
            </span>
          </Fragment>

          <div className="container">
            <h1 className="text-dark">Thông tin khách hàng</h1>
            <form>
              <div className="form-group">
                <label htmlFor="cusName">Customer Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="cusName"
                  name="cusName"
                  onChange={this.cusNameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Phone number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNum"
                  name="phoneNumber"
                  onChange={this.phoneChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNum"
                  name="address"
                  onChange={this.addressChange}
                />
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}
