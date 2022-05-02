import React, { PureComponent } from "react";


class ButtonAttributes extends PureComponent {
  render() {
    const { style, name, value, onChange, disabled, id } = this.props;

    return (
      <input
        style={style}
        type='radio'
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        className={styles.button}
        disabled={disabled}
      />
    );
  }
}

const styles = {
  button: {
    position: 'absolute',
    appearance: 'none',
  
    '&:checked + label': {
      backgroundColor: 'black',
      color: 'white',
      border: 'solid 2px black'
    }
  }
}
export default ButtonAttributes;
