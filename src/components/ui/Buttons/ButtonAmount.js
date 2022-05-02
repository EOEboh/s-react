
import React, { PureComponent } from "react";
import Button from "./Button";


class ButtonAmount extends PureComponent {
  render() {
    const { onClick, children, plus, minus, modal } = this.props;

    return (
      <Button onClick={onClick}
        style={plus ? {plusStyles} : minus ? {minusStyles} : modal ? {modalStyles} : {constantStyles} }>
        {children}
      </Button>
    );
  }
}

const constantStyles ={
  width: '4.5rem',
    height: '4.5rem',
    backgroundColor: 'transparent',
    border: '1px solid black',
    position: 'relative'
}

const plusStyles = {  
      '&::before':{
        content: "",
        display: 'block',
        backgroundColor: 'black',
        transform: 'translate(-50%, -50%)'
      },
      '&::after': {
        content: "",
        display: 'block',
        backgroundColor: 'black',
        transform: 'translate(-50%, -50%)'
      },
  
      '&::before': {
        height: '1.5rem',
        width: '1px',
      },
  
      '&::after': {
        height: '1px',
        width: '1.5rem'
      }
    
  }
  
    const minusStyles = {
      '&::after': {
        content: "",
        display: 'block',
        backgroundColor: '',
        transform: 'translate(-50%, -50%)',
      },
  
      '&::after': {
        height: '1px',
        width: '1.5rem'
      }
    }
  
    const modalStyles = {
      width: '2.4rem',
      height: '2.4rem',
  
      '&::before': {
        height: '0.8rem',
        width: '0.5px'
      },
  
      '&::after': {
        width: '0.8rem',
        height: '0.5px'
      }
    }
  


export default ButtonAmount;
