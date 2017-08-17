import React, { Component } from 'react';
import $ from 'jquery';

import './footer.css';





export default class Footer extends Component{



  render(){
    return (
      <div className='footer-main'>

        <div className="footer-div">
          <p className="footer-line">Newsletter Sign-up</p>
          <p className="footer-line">My Account</p>
          <p className="footer-line">Customer Service</p>
          <p className="footer-line">Find Peet's</p>
          <p className="footer-line">At Peet's Stores</p>
          <p className="footer-line">Peet's Cards</p>
          <p className="footer-line">Peetnik Rewards</p>
        </div>

        <div className="footer-div">
          <h4 className="footer-line">SHOP</h4>
          <p className="footer-line">Peet's Cards</p>
          <p className="footer-line">Coffee</p>
          <p className="footer-line">Tea</p>
          <p className="footer-line">Gear</p>
          <p className="footer-line">Subscriptions</p>
          <p className="footer-line">Gifts & Goods</p>
          <p className="footer-line">Sale</p>
        </div>

        <div className="footer-div">
          <h4 className="footer-line">ABOUT US</h4>
          <p className="footer-line">Careers</p>
          <p className="footer-line">Our History</p>
          <p className="footer-line">Our People</p>
          <p className="footer-line">Social Responsibility</p>
          <p className="footer-line">Newsroom</p>
          <p className="footer-line">Company Info</p>
          <p className="footer-line">Contact Us</p>
        </div>

        <div className="footer-div">
          <h4 className="footer-line">FOR BUSINESS</h4>
          <p className="footer-line">Submit a Site</p>
          <p className="footer-line">Corporate Gifting</p>
          <p className="footer-line">Office Coffee</p>
          <p className="footer-line">Food Service</p>
        </div>

        <div className="footer-div">
          <h4 className="footer-line">JOIN US ON</h4>
          <p className="footer-line">Submit a Site</p>
          <p className="footer-line">Corporate Gifting</p>
          <p className="footer-line">Office Coffee</p>
          <p className="footer-line">Food Service</p>
        </div>

        <div className="footer-div">
          <div className="social-media-div">
            <img src="http://i.imgur.com/tDpg0Ft.png" alt="youtube" className="social-media"/>
            <p className="footer-line">YouTube</p>
          </div>
          <div className="social-media-div">
            <img src="http://i.imgur.com/QmhYqEk.png" alt="Twitter"/>
            <p className="footer-line">Twitter</p>
          </div>
          <div className="social-media-div">
            <img src="http://i.imgur.com/uwpr7R3.png" alt="facebook"/>
            <p className="footer-line">Facebook</p>
          </div>
          <div className="social-media-div">
            <img src="http://i.imgur.com/5jrjaxq.png" alt="instagram"/>
            <p className="footer-line">Instagram</p>
          </div>
        </div>

      </div>
    )
  }

}
