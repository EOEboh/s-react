import React, { PureComponent } from "react";


import ButtonRound from "../ui/Buttons/ButtonRound";
import Button from "../ui/Buttons/Button";
import { connect } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { showModal } from "../../features/modalSlice";
import ProductPrice from "./ProductPrice";
import Modal from "../ui/Modal";
import ProductAttributes from "./ProductAttributes";
import NotificationTitle from "../ui/NotificationTitle";
import ButtonFill from "../ui/Buttons/ButtonFill";
import ButtonOutline from "../ui/Buttons/ButtonOutline";

class Product extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      items: []
    };
  }

  componentDidUpdate() {
    const { modalIsOpen } = this.state;

    setTimeout(() => {
      if (modalIsOpen) {
        document.addEventListener("click", this.close);
      } else {
        document.removeEventListener("click", this.close);
      }
    }, 0);
  }

  close = () => {
    this.setState({
      modalIsOpen: false,
      addModal: false
    });
  };

  handleItemsSelect = (e, attrType) => {
    const items = this.state.items;
    const name = e.target.name;
    const value = e.target.value;

    const newItem = {
      attrType: attrType,
      attrName: name,
      itemValue: value
    };

    this.setState({
      items: [...items, newItem].filter((item) => {
        if (item.attrName === name) {
          return item.itemValue === value;
        } else {
          return item;
        }
      })
    });
  };

  handleClick = (e, productToCart) => {
    const { product, addToCart, showModal } = this.props;
    e.stopPropagation();
    if (product.attributes.length > 0) {
      this.setState({
        modalIsOpen: true,
        addModal: true
      });
    } else {
      addToCart(productToCart);
      showModal();
    }
  };

  handleAddToCart = (productToCart) => {
    const { product, addToCart, showModal } = this.props;

    if (product.attributes.length > this.state.items.length) {
      this.setState({
        modalIsOpen: true
      });
    } else {
      addToCart(productToCart);
      showModal();
      this.setState({
        modalIsOpen: false,
        addModal: false
      });
    }
  };

  render() {
    const { currency } = this.props;

    const { id, gallery, name, prices, inStock, category, brand, attributes } =
      this.props.product;

    const { items, modalIsOpen, addModal } = this.state;

    const priceToCart = prices.filter((price) => price.currency === currency);

    const idToCart = items
      .map(
        (item) =>
          item.attrName.replace(/\s/g, "") + item.itemValue.replace(/\s/g, "")
      )
      .join("");

    const productToCart = Object.assign({
      id: id + idToCart,
      brand,
      name,
      prices,
      priceToCart,
      gallery,
      items
    });

    return (
      <div style={!inStock ? {
        color: 'light-grey',
        pointerEvents: 'none',
        opacity: '0.5',
        textTransform: 'uppercase'
        } : null}>
        <div style={styles.main}>
        <Button link={`${category}/${id}`}>
          <img src={gallery[0]} alt={name} style={styles.img}/>
        </Button>
        <ButtonRound
          styles={styles.round}
          onClick={(e) => this.handleClick(e, productToCart)}
        />
        </div>
        <div>
          <h3 className={''}>{name}</h3>
          <ProductPrice
            currency={currency}
            prices={prices}
          />
        </div>
        
        {!inStock && <h4>Out of stock</h4>}
        {addModal && (
          <Modal modalIsOpen={modalIsOpen}>
            <NotificationTitle><h4> Select attributes </h4> </NotificationTitle>
            <ProductAttributes
              productDetailsAttr
              attributes={attributes}
              items={this.state.items}
              handleItemsSelect={this.handleItemsSelect}
            />

            <div style={styles.buttons}>    
            <ButtonOutline
              onClick={() =>
                this.setState({
                  modalIsOpen: false,
                  addModal: false
                })
              }
            >
              Return
            </ButtonOutline>
            
            <div style={styles.add}> 
            <ButtonFill
              small
              onClick={() => {
                this.handleAddToCart(productToCart);
              }}
            >
              Add to cart
            </ButtonFill>
            </div>
           </div>
          </Modal>
        )}
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  const { currency } = state.currency;

  return {
    currency: currency
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    showModal: () => dispatch(showModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

const styles = {
    main:{
      position: 'relative'
    },
    img:{
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    
    round: {
          border: 'none',
          borderRadius: '50%',
          backgroundColor: '#5ECE7B',
          position: 'absolute',
          left: '67.49%',
          right: '10.61%',
          top: '74.91%',
          bottom: '4.15%',
          transform: 'scale(0.5)',
          // zIndex: 2,
          cursor: 'pointer',
          // '&:hover': {
          //   opacity: 1,
          //   border: '4px solid red',
          //   transform: 'scale(1)'
          // }
        },  
        buttons:{
          // padding: '0.5rem'
          display: 'flex',
          justifyContent: 'space-between'
          
        },
        return:{
          
        },
        add:{}
}


