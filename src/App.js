import React, { Component } from 'react';
import './App.scss';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Product />
      </main>
    );
  }
}

export default App;
