import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { hideModal, showModal } from "../../features/modalSlice";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ButtonFill from "../ui/Buttons/ButtonFill";
import Modal from "../ui/Modal";
import NotificationTitle from "../ui/NotificationTitle";
import ProductAttributes from "./ProductAttributes";
import ProductPrice from "./ProductPrice";

class ProductContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      items: []
    };
  }

  componentDidUpdate() {
    const { isOpen } = this.state;

    setTimeout(() => {
      if (isOpen) {
        document.addEventListener("click", this.close);
      } else {
        document.removeEventListener("click", this.close);
      }
    }, 0);
  }

  close = () => {
    this.setState({
      isOpen: false
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

  handleAddToCart = (productToCart) => {
    const { product, addToCart, showModal } = this.props;

    if (product.attributes.length > this.state.items.length) {
      this.setState({
        isOpen: true
      });
    } else {
      addToCart(productToCart);
      showModal();
    }
  };

  render() {
    const { showModal, currency } = this.props;

    const { id, name, brand, attributes, prices, description, gallery } =
      this.props.product;

    const { items, isOpen } = this.state;

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
      <div style={styles.content}>
        <h3 >{brand}</h3>
        <h3>{name}</h3>
        <ProductAttributes
          productDetailsAttr
          attributes={attributes}
          items={this.state.items}
          handleItemsSelect={this.handleItemsSelect}
        />
        <div style={styles.price}>
          <h5>Price:</h5>
          <ProductPrice
            currency={currency}
            prices={prices}
            
          />
        </div>
        <ButtonFill
          onClick={() => {
            this.handleAddToCart(productToCart);
          }}
        >
          Add To Cart
        </ButtonFill>
        <Modal isOpen={isOpen} showModal={showModal}>
          <NotificationTitle>Select all attributes</NotificationTitle>
        </Modal>
        <div>{ReactHtmlParser(description)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currency } = state.currency;
  const { visible } = state.modal;

  return {
    currency: currency,
    modal: visible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    showModal: () => dispatch(showModal()),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContent);

const styles = {
}