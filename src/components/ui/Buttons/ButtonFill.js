
import React, { PureComponent } from "react";
import Button from "./Button";


class ButtonFill extends PureComponent {
  render() {
    const { onClick, children, small } = this.props;

    

    return (
      <Button style={styles}
       onClick={onClick}>
        {children}
      </Button>
    );
  }
}

const styles = {
  backgroundColor: '#5ECE7B',
    border: '1px solid',
    textTransform: 'uppercase',
    width: '14rem',
    padding: '1rem',
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: '1rem',
    cursor:'pointer',
}
export default ButtonFill;
