import React, { Component } from 'react';

class ShowWhichArrow extends Component {
  constructor(props){
    super(props)
    // this.state = {arrow: "fas fa-text-height"}
  }//constructor
    // <span>{this.props.color}</span>
    // <span>ShowWhichArrow</span>
    // <span>{this.props.color==="green" ? "green" : "red"}</span>
render(){
  return(
    <span>{this.props.color==="green" ? <i className="fas fa-arrow-alt-circle-up"></i> : <i className="fas fa-arrow-alt-circle-down"></i>}</span>

  )
}

}//class
export default ShowWhichArrow
