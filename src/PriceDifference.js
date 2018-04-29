import React, { Component } from 'react';

class PriceDifference extends Component {
  constructor(props){
    super(props)
  //   // this.state = {price: "", currency: "", timeUpdated: "", priceChange: ""}
  this.state = {priceChange: "", initialize: true, color: "black"}
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
      let color = "black"
      // console.log(prevState);
      console.log("Price change: "+ oldpriceChange);
      console.log("Price change level 4: "+ oldpriceChange.toFixed(4));
      // oldpriceChange = oldpriceChange.toFixed(4)

      if(oldpriceChange.toFixed(4) === 0.0000){ color = "black"}
      else if (oldpriceChange.toFixed(4) > 0.0000) { color = "green"}
      else if (oldpriceChange.toFixed(4) < 0.0000) { color = "red"}

      if(this.state.priceChange !== ""){this.setState({initialize: false})} //see if this is first display, then there is no price difference. no diff.
      this.setState({priceChange: oldpriceChange.toFixed(4), color: color})

  }
  render(){


    return(
      <h3 className="text-center">
        {this.state.initialize  ? null :  <span className={this.state.color}>change: {this.state.priceChange}</span> }
      </h3>
    )
  }
}//class
export default PriceDifference
