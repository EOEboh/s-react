
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { decreaseQty, increaseQty } from "../../features/cartSlice";
import ImageSlider from "../slider/ImageSlider";
import ButtonAmount from "../ui/Buttons/ButtonAmount";


class CartProduct extends PureComponent {
  render() {
    const { product, currency } = this.props;
    const { id, brand, name, priceToCart, gallery, quantity, items } = product;

    const productPrice = priceToCart.map((price) => ({
      ...price,
      currency: currency,
      amount: product.prices.filter((price) => price.currency === currency)
    }));

    // const totalAmount = productPrice[0].amount[0].amount * quantity;
    const totalAmount = productPrice[0]

    return (
      <div style={styles.product}>
        <div style={styles.productInfo}>
          <h2 style={styles.infoBrand}>{brand}</h2>
          <h2 style={styles.infoName}>{name}</h2>
          <h3 style={styles.infoPrice}>
            {currency.symbol}
            {/* {parseFloat(totalAmount.toFixed(2))} */}
          </h3>
          <div style={styles.productAttributes}>
            {items.length > 0 &&
              items.map((item) => {
                const { attrType, attrName, itemValue } = item;
                return (
                  <div key={attrName + itemValue}>
                    <div style={styles.value}>
                      <div
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
                  </div>
                );
              })}
          </div>
        </div>
        <div style={styles.productAmount}>  
        <div style={styles.productAmountPlus}>
          <ButtonAmount plus onClick={() => this.props.increase(id)} />
        </div>
          <span style={styles.productQty}>{quantity}</span>
        <div style={styles.productAmountMinus}> 
          <ButtonAmount minus onClick={() => this.props.decrease(id)} />
        </div>
        <div style={styles.productImg}>
          {gallery.length > 1 ? (
            <ImageSlider gallery={gallery} />
            ) : (
              <img src={gallery[0]} alt={name} />
              )}
        </div>
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


const styles = {
  product: {
    display: 'grid',
  gridTemplateColumns: '1fr auto auto',
  padding: '10px',
  borderTop: '1px solid light-grey' 
  },
  productInfo:{
    justifySelf: 'start'
  },
  infoBrand: {
    width: '292px',
    height: '27px',
    left: '101px',
    top: '280px',
    marginBottom: '1.5rem',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '30px',
    lineHeight: '27px',
    display: 'flex',
    alignItems: 'center',
    color: '#1D1F22'
  },
  infoName:{
    width: '292px',
    height: '27px',
    left: '101px',
    top: '323px',
    marginBottom: '1rem',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '30px',
    lineHeight: '27px',
    display: 'flex',
alignItems: 'center',
color: '#1D1F22'
  },
  infoPrice:{
    width: "79px",
    height: "24px",
    left: "100px",
    top: "370px",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center"

  },
  productAttributes:{
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    width: '18px',
    height: '18px',
    left:  '22px',
    top: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '18px'
  },
  value:{},
  productAttribute:{},
  productAmount: {
    position: 'relative',
    marginBottom: '2rem'
  },
  productAmountPlus:{
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    width: '25%',

border: '1px solid #1D1F22',
boxSizing: 'border-box'
  },
  productAmountMinus:{
    position: 'absolute',
left: '33.33%',
right: '33.33%',
top: '50%',
bottom: '50%',
border: '1px solid #1D1F22'
  },
  productQty:{
    position: 'absolute',
left: '75.56%',
right: '23.75%',
top: '28.44%',
bottom: '67.76%'
  },
  productImg:{
//     position: 'absolute',
// left: '79.17%',
// right: '6.94%',
// top: '20.07%',
// bottom: '59.28%'
width: '50rem'
  }

}
export default connect(null, mapDispatchToProps)(CartProduct);
