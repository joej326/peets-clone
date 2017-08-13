import React, { Component } from 'react';
import $ from 'jquery';

import './carousel.css';





export default class Carousel extends Component{
  constructor(props){
    super(props);

    this.state ={
      slide: 1
    }
    this.ascendCarousel = this.ascendCarousel.bind( this );

  }
  componentDidMount(){
    this.autoSlide()
  }

  autoSlide(){
    // let slide = this.state.slide;

    setInterval(this.ascendCarousel, 4000);
  }

  ascendCarousel(){
    let slide = this.state.slide;
    if(slide == 3){
      slide = 0;
    }
    slide++;
    this.setState({
      slide: slide
    }, this.checkCarouselSlide);

  }

  descendCarousel(){
    let slide = this.state.slide;
    if(slide == 1){
      slide = 4;
    }
    slide--;
    this.setState({
      slide: slide
    }, this.checkCarouselSlide);

  }

  checkCarouselSlide(){
    switch(this.state.slide){
      case 1:
      $('.slide-1').stop().fadeIn();
      $('.slide-2').stop().fadeOut();
      $('.slide-3').stop().fadeOut();

      $('.circle-1').fadeTo(500,1);
      $('.circle-2').fadeTo(500,0.5);
      $('.circle-3').fadeTo(500,0.5);
      break;

      case 2:
      $('.slide-1').stop().fadeOut();
      $('.slide-2').stop().fadeIn();
      $('.slide-3').stop().fadeOut();

      $('.circle-1').fadeTo(500,0.5);
      $('.circle-2').fadeTo(500,1);
      $('.circle-3').fadeTo(500,0.5);
      break;

      case 3:
      $('.slide-1').stop().fadeOut();
      $('.slide-2').stop().fadeOut();
      $('.slide-3').stop().fadeIn();

      $('.circle-1').fadeTo(500,0.5);
      $('.circle-2').fadeTo(500,0.5);
      $('.circle-3').fadeTo(500,1);
      break;
    }
  }


  render(){
    return (
      <div className='carousel-main'>



        <div className="slide-div">

          <p onClick={()=>this.descendCarousel()} className="arrow left-arrow">〈</p>

          <img src="http://i.imgur.com/KPSJaxo.png" alt="slide" className="slide-1 carousel-slide"/>
          <div className="slide-words slide-1">
            <p className='slide-title'>KENYA KANGOCHO</p>
            <p className="slide-desc">This year’s most brilliant lot from Kenya’s famed auction,<br />
              fresh off its arrival from the port of Mombasa.
            </p>
          </div>

          <img src="http://i.imgur.com/3M5Q7xD.png" alt="slide" className="slide-2 carousel-slide"/>
          <div className="slide-words slide-2">
            <p className='slide-title'>BRAZIL PEABERRY</p>
            <p className="slide-desc">Experience that rare peaberry intensity the Brazilian way: in a bright, <br />
              nutty medium roast with brilliant sun-drenched sweetness.
            </p>
          </div>

          <img src="http://i.imgur.com/RqKGtyg.png" alt="slide" className="slide-3 carousel-slide"/>
          <div className="slide-words slide-3">
            <p className='slide-title'>PEETNIK REWARDS</p>
            <p className="slide-desc">Join Peetnik Rewards for free drinks, <br />
              great perks, and offers just for you.
            </p>
          </div>

          <p onClick={()=>this.ascendCarousel()} className="arrow right-arrow">〉</p>

          <div className="three-circles">
            <p className="slide-circle circle-1">●</p>
            <p className="slide-circle circle-2">●</p>
            <p className="slide-circle circle-3">●</p>
          </div>


        </div>



      </div>
    )
  }

}
