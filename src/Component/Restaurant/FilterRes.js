import React, { Component } from 'react';
// import axios from 'axios';
class FilterRes extends Component {
    constructor(props) {
        super(props);
        this.state = {}
      } 
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
                            checked={this.props.optionName==="dori"}
                            onChange={this.props.change}
                            /> NH Dori
                            
                        </span>
                        <span>
                            <input
                             type="radio"
                            value="honghanh"
                            checked={this.props.optionName==="honghanh"}
                            onChange={this.props.change}
                             /> NH Hồng Hạnh
                            
                        </span>
                        <span>
                            <input
                            type="radio"
                            value="phuongnam" 
                            checked={this.props.optionName==="phuongnam"}
                            onChange={this.props.change}
                            /> NH Phương Nam
                        </span>
                        <span>
                            <input
                            type="radio"
                            value="" 
                            checked={this.props.optionName===""}
                            onChange={this.props.change}
                            /> Tất cả nhà hàng
                        </span>
                       
                    </form>
                </div>
            </div>
        );
    }
}

export default FilterRes;