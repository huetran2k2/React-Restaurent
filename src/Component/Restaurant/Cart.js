import React, { Component, Fragment } from 'react';
import "../css/style.css";


window.Item=[];
export default class Cart extends Component { 
  constructor(props){
    super(props)
    if(localStorage.getItem('ShoppingCart')){
      window.Item=JSON.parse(localStorage.getItem('ShoppingCart'))
    }
  }

Itemcard=()=>{
  var arr=({
    id: this.props.id,
    name: this.props.nameFood,
    quantity: 1,
    image: this.props.image,
    price: this.props.price,
  });
  this.Pushitemcard(arr);
}

  Pushitemcard=(arr)=>{
    var kt=0;
    var item_arr=arr;
    // console.log(item_arr.name)
    if(window.Item===''){
      window.Item.push(item_arr)
      this.pushLocal()
    }
    else{
      window.Item.map((item)=>{
      if(item.name===item_arr.name){
        item.quantity=item.quantity+1;
        kt=1;
        this.pushLocal()
      }
    })
    if(kt===0){
      window.Item.push(item_arr)
      this.pushLocal()
    }}     
  //  console.log(window.Item)
   }
   
   pushLocal=()=>{
    localStorage.setItem('ShoppingCart',JSON.stringify(window.Item));
      alert("You have added to cart!!");
  }


  render() {
      return (       
       <Fragment>
         <div className="col-lg-3 col-sm-6 mb-5">
                <div className="product text-center skel-loader">
                  <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" style={{ width: "250px",height:"250px",objectFit: "cover" }} src={[this.props.image]} alt="..." /></a>
                    <div className="product-overlay">
                      <ul className="mb-0 list-inline">
                      </ul>
                    </div>
                  </div>
                  <h6> <a className="reset-anchor" href="">{this.props.nameFood}</a></h6>
                  <h6 className="small text-muted">{this.props.price}đ</h6>
                  <button type="button" className="btn btnCart btn-sm btn-dark" onClick={()=>this.Itemcard()} >Add To Card</button>
                  <br></br>
                  <br></br>
                </div>
              </div>
       </Fragment>
      );
  }
}