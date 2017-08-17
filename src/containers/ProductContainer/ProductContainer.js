import React, { Component } from 'react';
import $ from 'jquery';

import Product from './../Product/Product';
import './productContainer.css';





export default class ProductContainer extends Component{



  render(){
    return (
      <div className='product-container-main'>
        <div className="product-row">
          <Product
            productData={{
              background: 'http://i.imgur.com/611e7G5.jpg',
              type: 'Online Exclusive',
              title: ['Cafflano', <br />, 'Portable Brewers'],
              width: '30vw',
              height: '25vw',
              buttonWords: 'SHOP NOW',
              buttonWidth: '10vw'
            }}
           />
           <Product
             productData={{
               background: 'http://i.imgur.com/KhSmabM.jpg',
               type: 'Online Exclusive',
               title: ['Bodum Copper', <br />, 'Collection'],
               width: '30vw',
              height: '25vw',
              buttonWords: 'SHOP NOW',
              buttonWidth: '10vw'
             }}
            />
            <Product
              productData={{
                background: 'http://i.imgur.com/QRhVRxX.jpg',
                type: 'Online Exclusive',
                title: ['Kinto Cold', <br />, 'Brew Mugs'],
                width: '30vw',
                height: '25vw',
                buttonWords: 'SHOP NOW',
                buttonWidth: '10vw'
              }}
             />
        </div>

        <div className="product-row">
          <Product
            productData={{
              background: 'http://i.imgur.com/GBbEiO1.jpg',
              type: 'Limited Release',
              title: 'Las Hermanas',
              width: '30vw',
              height: '25vw',
              buttonWords: 'SHOP NOW',
              buttonWidth: '10vw'
            }}
           />
           <Product
             productData={{
               background: 'http://i.imgur.com/Cz676No.jpg',
               type: 'Signature Blend',
               title: 'Big Bang',
               width: '30vw',
              height: '25vw',
              buttonWords: 'SHOP NOW',
              buttonWidth: '10vw'
             }}
            />
            <Product
              productData={{
                background: 'http://i.imgur.com/EZAzkAg.jpg',
                type: 'Limited Release',
                title: ['Organic', <br />, 'Emerald Matcha'],
                width: '30vw',
                height: '25vw',
                buttonWords: 'SHOP NOW',
                buttonWidth: '10vw'
              }}
             />
        </div>

        <div className="product-row">
          <Product
            productData={{
              background: 'http://i.imgur.com/PKbM9zM.jpg',
              type: 'Limited Release',
              title: ['Explorer Series', <br />, 'Subscription'],
              width: '30vw',
              height: '25vw',
              buttonWords: 'SUBSCRIBE NOW',
              buttonWidth: '15vw',
              buttonMarginLeft: '4.5vw'
            }}
           />
           <Product
             productData={{
              background: 'http://i.imgur.com/2KgCy51.jpg',
              type: 'Signature Blend',
              title: 'Big Bang',
              width: '61vw',
              height: '25vw',
              buttonWords: 'SHOP NOW',
              buttonWidth: '10vw'
             }}
            />
        </div>

        <div className="product-row">
          <Product
            productData={{
              background: 'http://i.imgur.com/ExlQcJV.jpg',
              type: 'Get rewarded for your love of great coffee',
              title: 'PEETNIK REWARDS',
              width: '86vw',
              height: '13vw',
              buttonWords: 'LEARN MORE',
              buttonWidth: '13vw',
              buttonMarginLeft: '3.5vw'
            }}
           />
        </div>

        <div className="product-row">
          <Product
            productData={{
              background: 'http://i.imgur.com/ocfhzdR.jpg',
              type: 'eGift Cards',
              title: 'Now Available',
              width: '36.8vw',
              height: '25vw',
              buttonWords: 'LEARN MORE',
              buttonWidth: '13vw',
              buttonMarginLeft: '3.5vw'
            }}
           />
           <Product
             productData={{
               background: 'http://i.imgur.com/mkmcpkD.jpg',
               type: 'Explore',
               title: ['A New Cold Brew', <br />, 'Experience'],
               width: '75vw',
               height: '25vw',
               buttonWords: 'FIND A PEET\'S COFFEEBAR',
               buttonWidth: '13vw',
               buttonMarginLeft: '3.5vw'
             }}
            />
        </div>

      </div>
    )
  }

}
