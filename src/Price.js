import React, { Component } from 'react';
import PriceDifference from './PriceDifference'

class Price extends Component {
  constructor(props){
    super(props)
    this.state = {price: "", currency: "", timeUpdated: "", priceChange: ""}
  }//constructor

  componentDidMount(){
    this.fetchJson()                                    //initial call
    this.interval = setInterval(this.fetchJson, 30000); //call every 30 seconds
  }//componentDidMount

  componentWillUnmount(){
    clearInterval(this.interval);
  }//componentWillUnmount

  convertJson = (json)=>{
    this.setState({
      price: json.bpi.USD.rate,
      currency: json.bpi.USD.code,
      timeUpdated: json.time.updated
    }) //setState
    //add GBP //add EUR

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
        <PriceDifference price={this.state.price}/>
        {this.state.priceChange !== "" ? <PriceDifference /> : null}
        {this.state.priceChange}
        <p className="lead text-center">Updated at: {this.state.timeUpdated}</p>
        <hr class="my-4"/>
        <div class="text-center">*price updated every 30 seconds</div>
      </div>
    )//return
  }//render
}//class

export default Price
