import React, { PureComponent } from "react";
import '../../App.css';


class CategoryTitle extends PureComponent {
  render() {
    const { categoryInput } = this.props;

    return <h2 style={styles.title} className='category-name'>{categoryInput}</h2>;
  }
}

const styles = {
  title: {
    textTransform: 'capitalize'
  }
}
export default CategoryTitle;
