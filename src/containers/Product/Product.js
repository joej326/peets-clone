import React, { Component } from 'react';
import $ from 'jquery';

import './product.css';





export default class Product extends Component{

componentDidMount(){
  $('.product-main').on('mouseenter', function(){
    $(this).find('h3').css({background: '#8D6D05',border: 'unset'});
  });
  $('.product-main').on('mouseleave', function(){
    $(this).find('h3').css({background: 'unset', border: 'solid white 0.05vw'});
  });
}


  render(){
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.productData.background})`,
          width: this.props.productData.width,
          height: this.props.productData.height
        }}
        className='product-main'>

        <p className='product-type'>{this.props.productData.type}</p>
        <p className='product-title'>{this.props.productData.title}</p>
        <h3
          className='product-button'
          style={{width: this.props.productData.buttonWidth,marginLeft: this.props.productData.buttonMarginLeft}}
          >
          {this.props.productData.buttonWords}
        </h3>

      </div>
    )
  }

}
