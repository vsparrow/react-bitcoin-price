import React, { Component } from 'react';
import Price from './Price'
// import PriceDifference from './PriceDifference'

// import logo from './logo.svg';
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

                <hr className="my-4"/>
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
