import React, { Component } from 'react';

class Price extends Component {
  constructor(props){
    super(props)
    this.state = {price: "", currency: "", timeUpdated: ""}
  }//constructor
  componentDidMount(){
    this.fetchJson()                                    //initial call
    this.interval = setInterval(this.fetchJson, 60000); //call every 60 seconds
  }//componentDidMount
  componentWillUnmount(){
    clearInterval(this.interval);
  }//componentWillUnmount
  convertJson = (json)=>{
    console.log(json);
    console.log(json.bpi.USD.rate);
    console.log(json.bpi.USD.code);
    console.log(json.time.updated);
    this.setState({price: json.bpi.USD.rate,
      currency: json.bpi.USD.code,
      timeUpdated: json.time.updated
    }) //setState

    //add GBP
    //add EUR

  }//convertJson
  fetchJson = ()=>{
    let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    fetch(url)
    .then(res=>res.json())
    .then(json=>this.convertJson(json))
  }
  render(){
    return(
      <div>
        <h1 className="display-4 text-center">Current Bitcoin Price:</h1>
        <h1 className="display-4 text-center">${this.state.price} {this.state.currency}</h1>
        <p className="lead text-center">Updated at: {this.state.timeUpdated}</p>

      </div>
    )//return
  }//render
}//class

export default Price
