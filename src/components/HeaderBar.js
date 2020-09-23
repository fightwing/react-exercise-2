import React from 'react';
import imagePath from '../assets/shoppingCar.png';
import CountContext from './CountContext';
import '../styles/headerBar.css';
class HeaderBar extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Store</h1>
        <p>{this.context.count}</p>
        <img src={imagePath}></img>
      </div>
    );
  }
}
HeaderBar.contextType = CountContext;
export default HeaderBar;
