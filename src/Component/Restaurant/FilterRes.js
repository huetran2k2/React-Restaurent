import React, { Component } from 'react';
// import axios from 'axios';
class FilterRes extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        // this.componentDidMount = this.componentDidMount.bind(this);
       
        // this.formSubmit = this.formSubmit.bind(this);
      }
    //   componentDidMount() {
    
    //     axios.get(' http://localhost:3006/dataProduct').then(res => {
    //       this.setState({ products: res.data });
    //     })
    //   }
     
      formSubmit(event){
        event.preventDefault(); 
      }
    render() {
        return (
            <div>
                <div className='res'>
                    <h4>Lựa chọn nhà hàng</h4>
                    <form className='optionRes' onSubmit={this.formSubmit}>
                        <span>
                            <input
                            type="radio"
                            value="dori" 
                            checked={this.props.option==="dori"}
                            onChange={this.props.change}
                            /> NH Dori
                            
                        </span>
                        <span>
                            <input
                             type="radio"
                            value="honghanh"
                            checked={this.props.option==="honghanh"}
                            onChange={this.props.change}
                             /> NH Hồng Hạnh
                            
                        </span>
                        <span>
                            <input
                            type="radio"
                            value="phuongnam" 
                            checked={this.props.option==="phuongnam"}
                            onChange={this.props.change}
                            /> NH Phương Nam
                        </span>
                        <span>
                            <input
                            type="radio"
                            value="" 
                            checked={this.props.option===""}
                            onChange={this.props.change}
                            /> Tất cả nhà hàng
                        </span>
                       
                    </form>
                </div>
                {/* <div className='res'>
                    <h4>Lựa chọn giá</h4>
                    <form className='optionPrice'>
                    <span>
                            <input
                            type="radio"
                            value="NH Dori" 
                            checked={this.state.selectOption==="dori"}
                            onChange={this.onHandlerChange}
                            /> NH Dori
                            
                        </span>
                        <span>
                            <input
                             type="radio"
                            value="NH Hồng Hạnh"
                            checked={this.state.selectOption==="honghanh"}
                            onChange={this.onHandlerChange}
                             /> NH Hồng Hạnh
                            
                        </span>
                        <span>
                            <input
                            type="radio"
                            value="NH Phương Nam" 
                            checked={this.state.selectOption==="phuongnam"}
                            onChange={this.onHandlerChange}
                            />NH Phương Nam
                        </span>
                        <span><input name="10-15" type="radio" value="10-15" /> 10-15</span>
                        <span><input name="15-20" type="radio" value="15-20" /> 15-20</span>
                        <span><input name="{'>'}20" type="radio" value="{'>'}20" /> {'>'}20</span>
                    </form>
                </div> */}
            </div>
        );
    }
}

export default FilterRes;