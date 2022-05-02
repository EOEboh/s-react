import React, { PureComponent } from "react";
import Button from "../ui/Buttons/Button";


export class LeftArrow extends PureComponent {
  render() {
    const { prevSlide } = this.props;

    return (
   
      <Button onClick={prevSlide} style={styles.prevBtn}>
        <svg
          width='45'
          height='14'
          viewBox='0 0 8 14'
          fill='black'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7 13L1 7L7 1'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Button>
      
    );
  }
}

export class RightArrow extends PureComponent {
  render() {
    const { nextSlide } = this.props;

    return (
      <Button onClick={nextSlide} style={styles.nextBtn}>
        <svg
          width='45'
          height='14'
          viewBox='0 0 8 14'
          fill='black'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 13L7 7L1 1'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Button>
      
    );
  }
}

const styles ={

  prevBtn:{
    display: 'flex',
    flexDirection: null,
    justifyContent: null,
    alignItems: null,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: '1px solid #1D1F22',
    marginBottom: 'auto'
  },
  nextBtn:{
    display: 'flex',
    flexDirection: null,
    justifyContent: null,
    alignItems: null,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: '1px solid #1D1F22',
    
  }
}