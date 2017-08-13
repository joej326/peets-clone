import React, { Component } from 'react';

import './taskbar.css';





export default class Taskbar extends Component{


  render(){
    return (
      <div className='taskbar-main'>
        <div className="peets-logo-div">
          <img src="http://i.imgur.com/bHXEgdp.png" alt="" className="peets-logo"/>
        </div>
        <div className="taskbar-navigation">
          <div className="nav-top">
            <img className="find-peets" src="http://i.imgur.com/NyinCzI.png" alt="" />
            <div className="sign-in-and-cart">
              <p>Sign in or register⌄</p>
              <p><span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>⌄</p>
            </div>
          </div>
          <div className="nav-bottom">
            <ul className="nav-list-items">
              <li className="nav-list-item">CRAFT</li>
              <li className="nav-list-item">COFFEE</li>
              <li className="nav-list-item">TEA</li>
              <li className="nav-list-item">GEAR</li>
              <li className="nav-list-item">COLD BREW</li>
              <li className="nav-list-item">SUBSCRIPTIONS</li>
              <li className="nav-list-item">GIFTS</li>
              <li className="nav-list-item">COFFEEBARS</li>
            </ul>
            <div className="input-and-magnify-glass">
              <input placeholder='SEARCH' type="text" className="search-input" />
              <img src="http://i.imgur.com/QgVEJtb.png" alt="" className="magnify-glass"/>
            </div>

          </div>
        </div>
      </div>
    )
  }

}
