
import React, { PureComponent } from "react";

class NotificationTitle extends PureComponent {
  render() {
    const { children, modal } = this.props;

    return (<h2 
      style={modal ? {fontSize: 'small'} : {textAlign: 'center',
    marginBottom: '5px'}}
    className='notification-title'
    >
      {children}</h2>);
  }
}


export default NotificationTitle;
