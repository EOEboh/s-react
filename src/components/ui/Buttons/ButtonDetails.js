
import React, { PureComponent } from "react";
import Button from "./Button";
import '../../../App.css';

class ButtonDetails extends PureComponent {
  render() {
    const { onClick, children } = this.props;

    

    return (
      <Button style={styles}
      className='button-cart'
       onClick={onClick}>
        {children}
      </Button>
    );
  }
}

const styles = {
  backgroundColor: '#5ECE7B',
  position: 'static',
    border: 'none',
    textTransform: 'uppercase',
    width: '292px',
    height: '52px',
    left: '0px',
    top: '0px',
    padding: '16px 16px',
    textAlign: 'center',
    color: '#FFFFFF',
    marginRight: '1rem',
    cursor:'pointer',
}
export default ButtonDetails;
