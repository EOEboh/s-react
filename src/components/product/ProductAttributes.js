
import React, { Component } from "react";
import AttributesValue from "../ui/AttributesValue";


class ProductAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      
      productDetailsAttr,
      cartAttr,
      attributes,
      handleItemsSelect,
      cart,
      small
    } = this.props;

  

    return (
      <>
        {" "}
        {attributes.length > 0 ? (
          <div>
            {attributes.map((attr) => (
              <div key={attr.name}>
                {!cart && (
                  <h5 style={styles.name}>{attr.name}:</h5>
                )}
                <div style={styles.value}>
                  {attr.items.map((item) => (
                    <AttributesValue
                      key={item.id}
                      itemValue={item.value}
                      handleItemsSelect={handleItemsSelect}
                      onChange={this.onChange}
                      attrName={attr.name}
                      attrType={attr.type}
                      small={small}
                      style={styles.selected}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}


const  styles = {
  name:{
    marginBottom: '0.8rem'
  },
  value: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: ''
  },
  selected: {
    backgroundColor: 'black',
    color: 'white'
  },
}


export default ProductAttributes;
