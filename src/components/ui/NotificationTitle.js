
import React, { PureComponent } from "react";

class NotificationTitle extends PureComponent {
  render() {
    const { children, modal } = this.props;

    return (
    <h2 
      style={styles}
    className='notification-title'>
      {children}
    </h2>);
  }
}

const styles = {
  position: 'absolute',
  top: '10%',
  left: '70%',
  zIndex: 1,
  fontSize: 'small'
}
export default NotificationTitle;
