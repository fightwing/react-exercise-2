import React, { Component } from 'react';
import './App.scss';
import './styles/products.css';
import HeaderBar from './components/HeaderBar';
import Products from './components/Products';
import CountContext from './components/CountContext';
class App extends Component {
  constructor(props) {
    super(props);

    this.buy = () => {
      this.setState((state) => ({
        count: state.count + 1,
      }));
    };
    this.state = {
      count: 0,
      buy: this.buy,
    };
  }

  render() {
    return (
      <CountContext.Provider value={this.state}>
        <main className="app">
          <HeaderBar />
          <div className="products">
            <Products />
          </div>
        </main>
      </CountContext.Provider>
    );
  }
}

export { App };
