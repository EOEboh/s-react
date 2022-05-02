
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";




class Button extends PureComponent {
  render() {
    const {
      className,
      link,
      children,
      style,
      onClick,
      id,
      value,
      tabIndex,
      name
    } = this.props;

    
    
    // const buttonClasses = clsx(
    //   {
    //     [classes.btn]: true
    //   },
    //   className
    // );
    

    if (link) {
      
      return (
        <Link className={className} onClick={onClick} to={link}>
          {children} 
        </Link>
      );
    }

    return (
      <button
        value={value}
        style={style}
        className={''}
        onClick={onClick}
        id={id}
        tabIndex={tabIndex}
        name={name}
      >
        {children}
      </button>
      
    );
  }
}

export default Button;
