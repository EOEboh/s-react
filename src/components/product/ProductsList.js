import React, { PureComponent } from "react";


class ProductsList extends PureComponent {
  render() {
    return <div style={styles.products}>{this.props.children}</div>;
  }
}

const styles = {
  products:{
      display: 'grid',
          padding: '20pt',
          gridTemplateColumns: '2fr 1fr 1fr  ',  
          // gridTemplateRows: '10% 45% 35% 10%',
          gridColumnGap: '25px',
          gridRowGap: '20px'
  }
 
}
export default ProductsList;
