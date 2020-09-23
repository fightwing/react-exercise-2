import React from 'react';
import Product from './Product';
const URL = 'http://localhost:3000/products';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{}],
    };
  }

  componentDidMount() {
    async function fetchData(url) {
      const result = await fetch(url).then((response) => response.json());
      return result;
    }
    fetchData(URL)
      .then((result) => {
        this.setState({
          products: result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.products.map((product) => (
          <Product
            category={product.category}
            key={product.name}
            price={product.price}
            name={product.name}
          />
        ))}
      </div>
    );
  }
}

export default Products;
