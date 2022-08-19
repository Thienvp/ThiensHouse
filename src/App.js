import "../src/assets/css/main.css";
import "../src/assets/css/noscript.css"

import React, { Component } from 'react';
import "./assets/css/main.css";
import HomePage from "./Pages/HomePage/index";

class App extends Component {
  render() {
    return (
      <>
       <HomePage/>
      </>
    );
  }
}

export default App;
