
import React, { PureComponent } from "react";

class ProductPrice extends PureComponent {
  render() {
    const { prices, currency } = this.props;

    return (
      <>
        {prices.map((price) =>
          price.currency === currency &&
         (
          <h5>
            {price.currency.symbol} {price.amount}
          </h5>
        ))}
      </>
    );
  }
}


export default ProductPrice;
