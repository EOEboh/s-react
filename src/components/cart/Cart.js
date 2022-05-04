import React, { PureComponent } from "react";
import { connect } from "react-redux";
import NotificationTitle from "../ui/NotificationTitle";

import CartProduct from "./CartProduct";

class Cart extends PureComponent {
  render() {
    const { cart = [], currency } = this.props;

    return (
      <section style={styles.cart}>
        <h1 style={styles.cartTitle}>cart</h1>
        <div style={styles.cartProducts}>
          
            {cart.map((product) => (
              <CartProduct
                currency={currency}
                key={product.id}
                product={product}
              />
            ))}
          
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { cart } = state.cart;
  const { currency } = state.currency;

  return {
    cart: cart,
    currency: currency
  };
};

const styles = {
  cart:{},
  cartTitle:{
    textTransform: 'uppercase',
    color: ' #1D1F22',
    position: 'absolute',
    width: '84px',
    height: '40px',
    left: '100px',
    top: '160px',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '40px'

  },
  cartProducts:{},

}

export default connect(mapStateToProps)(Cart);
