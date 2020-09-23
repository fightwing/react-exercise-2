import React from 'react';
import imagePath from '../assets/product_image_placeholder.png';
import '../styles/product.css';
import PropTypes from 'prop-types';
import CountContext from './CountContext';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      name: this.props.name,
      price: this.props.price,
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props !== state) {
  //     return {
  //       category: props.category,
  //       name: props.name,
  //       price: props.price,
  //     };
  //   }
  //   return null;
  // }

  render() {
    return (
      <div className="product">
        <h4>{this.state.category}</h4>
        <h4>{this.state.name}</h4>
        <img src={imagePath} alt="product" />
        <h4>{this.state.price}</h4>
        <CountContext.Consumer>
          {({ buy }) => <button onClick={buy}>add to cart</button>}
        </CountContext.Consumer>
      </div>
    );
  }
}

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default Product;
