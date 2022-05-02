
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { hideModal } from "../../features/modalSlice";
import ButtonFill from "../ui/Buttons/ButtonFill";
import Modal from "../ui/Modal";
import NotificationTitle from "../ui/NotificationTitle";

import CartModalProduct from "./CartModalProduct";
import'../../App.css';

class CartModal extends PureComponent {
  
  render() {
    const { hideModal, qty, cart, currency, modal } = this.props;

    const productPrice = cart.map((product) =>
      product.priceToCart.map((price) => ({
        ...price,
        currency: currency,
        amount: product.prices.filter((price) => price.currency === currency)
      }))
    );
    

    const finalPrice = productPrice.map((item) => item[0]);

    const totalAmount = cart.reduce((cartTotal, cartItem) => {
      const { quantity } = cartItem;

      const itemTotal = quantity * finalPrice[0];

      cartTotal += itemTotal;
      return cartTotal;
    }, 0);

   

    return (
      <Modal modal={modal} hideModal={hideModal}>
        {cart.length === 0 ? (
          <NotificationTitle modal>Your cart is empty</NotificationTitle>
        ) : (
          <>
            {" "}
            <h2 className='cart-modal-h2'>
              My Bag,{" "}
              <span>
                {qty} {qty === 1 ? 'item' : 'items'}
              </span>
            </h2>
            {cart.map((product) => (
              <CartModalProduct
                currency={currency}
                key={product.id}
                product={product}
              />
            ))}
            <div style={styles.total} className='cart-modal-total'>
              <h4 style={styles.totalTitle}>Total</h4>
              <p style={styles.totalAmount}>
                {currency.symbol}
                {parseFloat(totalAmount.toFixed(2))}
              </p>
            </div>
            <div style={styles.buttons} className='cart-modal-btns'>
              <button onClick={ () => hideModal()} link={"/cart"}
              style={styles.button}
              >
                VIEW BAG
              </button>
              <ButtonFill>
                check out
              </ButtonFill>
            </div>{" "}
          </>
        )}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  const { cart, cartTotalQuantity } = state.cart;
  const { visible } = state.modal.visible;

  return {
    qty: cartTotalQuantity,
    cart: cart,
    currency: state.currency,
    modal: visible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);

const styles = {
  total:{
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '4rem',
    marginTop: '4rem'
  },
  totalTitle:{
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '18px',
    color: '#1D1F22'
  },
  totalAmount:{
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '18px',
    color: '#1D1F22'
  },
  buttons:{
    margin: '2rem 2rem 2rem 0',
    
  },
  button:{
    background: '#FFFFFF',
border: '1px solid #1D1F22',
boxSizing: 'border-box',
padding: ' 1rem',
textAlign: 'center',
marginRight: '1rem',
fontWeight: 'bold'
  }
}