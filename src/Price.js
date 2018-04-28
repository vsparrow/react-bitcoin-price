import React, { Component } from 'react';
import PriceDifference from './PriceDifference'

class Price extends Component {
  constructor(props){
    super(props)
    this.state = {price: "", currency: "", timeUpdated: "", priceChange: ""}
  }//constructor
  componentDidMount(){
    this.fetchJson()                                    //initial call
    this.interval = setInterval(this.fetchJson, 60000); //call every 60 seconds
  }//componentDidMount
  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.height !== this.props.height) {
    //   someChartLibrary.updateHeight(this.props.height);
    // }
    let priceChange = Number(this.state.price.replace(/,/g, '')) - Number(prevState.price.replace(/,/g, ''))
    console.log(prevState);
    console.log("Price change: "+ priceChange);
    console.log("Price change level 4: "+ priceChange.toFixed(4));
  }//componentDidUpdate
  componentWillUnmount(){
    clearInterval(this.interval);
  }//componentWillUnmount
  convertJson = (json)=>{
    console.log(json);
    console.log(json.bpi.USD.rate);
    console.log(json.bpi.USD.code);
    console.log(json.time.updated);
    this.setState({
      price: json.bpi.USD.rate,
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
        <PriceDifference />
        <p className="lead text-center">Updated at: {this.state.timeUpdated}</p>

      </div>
    )//return
  }//render
}//class

export default Price
