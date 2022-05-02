import React, { PureComponent } from "react";


class CategoryTitle extends PureComponent {
  render() {
    const { categoryInput } = this.props;

    return <h2 style={styles.title}>{categoryInput}</h2>;
  }
}

const styles = {
  title: {
    textTransform: 'capitalize'
  }
}
export default CategoryTitle;
