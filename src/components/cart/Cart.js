import React, { PureComponent } from "react";
import { connect } from "react-redux";
import NotificationTitle from "../ui/NotificationTitle";
import CartProduct from "./CartProduct";
import '../../App.css';

class Cart extends PureComponent {
  render() {
    const { cart = [], currency } = this.props;

    return (
      <section style={styles.cart}>
        <h1 style={styles.cartTitle}
          className='cart-title'>cart</h1>
        <div style={styles.cartProducts}>
          {cart.length === 0 ? (
            <NotificationTitle>Your cart is empty</NotificationTitle>
          ) : (
            cart.map((product) => (
              <CartProduct
                currency={currency}
                key={product.id}
                product={product}
              />
            ))
          )}
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
    position: 'absolute',
    color: ' #1D1F22',
    width: '84px',
    height: '40px',
    left: '100px',
    top: '160px',
    textTransform: 'uppercase',

  },
  cartProducts:{},

}

export default connect(mapStateToProps)(Cart);
