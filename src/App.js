import React, { Component } from 'react';
import Price from './Price'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container ">
          <div className="row align-items-center h-100">
            <div className="col ">
              <div className="jumbotron ">
                <Price/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
