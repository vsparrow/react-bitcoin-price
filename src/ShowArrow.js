import React, { Component } from 'react';

class ShowArrow extends Component {
  constructor(props){
    super(props)
    this.state = {arrow: "fas fa-text-height"}
  }//constructor

  componentWillReceiveProps(nextProps) {
    // '<span><i className="fas fa-arrow-alt-circle-up"></i></span>'}
    // '<span><i className="fas fa-arrow-alt-circle-down"></i></span>
    console.log("nextProps" + nextProps);
    console.log(nextProps);
    console.log("this.props" + this.props);
    console.log(this.props);
    console.log("state");
    console.log(this.state);
    //
    // let newFontIcon =  "???????????????"
    // // if (nextProps == "green"){newFontIcon =  "fa fa-arrow-alt-circle-up"}
    // if (nextProps.color === "green"){ this.setState({arrow: "fas fa-arrow-alt-circle-up"}) }
    // // else if (nextProps === "red"){newFontIcon =  `"fas fa-arrow-alt-circle-down"`}
    // // else if (nextProps =="red"){newFontIcon =  "fa fa-arrow-alt-circle-down"}
    // if (nextProps.color === "red"){ this.setState({arrow: "fas fa-arrow-alt-circle-down"}) }
    // else {this.setState({arrow: "fas fa-text-height"}) }

    // console.log(newFontIcon); //just added this, cause errors? Yes it does!!!!!!!!!
    // this.setState({arrow: newFontIcon})
    // console.log(classu);
    // console.log(this.props);
    // return classu

  }
  render(){
          // this.arrow
    return(
      <span>
      <i className={this.props.color === "green" ? 'fas fa-arrow-alt-circle-up' : 'fas fa-arrow-alt-circle-down'}></i>
      </span>
    )
  }
}//class
export default ShowArrow
