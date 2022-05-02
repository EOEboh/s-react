import React, { PureComponent } from "react";
import ButtonAttributes from "./Buttons/ButtonAttributes";


class AttributesValue extends PureComponent {
  render() {
    const {
      itemValue,
      handleItemsSelect,
      onChange,
      attrName,
      attrType,
      disabled
    } = this.props;


    return (
      <>
        <div style={styles.value}> 
        <label
          htmlFor={itemValue + attrName}
          style={
            attrType === "swatch"
            ? {
              backgroundColor: itemValue
            }
            : {}
          }
        >
          <ButtonAttributes
            onChange={(e) => {
              onChange(e);
              handleItemsSelect(e, attrType);
            }}
            value={itemValue}
            name={attrName}
            id={itemValue + attrName}
            disabled={disabled}
          />
          {attrType === "swatch" ? "" : itemValue}
        </label>
        </div>
      </>
    );
  }
}

const styles = {
  value: {
    width: '63px',
    height: '45px',
    textAlign: 'center',
    border: 'none',
    backgroundColor: '',
    border: '1px solid',
    letterSpacing: '0.05em',
    color: 'black',
    fontWeight: 'bold',
    placeItems: 'center',
    cursor: 'pointer',
    marginBottom: '1rem',
    userSelect: 'none',
  
  }
}
export default AttributesValue;

