
import React, { PureComponent } from "react";

import CartButton from "../../icons/CartButton";
// import Button from "./Button";


class ButtonRound extends PureComponent {
  render() {
   

    return (
      <button 
      style={this.props.styles}  
      onClick={this.props.onClick}>
        <CartButton />
      </button>
    );
  }
}

export default ButtonRound;
