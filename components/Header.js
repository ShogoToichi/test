import React, { Component } from "react";

class Header extends Component {

  render(){
    return(<header>
      <div>{this.props.header}</div>
      <h1>{this.props.header}</h1>
    </header>);
  }
}

export default Header;