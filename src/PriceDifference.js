import React, { Component } from 'react';
import ShowArrow from './ShowArrow'

class PriceDifference extends Component {
  constructor(props){
    super(props)
    this.state = {priceChange: "", initialize: true, color: "black"}
  }//constructor

  showArrow = ()=>{
    // let arrow = null;
    let arrow = "null";
    if(this.state.color === "green"){arrow =      '<span><i className="fas fa-arrow-alt-circle-up"></i></span>'}
    else if(this.state.color === "red")  {arrow = '<span><i className="fas fa-arrow-alt-circle-down"></i></span>'}
    // else {arrow = null} //if arrow black
    else {arrow = "null"} //if arrow black
    console.log("arrow:" + arrow);
    return arrow
  }

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
        // {this.state.color === "green" ? <i className="fas fa-arrow-alt-circle-up"></i>  : <i className="fas fa-arrow-alt-circle-down"></i>}
  render(){
    return(
      <h3 className="text-center">
        {this.state.initialize  ? null :  <span className={this.state.color}>change: {this.state.priceChange} <ShowArrow color={this.state.color}/></span> }

      </h3>
    )
  }
}//class
export default PriceDifference
