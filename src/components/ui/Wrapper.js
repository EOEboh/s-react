
import React, { PureComponent } from "react";

class Wrapper extends PureComponent {
  render() {
    const { children } = this.props;

    return <div style={styles.wrapper}>{children}</div>;
  }
}

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '124rem',
    margin: '0 auto'
  }
  
}
export default Wrapper;
