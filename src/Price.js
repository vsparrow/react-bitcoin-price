import React, { Component } from 'react';

class Price extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }//constructor
  componentDidMount(){
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    fetch(url)
    .then(res=>res.json())
    .then(json=>this.convertJson(json))
  }//componentDidMount
  convertJson = (json)=>{
    console.log(json);
    console.log(json.bpi.USD.rate);
    console.log(json.bpi.USD.code);
    console.log(json.time.updated);
    //add GBP
    //add EUR

  }//convertJson
  render(){
    return(
      <h1 className="display-4 text-center">Hello, Price!</h1>
    )//return
  }//render
}//class

export default Price
