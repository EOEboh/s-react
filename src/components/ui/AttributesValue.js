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
          {attrType === "swatch" ? "" : itemValue}
        </label>
        </div>
      </>
    );
  }
}

const styles = {
  value: {
    width: '50%',
    height: 'auto',
    // margin: 'auto',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: 'green',
    letterSpacing: '0.05em',
    color: 'black',
    fontWeight: 'bold',
    display: 'grid',
    gridTemplateColumns: 'auto',
    placeItems: 'center',
    cursor: 'pointer',
    marginBottom: '1rem',
    userSelect: 'none',
  
  }
}
export default AttributesValue;

