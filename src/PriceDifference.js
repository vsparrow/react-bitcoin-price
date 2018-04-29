import React, { Component } from 'react';

class PriceDifference extends Component {
  constructor(props){
    super(props)
  //   // this.state = {price: "", currency: "", timeUpdated: "", priceChange: ""}
  this.state = {priceChange: ""}
  }//constructor

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   audienceIncreasing: nextProps.numAudienceMembers > this.props.numAudienceMembers,
    //   audienceDecreasing: nextProps.numAudienceMembers < this.props.numAudienceMembers
    // })
      console.log("PROPS FROM PriceDifference");
      console.log(this.props);
      console.log("next props");
      console.log(nextProps);
      let oldpriceChange = Number(nextProps.price.replace(/,/g, '')) - Number(this.props.price.replace(/,/g, ''))
      // console.log(prevState);
      console.log("Price change: "+ oldpriceChange);
      console.log("Price change level 4: "+ oldpriceChange.toFixed(4));
      this.setState({priceChange: oldpriceChange.toFixed(4)})
  }
  render(){


    return(
      <h3 className="text-center">Change: {this.state.priceChange}</h3>
    )
  }
}//class
export default PriceDifference
