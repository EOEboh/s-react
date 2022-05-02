
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
    border: 'none',
    textTransform: 'uppercase',
    width: '14rem',
    padding: '1rem',
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '2rem',
    marginRight: '1rem',
    cursor:'pointer',
}
export default ButtonFill;
