
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";


class ButtonOutline extends PureComponent {
  render() {
    const {   onClick, children, link } = this.props;


    if (link) {
      return (
        <Link onClick={onClick} to={link} className={''}>
          {children}
        </Link>
      );
    }

    return (
      <Button style={styles.outline}
      activeStyle={styles.outline["&:hover"]} onClick={onClick}>
        {children}
      </Button>
    );
  }
}

const styles = {
  outline: {
    backgroundColor: 'red',
    border: '1px solid',
    textTransform: 'uppercase',
    width: '14rem',
    padding: '0.5rem',
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginRight: '1rem',
    cursor:'pointer',
  }
  
}
export default ButtonOutline;
