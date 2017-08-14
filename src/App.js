import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Taskbar from './containers/Taskbar/Taskbar';
import Carousel from './containers/Carousel/Carousel';
import ProductContainer from './containers/ProductContainer/ProductContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Taskbar />
        <Carousel />
        <ProductContainer />
      </div>
    );
  }
}

export default App;
