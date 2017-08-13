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
      break;
      case 2:
      $('.slide-1').stop().fadeOut();
      $('.slide-2').stop().fadeIn();
      $('.slide-3').stop().fadeOut();
      break;
      case 3:
      $('.slide-1').stop().fadeOut();
      $('.slide-2').stop().fadeOut();
      $('.slide-3').stop().fadeIn();
      break;
    }
  }


  render(){
    return (
      <div className='carousel-main'>

        <p onClick={()=>this.descendCarousel()} className="arrow">(---</p>

        <div className="slide-div">
          <img src="http://i.imgur.com/3M5Q7xD.png" alt="slide" className="slide-1 carousel-slide"/>
          <img src="http://i.imgur.com/RqKGtyg.png" alt="slide" className="slide-2 carousel-slide"/>
          <img src="http://i.imgur.com/KPSJaxo.png" alt="slide" className="slide-3 carousel-slide"/>
        </div>

        <p onClick={()=>this.ascendCarousel()} className="arrow">---)</p>

      </div>
    )
  }

}
