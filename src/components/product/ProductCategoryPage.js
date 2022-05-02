import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";
import {
  getAllProducts,
  getProductsByCategoryQuery
} from '../../graphql/queries';
import ProductsList from "./ProductsList";
import Product from "./Product";
import CategoryTitle from "../ui/CategoryTitle";


class ProductCategoryPage extends PureComponent {
  render() {
    const { categoryInput } = this.props.match.params;

    return (
      <section style={{paddingTop: '16px'}}>
        <CategoryTitle categoryInput={categoryInput} />
        {categoryInput === "all" && (
          <Query query={getAllProducts}>
            {({ loading, error, data }) => {
              if (loading) return <h2>Loading...</h2>;
              if (error) return <h2>Error: error</h2>;
              if (data) {
                // destructuring data
                const { products } = data.category;
                return (
                  <ProductsList>
                    {products.map((product) => (
                  <Product key={product.id} product={product} />
                    ))}
                  </ProductsList>
                );
              }
            }}
          </Query>
        ) } 
        
        
          {categoryInput !== 'all' && ( 
          <Query
            query={getProductsByCategoryQuery}
            variables={{CategoryInput:{ title: categoryInput }}}
          >
            {({ loading, error, data }) => {
              if (loading) return <h2>Loading...</h2>;
              if (error) return <h2>Error: error</h2>;
              if (data) {
                // destructuring data
                const { products } = data.category;
                // console.log(data.category.products[1])
                return (
                  <ProductsList>
                    {products.map((product) => (
                      <Product  key={product.id} product={product} />
                    ))}
                  </ProductsList>
                );
              }
            }}
          </Query>
        ) }
      </section>
    );
  }
}

export default ProductCategoryPage;
