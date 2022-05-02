
import React, { PureComponent } from "react";
import ChevronDown from "../icons/ChevronDown";
import Button from "../ui/Buttons/Button";


class CurrencyHeader extends PureComponent {
  render() {
    const { isListOpen, toggleList, currency } = this.props;


    return (
      <Button onClick={toggleList} style={styles.header}>
        <div style={styles.header}>
          <span style={styles.header.span}>{currency}</span>
          <ChevronDown isListOpen={isListOpen} />
        </div>
      </Button>
    );
  }
}

const styles = {
  header: {
    border: 'none',
    backgroundColor: 'transparent',
      span: {
        marginRight: '8px',
        color: '#1D1F22',
        fontSize: 'large'
      }
    
  },
  
}


export default CurrencyHeader;
