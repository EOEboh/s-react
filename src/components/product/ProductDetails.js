import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";
import { getProductQuery } from '../../graphql/queries';
import ProductContent from "./ProductContent";
import Gallery from "../gallery/Gallery";

class ProductDetails extends PureComponent {
  render() {
    const { productId } = this.props.match.params;
    return (
      <section style={styles.details}>
        <Query query={getProductQuery} variables={{ id: productId }}>
          {({ loading, error, data }) => {
            if (loading) return <h2>Loading...</h2>;
            if (error) return <h2>Error: error</h2>;
            if (data) {
              const { product } = data;

              return (
                <>
                  <Gallery gallery={product.gallery} />
                  <ProductContent product={product} />
                </>
              );
            }
          }}
        </Query>
      </section>
    );
  }
}

const styles = {
  details: {
    display: 'grid',
    gridTemplateColumns: 'minmax(30rem, 73rem) minmax(max-content, 1fr)',
    columnGap: '7vw',
    marginTop: '8px',
    paddingRight: '11%',
    paddingTop: '7px'
  }
  
}
export default ProductDetails;
