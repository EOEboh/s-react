import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";

import { NavLink } from "react-router-dom";
import { getCategoriesQuery } from "../../graphql/queries";

class Categories extends PureComponent {
  render() {
    return (
      <>
        <Query query={getCategoriesQuery}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error: ${error}`;
            if (data) {
              const { categories } = data;
              const allCategories = [ ...categories];
              return (
                <ul style={styles.categories}>
                  {allCategories.map((category) => {
                    return (
                      <li key={category.name}>
                        <NavLink
                          style={styles.link}
                          activeStyle={styles.link["&.active"]}
                          to={`/category/${category.name}`}
                        >
                          {category.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              );
            }
          }}
        </Query>
      </>
    );
  }
}

 const styles = {
  categories: {
    display: 'flex',
    fontSize: '1.8rem',
    marginBottom: '30px',
    
  },
  
  link: {
    lineHeight: '50px',
    textDecoration: 'none',
    padding: '3px 10px 3px',
    borderBottom: '2px solid transparent',
    borderColor: 'transparent',
    transition: 'all 0.5s ease-out',
    textTransform: 'uppercase',
  
    '&.active': {
      color: 'green',
      borderColor: 'green'
    }
  }
 }

export default Categories;
