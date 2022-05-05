import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../features/modalSlice";
import CartButton from "../icons/CartButton";
import Logo from '../icons/Logo';
import Button from "../ui/Buttons/Button";
import Categories from "../categories/Categories";
import Wrapper from "../ui/Wrapper";
import CurrencySwitch from "../currency/CurrencySwitch";
import '../../App.css';



class Navbar extends PureComponent {
  
  render() {
    const { qty, toggleModal } = this.props;

    return (
      <header style={styles.header} className='header'>
        <Wrapper >
          <div style={styles.container}> 
          <Categories />
          <div style={styles.logo}> 
            <Logo />
          </div>
          <div style={styles.actions}>
            <CurrencySwitch />
            <div style={styles.cart}>
              <Button
                onClick={() => toggleModal()}
                style={styles.cart["&btn"]}
              >   
                <CartButton />
              </Button>
              {qty > 0 && (<span style={styles.cart["&qty"]}>{qty}</span>)}
            </div>
          </div>
          </div>
        </Wrapper>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const { cartTotalQuantity } = state.cart;
  const { visible } = state.modal;

  return {
    qty: cartTotalQuantity,
    modal: visible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(toggleModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

const styles = {
  header: {
    height: '8rem',
    backgroundColor: 'white',
    zIndex: 200,
  },
  container:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  logo: {
    marginTop: '5px',
  },
  
  actions: {
    display: 'flex',
    columnGap: '10px',
    marginTop: '5px'
  },
  
  cart: {
    paddingTop: '0.2rem',
    position: 'relative',
    color: '#43464E',
    
    '&btn': {
      backgroundColor: 'transparent',
      border: 'none'
    },
  
    '&qty': {
      width: '2rem',
      height: '2rem',
      padding: '2px',
      borderRadius: '50%',
      color: 'white',
      backgroundColor: 'text',
      textAlign: 'center',
  
    }
  }
  
}