import React, { Component } from 'react';
import Price from './Price'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="jumbotron">
              <h1 className="display-4 text-center">Hello, world!</h1>
              <Price/>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4"/>
              <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
              <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
