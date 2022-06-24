import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import FilterRes from './FilterRes';
import Cardd from './card';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: '',
      nameFood: '',
      image: '',
      option: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
     this.onHandlerChange = this.onHandlerChange.bind(this);
  }
  componentDidMount() {

    axios.get('http://localhost:3000/dataProduct').then(res => {
      this.setState({ products: res.data });
    })
  };
  // searchByName() {
      
  // }


  onHandlerChange(event){
    this.setState({
      option: event.target.value
    }
   
    );
    console.log(this.state)
  }
  render() {
    return (
      <>
      <section className="food-area section-padding">
        <div className='container-fluid content'>

          <div className='left'>
            <FilterRes option={this.state.option}
              change = {this.onHandlerChange}
            />
            {/* <div className='res'>
              <h4>Lựa chọn nhà hàng</h4>
              <form className='optionRes'>
                <span><input name="dori" type="radio" value="NH Dori" /> NH Dori</span>
                <span><input name="hongHanh" type="radio" value="NH Hồng Hạnh" /> NH Hồng Hạnh</span>
                <span><input name="phuongNam" type="radio" value="NH Phương Nam" /> NH Phương Nam</span>
              </form> */}
            {/* </div> */}
            {/* <div className='res'>
              <h4>Lựa chọn giá</h4>
              <form className='optionRes'>
                <span><input name="10-15" type="radio" value="10-15" /> 10-15</span>
                <span><input name="15-20" type="radio" value="15-20" /> 15-20</span>
                <span><input name="{'>'}20" type="radio" value="{'>'}20" /> {'>'}20</span>
              </form>
            </div> */}
          </div>
          <div className="right">
            <div className="row">
              <div className="col-md-5">
                <div className="section-top">
                  <h3><span className="style-change">we serve</span> <br />delicious food</h3>
                  <p className="pt-3">They're fill divide i their yielding our after have him fish on there for greater man moveth, moved Won't together isn't for fly divide mids fish firmament on net.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* this.state.products.filter(item=>item.nameRes === this.option).map(item=>console.log(item)); */}
              {this.state.option !== "" ? this.state.products.filter(item=>item.nameRes === this.state.option).map((product, index)=> (
                  //   <div className="col-md-4 col-sm-6">
                  //   <div className="single-food">
                  //     <div className="food-img">
                  //       <img src={product.image} className="img-fluid" alt="" />
                  //     </div>
                  //     <div className="food-content">
                  //       <div className="d-flex justify-content-between">
                  //         <h5>{product.nameFood}</h5>
                  //         <span className="style-change">{product.price}</span>
                  //       </div>
                  //       <p className="pt-3">{product.nameFood}</p>
                  //     </div>
                  //   </div>
                  // </div>
                  <Cardd key={index} id={product.id} nameFood={product.nameFood} image={product.image} price={product.price}></Cardd>
              )):
               this.state.products.map((product, index) => (
                // <div className="col-md-4 col-sm-6">
                //   <div className="single-food">
                //     <div className="food-img">
                //       <img src={product.image} className="img-fluid" alt="" />
                //     </div>
                //     <div className="food-content">
                //       <div className="d-flex justify-content-between">
                //         <h5>{product.nameFood}</h5>
                //         <span className="style-change">{product.price}</span>
                //       </div>
                //       <p className="pt-3">{product.nameFood}</p>
                //     </div>
                //   </div>
                // </div>
                <Cardd key={index} id={product.id} nameFood={product.nameFood} image={product.image} price={product.price}></Cardd>
              ))
              }
              {
               }
            </div>
          </div>
        </div>
      </section></>

    );
  }
}
export default List;