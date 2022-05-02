import React, { PureComponent } from "react";
import '../../../App.css';


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
        // className={styles.button}
        disabled={disabled}
        className= 'buttonattributes-radio'
      />
    
    );
  }
}


export default ButtonAttributes;
