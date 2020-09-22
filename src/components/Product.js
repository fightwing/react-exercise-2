import React from 'react';
import imagePath from '../assets/product_image_placeholder.png';
import '../styles/product.css';

class Product extends React.Component {
  constructor(category, price, name) {
    super();
    this.category = category;
    this.price = price;
    this.name = name;
  }
  render() {
    return (
      <div className="product">
        <h2>{this.name}</h2>
        <h2>hahhahah</h2>
        <img src={imagePath} alt="product"></img>
      </div>
    );
  }
}

export default Product;
