
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { decreaseQty, increaseQty } from "../../features/cartSlice";
import ImageSlider from "../slider/ImageSlider";
import ButtonAmount from "../ui/Buttons/ButtonAmount";


class CartModalProduct extends PureComponent {
  render() {
    const { product, increase, decrease, currency } = this.props;
    const { id, brand, name, gallery, quantity, priceToCart, items } = product;

    const productPrice = priceToCart.map((price) => ({
      ...price,
      currency: currency,
      amount: product.prices.filter((price) => price.currency === currency)
    }));

    // const totalAmount = productPrice[0].amount[0].amount * quantity;
    const totalAmount = productPrice[0];

    return (
      <div style={styles.product}>
        <div style={styles.productInfo}>
          <h2 style={styles.infoBrand}
           className='cart-modal-product-brand'>{brand}</h2>
          <h2 className="cart-modal-product-brand">{name}</h2>
          <h3 className="cart-modal-product-currency">
            {currency.symbol}
            {/* {parseFloat(totalAmount.toFixed(2))} */}
          </h3>
          <div style={styles.attributes}>
            {items.map((item) => {
              const { attrType, attrName, itemValue } = item;
              return (
                <div style={styles.attribute}>
                <div
                  key={itemValue + attrName}
                  className={''}
                  style={
                    attrType === "swatch"
                      ? {
                          backgroundColor: itemValue
                        }
                      : {}
                  }
                >
                  {attrType === "swatch" ? "" : itemValue}
                </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <ButtonAmount plus modal onClick={() => increase(id)} />
          <span>{quantity}</span>
          <ButtonAmount minus modal onClick={() => decrease(id)} />
        </div>
        <div style={styles.productImage}>
          {gallery.length > 1 ? (
            <ImageSlider gallery={gallery} />
          ) : (
            <img src={gallery[0]} alt={name} style={styles.img}/>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: (id) => dispatch(increaseQty(id)),
    decrease: (id) => dispatch(decreaseQty(id))
  };
};

export default connect(null, mapDispatchToProps)(CartModalProduct);

const styles = {
  product: {
    display: 'grid',
    gridTemplateColums: '1fr auto auto',
    marginBottom: '1rem'
  },
  productInfo:{
    justifySelf: 'start',
    alignSelf: 'flex-end'
  },
  infoBrand:{
    marginTop: '4rem',
    border: 'none'
  },
  attributes:{
    display: 'flex',
    columnGap: '0.8rem'
  },
  attribute:{
    width: '4.5rem',
    height: '2.4rem',
    border: '1px solid',
    backgroundColor: 'transparent',
    letterSpacing: '0.05em',
    color: '#292929',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    userSelect: 'none'
  },
  img:{
    width: '300%',
    height: '150%',
  },
  productImage:{
    width: '5rem',
    height: '7rem',
    margin: 'auto'
  }
}