
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import '../../../App.css'


class ButtonCart extends PureComponent {
  render() {
    const {   onClick, children, link } = this.props;


    if (link) {
      return (
        <Link onClick={onClick} to={link} style={styles} className='button-cart'>
          {children}
        </Link>
      );
    }

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
    backgroundColor: 'transparent',
    border: '1px solid black',
    textTransform: 'uppercase',
    position: 'static',
    width: '120px',
    height: '43px',
    left: '0px',
    right: '0px',
    padding: '16px 16px',
    textAlign: 'center',
    color: '#1D1F22',
    marginRight: '1rem',
    cursor:'pointer',

  
}
export default ButtonCart;
