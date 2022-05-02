
import React, { PureComponent } from "react";

import Button from "../ui/Buttons/Button";

class CurrencyList extends PureComponent {
  render() {
    const { currencies, selectItem } = this.props;
  
    return (
      <div
        tabIndex={1}
        style={styles.list}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {currencies.map((currency) => (
          <Button
            onClick={(e) => {
              e.stopPropagation();
              selectItem(currency.symbol);
            }}
            key={currency}
            style={styles.list["&item"]}
          >
            <span style={styles.list["&item"].span}>{currency.symbol} {currency.label}</span>
          </Button>
        ))}
      </div>
    );
  }
}

const styles = {
  list: {
    border: 'none',
    position: 'absolute',
    width: '8rem',
    backgroundColor: '#ffffff',
    boxShadow: '',
    display: 'grid',
    gridGap: '0.5rem',
    padding: '',
    paddingRight: '1rem',
    paddingTop: '1rem',
    justifyItems: 'justify-start',

    '&item': {
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0.5rem',
    
    span: {
      display: 'flex',
      flexDirection: 'row',
        marginRight: '0.5rem'
      }
    }
  }
}
export default CurrencyList;
