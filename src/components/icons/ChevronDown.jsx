import React, { PureComponent } from "react";

class ChevronDown extends PureComponent {
  render() {
    const { isListOpen } = this.props;
    return (
      <svg
        className={this.props.className}
        style={isListOpen ? {
          transform: 'rotate(180deg)',
      } : {
          alignSelf: 'center',
          transform: 'rotate(0deg)',
          transition: 'transform transition',
          color: 'black'}}
        width='12'
        height='8'
        viewBox='0 0 8 4'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 0.5L4 3.5L7 0.5'
          stroke='black'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  }
} 


export default ChevronDown;
