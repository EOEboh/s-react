
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { hideModal } from "../../features/modalSlice";
import ButtonFill from "../ui/Buttons/ButtonFill";
import Modal from "../ui/Modal";
import NotificationTitle from "../ui/NotificationTitle";
import CartModalProduct from "./CartModalProduct";
import'../../App.css';
import ButtonCart from '../ui/Buttons/ButtonCart';

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
    

    const finalPrice = productPrice.map((item) => item[0]?.amount[0]);

    const totalAmount = cart.reduce((cartTotal, cartItem) => {
      const { quantity } = cartItem;

      const itemTotal = quantity * finalPrice[0]?.amount;

      cartTotal += itemTotal;
      return cartTotal;
    }, 0);

   

    return (
      <> 
       
      {cart.length === 0 ? (
        <NotificationTitle modal>Your cart is empty</NotificationTitle>
        ) : (
          <Modal modal={modal} hideModal={hideModal}>
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
              <ButtonCart onClick={ () => hideModal()} link={"/cart"}
              >
                view bag
              </ButtonCart>
              <ButtonFill
              onClick={ () => hideModal()} link={"/cart"}>
                CHECK OUT
              </ButtonFill>
            </div> 
        
            {" "}
          </>
          </Modal>
        )}
      
        </>
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

// CSS Styling
const styles = {
  total:{
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'static',
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
    display: 'flex'
  }
}