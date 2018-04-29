import React, { Component } from 'react';

class PriceDifference extends Component {
  constructor(props){
    super(props)
    this.state = {priceChange: "", initialize: true, color: "black"}
  }//constructor

  componentWillReceiveProps(nextProps) {
      let oldpriceChange = Number(nextProps.price.replace(/,/g, '')) - Number(this.props.price.replace(/,/g, ''))
      let color = "black"

      if(oldpriceChange.toFixed(4) === 0.0000){ color = "black"}
      else if (oldpriceChange.toFixed(4) > 0.0000) { color = "green"}
      else if (oldpriceChange.toFixed(4) < 0.0000) { color = "red"}

      //see if this is first display, then there is no price difference. no diff.
      if(this.state.priceChange !== ""){this.setState({initialize: false})}
      this.setState({priceChange: oldpriceChange.toFixed(4), color: color})
  }

  render(){
    return(
      <h3 className="text-center">
        {this.state.initialize  ? null :  <span className={this.state.color}>change: {this.state.priceChange}</span> }
        {this.state.color === "green" ? <i class="fas fa-arrow-alt-circle-up"></i>  : <i class="fas fa-arrow-alt-circle-down"></i>}
      </h3>
    )
  }
}//class
export default PriceDifference
